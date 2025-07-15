import React, { useState, useEffect } from 'react';
import { Remarkable } from 'remarkable';
import './TypewriterMarkdown.css';

// 初始化 remarkable 解析器
const md = new Remarkable({
  html: true,
  breaks: true,
  linkify: true,
});

interface TypewriterMarkdownProps {
  /** Markdown 内容 */
  content: string;
  /** 打字速度（毫秒/字符） */
  speed?: number;
  /** 是否显示光标 */
  showCursor?: boolean;
  /** 完成回调 */
  onComplete?: () => void;
}

const TypewriterMarkdown: React.FC<TypewriterMarkdownProps> = ({
  content,
  speed = 50,
  showCursor = true,
  onComplete,
}) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // 重置状态
    setDisplayedContent('');
    setCurrentIndex(0);
    setIsComplete(false);
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

  // 将当前显示的内容转换为 HTML
  const htmlContent = md.render(displayedContent);

  return (
    <div className="typewriter-markdown">
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
    </div>
  );
};

export default TypewriterMarkdown; 