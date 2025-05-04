import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/css/root/index.css'
import App from './App.jsx'

// SCSS import
import './styles/css/form.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
