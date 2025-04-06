import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos nuestros estilos modernos
import './assets/styles/styles.scss'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
