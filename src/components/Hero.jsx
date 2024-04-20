import React from 'react';

function Hero() {
  return (
    <div className='relative py-16 '>
      <img className='object-cover w-full h-[500px]' src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
      <div className='absolute inset-0 flex flex-col  justify-center items-center text-center text-white'>
        <h1 className='text-6xl font-bold'>Zaki Food</h1>
        <p className='text-4xl'>Order food online from favourite restaurants near you</p>
        <button className='bg-red-500 hover:text-xl  text-white px-4 py-2 rounded-lg mt-4'>Order Now</button>
      </div>
    </div>
  );
}

export default Hero;
