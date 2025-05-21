import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // ✅ Makes asset paths relative
  plugins: [vue()],
})
