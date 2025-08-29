# SPA – Diferencias y Funciones en Puestos de TI

SPA estática (Vue 3 + Vue Router + Vite 5) que compara, de forma breve y profesional, funciones y diferencias de los roles: DevOps, DBA, Seguridad Informática (CISO/Responsable y Especialista en Ciberseguridad en la Nube), QA y Calidad de Datos.

## Tecnologías
- Vue 3, Vue Router (HashRouter para compatibilidad con GitHub Pages)
- Vite 5 (build estático)
- Todo client-side; sin backend

## Requisitos previos
- Node.js 18+ y npm

## Instalación
```bash
npm install
```

## Modo desarrollo
```bash
npm run dev
```
Visita: http://localhost:5173

## Build de producción
```bash
npm run build
```
Los archivos listos para deploy quedan en `dist/`.

## Despliegue en GitHub Pages
Opción A: Pages desde rama `gh-pages` (recomendado)
1) Configura el repo en GitHub.
2) Ejecuta:
```bash
# construir
npm run build
# publicar (ejemplo con git worktree)
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin <URL-DEL-REPO>
# publicar dist/ en gh-pages
git worktree add dist-gh gh-pages
xcopy /E /I /Y dist dist-gh
cd dist-gh
git add .
git commit -m "Deploy"
git push origin gh-pages
```
3) En GitHub → Settings → Pages → Source: `gh-pages`.

Opción B: GitHub Actions
- Crea un workflow que ejecute `npm ci && npm run build` y publique `dist/` a `gh-pages`.

Notas importantes para Pages
- Se usa HashRouter, por lo que no es necesario `404.html`. Si migras a BrowserRouter, `scripts/postbuild.js` copia automáticamente `dist/index.html` a `dist/404.html`.
- Si despliegas bajo un subpath (e.g. `https://usuario.github.io/mi-repo/`), normalmente HashRouter no requiere cambios. Para BrowserRouter deberías ajustar `base` en `vite.config.js`.

## Audio del Podcast
- Coloca el archivo `audio.mp3` en `public/` antes del build. En producción debe estar en la raíz del deploy (`/audio.mp3`).
- El botón flotante (accesible) controla reproducción/pausa y sigue sonando al navegar entre rutas.

## Accesibilidad y diseño
- Tipografía Inter; colores neutros con acento azul.
- Dark mode con CSS variables: respeta `prefers-color-scheme` y permite toggle manual persistido en `localStorage`.
- Navegación por teclado, `:focus-visible`, roles ARIA y tamaños táctiles adecuados.
- Tablas de salarios implementadas con roles ARIA para máxima compatibilidad.

## Estructura de rutas
- `/` → redirige a `/devops`
- `/devops`, `/dba`, `/seguridad`, `/qa`, `/calidad-datos`

## Scripts
- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción a `dist/`
- `npm run preview`: vista previa del build
- `npm run postbuild`: copia `404.html` (opcional con HashRouter)

## Contenido
- Cada sección incluye: título del rol, resumen, funciones clave en bullets, diferencias con otros roles, una infografía (placeholder) y rangos salariales (Año 2025 en moneda USD) con nota de variabilidad. En Seguridad se incluyen CISO/Responsable y Especialista en la Nube y el párrafo comparativo obligatorio.

## Licencia
Uso interno/educativo.
