import React from 'react'
import { Restaurantes } from '../../../data/restaurantes'

const Restaurantes = () => {
    {Restaurantes.map((item, index) =>(
        <div key={index} className='flex justify-center items-center w-full flex-col sm:flex-row'>
          <Link to={item.maps} target='_blank' className='w-[150px] lg:w-[250px]' aria-label='Clique para ver a localização do restaurante'>
            <img src={item.img} className='hover:scale-125 duration-500 h-full w-auto' alt={`Imagem do ${item.nome}`} />
          </Link>
          <div className='flex flex-col mx-8 w-3/5 sm:text-xl text-3xl'>
            <h1 className='sm:text-xl text-3xl'>{item.nome}</h1>
            <div className='flex'>
              <img src='.\icons\Location.svg' className='w-7' alt='Ícone de localização' />
              <h2 className='sm:text-md text-2xl'>{item.local}</h2>
            </div>
          </div>
        </div>)
      )}
}

export default Restaurantes