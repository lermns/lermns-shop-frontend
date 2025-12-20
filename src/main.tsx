import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LermnsShopApp } from './LermnsShopApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LermnsShopApp/>
  </StrictMode>,
)
