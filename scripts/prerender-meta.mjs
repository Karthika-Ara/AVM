#!/usr/bin/env node
/**
 * Bakes per-route meta tags into static dist/<path>/index.html files.
 *
 * The site is a client-rendered SPA (no SSR), so dist/index.html only ever
 * carries the Home page's title/description/keywords/canonical/OG tags. Any
 * crawler or tool that reads raw HTML instead of executing JS (view-source,
 * social link previews, some SEO auditors) sees Home's meta on every route.
 *
 * This script runs after `vite build` and, for each known route, writes a
 * copy of the built index.html with that route's own meta swapped in, under
 * dist/<path>/index.html. Apache (see public/.htaccess) and GitHub Pages both
 * serve an existing directory's index.html as-is, so no server config change
 * is needed — requests to e.g. /about-us/ get the About page's real meta
 * without any JS running.
 *
 * Route meta comes from src/data/pageSeo.js (static pages) and
 * src/data/serviceContent.js / src/data/services.js (service detail pages) —
 * the same data each page's <Seo> component renders client-side, so the
 * prerendered head always matches what React hydrates.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { pageSeo } from '../src/data/pageSeo.js'
import services from '../src/data/services.js'
import { serviceContent } from '../src/data/serviceContent.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const distDir = join(rootDir, 'dist')
const siteOrigin = 'https://avmsmiles.com'

const modeArg = process.argv.find((arg) => arg.startsWith('--mode='))
const mode = modeArg ? modeArg.split('=')[1] : 'default'

// The hostinger build uses a relative base ('./') so it can be uploaded to
// either the domain root or a subfolder. Nesting routes into subfolders would
// break those relative asset paths, so per-route prerendering only applies to
// the absolute-base builds (default '/' and gh-pages '/AVM/').
if (mode === 'hostinger') {
  console.log('[prerender-meta] Relative-base build — skipping per-route prerender.')
  process.exit(0)
}

function collectRoutes() {
  const routes = Object.entries(pageSeo).map(([path, meta]) => ({ path, ...meta }))

  for (const service of services) {
    const seo = serviceContent[service.slug]?.seo ?? {
      title: `${service.name} | AVM Smiles`,
      description: service.short,
    }
    routes.push({ path: `/services/${service.slug}`, ...seo })
  }

  return routes
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function applyMeta(template, { path, title, description, keywords }) {
  const canonical = `${siteOrigin}${path}`
  const safeTitle = escapeAttr(title)
  const safeDescription = escapeAttr(description)

  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/s,
      `<meta name="description" content="${safeDescription}" />`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/s,
      `<meta property="og:description" content="${safeDescription}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/s,
      `<meta name="twitter:description" content="${safeDescription}" />`
    )

  if (keywords) {
    const safeKeywords = escapeAttr(keywords)
    html = /<meta\s+name="keywords"/.test(html)
      ? html.replace(
          /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/s,
          `<meta name="keywords" content="${safeKeywords}" />`
        )
      : html.replace(
          '<meta name="robots"',
          `<meta name="keywords" content="${safeKeywords}" />\n    <meta name="robots"`
        )
  } else {
    html = html.replace(/\s*<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/s, '')
  }

  return html
}

const template = readFileSync(join(distDir, 'index.html'), 'utf-8')
const routes = collectRoutes()

for (const route of routes) {
  const html = applyMeta(template, route)
  if (route.path === '/') {
    writeFileSync(join(distDir, 'index.html'), html, 'utf-8')
    continue
  }
  const outDir = join(distDir, route.path)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
}

console.log(`[prerender-meta] Wrote per-route meta for ${routes.length} routes.`)
