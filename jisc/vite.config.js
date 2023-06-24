import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/nzo/jisc',
  build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
        },
    },
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js'
    },
  },
})
