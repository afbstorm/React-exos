import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Création du composant <BrowserRouter /> qui va permettre 
    de gérer les routes de notre application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
