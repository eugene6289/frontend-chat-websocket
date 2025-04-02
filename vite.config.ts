// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(), // ✅ 只要這個
  ],
  server: {
    host: true,
    port: 9999,
  }
})
