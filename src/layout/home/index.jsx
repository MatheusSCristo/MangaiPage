import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';


import { Restaurantes } from './../../data/restaurantes'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {

  const settings = {
    fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: false,
    pauseOnHover: false,
    adaptiveHeight: false,
  };



  return (
      <main className='flex flex-col overflow-hidden'>
        <div className='h-4/5 relative' id='top'>
          <Slider {...settings}  >
            <div>
              <img src="src/assets/destaqueImg/1.jpg" alt="Imagem 1" className='xl:h-[1000px] w-full' />
            </div>
            <div>
              <img src="src/assets/destaqueImg/2.jpg" alt="Imagem 2" className='xl:h-[1000px] w-full' />
            </div>
            <div>
              <img src="src/assets/destaqueImg/3.jpg" alt="Imagem 3" className='xl:h-[1000px] w-full' />
            </div>
          </Slider>
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
              {Restaurantes.map((item, index) =>
                <div key={index} className='flex justify-center items-center w-full flex-col sm:flex-row'>
                  <Link to={item.maps} target='_blank' className='w-[150px] lg:w-[250px]'>
                    <img src={item.img} className='hover:scale-125 duration-500 h-full' />
                  </Link>
                  <div className='flex flex-col mx-8 w-3/5 sm:text-xl text-3xl'>
                    <h1 className='sm:text-xl text-3xl'>{item.nome}</h1>
                    <div className='flex'>
                      <img src='src\assets\icons\Location.svg' className='w-7' />
                      <h2 className='sm:text-md text-2xl'>{item.local}</h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
  )
}

export default Home