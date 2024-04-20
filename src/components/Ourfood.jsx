import React from 'react';
import { topPicks } from './data/Data';
import { cartContext } from './context/Context';

function Ourfood() {
  const value = React.useContext(cartContext);
  return (
    <div className="text-center py-20  ">
      <h1 className="text-6xl text-yellow-700 font-bold mt-20">Our Food</h1>
      <div className="flex flex-wrap justify-center py-16">
        {topPicks.map((item, index) => (
          <div className="text-white mx-auto  w-[350px] p-6 text-center" key={index}>
            <img className="w-[350px] h-[300px] rounded-xl" src={item.image} alt="" />
            <h1 className="text-xl font-bold text-yellow-600">{item.title}</h1>
            <p className="text-xl">{item.Desc}</p>
            <p className="text-xl">{item.price}</p>
            <button 
            onClick={() => value.setCart(value.cart + 1)}
            className='bg-red-500 text-white hover:text-xl hover:bg-red-400 px-4 py-2 rounded-lg mt-4'>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Ourfood;
