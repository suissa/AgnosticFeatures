import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});