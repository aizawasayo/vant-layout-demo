import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import PxToViewport from 'postcss-px-to-viewport'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        PxToViewport({
          viewportWidth: 390, // 设计稿宽度
          propList: ['*'],
          mediaQuery: true, // 是否允许在媒体查询中转换 px
          fontViewportUnit: 'px', // 字体使用的视口单位
          selectorBlackList: ['.van'], // 指定不需要转换为视窗单位的类. ['wrap'], 它表示形如 wrap,my-wrap,wrapper这样的类名的单位，都不会被转换
          exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件 用正则做目录名匹配
        }),
      ],
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
