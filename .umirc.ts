import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index', title: 'Remarkable 打字机效果演示' },
    { path: '/enhanced', component: 'enhanced', title: '增强版 Markdown 打字机演示' },
  ],
  fastRefresh: true,
});
