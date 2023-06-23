import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
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
