import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5172, // Change this from 5173 to 5172
    open: true // Optional: automatically open browser when starting the server
  }
})