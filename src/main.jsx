import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Vite sets BASE_URL from vite.config.js: '/' for the default/Hostinger
// build and dev, '/AVM/' only for the GitHub Pages build.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '') || '/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
