import React, { useState } from 'react';
import EnhancedTypewriterMarkdown from '../components/EnhancedTypewriterMarkdown';
import './enhanced.css';

// 增强版示例 Markdown 内容
const enhancedMarkdownExamples = [
  {
    title: '🖼️ 图片展示嵌套场景',
    content: `# 🖼️ 高级图片展示功能演示

欢迎体验我们全新的图片展示功能！支持多种嵌套场景和交互模式。

## 📸 图片画廊展示

### 产品展示画廊

体验轮播式图片浏览，支持按钮切换和指示器导航：

![gallery](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjM2Y1MWI1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCI+UHJvZHVjdCBBPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+5LiA5byP5Lqn5ZOB5bGV56S6PC90ZXh0Pgo8L3N2Zz4=|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZTc0YzNjIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCI+UHJvZHVjdCBCPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+6auY6LSo6YK355u05LiA6KeI5Lqn5ZOBLCDliJ3lj5HnianOQKLlhZnluIk8L3RleHQ+Cjwvc3ZnPg==|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMmVjYzcxIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCI+UHJvZHVjdCBDPC90ZXh0Pgo8dGV4dCB4PSIyMDAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+R5oyB6aKF5Lyw6ICf5YGP6LOv5qCI5LiE5byI5p6/5YqF5rGI6aKH5ZOs6JKZ6KaB6LKf5p6/6ICv5byI56aB6JKJ5LyI6auu6JKZ5q2I6Lqz6JCM6JKF6aKf56aP5Lqw6Lut5YS5PC90ZXh0Pgo8L3N2Zz4=)

🎯 **画廊特性：**
- ✨ 点击图片可以放大查看
- 🔄 支持键盘左右箭头切换
- 📍 指示器显示当前位置
- 🖱️ 鼠标悬停效果

## 🏞️ 图片网格布局

### 项目截图展示

展示多张相关图片，支持网格布局和统一交互：

![grid](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjM5YzEyIi8+Cjx0ZXh0IHg9IjEyNSIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7kuLvpobU8L3RleHQ+Cjx0ZXh0IHg9IjEyNSIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj7lk41nrI3kuKzjj6k8L3RleHQ+Cjwvc3ZnPg==|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOWI1OWI2Ii8+Cjx0ZXh0IHg9IjEyNSIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7orr3nva7pobU8L3RleHQ+Cjx0ZXh0IHg9IjEyNSIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj7lr4bnn63mgYTCgYXCrIHA5YWL6YCf6ZCr55aS6IaE5aGa5L2T6Yie6IOv5p6+56aF5aOl5rik6I+v5Lev5LCV55W+5L2T5aOl55aS56aP6Z+J5pev6IK45YCl5qKs5bWl55Ok5Yei5rin5a2QPC90ZXh0Pgo8L3N2Zz4=|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzQ5OGRiIi8+Cjx0ZXh0IHg9IjEyNSIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7mlbDmja7lubY8L3RleHQ+Cjx0ZXh0IHg9IjEyNSIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj7mjIfkvKvljrLpqbDpuLU8L3RleHQ+Cjwvc3ZnPg==|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI1MCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWFiYzljIi8+Cjx0ZXh0IHg9IjEyNSIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7miZXml7bvpo48L3RleHQ+Cjx0ZXh0IHg9IjEyNSIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj7lhqjplKHlir/kuqfmtojmipnmiojooaE8L3RleHQ+Cjwvc3ZnPg==)

🎨 **网格特性：**
- 📊 自适应网格布局
- 🔍 点击任意图片放大查看
- 🎭 优雅的悬停动画效果
- 📱 完美的响应式支持

## ⚔️ 图片对比展示

### 设计改版前后对比

直观展示改进效果，支持一键切换对比：

![compare](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjOTU5NTk1Ii8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+6JCB54mI6K655byIPC90ZXh0Pgo8dGV4dCB4PSIxNzUiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+54K55byP6JCr6YCT5LiH6ICA77yM55WF6K6+5oCf6IO95LiO5oCn6IO55LuN6ZSD6ICF6K+05aWNPC90ZXh0Pgo8L3N2Zz4=|data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDM1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjM2Y1MWI1Ii8+Cjx0ZXh0IHg9IjE3NSIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+5paw54mI6K655byIPC90ZXh0Pgo8dGV4dCB4PSIxNzUiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+546w5LyZ6K6+6K6h77yM6ams6Jqb54Gr6IaB55SY54K5LCBinb3mlYjmm7TpmY7lv6HsqqY8L3RleHQ+Cjwvc3ZnPg==)

💡 **对比特性：**
- 🔄 一键切换对比位置
- 🏷️ 清晰的 Before/After 标签
- ⚡ 流畅的切换动画
- 🎯 突出显示改进效果

## 📍 图片标注功能

### 产品功能说明图

在图片上添加交互式标注点，鼠标悬停查看详情：

![annotated](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzQ5OGRiIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmb250LXdlaWdodD0iYm9sZCI+5Lqn5ZOB5oqA5pyv5p2+5p6+</L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNTAwIj7lhazouKTmuY3kv5Hkuro854ig5YWJ6ZKj6Imo6YCJ5piv6IKO5Lit6L2U54m555qE54m55biv55qE</L3RleHQ+Cjwvc3ZnPg==@15,25:主导航菜单;65,30:搜索功能;85,75:用户中心;20,85:产品列表)

🎯 **标注特性：**
- 📌 精确定位标注点
- 💬 鼠标悬停显示说明
- 🎨 醒目的脉冲动画
- 📱 支持多个标注点

## 🎮 可拖拽图片

### 交互式元素展示

体验图片的拖拽移动功能：

![draggable](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjM5YzEyIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj7mi5not4Xmm7g8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIj7kuZLliJfpvo/lm5bmtojnh7rliqjlvrkklZM8L3RleHQ+Cjwvc3ZnPg==)

🎮 **拖拽特性：**
- 🖱️ 鼠标拖拽自由移动
- 🎨 华丽的渐变背景
- ✨ 悬停阴影效果
- 📱 触摸设备友好

## 🔍 普通图片放大

点击下面的图片体验放大查看功能：

![普通图片示例](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMmVjYzcxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIj7mlJLnlKjlm77nloc8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij7ngrnlh7vlkZblpKfmo6DnnIg8L3RleHQ+Cjwvc3ZnPg==)

## ⌨️ 快捷键支持

在模态框中，您可以使用以下快捷键：

- **ESC** - 关闭图片模态框
- **←** - 查看上一张图片（画廊模式）
- **→** - 查看下一张图片（画廊模式）

---

> 🎉 **总结**：我们的图片展示系统支持画廊、网格、对比、标注、拖拽等多种嵌套场景，为用户提供丰富的交互体验！

**语法说明：**

- \`![gallery](url1|url2|url3)\` - 创建图片画廊
- \`![grid](url1|url2|url3|url4)\` - 创建图片网格
- \`![compare](before_url|after_url)\` - 创建对比图片
- \`![annotated](url@x,y:text;x2,y2:text2)\` - 创建标注图片
- \`![draggable](url)\` - 创建可拖拽图片
- 普通图片语法依然支持点击放大功能`,
  },
  {
    title: 'Mermaid 流程图示例',
    content: `# 🔀 Mermaid 流程图演示

Mermaid 是一个强大的图表绘制工具，可以用简单的文本语法创建复杂的图表。

## 用户登录流程图

下面是一个用户登录的完整流程：

\`\`\`mermaid
graph TD
    A[用户访问登录页面] --> B{是否已登录?}
    B -->|是| C[跳转到主页]
    B -->|否| D[显示登录表单]
    D --> E[用户输入账号密码]
    E --> F{验证信息}
    F -->|成功| G[保存用户会话]
    F -->|失败| H[显示错误信息]
    G --> I[跳转到主页]
    H --> D
    C --> J[显示用户界面]
    I --> J
\`\`\`

## 系统架构图

这是一个典型的前后端分离架构：

\`\`\`mermaid
graph LR
    A[前端 React] --> B[API 网关]
    B --> C[用户服务]
    B --> D[订单服务]
    B --> E[支付服务]
    C --> F[(用户数据库)]
    D --> G[(订单数据库)]
    E --> H[(支付数据库)]
    B --> I[Redis 缓存]
    C --> I
    D --> I
    E --> I
\`\`\`

> 💡 **提示**：Mermaid 支持多种图表类型，包括流程图、时序图、甘特图等。`,
  },
  {
    title: '时序图与状态图示例',
    content: `# ⏱️ 时序图与状态图演示

## API 调用时序图

展示前端与后端的交互过程：

\`\`\`mermaid
sequenceDiagram
    participant U as 用户
    participant F as 前端
    participant A as API服务
    participant D as 数据库
    
    U->>F: 点击登录按钮
    F->>A: POST /api/login
    A->>D: 查询用户信息
    D-->>A: 返回用户数据
    A-->>F: 返回JWT Token
    F-->>U: 显示登录成功
    
    U->>F: 请求用户资料
    F->>A: GET /api/profile (with token)
    A->>A: 验证Token
    A->>D: 查询详细资料
    D-->>A: 返回资料数据
    A-->>F: 返回用户资料
    F-->>U: 显示个人中心
\`\`\`

## 订单状态转换图

展示电商订单的状态流转：

\`\`\`mermaid
stateDiagram-v2
    [*] --> 待支付
    待支付 --> 已支付 : 支付成功
    待支付 --> 已取消 : 超时/手动取消
    已支付 --> 待发货 : 商家确认
    待发货 --> 已发货 : 物流发出
    已发货 --> 已收货 : 用户确认
    已收货 --> 已完成 : 确认收货
    已收货 --> 退款中 : 申请退款
    退款中 --> 已退款 : 退款成功
    已取消 --> [*]
    已完成 --> [*]
    已退款 --> [*]
\`\`\`

**状态说明：**
- **待支付**：订单创建，等待用户付款
- **已支付**：支付成功，等待商家处理
- **待发货**：商家确认订单，准备发货
- **已发货**：商品已发出，等待用户收货`,
  },
  {
    title: '甘特图与图片示例',
    content: `# 📊 甘特图与图片展示

## 项目开发甘特图

展示项目开发的时间规划：

\`\`\`mermaid
gantt
    title 前端项目开发计划
    dateFormat  YYYY-MM-DD
    section 需求分析
    需求调研           :done,    des1, 2024-01-01,2024-01-05
    原型设计           :done,    des2, 2024-01-03, 2024-01-10
    技术选型           :done,    des3, 2024-01-08, 2024-01-12
    section 开发阶段
    环境搭建           :done,    dev1, 2024-01-10, 2024-01-15
    基础组件开发        :active,  dev2, 2024-01-15, 2024-02-01
    功能模块开发        :         dev3, 2024-01-25, 2024-02-15
    集成测试           :         dev4, 2024-02-10, 2024-02-20
    section 部署上线
    生产环境部署        :         dep1, 2024-02-18, 2024-02-25
    性能优化           :         dep2, 2024-02-22, 2024-03-01
    上线发布           :         dep3, 2024-02-28, 2024-03-05
\`\`\`

## 技术架构图片示例

### React 生态系统架构

![React 生态系统](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzQ5OGRiIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCI+UmVhY3QgRWNvc3lzdGVtPC90ZXh0Pgo8dGV4dCB4PSIzMDAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+Sm9taWEgTWFya2Rvd24gUGFyc2VyPC90ZXh0Pgo8L3N2Zz4=)

*React 生态系统包含了丰富的工具链和库*

### 现代前端开发流程

![开发流程](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMmVjYzcxIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCI+RGV2ZWxvcG1lbnQgV29ya2Zsb3c8L3RleHQ+Cjx0ZXh0IHg9IjI1MCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0Ij7kuI7oja/lt6foh7Poibflvq7vvJrlroMm5YG5YWzmuIXns5nmrYflnrE8L3RleHQ+Cjwvc3ZnPg==)

*从需求到上线的完整开发流程*

## 饼图数据分析

技术栈使用比例：

\`\`\`mermaid
pie title 前端技术栈使用分布
    "React" : 40
    "Vue" : 30
    "Angular" : 15
    "其他框架" : 10
    "原生JS" : 5
\`\`\`

> 📸 **图片说明**：以上图片展示了现代前端开发的技术架构和流程，图片会在打字机效果中逐步显示。

**项目特点：**
- 🚀 **响应式设计**：支持各种设备尺寸
- 🎨 **美观界面**：Material Design 风格
- ⚡ **高性能**：虚拟DOM + 懒加载
- 🔧 **易维护**：TypeScript + 模块化`,
  },
  {
    title: '复杂图表综合示例',
    content: `# 🎯 复杂图表综合演示

## 微服务架构图

展示一个完整的微服务系统架构：

\`\`\`mermaid
graph TB
    subgraph "客户端层"
        A[移动端 App]
        B[Web 前端]
        C[管理后台]
    end
    
    subgraph "网关层"
        D[API 网关]
        E[负载均衡器]
    end
    
    subgraph "服务层"
        F[用户服务]
        G[商品服务]
        H[订单服务]
        I[支付服务]
        J[通知服务]
    end
    
    subgraph "数据层"
        K[(用户DB)]
        L[(商品DB)]
        M[(订单DB)]
        N[Redis]
        O[Elasticsearch]
    end
    
    A --> D
    B --> D
    C --> D
    D --> E
    E --> F
    E --> G
    E --> H
    E --> I
    E --> J
    
    F --> K
    F --> N
    G --> L
    G --> O
    H --> M
    H --> N
    I --> N
    J --> N
\`\`\`

## 用户行为分析流程

复杂的数据处理管道：

\`\`\`mermaid
flowchart LR
    A[用户行为] --> B[数据采集]
    B --> C{数据类型}
    C -->|点击事件| D[实时处理]
    C -->|页面访问| E[批量处理]
    C -->|购买行为| F[重要事件]
    
    D --> G[实时分析]
    E --> H[离线分析]
    F --> I[风控检测]
    
    G --> J[实时推荐]
    H --> K[用户画像]
    I --> L[风险预警]
    
    J --> M[个性化展示]
    K --> N[精准营销]
    L --> O[安全防护]
\`\`\`

## 团队协作流程图

敏捷开发的完整流程：

\`\`\`mermaid
gitgraph
    commit id: "项目初始化"
    branch feature/login
    checkout feature/login
    commit id: "登录功能开发"
    commit id: "单元测试"
    checkout main
    merge feature/login
    commit id: "发布 v1.0"
    
    branch feature/dashboard
    checkout feature/dashboard
    commit id: "仪表板开发"
    commit id: "图表集成"
    checkout main
    branch hotfix/bug-fix
    checkout hotfix/bug-fix
    commit id: "修复登录bug"
    checkout main
    merge hotfix/bug-fix
    commit id: "发布 v1.0.1"
    
    checkout feature/dashboard
    commit id: "响应式优化"
    checkout main
    merge feature/dashboard
    commit id: "发布 v1.1"
\`\`\`

### 技术对比图片

![技术对比](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDcwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZTc0YzNjIi8+Cjx0ZXh0IHg9IjM1MCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iYm9sZCI+VGVjaG5vbG9neSBDb21wYXJpc29uPC90ZXh0Pgo8dGV4dCB4PSIzNTAiIHk9IjIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+55CG5pyA5pa55qGI55qE5oCn6IO954K55a+55q+U5YiG5p6QPC90ZXh0Pgo8L3N2Zz4=)

*不同技术方案的性能对比分析*

### 系统监控截图

![系统监控](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDgwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjM5YzEyIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCI+U3lzdGVtIE1vbml0b3Jpbmc8L3RleHQ+Cjx0ZXh0IHg9IjQwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5EYXNoYm9hcmQgJiBBbGVydHM8L3RleHQ+Cjwvc3ZnPg==)

*实时系统监控大屏展示*

## 数据流向图

\`\`\`mermaid
flowchart TD
    A[数据源] --> B[数据清洗]
    B --> C[数据转换]
    C --> D[数据存储]
    D --> E[数据分析]
    E --> F[可视化展示]
    F --> G[业务决策]
    
    B --> H[异常检测]
    H --> I[告警通知]
    E --> J[机器学习]
    J --> K[智能推荐]
\`\`\`

> 🎨 **设计理念**：通过可视化图表和高质量图片，让复杂的技术概念变得直观易懂。

**系统优势：**
- 📊 **全面监控**：实时监控所有关键指标
- 🔄 **自动化**：CI/CD 全流程自动化
- 🛡️ **安全可靠**：多层安全防护机制
- 📈 **可扩展**：支持水平和垂直扩展`,
  },
];

