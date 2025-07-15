import React, { useState } from 'react';
import TypewriterMarkdown from '../components/TypewriterMarkdown';
import './index.css';

// 示例 Markdown 内容
const markdownExamples = [
  {
    title: '基础文档示例',
    content: `# 🚀 Remarkable 打字机效果演示

欢迎使用 **Remarkable** 库结合打字机效果来渲染 Markdown 内容！

## 特性介绍

这个演示展示了以下功能：

- ✅ **实时打字效果**：逐字符显示内容
- ✅ **Markdown 解析**：支持标题、粗体、斜体等
- ✅ **代码高亮**：支持行内代码 \`console.log('Hello')\`
- ✅ **链接支持**：[访问 GitHub](https://github.com)

### 代码示例

\`\`\`javascript
// 使用 Remarkable 解析 Markdown
import { Remarkable } from 'remarkable';

const md = new Remarkable();
const html = md.render('# Hello World!');
\`\`\`

> 这是一个引用块，展示了 Remarkable 的强大功能。

这就是打字机效果的 Markdown 渲染！`,
  },
  {
    title: '技术文档示例',
    content: `# 📚 React TypeScript 项目配置

## 项目初始化

\`\`\`bash
# 创建新项目
npx create-react-app my-app --template typescript

# 安装依赖
npm install remarkable @types/remarkable
\`\`\`

## 组件设计模式

### Props 接口定义

\`\`\`typescript
interface ComponentProps {
  content: string;
  speed?: number;
  onComplete?: () => void;
}
\`\`\`

### Hooks 使用

- **useState**: 管理组件状态
- **useEffect**: 处理副作用
- **useCallback**: 优化性能

| Hook | 用途 | 示例 |
|------|------|------|
| useState | 状态管理 | \`const [state, setState] = useState()\` |
| useEffect | 副作用 | \`useEffect(() => {}, [])\` |

**注意**：正确使用 TypeScript 类型可以提高代码质量。`,
  },
  {
    title: '列表和任务示例',
    content: `# 📝 项目开发清单

## 已完成任务

- [x] 安装 Remarkable 库
- [x] 创建 TypewriterMarkdown 组件
- [x] 添加 CSS 样式
- [x] 实现打字机效果

## 待办事项

- [ ] 添加更多 Markdown 语法支持
- [ ] 优化性能
- [ ] 添加单元测试
- [ ] 编写文档

### 开发流程

1. **分析需求** - 确定功能范围
2. **设计组件** - 定义接口和状态
3. **编写代码** - 实现核心逻辑
4. **测试验证** - 确保功能正常
5. **优化完善** - 提升用户体验

> 💡 **提示**：使用打字机效果可以让文档展示更加生动有趣！

*感谢使用我们的 Markdown 渲染组件！*`,
  },
];

export default function HomePage() {
  const [currentExample, setCurrentExample] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // 开始播放打字机效果
  const startTypewriter = (index: number) => {
    setCurrentExample(index);
    setIsPlaying(true);
  };

  // 打字机效果完成回调
  const handleComplete = () => {
    console.log('打字机效果完成！');
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>🎯 Remarkable 打字机效果演示</h1>
        <p>体验 Markdown 内容的动态渲染效果</p>
      </header>

      <div className="demo-content">
        {/* 示例选择器 */}
        <div className="example-selector">
          <h3>选择演示示例：</h3>
          <div className="example-buttons">
            {markdownExamples.map((example, index) => (
              <button
                key={index}
                className={`example-btn ${currentExample === index ? 'active' : ''}`}
                onClick={() => startTypewriter(index)}
                disabled={isPlaying}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>

        {/* 控制面板 */}
        <div className="control-panel">
          <button
            className="control-btn play"
            onClick={() => startTypewriter(currentExample)}
            disabled={isPlaying}
          >
            {isPlaying ? '🔄 渲染中...' : '▶️ 开始演示'}
          </button>
          <button
            className="control-btn reset"
            onClick={() => setIsPlaying(false)}
          >
            🔄 重置
          </button>
        </div>

        {/* Markdown 渲染区域 */}
        <div className="markdown-display">
          {isPlaying && (
            <TypewriterMarkdown
              content={markdownExamples[currentExample].content}
              speed={30}
              showCursor={true}
              onComplete={handleComplete}
            />
          )}
          {!isPlaying && (
            <div className="placeholder">
              <p>👆 点击上方按钮开始演示打字机效果</p>
              <p>选择不同的示例体验各种 Markdown 语法的渲染效果</p>
            </div>
          )}
        </div>
      </div>

      <footer className="demo-footer">
        <div className="navigation-links">
          <a href="/enhanced" className="nav-link">
            🔥 体验增强版演示 (支持 Mermaid 图表和图片)
          </a>
        </div>
        <p>
          💡 <strong>技术栈：</strong> React + TypeScript + Remarkable + UmiJS
        </p>
        <p>
          🎨 <strong>特性：</strong> 支持完整 Markdown 语法、可调节速度、自定义样式
        </p>
      </footer>
    </div>
  );
}
