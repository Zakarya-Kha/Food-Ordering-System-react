import React from 'react'
import { topPicks } from './data/Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext } from 'react';
import { cartContext } from './context/Context';

function TopPicks() {
  const value = useContext(cartContext);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='w-[90%] mx-auto  '>
      <h1 className=' text-center mt-24 text-6xl text-yellow-700 font-bold'>What's On Your Mind</h1>
      <div className='py-20'>
      <Slider {...settings}>
      {topPicks.map((item) =>(
        <div  className='rounded-md mb-8 flex justify-center text-center py-20 ' key={item.id}>
          <div className='flex justify-center  '>
            <img  src={item.image} alt="" className='w-[200px] rounded-full h-[200px]' />
          </div>
          <div className=''>
          <p className='text-white'> {item.title}</p>
          </div>
          <div>
            <p className='text-white'>{item.Desc}</p>
          </div>
          <div>
            <p className='text-white'>{item.price}</p>
            <button
            onClick={() => value.setCart(value.cart + 1)}
            className='bg-red-500 text-white hover:text-xl hover:bg-red-400 px-4 py-2 rounded-lg mt-4'>Add to Cart </button>

          </div>
        </div>

      ))}
      </Slider>
      </div>
    </div>
    </>
  )
}

export default TopPicks

