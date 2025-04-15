// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig({
  plugins: [
    vue(), // ✅ 只要這個
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ 告訴 Vite 「@」等於「src」
    },
  },
  server: {
    host: true,
    port: 9999,
  }
})
