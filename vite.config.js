import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// The live site is served from the domain root (https://avmsmiles.com/), so
// that's the default for `npm run build` — base '/'. Same for local dev.
// GitHub Pages serves the site from https://<org>.github.io/AVM/ instead, so
// that build (CI only) explicitly opts in via `npm run build:gh-pages` — base
// '/AVM/'. Defaulting to root here means a plain `npm install && npm run
// build` (e.g. Hostinger's Git auto-deploy) can never regress to the wrong
// base and produce a white screen.
export default defineConfig(({ mode }) => ({
  base: mode === 'gh-pages' ? '/AVM/' : '/',
  plugins: [react(), tailwindcss()],
}))
