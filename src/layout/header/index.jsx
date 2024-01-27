import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const location = useLocation()

  return (
      <div className='h-32 bg-brownT sticky top-0 w-full z-10 '>
        <div className='flex justify-between mx-5 md:mx-[20%] items-center text-md xl:text-3xl text-white h-full p-1 lg:p-3'>

          {location.pathname !== '/' ?
            <Link to={'/'} className='h-auto w-[100px] xl:h-full'><img src='./imgs/logo.png' alt='Logo' className='h-full' /></Link>
            :
            <ScrollLink
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='cursor-pointer h-auto w-[100px] xl:h-full'><img src='./imgs/logo.png' alt='Logo' className='h-full' /></ScrollLink>
          }

          {location.pathname !== "/reservas" ?
            <ScrollLink
              activeClass="active"
              to="restaurante"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='hover:text-slate-300 hover:underline cursor-pointer'>Restaurantes</ScrollLink>
            :
            <Link to={'/'} className='hover:text-slate-300 hover:underline'>Restaurantes</Link>
          }
          <Link to={'http://cardapio.mangai.com.br/'} className='hover:text-slate-300 hover:underline' target='blank'>Cardápios</Link>
          <Link to={'/reservas'} className='hover:text-slate-300 hover:underline'>Reservas</Link>
        </div>
      </div>
  )
}

export default Header