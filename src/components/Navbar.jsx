import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { BsFillPatchExclamationFill } from 'react-icons/bs';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  return (
    <div className='flex justify-between items-center p-4 max-w-[1640px] mx-auto'>
      {/*Left Container*/}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>

        <h1 className='texl-2xl sm:text-3xl lg:text-4xl px-2'>
          Burger <span className='font-bold text-orange-500'>Buddy</span></h1>
        <div className='items-center bg-gray-200 rounded-xl p-[0.5px] text-[14px] hidden xl:flex lg:flex'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/*search bar*/}
      <div className='flex items-center px-4 w-[200px] sm:w-[400px] lg:w-[600px] xl:w-[800px] bg-gray-200 rounded-full'>
        <AiOutlineSearch size={20} />
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search for foods' name="" id="Search Bar" />
      </div>

      {/*Cart Right Side*/}
      <button className='md:flex py-2 items-center rounded-full bg-black text-white font-semibold'>
        <BsFillCartFill size={20} className='mr-2 text-orange-500' />Cart
      </button>

      {/*Mobile Menu*/}
      {nav ? <div className='fixed w-full h-screen z-10 top-0 left-0 bg-black/80'></div> : ''}


      {/*Side drawer menu*/}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-3xl p-3 font-semibold'>
          Burger <span className='mr-2 text-orange-500'>Buddy</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex text-xl py-4 font-semibold'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
            <li className='flex text-xl py-4 font-semibold'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='flex text-xl py-4 font-semibold'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='flex text-xl py-4 font-semibold'><MdHelp size={25} className='mr-4' /> Help</li>
            <li className='flex text-xl py-4 font-semibold'><AiFillTag size={25} className='mr-4' /> Promotions</li>
            <li className='flex text-xl py-4 font-semibold'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
            <li className='flex text-xl py-4 font-semibold'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            <li className='flex text-xl py-4 font-semibold'><BsFillPatchExclamationFill size={25} className='mr-4' /> About</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar