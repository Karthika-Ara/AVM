import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

function normalizeBasename(value) {
  if (!value || value === './' || value === '.') return '/'
  const cleaned = value.replace(/^\/+|\/+$/g, '')
  return cleaned ? `/${cleaned}` : '/'
}

// Set `VITE_BASENAME` only when the site is hosted inside a subfolder.
// Otherwise we derive the router base from Vite's configured base URL.
const basename = normalizeBasename(import.meta.env.VITE_BASENAME ?? import.meta.env.BASE_URL)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
