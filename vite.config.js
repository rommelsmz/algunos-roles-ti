import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Nota: si despliegas en GitHub Pages bajo un subpath, configura 'base' en README.
export default defineConfig({
  plugins: [vue()],
  base: '/algunos-roles-ti/'
})
