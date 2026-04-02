import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/agrisim-ai-v1/', // SESUAIKAN DENGAN NAMA REPO GITHUB NANTI
})