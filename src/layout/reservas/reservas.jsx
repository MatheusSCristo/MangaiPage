import React, { useEffect } from 'react'
import {z} from 'zod'
import { zodResolver} from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'

import ReservaForm from './Components/reservaForm'
import ContatoForm from './Components/contatoForm'

const reservas = () => {

  

  return (
    <div className='flex flex-col items-center mx-4 xl:mx-64'>
      <h1 className='text-[3em] md:text-[6em]'>Reservas</h1>
      <div className='bg-transparent border border-brownT w-full mb-32 text-2xl py-8 rounded-3xl  '>
        <div className='flex justify-between'>
          <ReservaForm/>
          <ContatoForm/>
        </div>



      </div>


    </div>
  )
}

export default reservas