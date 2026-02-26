import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Handle GitHub Pages routing with base path
const basePath = '/nvns/'
if (window.location.pathname.includes('/?/')) {
  const path = window.location.pathname.split('/?/')[1]
  const newPath = basePath + path.replace(/~and~/g, '&')
  window.history.replaceState({}, '', newPath)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

