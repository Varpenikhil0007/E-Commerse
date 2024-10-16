import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ESLint } from 'eslint'

const viteConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:5173}
  
})
