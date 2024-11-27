import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-50'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  </StrictMode>,
)
