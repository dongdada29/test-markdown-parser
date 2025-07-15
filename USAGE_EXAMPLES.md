# 🎯 Mermaid 图表和图片渲染使用示例

本文档详细说明如何在 Remarkable 打字机效果组件中处理 Mermaid 图表和图片渲染。

## 📋 目录

- [Mermaid 图表渲染](#mermaid-图表渲染)
- [图片处理](#图片处理)
- [组件配置](#组件配置)
- [高级使用技巧](#高级使用技巧)
- [常见问题解答](#常见问题解答)

## 🔀 Mermaid 图表渲染

### 基础流程图

```markdown
# 用户注册流程

```mermaid
graph TD
    A[用户填写注册表单] --> B{验证表单}
    B -->|验证通过| C[发送验证邮件]
    B -->|验证失败| D[显示错误信息]
    C --> E[用户点击邮件链接]
    E --> F[激活账户]
    F --> G[注册完成]
    D --> A
```

### 时序图示例

```markdown
# API 接口调用流程

```mermaid
sequenceDiagram
    participant Client as 客户端
    participant Gateway as API网关
    participant Auth as 认证服务
    participant Service as 业务服务
    participant DB as 数据库
    
    Client->>Gateway: 发送请求
    Gateway->>Auth: 验证Token
    Auth-->>Gateway: 返回用户信息
    Gateway->>Service: 转发请求
    Service->>DB: 查询数据
    DB-->>Service: 返回结果
    Service-->>Gateway: 返回响应
    Gateway-->>Client: 返回数据
```

### 状态图示例

```markdown
# 订单状态管理

```mermaid
stateDiagram-v2
    [*] --> 草稿
    草稿 --> 待付款 : 提交订单
    待付款 --> 待发货 : 支付成功
    待付款 --> 已取消 : 取消订单
    待发货 --> 已发货 : 发货
    已发货 --> 已收货 : 确认收货
    已收货 --> 已完成 : 评价
    已完成 --> [*]
    已取消 --> [*]
```

### 甘特图示例

```markdown
# 项目开发计划

```mermaid
gantt
    title 移动应用开发计划
    dateFormat YYYY-MM-DD
    
    section 设计阶段
    需求分析    :done, req, 2024-01-01, 2024-01-10
    UI设计     :done, ui, after req, 10d
    原型制作    :active, proto, after ui, 5d
    
    section 开发阶段
    前端开发    :dev1, after proto, 20d
    后端开发    :dev2, after proto, 25d
    接口联调    :api, after dev1 dev2, 5d
    
    section 测试阶段
    单元测试    :test1, after dev1, 10d
    集成测试    :test2, after api, 5d
    用户测试    :test3, after test2, 3d
```

### 饼图示例

```markdown
# 用户来源分析

```mermaid
pie title 用户来源分布
    "搜索引擎" : 45.2
    "社交媒体" : 25.8
    "直接访问" : 15.6
    "邮件营销" : 8.9
    "其他渠道" : 4.5
```

## 📸 图片处理

### 基础图片语法

```markdown
# 产品展示

## 主要功能截图

![登录界面](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzQ5OGRiIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+TG9naW4gSW50ZXJmYWNlPC90ZXh0Pgo8dGV4dCB4PSIzMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+U2VjdXJlICYgRWFzeSBBY2Nlc3M8L3RleHQ+Cjwvc3ZnPg==)

*用户登录界面 - 简洁明了的设计*

![仪表板](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMmVjYzcxIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCI+RGFzaGJvYXJkPC90ZXh0Pgo8dGV4dCB4PSI0MDAiIHk9IjI3MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCI+QW5hbHl0aWNzICYgSW5zaWdodHM8L3RleHQ+Cjwvc3ZnPg==)

*管理仪表板 - 数据可视化展示*
```

### 图片与文字混排

```markdown
# 技术架构说明

前端采用 React 技术栈：

![React 架构图](https://via.placeholder.com/500x300/e74c3c/ffffff?text=React+Architecture)

后端使用微服务架构：

![微服务架构](https://via.placeholder.com/600x350/f39c12/ffffff?text=Microservices)

数据库采用分布式设计：

![数据库设计](https://via.placeholder.com/550x320/9b59b6/ffffff?text=Database+Design)
```

## ⚙️ 组件配置

### 基础使用

```tsx
import EnhancedTypewriterMarkdown from './components/EnhancedTypewriterMarkdown';

function MyComponent() {
  const markdownContent = `
# 项目介绍

这是一个支持 Mermaid 图表的项目。

\`\`\`mermaid
graph LR
    A[开始] --> B[处理]
    B --> C[结束]
\`\`\`

![项目截图](https://example.com/screenshot.png)
  `;

  return (
    <EnhancedTypewriterMarkdown
      content={markdownContent}
      speed={30}
      enableMermaid={true}
      enableImages={true}
      onComplete={() => console.log('渲染完成')}
    />
  );
}
```

### 高级配置

```tsx
import React, { useState, useCallback } from 'react';
import EnhancedTypewriterMarkdown from './components/EnhancedTypewriterMarkdown';

function AdvancedDemo() {
  const [content, setContent] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 动态切换内容
  const loadContent = useCallback((newContent: string) => {
    setContent(newContent);
    setIsPlaying(true);
  }, []);
  
  // 完成回调
  const handleComplete = useCallback(() => {
    console.log('打字机效果完成');
    setIsPlaying(false);
  }, []);

  return (
    <div>
      {/* 控制按钮 */}
      <div className="controls">
        <button onClick={() => loadContent(flowchartContent)}>
          加载流程图
        </button>
        <button onClick={() => loadContent(sequenceContent)}>
          加载时序图
        </button>
      </div>
      
      {/* 渲染组件 */}
      <EnhancedTypewriterMarkdown
        content={content}
        speed={25}
        showCursor={true}
        enableMermaid={true}
        enableImages={true}
        onComplete={handleComplete}
      />
    </div>
  );
}
```

### 条件渲染

```tsx
function ConditionalDemo() {
  const [enableMermaid, setEnableMermaid] = useState(true);
  const [enableImages, setEnableImages] = useState(true);

  return (
    <div>
      {/* 功能开关 */}
      <div className="toggles">
        <label>
          <input
            type="checkbox"
            checked={enableMermaid}
            onChange={(e) => setEnableMermaid(e.target.checked)}
          />
          启用 Mermaid 图表
        </label>
        <label>
          <input
            type="checkbox"
            checked={enableImages}
            onChange={(e) => setEnableImages(e.target.checked)}
          />
          启用图片显示
        </label>
      </div>
      
      <EnhancedTypewriterMarkdown
        content={markdownContent}
        enableMermaid={enableMermaid}
        enableImages={enableImages}
        speed={40}
      />
    </div>
  );
}
```

## 🎨 高级使用技巧

### 1. 自定义 Mermaid 主题

```typescript
// 在组件初始化时配置主题
import mermaid from 'mermaid';

mermaid.initialize({
  theme: 'dark', // 'default', 'dark', 'forest', 'neutral'
  themeVariables: {
    primaryColor: '#ff6b6b',
    primaryTextColor: '#ffffff',
    primaryBorderColor: '#ff6b6b',
    lineColor: '#feca57',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif'
  }
});
```

### 2. 图片懒加载优化

```tsx
// 添加图片预加载功能
const preloadImages = (content: string) => {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  const images = [];
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    const img = new Image();
    img.src = match[1];
    images.push(img);
  }
  
  return Promise.all(
    images.map(img => new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve;
    }))
  );
};
```

### 3. 错误处理

```tsx
function ErrorHandlingDemo() {
  const [error, setError] = useState<string | null>(null);

  const handleMermaidError = (error: Error) => {
    console.error('Mermaid 渲染错误:', error);
    setError('图表渲染失败，请检查语法');
  };

  return (
    <div>
      {error && (
        <div className="error-message">
          {error}
          <button onClick={() => setError(null)}>关闭</button>
        </div>
      )}
      
      <EnhancedTypewriterMarkdown
        content={content}
        enableMermaid={true}
        onMermaidError={handleMermaidError}
      />
    </div>
  );
}
```

### 4. 性能优化

```tsx
import { memo, useMemo } from 'react';

const OptimizedMarkdown = memo(({ content, ...props }) => {
  // 缓存解析结果
  const parsedContent = useMemo(() => {
    return preprocessContent(content);
  }, [content]);

  return (
    <EnhancedTypewriterMarkdown
      content={parsedContent}
      {...props}
    />
  );
});
```

## ❓ 常见问题解答

### Q: Mermaid 图表不显示怎么办？

**A:** 检查以下几点：
1. 确保 `enableMermaid={true}`
2. 检查 Mermaid 语法是否正确
3. 确认网络连接正常
4. 查看控制台是否有错误信息

### Q: 图片加载失败如何处理？

**A:** 组件会自动处理图片加载失败：
```tsx
// 图片会显示错误状态，并添加 error 类名
.enhanced-typewriter-markdown img.error {
  opacity: 0.5;
  border: 2px dashed #e74c3c;
}
```

### Q: 如何自定义打字机速度？

**A:** 通过 `speed` 属性控制：
```tsx
<EnhancedTypewriterMarkdown
  speed={10}  // 10ms/字符，越小越快
  content={content}
/>
```

### Q: 可以同时渲染多个组件实例吗？

**A:** 可以，每个实例都是独立的：
```tsx
<div>
  <EnhancedTypewriterMarkdown content={content1} />
  <EnhancedTypewriterMarkdown content={content2} />
</div>
```

### Q: 如何在移动端优化显示？

**A:** 组件已内置响应式设计：
```css
@media (max-width: 768px) {
  .mermaid-container {
    padding: 15px;
    font-size: 14px;
  }
  
  .enhanced-typewriter-markdown img {
    max-width: 100%;
    height: auto;
  }
}
```

## 🔧 故障排除

### Mermaid 渲染问题

1. **语法错误**: 检查 Mermaid 语法是否符合规范
2. **主题问题**: 尝试切换不同主题
3. **浏览器兼容**: 确保浏览器支持 SVG

### 图片显示问题

1. **CORS 错误**: 确保图片服务器允许跨域
2. **URL 无效**: 检查图片 URL 是否正确
3. **网络问题**: 检查网络连接

### 性能问题

1. **内容过长**: 考虑分段渲染
2. **图片过多**: 使用懒加载
3. **复杂图表**: 优化 Mermaid 图表复杂度

---

**希望这些示例能帮助您更好地使用 Mermaid 图表和图片渲染功能！** 🎉 