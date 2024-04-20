import React from 'react'

function About() {
  return (
    <div>
    <div className='relative'>
      <img className='object-cover w-full h-[500px]' src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <h1 className='text-6xl font-bold'>Better food for more people</h1>
      </div>
      </div>

      <div className='text-white w-[90%] mx-auto py-20'>
       <h1 className='text-4xl font-semibold mb-3'>Driving the force of <span className='text-red-400'>assortment</span></h1>
       <p className='text-xl text-gray-400'>For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
     </div>
     <div className='flex py-20 justify-center gap-10'>
     <div className='text-white  w-[500px]'>
       {/* textt */}
       <h1 className='text-5xl mb-4'>Who are we?</h1>
       <p className='text-gray-400'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
     </div>
     <div className='w-[500px] flex justify-center '>
       {/* image */}
       <img  className='rounded-lg w-[400px] object-cover' src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" />
     </div>
     </div>
     </div>
    
  )
}

export default About
