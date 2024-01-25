import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter,RouterProvider } from 'react-router-dom';


import App from './App.jsx'
import Home from "./layout/home/index.jsx"
import Reservas from "./layout/reservas/reservas.jsx"
import Historia from "./layout/historia/index.jsx"
import NotFound from "./layout/notFound/notFound.jsx"


import './index.css'

const router=createHashRouter([
  {path:'/',
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home />,

  },
    {
      path:"reservas",
      element:<Reservas />,

  },
    {
      path:"historia",
      element:<Historia />,

  },



]
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
