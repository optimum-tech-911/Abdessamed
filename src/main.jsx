import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import logoUrl from './assets/new logo.png'

// Ensure favicon uses the provided logo
const ensureFavicon = () => {
  const existing = document.querySelector("link[rel~='icon']") || document.createElement('link')
  existing.setAttribute('rel', 'icon')
  existing.setAttribute('href', logoUrl)
  if (!existing.parentNode) {
    document.head.appendChild(existing)
  }
}
ensureFavicon()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