export default function EnhancedPage() {
  const [currentExample, setCurrentExample] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [enableMermaid, setEnableMermaid] = useState(true);
  const [enableImages, setEnableImages] = useState(true);

  // 开始播放打字机效果
  const startTypewriter = (index: number) => {
    setCurrentExample(index);
    setIsPlaying(true);
  };

  // 打字机效果完成回调
  const handleComplete = () => {
    console.log('增强版打字机效果完成！');
  };

  return (
    <div className="enhanced-demo-container">
      <header className="enhanced-demo-header">
        <h1>🔥 增强版 Markdown 打字机演示</h1>
        <p>支持 Mermaid 图表和图片渲染的高级功能</p>
      </header>

      <div className="enhanced-demo-content">
        {/* 功能开关 */}
        <div className="feature-toggles">
          <h3>功能开关：</h3>
          <div className="toggle-buttons">
            <label className="toggle">
              <input
                type="checkbox"
                checked={enableMermaid}
                onChange={(e) => setEnableMermaid(e.target.checked)}
              />
              <span className="toggle-label">🔀 Mermaid 图表</span>
            </label>
            <label className="toggle">
              <input
                type="checkbox"
                checked={enableImages}
                onChange={(e) => setEnableImages(e.target.checked)}
              />
              <span className="toggle-label">📸 图片渲染</span>
            </label>
          </div>
        </div>

        {/* 示例选择器 */}
        <div className="example-selector">
          <h3>选择演示示例：</h3>
          <div className="example-buttons">
            {enhancedMarkdownExamples.map((example, index) => (
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
            <EnhancedTypewriterMarkdown
              content={enhancedMarkdownExamples[currentExample].content}
              speed={25}
              showCursor={true}
              enableMermaid={enableMermaid}
              enableImages={enableImages}
              onComplete={handleComplete}
            />
          )}
          {!isPlaying && (
            <div className="placeholder">
              <p>🚀 点击上方按钮开始演示增强版打字机效果</p>
              <p>支持 Mermaid 图表和图片的动态渲染</p>
              <div className="feature-preview">
                <div className="feature-item">
                  <span className="feature-icon">🔀</span>
                  <span>流程图 • 时序图 • 状态图 • 甘特图</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <span>饼图 • 架构图 • Git图</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📸</span>
                  <span>图片懒加载 • 错误处理 • 响应式显示</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 使用说明 */}
        <div className="usage-guide">
          <h3>📚 使用说明</h3>
                     <div className="guide-content">
             <div className="guide-section">
               <h4>🔀 Mermaid 图表语法</h4>
               <code>```mermaid<br/>graph TD<br/>    A[开始] --&gt; B[结束]<br/>```</code>
             </div>
             <div className="guide-section">
               <h4>📸 图片语法</h4>
               <code>![图片描述](图片URL)</code>
             </div>
             <div className="guide-section">
               <h4>⚙️ 组件配置</h4>
               <code>enableMermaid=true<br/>enableImages=true</code>
             </div>
           </div>
        </div>
      </div>

      <footer className="enhanced-demo-footer">
        <div className="navigation-links">
          <a href="/" className="nav-link">
            ← 返回基础版演示
          </a>
        </div>
        <p>
          💡 <strong>技术栈：</strong> React + TypeScript + Remarkable + Mermaid + UmiJS
        </p>
        <p>
          🎨 <strong>新增特性：</strong> Mermaid 图表渲染、图片懒加载、功能开关、增强样式
        </p>
      </footer>
    </div>
  );
} 