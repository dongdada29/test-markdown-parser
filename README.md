# 🎯 Remarkable 打字机效果演示

这是一个基于 **React + TypeScript + UmiJS** 的项目，演示如何使用 **Remarkable** 库实现 Markdown 内容的打字机效果渲染。

## ✨ 功能特性

- 🚀 **实时打字效果**：逐字符动态显示 Markdown 内容
- 📝 **完整 Markdown 支持**：标题、列表、代码块、表格、引用等
- 🎨 **美观样式**：精心设计的 CSS 样式，提供良好视觉体验
- ⚡ **可调节速度**：支持自定义打字速度
- 🎛️ **交互控制**：提供开始、重置等控制功能
- 📱 **响应式设计**：支持移动端和桌面端

## 🏗️ 项目结构

```
src/
├── components/
│   ├── TypewriterMarkdown.tsx    # 打字机效果组件
│   └── TypewriterMarkdown.css    # 组件样式
├── pages/
│   ├── index.tsx                 # 演示页面
│   └── index.css                 # 页面样式
└── assets/                       # 静态资源
```

## 🔧 核心组件

### TypewriterMarkdown 组件

```typescript
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
```

### 使用示例

```jsx
import TypewriterMarkdown from './components/TypewriterMarkdown';

function App() {
  const markdownContent = `# Hello World
  
这是一个 **打字机效果** 的 Markdown 渲染示例。

- 支持列表
- 支持 \`代码\`
- 支持 [链接](https://github.com)
`;

  return (
    <TypewriterMarkdown
      content={markdownContent}
      speed={50}
      showCursor={true}
      onComplete={() => console.log('渲染完成！')}
    />
  );
}
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
pnpm dev
```

### 构建生产版本

```bash
npm run build
# 或
pnpm build
```

## 📦 主要依赖

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **UmiJS 4** - React 应用框架
- **Remarkable** - Markdown 解析器

## 🎨 核心实现原理

### 1. 打字机效果实现

```typescript
useEffect(() => {
  if (currentIndex < content.length) {
    const timer = setTimeout(() => {
      setDisplayedContent(content.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }
}, [currentIndex, content, speed]);
```

### 2. Markdown 解析

```typescript
import { Remarkable } from 'remarkable';

const md = new Remarkable({
  html: true,
  breaks: true,
  linkify: true,
});

const htmlContent = md.render(displayedContent);
```

### 3. 样式设计

- 使用 CSS3 动画实现光标闪烁效果
- 响应式布局适配不同屏幕尺寸
- 精心设计的 Markdown 元素样式

## 🎮 演示功能

### 三个示例场景

1. **基础文档示例** - 展示常用 Markdown 语法
2. **技术文档示例** - 包含代码块和表格
3. **列表和任务示例** - 任务清单和开发流程

### 交互功能

- 选择不同示例内容
- 开始/重置打字机效果
- 实时查看渲染过程
- 完成状态反馈

## 🎯 技术亮点

- **TypeScript 类型安全**：完整的类型定义和接口设计
- **React Hooks**：使用 useState 和 useEffect 管理状态
- **性能优化**：合理的依赖数组和清理函数
- **用户体验**：流畅的动画和直观的交互
- **代码质量**：详细的中文注释和规范的代码结构

## 🔮 扩展可能

- 添加更多 Markdown 插件支持
- 实现语法高亮
- 添加主题切换功能
- 支持 LaTeX 数学公式
- 添加导出功能

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**享受打字机效果的 Markdown 渲染体验！** 🎉 