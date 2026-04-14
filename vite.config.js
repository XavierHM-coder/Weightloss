import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // <-- Agregado para que los paths sean relativos en WordPress
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        admin: 'admin.html',
        productos: 'productos.html'
      }
    }
  }
>>>>>>> 5459292 (Cambios ligeros)
})
