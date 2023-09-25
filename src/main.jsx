import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Pages/Homepage/Homepage.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    <App />
  </React.StrictMode>,
)
