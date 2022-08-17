import { basename } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = true
const folderName = basename(process.cwd()) + '/'
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' && isGitHubPages ? '/' + folderName : '/'

export default defineConfig({
  base,
  root: "src",
  build: {
    outDir: '../dist',
    assetsDir: './'
  },
  plugins: [react()],
  publicDir: "../public"
})