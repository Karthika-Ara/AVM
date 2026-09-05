import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Default builds target the domain root. The Hostinger build uses relative
// asset paths so the output can be uploaded either to `public_html` or to a
// subfolder without breaking script/style URLs. GitHub Pages keeps its explicit
// repo base path.
export default defineConfig(({ mode }) => ({
  base:
    process.env.VITE_BASE_PATH ??
    (mode === 'gh-pages' ? '/AVM/' : mode === 'hostinger' ? './' : '/'),
  plugins: [react(), tailwindcss()],
}))
