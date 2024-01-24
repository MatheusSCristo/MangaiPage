import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Restaurantes } from './../../data/restaurantes'

const Home = () => {
  const [destaque,setDestaque]=useState(1)

  const Destaques=()=>{
    for(let i=1;i<=4;i++){
      setTimeout(()=>setDestaque(i),4000)
    }
  }
    useEffect(()=>{
      Destaques()
    },[destaque])




  return (
    <>
      <div className='flex flex-col '>
        <img src={`src/assets/destaqueImg/${destaque}.jpg`} className='h-[100vh]' id='top' />
        <div className='bg-white mx-32'>
          <div className='flex flex-col my-32 items-center'>
            <h1 className='text-[6em]'>O Mangai</h1>
            <h2 className='text-[2em] w-1/2'>
              Lorem ipsum dolor sit amet. In voluptatem sint qui consequatur itaque ea nobis omnis cum dolores omnis ut dolorem harum et maiores suscipit vel voluptas dolores?
            </h2>
            <Link to={'historia'} className='bg-brownT text-white p-4 rounded-xl w-64 text-xl text-center mt-4'>Conheça nossa história</Link>
          </div>
          <div className='my-32 flex flex-col items-center' id='restaurante'>
            <h1 className='text-[6em] '>Restaurantes</h1>
            <h2 className='text-[2em] '>Um mangai sempre pertinho de você</h2>
            <div className='bg-transparent border border-brownT w-full grid grid-cols-2 gap-32 p-32 rounded-3xl w-4/5 mt-12'>
              {Restaurantes.map((item, index) =>
                <div key={index} className='flex justify-center items-center'>
                  <Link to={item.maps} target='_blank'>
                    <img src={item.img} className='hover:scale-125 duration-500' />
                  </Link>

                  <div className='flex flex-col mx-8'>
                    <h1 className='text-3xl'>{item.nome}</h1>
                    <div className='flex'>
                      <img src='src\assets\icons\Location.svg' className='w-7' />
                      <h2 className='text-2xl'>{item.local}</h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home