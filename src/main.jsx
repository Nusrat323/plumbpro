import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  useLocation,
} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import App from './App'
import './index.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <AuthProvider>
        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
          }}
        />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)