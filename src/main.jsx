import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Pages/Homepage/Homepage.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import Signup from './Pages/Auth/Signup/Signup'
import Login from './Pages/Auth/Login/Login'
import Services from './Pages/Services/Services'
import Vision from './Pages/Vision/Vision'

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
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/vision',
        element: <Vision />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
