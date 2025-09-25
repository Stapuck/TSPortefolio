import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: 8000, //4173
    allowedHosts: ['.koyeb.app', 'terence.saramandif.com'] 
  }
})
