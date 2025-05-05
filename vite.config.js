import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite que la aplicación sea accesible desde cualquier dispositivo en la red
    // port: 3000       // Opcional: especifica el puerto (puedes cambiarlo si es necesario)
  }
})
