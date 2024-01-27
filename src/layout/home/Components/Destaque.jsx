import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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



const Destaque = () => {
  return (
    <Slider {...settings}  >
            <div>
              <img src="./destaqueImg/1.jpg" alt="Imagem de destaque 1" className='xl:h-[1000px] w-full h-auto' />
            </div>
            <div>
              <img src="./destaqueImg/2.jpg" alt="Imagem de destaque 2" className='xl:h-[1000px] w-full h-auto' />
            </div>
            <div>
              <img src="./destaqueImg/3.jpg" alt="Imagem de destaque 3" className='xl:h-[1000px] w-full h-auto' />
            </div>
            <div>
              <img src="./destaqueImg/4.jpg" alt="Imagem de destaque 4" className='xl:h-[1000px] w-full h-auto' />
            </div>
          </Slider>
  )
}

export default Destaque