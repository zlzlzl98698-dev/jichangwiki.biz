/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#18334B',     // 墨蓝
          link: '#2563EB',     // 链接蓝
          accent: '#0F766E',   // 辅助青
          text: '#202B37',     // 正文
          muted: '#64748B',    // 辅助文本
          border: '#E3E8EF',   // 边界
          bg: '#FFFFFF',       // 纯白背景
          surface: '#F8FAFC',  // 浅灰蓝背景
          surfaceHover: '#F1F5F9',
        },
        lab: {
          bg: '#0B132B',       // 深海军蓝观测底色
          surface: '#111D3E',  // 卡片底色
          card: '#1C2541',     // 模块底色
          border: '#243356',   // 细线边界
          cyan: '#00F0FF',     // 状态高亮
          emerald: '#10B981',  // 正常绿色
          amber: '#F59E0B',    // 预警黄色
          rose: '#EF4444',     // 异常红色
          text: '#E2E8F0',     // 浅色字
          muted: '#94A3B8',    // 暗色字
        }
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'WenQuanYi Micro Hei',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
};
