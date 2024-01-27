import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Components/Loading'


const Home = () => {

  const Destaque = lazy(() => import('./Components/Destaque'))
  const Restaurantes = lazy(() => import('./Components/Restaurantes'))
  return (
    <main className='flex flex-col overflow-hidden'>
      <div className='h-4/5 relative' id='top'>
        <Suspense fallback={<Loading/>}>
          <Destaque/>
        </Suspense>
      </div>
      <div className='bg-white mx-2 xl:mx-8 sm:mx-32'>
        <div className='flex flex-col my-8 xl:my-32 items-center'>
          <h1 className='text-[3em] xl:text-[6em]'>O Mangai</h1>
          <h2 className='text-[1.5em] xl:text-[2em] xl:w-1/2 text-center'>
            Lorem ipsum dolor sit amet. In voluptatem sint qui consequatur itaque ea nobis omnis cum dolores omnis ut dolorem harum et maiores suscipit vel voluptas dolores?
          </h2>
          <Link to={'historia'} className='bg-brownT text-white p-4 rounded-xl w-64 text-xl text-center mt-4 '>Conheça nossa história</Link>
        </div>
        <div className='my-32 flex flex-col items-center' id='restaurante'>
          <h1 className='text-[3em] xl:text-[6em] '>Restaurantes</h1>
          <h2 className='text-[1.5em] xl:text-[2em] '>Um mangai sempre pertinho de você</h2>
          <div className='bg-transparent border border-brownT w-full grid grid-cols-1  xl:grid-cols-2 gap-32 p-[5%] lg:p-32 rounded-3xl w-4/5 mt-12 '>
          <Suspense fallback={<Loading/>}>
          <Restaurantes />
        </Suspense>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Home