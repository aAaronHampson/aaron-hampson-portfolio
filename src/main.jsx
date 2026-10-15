import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './jsx/App.jsx'
import './css/index.css'
import './css/hero.css'
import './css/about.css'
import './css/icons.css'
import './css/projects.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
