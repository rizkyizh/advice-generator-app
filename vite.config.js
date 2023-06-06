import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    tailwindcss('./postcss.config.cjs'),
  ],
  build: {
    outDir: '../dist',
    // base: './',
  },
  root: './src'
  
})
