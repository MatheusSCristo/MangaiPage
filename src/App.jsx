import React from 'react'
import Header from "./layout/header/index"
import Footer from './layout/footer'

const App = ({children}) => {
  return (
    <div className='flex flex-col '>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default App