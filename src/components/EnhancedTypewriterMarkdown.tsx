import React, { useState, useEffect, useRef } from 'react';
import { Remarkable } from 'remarkable';
import mermaid from 'mermaid';
import './EnhancedTypewriterMarkdown.css';

// 初始化 remarkable 解析器
const md = new Remarkable({
  html: true,
  breaks: true,
  linkify: true,
});

// 初始化 mermaid 配置
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  themeVariables: {
    primaryColor: '#3498db',
    primaryTextColor: '#2c3e50',
    primaryBorderColor: '#bdc3c7',
    lineColor: '#34495e',
    fontSize: '16px',
  },
});

interface EnhancedTypewriterMarkdownProps {
  /** Markdown 内容 */
  content: string;
  /** 打字速度（毫秒/字符） */
  speed?: number;
  /** 是否显示光标 */
  showCursor?: boolean;
  /** 完成回调 */
  onComplete?: () => void;
  /** 是否支持图片渲染 */
  enableImages?: boolean;
  /** 是否支持 Mermaid 图表 */
  enableMermaid?: boolean;
}

const EnhancedTypewriterMarkdown: React.FC<EnhancedTypewriterMarkdownProps> = ({
  content,
  speed = 50,
  showCursor = true,
  onComplete,
  enableImages = true,
  enableMermaid = true,
}) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 重置状态
    setDisplayedContent('');
    setCurrentIndex(0);
    setIsComplete(false);
    setModalImage(null);
    setGalleryIndex(0);
    setGalleryImages([]);
  }, [content]);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timer = setTimeout(() => {
        setDisplayedContent(content.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === content.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, content, speed, isComplete, onComplete]);

  // 检查 Mermaid 代码块是否完整
  const isMermaidBlockComplete = (code: string): boolean => {
    // 检查是否包含完整的 mermaid 语法结构
    const mermaidPatterns = [
      /^graph\s+(TD|TB|BT|RL|LR)\s*\n[\s\S]*$/,  // 流程图
      /^sequenceDiagram\s*\n[\s\S]*$/,           // 时序图
      /^stateDiagram(-v2)?\s*\n[\s\S]*$/,        // 状态图
      /^gantt\s*\n[\s\S]*$/,                     // 甘特图
      /^pie\s+title\s+[\s\S]*$/,                 // 饼图
      /^gitgraph\s*[\s\S]*$/,                    // Git 图
      /^flowchart\s+(TD|TB|BT|RL|LR)\s*\n[\s\S]*$/, // 新版流程图
      /^graph\s*[\s\S]*$/,                       // 简单图形
    ];

    const trimmedCode = code.trim();
    if (!trimmedCode) return false;

    // 检查是否匹配任何已知的 mermaid 模式
    return mermaidPatterns.some(pattern => pattern.test(trimmedCode));
  };

  // 处理 Mermaid 图表渲染
  useEffect(() => {
    if (enableMermaid && containerRef.current) {
      const mermaidBlocks = containerRef.current.querySelectorAll('.mermaid-block:not(.rendered)');
      
      mermaidBlocks.forEach(async (block, index) => {
        const code = block.textContent || '';
        const trimmedCode = code.trim();
        
        if (trimmedCode && isMermaidBlockComplete(trimmedCode)) {
          try {
            // 标记为正在渲染，避免重复渲染
            block.classList.add('rendering');
            
            const { svg } = await mermaid.render(`mermaid-${Date.now()}-${index}`, trimmedCode);
            block.innerHTML = svg;
            block.classList.add('rendered');
            block.classList.remove('rendering');
          } catch (error) {
            console.error('Mermaid 渲染错误:', error);
            block.innerHTML = `<div class="mermaid-error">
              <span class="error-icon">⚠️</span>
              <span class="error-text">图表渲染失败</span>
              <details class="error-details">
                <summary>查看详情</summary>
                <pre>${error}</pre>
              </details>
            </div>`;
            block.classList.add('rendered');
            block.classList.remove('rendering');
          }
        } else if (trimmedCode && !isMermaidBlockComplete(trimmedCode)) {
          // 显示加载状态，表示代码块还不完整
          block.innerHTML = `<div class="mermaid-loading">
            <span class="loading-icon">🔄</span>
            <span class="loading-text">图表代码加载中...</span>
          </div>`;
        }
      });
    }
  }, [displayedContent, enableMermaid]);

  // 预处理 Markdown 内容，处理自定义图片语法
  const preprocessMarkdown = (markdownContent: string): string => {
    if (!enableImages) return markdownContent;
    
    let processedContent = markdownContent;
    
    // 添加调试信息
    console.log('预处理前的 Markdown 内容:', markdownContent);

    // 处理图片画廊语法: ![gallery](url1|url2|url3)
    processedContent = processedContent.replace(
      /!\[gallery\]\(([^)]+)\)/g,
      (match, urls) => {
        console.log('匹配到画廊语法:', match, 'URLs:', urls);
        const urlList = urls.split('|');
        const galleryId = `gallery-${Math.random().toString(36).substr(2, 9)}`;
        const result = `<div class="image-gallery" data-gallery-id="${galleryId}">
          ${urlList.map((url: string, index: number) => `
            <div class="gallery-item ${index === 0 ? 'active' : ''}" data-index="${index}">
              <img src="${url.trim()}" alt="画廊图片 ${index + 1}" class="gallery-image" onclick="openImageModal('${url.trim()}', [${urlList.map((u: string) => `'${u.trim()}'`).join(',')}], ${index})">
            </div>
          `).join('')}
          <div class="gallery-controls">
            <button class="gallery-btn prev" onclick="changeGalleryImage('${galleryId}', -1)">‹</button>
            <div class="gallery-indicators">
              ${urlList.map((_: string, index: number) => `<span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}" onclick="setGalleryImage('${galleryId}', ${index})"></span>`).join('')}
            </div>
            <button class="gallery-btn next" onclick="changeGalleryImage('${galleryId}', 1)">›</button>
          </div>
        </div>`;
        console.log('生成的画廊HTML:', result);
        return result;
      }
    );

    // 处理图片网格语法: ![grid](url1|url2|url3|url4)
    processedContent = processedContent.replace(
      /!\[grid\]\(([^)]+)\)/g,
      (match, urls) => {
        console.log('匹配到网格语法:', match, 'URLs:', urls);
        const urlList = urls.split('|');
        const result = `<div class="image-grid">
          ${urlList.map((url: string) => `
            <div class="grid-item">
              <img src="${url.trim()}" alt="网格图片" class="grid-image" onclick="openImageModal('${url.trim()}')">
            </div>
          `).join('')}
        </div>`;
        console.log('生成的网格HTML:', result);
        return result;
      }
    );

    // 处理图片对比语法: ![compare](url1|url2)
    processedContent = processedContent.replace(
      /!\[compare\]\(([^)]+)\)/g,
      (match, urls) => {
        const urlList = urls.split('|');
        if (urlList.length === 2) {
          return `<div class="image-compare">
            <div class="compare-container">
              <div class="compare-item">
                <img src="${urlList[0].trim()}" alt="对比图片 A" class="compare-image">
                <div class="compare-label">Before</div>
              </div>
              <div class="compare-separator">VS</div>
              <div class="compare-item">
                <img src="${urlList[1].trim()}" alt="对比图片 B" class="compare-image">
                <div class="compare-label">After</div>
              </div>
            </div>
            <button class="compare-toggle" onclick="toggleCompareImages(this)">切换对比</button>
          </div>`;
        }
        return match;
      }
    );

    // 处理图片标注语法: ![annotated](url@x,y:标注文字)
    processedContent = processedContent.replace(
      /!\[annotated\]\(([^)]+)\)/g,
      (match, content) => {
        const [imageUrl, annotations] = content.split('@');
        if (annotations) {
          const annotationList = annotations.split(';').map((ann: string) => {
            const [coords, text] = ann.split(':');
            const [x, y] = coords.split(',').map((n: string) => parseInt(n.trim()));
            return { x, y, text: text || '标注' };
          });

          return `<div class="image-annotated">
            <img src="${imageUrl.trim()}" alt="标注图片" class="annotated-image">
            ${annotationList.map((ann: any, index: number) => `
              <div class="annotation-point" style="left: ${ann.x}%; top: ${ann.y}%;" data-tooltip="${ann.text}">
                <span class="annotation-marker">${index + 1}</span>
                <div class="annotation-tooltip">${ann.text}</div>
              </div>
            `).join('')}
          </div>`;
        }
        return match;
      }
    );

    // 处理可拖拽图片语法: ![draggable](url)
    processedContent = processedContent.replace(
      /!\[draggable\]\(([^)]+)\)/g,
      (match, src) => {
        return `<div class="image-draggable">
          <img src="${src.trim()}" alt="可拖拽图片" class="draggable-image" draggable="true" ondragstart="handleImageDragStart(event)" style="transform: translate(0, 0);">
          <div class="drag-instructions">💡 提示：可以拖拽移动此图片</div>
        </div>`;
      }
    );

    return processedContent;
  };

  // 自定义渲染器：处理代码块中的 mermaid 语法
  const customRenderer = (htmlContent: string): string => {
    if (!enableMermaid) return htmlContent;

    let processedContent = htmlContent;

    // 处理 Mermaid 代码块
    const mermaidRegex = /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g;
    processedContent = processedContent.replace(mermaidRegex, (match, code) => {
      const decodedCode = code
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"');
      
      return `<div class="mermaid-container">
        <div class="mermaid-block">${decodedCode}</div>
      </div>`;
    });

    // 添加调试信息
    console.log('预处理后的内容:', processedContent);
    
    return processedContent;
  };

  // 处理图片加载和交互
  useEffect(() => {
    if (enableImages && containerRef.current) {
      // 处理普通图片
      const images = containerRef.current.querySelectorAll('img:not(.processed)');
      images.forEach((element) => {
        const img = element as HTMLImageElement;
        img.classList.add('processed');
        
        // 添加点击放大功能（仅对非特殊类型图片）
        if (!img.classList.contains('gallery-image') && 
            !img.classList.contains('grid-image') &&
            !img.classList.contains('compare-image') &&
            !img.classList.contains('annotated-image') &&
            !img.classList.contains('draggable-image')) {
          img.style.cursor = 'zoom-in';
          img.onclick = () => setModalImage(img.src);
        }
        
        img.onload = () => {
          img.classList.add('loaded');
        };
        
        img.onerror = () => {
          img.classList.add('error');
          img.alt = '图片加载失败';
          
          // 添加重试机制
          const originalSrc = img.src;
          setTimeout(() => {
            if (img.classList.contains('error')) {
              console.log('重试加载图片:', originalSrc);
              img.src = originalSrc + '?retry=' + Date.now();
            }
          }, 2000);
        };
      });

      // 添加全局点击事件处理函数
      (window as any).openImageModal = (src: string, gallery?: string[], index?: number) => {
        setModalImage(src);
        if (gallery) {
          setGalleryImages(gallery);
          setGalleryIndex(index || 0);
        }
      };

      (window as any).changeGalleryImage = (galleryId: string, direction: number) => {
        const gallery = containerRef.current?.querySelector(`[data-gallery-id="${galleryId}"]`);
        if (gallery) {
          const items = gallery.querySelectorAll('.gallery-item');
          const indicators = gallery.querySelectorAll('.indicator');
          const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
          let newIndex = currentIndex + direction;
          
          if (newIndex < 0) newIndex = items.length - 1;
          if (newIndex >= items.length) newIndex = 0;
          
          items.forEach(item => item.classList.remove('active'));
          indicators.forEach(indicator => indicator.classList.remove('active'));
          
          items[newIndex].classList.add('active');
          indicators[newIndex].classList.add('active');
        }
      };

      (window as any).setGalleryImage = (galleryId: string, index: number) => {
        const gallery = containerRef.current?.querySelector(`[data-gallery-id="${galleryId}"]`);
        if (gallery) {
          const items = gallery.querySelectorAll('.gallery-item');
          const indicators = gallery.querySelectorAll('.indicator');
          
          items.forEach(item => item.classList.remove('active'));
          indicators.forEach(indicator => indicator.classList.remove('active'));
          
          items[index].classList.add('active');
          indicators[index].classList.add('active');
        }
      };

      (window as any).toggleCompareImages = (button: HTMLElement) => {
        const compareContainer = button.previousElementSibling as HTMLElement;
        if (compareContainer) {
          compareContainer.classList.toggle('swapped');
          button.textContent = compareContainer.classList.contains('swapped') ? '还原对比' : '切换对比';
        }
      };

      (window as any).handleImageDragStart = (event: DragEvent) => {
        const img = event.target as HTMLImageElement;
        event.dataTransfer?.setData('text/plain', '');
        
        const handleDrag = (e: MouseEvent) => {
          const rect = img.parentElement!.getBoundingClientRect();
          const x = e.clientX - rect.left - img.offsetWidth / 2;
          const y = e.clientY - rect.top - img.offsetHeight / 2;
          img.style.transform = `translate(${x}px, ${y}px)`;
        };

        const handleDragEnd = () => {
          document.removeEventListener('mousemove', handleDrag);
          document.removeEventListener('mouseup', handleDragEnd);
        };

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
      };
    }
  }, [displayedContent, enableImages]);

  // 模态框键盘事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalImage) {
        if (e.key === 'Escape') {
          setModalImage(null);
          setGalleryImages([]);
        } else if (galleryImages.length > 0) {
          if (e.key === 'ArrowLeft') {
            const newIndex = galleryIndex > 0 ? galleryIndex - 1 : galleryImages.length - 1;
            setGalleryIndex(newIndex);
            setModalImage(galleryImages[newIndex]);
          } else if (e.key === 'ArrowRight') {
            const newIndex = galleryIndex < galleryImages.length - 1 ? galleryIndex + 1 : 0;
            setGalleryIndex(newIndex);
            setModalImage(galleryImages[newIndex]);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalImage, galleryImages, galleryIndex]);

  // 预处理 Markdown 内容，处理自定义图片语法
  const preprocessedContent = preprocessMarkdown(displayedContent);
  
  // 将预处理后的内容转换为 HTML
  let htmlContent = md.render(preprocessedContent);
  
  // 应用自定义渲染器处理 Mermaid
  htmlContent = customRenderer(htmlContent);

  return (
    <div className="enhanced-typewriter-markdown" ref={containerRef}>
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      {showCursor && (
        <span 
          className={`cursor ${isComplete ? 'cursor-blink' : ''}`}
        >
          |
        </span>
      )}
      
      {/* 图片模态框 */}
      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalImage(null)}>×</button>
            <img src={modalImage} alt="放大查看" className="modal-image" />
            {galleryImages.length > 0 && (
              <div className="modal-controls">
                <button 
                  className="modal-nav prev" 
                  onClick={() => {
                    const newIndex = galleryIndex > 0 ? galleryIndex - 1 : galleryImages.length - 1;
                    setGalleryIndex(newIndex);
                    setModalImage(galleryImages[newIndex]);
                  }}
                >
                  ‹
                </button>
                <span className="modal-counter">
                  {galleryIndex + 1} / {galleryImages.length}
                </span>
                <button 
                  className="modal-nav next" 
                  onClick={() => {
                    const newIndex = galleryIndex < galleryImages.length - 1 ? galleryIndex + 1 : 0;
                    setGalleryIndex(newIndex);
                    setModalImage(galleryImages[newIndex]);
                  }}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedTypewriterMarkdown; 