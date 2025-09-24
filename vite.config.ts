import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  preview: {
    host: '0.0.0.0',
    port: 8000, //4173 todo : change en .env || 8000 pour koyeb mais sinon ? ,
    allowedHosts: ['.koyeb.app', 'terence.saramandif.com'] 
  }
})
