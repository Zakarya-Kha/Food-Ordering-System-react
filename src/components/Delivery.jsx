import React from 'react'

function Delivery() {
  return (
    <div>
      <div className='text-white text-center mt-8'>
        <h1 className='mb-16 text-4xl font-bold text-yellow-600'>Quick Delivery App</h1>
      </div>
      <div className='md:flex justify-around  flex-wrap'>
        <div>
            {/* img */}
            <img className='w-[550px] rounded-xl' src="https://images.unsplash.com/photo-1564758564211-cc16d061f020?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmUlMjBmb29kfGVufDB8fDB8fHww" alt="" />
        </div>
        <div className='text-white flex justify-center flex-col'>
            {/* text */}
            <p className='text-2xl'>Get The App</p>
            <p className='text-xl '>Limited Convenience On Demand</p>
            <div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'>Order Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
