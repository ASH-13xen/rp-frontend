import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BlogsApp from './BlogsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogsApp />
  </StrictMode>,
)
