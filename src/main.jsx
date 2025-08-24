import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskPages from './pages/Taskpages.jsx'

import {register} from 'swiper/element/bundle'

register()

import 'swiper/css/navigation'
import 'swiper/css/pagination' 
import 'swiper/css/scrollbar'
import Sell from './pages/Sell.jsx'
import MouseArea from './pages/MouseArea.jsx'
import LoginRegister from './pages/LoginRegister.jsx'


const router = createBrowserRouter([
  {  
    path: '/',
    element: <App /> 
  },
  {
    path: '/Mouse',
    element: <TaskPages />,
  },
  {
    path: '/About', 
    element: <Sell />,
  },
  {
    path:'/MouseArea',
    element: <MouseArea />,
  },
  {
    path: '/user',
    element: <LoginRegister />,
  },
  {
    path: '/Home',
    element: <App />,
  },

])

  // Add other routes here if needed]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

   
  </StrictMode>,
);
