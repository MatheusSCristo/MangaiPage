import React, { useState } from 'react'
import { Restaurantes } from "../../data/restaurantes"
import { Link } from 'react-router-dom'

const Footer = () => {
  const [number, setNumber] = useState('(XX) XXXXX-XXXX')

  const SelectNumber = (e) => {
    Restaurantes.map((item) => {
      if (item.nome === e.target.value)
        setNumber(item.number)
    })

  }


  return (
    <div className='h-min bg-brownT p-4'>
      <div className='flex h-full justify-between mx-40 items-center'>
        <div className='flex h-full '>
          <img src='src\assets\imgs\logo.png' className='h-full ' />
          <div className='flex flex-col'>
            <h1 className='text-3xl text-white ml-4 mb-2'>Telefone:</h1>
            <select className='w-full p-2 rounded-xl text-2xl ml-4' onChange={SelectNumber} >
              <option selected disabled >Selecione uma unidade</option>
              {Restaurantes.map((item, index) => (
                <option key={index}>{item.nome}</option>
              ))}
            </select>
            <div className='flex gap-2 m-2'>
              <img src='src/assets/icons/Ringer Volume.svg' className='w-8' />
              <span className='text-2xl text-white'>{number}</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col text-white gap-5 '>
            <div className='flex items-center gap-2'>
              <img src='src\assets\icons\Instagram.svg' className='w-8'/>
              <Link to={'https://www.instagram.com/mangairestaurantes/'} target='_blank'>Instagram</Link>
            </div>
            <div className='flex items-center gap-2'>
              <img src='src\assets\icons\Email.svg' className='w-8'/>
              <Link to={'mailto:vendaspb@mangai.com.br'} target='_blank' type='email'>Email</Link>
            </div>
            <div className='flex items-center gap-2'>
              <img src='src\assets\icons\LinkedIn.svg' className='w-8'/>  
              <Link to={'https://www.linkedin.com/company/restaurante-mangai/about/'} target='_blank'>Deseja trabalhar conosco?</Link>
            </div>

        </div>


      </div>

    </div>

  )
}

export default Footer