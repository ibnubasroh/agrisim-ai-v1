import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/agrisim-react/', // SESUAIKAN DENGAN NAMA REPO GITHUB NANTI
})