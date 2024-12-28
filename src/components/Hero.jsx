import React from 'react'
import Burger from '../Img/blackburger.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/*overlay*/}
        <div className='flex flex-col justify-center absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className=' text-orange-500'>Best</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Burger</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover ' src={Burger} alt="" />
      </div>
    </div>
  )
}

export default Hero