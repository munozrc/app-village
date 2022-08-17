import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/app-village",
  root: "src",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  },
  plugins: [react()],
  publicDir: "../public"
})