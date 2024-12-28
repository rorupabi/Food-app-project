import React from 'react'
import BigBrotherBurger from '../Img/BigBrotherBurger.jpg'
import BeefBrotherBurger from '../Img/BeefBurger.jpg'
import DessertsTray from '../Img/desserts-tray.jpg'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/*Card*/}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          {/*Overlay*/}
          <p className='font-bold text-3xl px-2 pt-4'>Big Brother's Burger Out!</p>
          <p className='text-xl px-2'>On 12/18</p>
          <button className='border-gray-400 bg-white text-black mx-2 absolute bottom-4 font-semibold hover:bg-gray-400 duration-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={BigBrotherBurger} alt="" />
      </div>

      {/*Card2*/}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          {/*Overlay*/}
          <p className='font-bold text-3xl px-2 pt-4'>Beef Mediterranean Burger Fries</p>
          <p className='text-xl px-2'>Rich Classics Added</p>
          <button className='border-gray-400 bg-white text-black mx-2 absolute bottom-4 font-semibold hover:bg-gray-400 duration-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={BeefBrotherBurger} alt="" />
      </div>

      {/*Card3*/}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          {/*Overlay*/}
          <p className='font-bold text-3xl px-2 pt-4'>A Must Try Desserts</p>
          <p className='text-xl px-2'>Tasty Fulfilling Treats</p>
          <button className='border-gray-400 bg-white text-black mx-2 absolute bottom-4 font-semibold hover:bg-gray-400 duration-300'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={DessertsTray} alt="" />
      </div>
    </div>
  )
}

export default Cards