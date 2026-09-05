import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The live site is served from the domain root, so every build that targets
// it — the default build and the Hostinger build alike — uses an absolute
// base ('/'). A relative base ('./') looks appealing for "works in any
// subfolder" portability, but it silently breaks deep links: when Apache's
// SPA fallback (see public/.htaccess) serves index.html's contents for e.g.
// /services/tooth-extraction while the browser's address bar still shows
// that path, the browser resolves relative asset URLs against THAT path
// (-> /services/tooth-extraction/assets/...), not the site root, so the JS
// bundle 404s and the page renders blank. Only GitHub Pages, which serves
// from a repo subpath, needs a non-root base.
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_PATH ?? (mode === 'gh-pages' ? '/AVM/' : '/'),
  plugins: [react(), tailwindcss()],
}))
