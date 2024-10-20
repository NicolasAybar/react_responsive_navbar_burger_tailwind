import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NavBar} from '../src/components/menu/NavBar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
  </StrictMode>,
)
