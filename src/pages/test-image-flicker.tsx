import React from 'react';
import EnhancedTypewriterMarkdown from '../components/EnhancedTypewriterMarkdown';

const TestImageFlicker: React.FC = () => {
  // 测试内容，包含多种图片类型
  const testContent = `
# 图片闪动测试页面

这个页面用于测试图片在打字机效果中的显示情况，验证是否还有闪动问题。

## 普通图片测试

![测试图片1](https://picsum.photos/400/300?random=1)

这是一段文字，用于测试图片在文字中间的显示效果。

![测试图片2](https://picsum.photos/400/300?random=2)

## 图片画廊测试

![gallery](https://picsum.photos/400/300?random=3|https://picsum.photos/400/300?random=4|https://picsum.photos/400/300?random=5)

## 图片网格测试

![grid](https://picsum.photos/200/200?random=6|https://picsum.photos/200/200?random=7|https://picsum.photos/200/200?random=8|https://picsum.photos/200/200?random=9)

## 图片对比测试

![compare](https://picsum.photos/400/300?random=10|https://picsum.photos/400/300?random=11)

## 可拖拽图片测试

![draggable](https://picsum.photos/400/300?random=12)

## 更多文字内容

这里是一些额外的文字内容，用于测试图片在大量文字中的显示效果。

### 子标题

更多的测试内容...

![测试图片3](https://picsum.photos/400/300?random=13)

继续添加更多内容来测试长文本中的图片显示效果。

## 总结

这个测试页面包含了多种类型的图片，用于验证：

1. 普通图片的显示效果
2. 图片画廊功能
3. 图片网格布局
4. 图片对比功能
5. 可拖拽图片
6. 在长文本中的图片显示

所有图片都应该在打字机效果中平滑显示，不应该出现闪动现象。
`;

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '30px' }}>
        图片闪动问题修复测试
      </h1>
      
      <div style={{ 
        background: '#f9f9f9', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h3 style={{ marginTop: 0, color: '#666' }}>测试说明：</h3>
        <ul style={{ color: '#666', lineHeight: '1.6' }}>
          <li>观察图片在打字机效果中的显示是否平滑</li>
          <li>检查是否还有闪动现象</li>
          <li>验证各种图片类型的交互功能</li>
          <li>测试图片加载和错误处理</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <EnhancedTypewriterMarkdown 
          content={testContent}
          speed={30}
          showCursor={true}
          enableImages={true}
          enableMermaid={false}
          onComplete={() => console.log('打字机效果完成')}
        />
      </div>
    </div>
  );
};

export default TestImageFlicker; 