import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      VitePWA({ registerType: 'autoUpdate' })
  ],
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
