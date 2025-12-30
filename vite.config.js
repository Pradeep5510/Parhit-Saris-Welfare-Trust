// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name if deploying to GitHub Pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})
