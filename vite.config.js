import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using custom domain https://nvnssoftwaresolutions.com so app is served from root
  base: '/',
})

