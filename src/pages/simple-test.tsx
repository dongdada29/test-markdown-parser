import React, { useState } from 'react';
import EnhancedTypewriterMarkdown from '../components/EnhancedTypewriterMarkdown';

// 简单的测试内容
const simpleContent = `# 简单图片测试

## 画廊测试

![gallery](https://via.placeholder.com/300x200/3f51b5/white?text=图片1|https://via.placeholder.com/300x200/e74c3c/white?text=图片2|https://via.placeholder.com/300x200/2ecc71/white?text=图片3)

## 网格测试

![grid](https://via.placeholder.com/200x150/f39c12/white?text=网格1|https://via.placeholder.com/200x150/9b59b6/white?text=网格2|https://via.placeholder.com/200x150/3498db/white?text=网格3|https://via.placeholder.com/200x150/1abc9c/white?text=网格4)

## 对比测试

![compare](https://via.placeholder.com/250x150/95a5a6/white?text=Before|https://via.placeholder.com/250x150/3f51b5/white?text=After)

## 普通图片测试

![普通图片](https://via.placeholder.com/300x200/2ecc71/white?text=普通图片)

`;

export default function SimpleTestPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🔍 简单图片测试</h1>
      <p>使用真实的图片URL来测试图片展示功能</p>
      
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {isPlaying ? '🔄 停止' : '▶️ 开始测试'}
      </button>

      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#f9f9f9',
        minHeight: '400px'
      }}>
        {isPlaying ? (
          <EnhancedTypewriterMarkdown
            content={simpleContent}
            speed={50}
            showCursor={true}
            enableImages={true}
            enableMermaid={false}
            onComplete={() => console.log('简单测试完成！')}
          />
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>👆 点击按钮开始测试</p>
            <p>使用 placeholder.com 的真实图片URL</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
        <h3>📝 测试说明</h3>
        <ul>
          <li>使用 placeholder.com 的真实图片URL</li>
          <li>检查浏览器控制台的调试信息</li>
          <li>验证图片是否正确显示</li>
          <li>测试各种交互功能</li>
        </ul>
      </div>
    </div>
  );
} 