
import React from 'react'
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className='flex justify-between p-4 items-center'>
      <p className='text-[20px] font-normal leading-[23.98px]  font-inria-sans md:text-[24px] md:leading-[28.78px] text-center text-white'>
        Xplora.io
      </p>
      <div className='hidden md:flex gap-4 border border-white p-2 rounded-3xl'>
        <button className='text-white px-4 py-2 rounded-md'>
          About
        </button>
        <button className='text-white px-4 py-2 rounded-md'>
          Blog
        </button>
        <button className='text-white px-4 py-2 rounded-md'>
          Support
        </button>
      </div>

      <button className='hidden md:flex bg-black text-white px-8 py-2 rounded-3xl'>
        Get Started
      </button>

      <FaBars size={24} className='text-white flex md:hidden' />

    </div>
  )
}

export default NavBar