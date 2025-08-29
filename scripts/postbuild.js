// Si migras a createWebHistory en router, copia index.html a 404.html para SPA fallback.
// Manteniendo HashRouter, no es necesario. Este script queda como referencia.
import { copyFileSync, existsSync } from 'fs'

try {
  if (existsSync('dist/index.html')) {
    copyFileSync('dist/index.html', 'dist/404.html')
    console.log('404.html copiado para fallback SPA (opcional con HashRouter).')
  }
} catch (e) {
  console.warn('No se pudo copiar 404.html:', e?.message)
}
