import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { NavMobileProvider } from './contexts/NavMobileContext'
import "./css/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavMobileProvider>
      <App />
    </NavMobileProvider>
  </React.StrictMode>,
)
