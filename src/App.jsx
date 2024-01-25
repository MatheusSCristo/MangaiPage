import React from 'react'
import Header from "./layout/header/index"
import Footer from './layout/footer'
import {Outlet} from 'react-router-dom'

import { ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <div className='flex flex-col '>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App