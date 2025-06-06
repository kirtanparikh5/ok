import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './Greeting.jsx'
import App from './App.jsx'
import Component from './Component.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    
  </StrictMode>
)
