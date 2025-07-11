
import React from 'react'

const HeroSection = () => {
  return (
    <div className=' flex flex-col text-white text-center px-4 items-center justify-center h-[100vh]' style={{backgroundImage:"url('src/assets/hero-bc.jpg')" , backgroundSize: 'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
          <h2 className='text-3xl md:text-5xl mb-5 font-bold'>Welcome to my website</h2>
          <p className='text-lg md:text-xl mb-5'>Your Journey Start Here</p>
          <button className='text-black bg-amber-600 cursor-pointer p-3 font-medium rounded-xl hover:bg-amber-200'> Purchase Products</button>
    </div>
  )

}

export default HeroSection