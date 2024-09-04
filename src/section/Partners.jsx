import React from 'react'
import apple from '../assets/logos_apple-app-store.png'
import android from '../assets/logos_android-icon.png'
import airbnb from '../assets/logos_airbnb.png'
import basecamp from '../assets/logos_basecamp.png'
import ibm from '../assets/logos_ibm.png'
import apiary from '../assets/logos_apiary.png'

const Partners = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-8 p-8'>
      
      <p class="font-inria-sans text-[40px] leading-[47.96px] md:text-[52px] font-normal md:leading-[62px] md:tracking-[0.2px] text-white mb-4">
        PARTNERS
      </p>

      <p className="font-inter text-[16px]  md:text-[20px] font-normal leading-[19.36px] md:leading-[24.2px] text-center text-white mb-4 w-[99%] md:w-[33%]">
        We focus on ergonomics and meeting you where you work. 
        It's only a keystroke away.
      </p>

      <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
        <div className='flex gap-4 md:gap-8 mt-8'>
          <img src={apple} alt='apple' className='w-[60px] h-[60px]'/>
          <img src={apiary} alt='apiary' className='w-[60px] h-[60px]'/>
          <img src={android} alt='android' className='w-[60px] h-[60px]'/>

        </div>
        
        <div className='flex gap-4 md:gap-8 mt-8'>
          <img src={basecamp} alt='base camp' className='w-[60px] h-[60px]'/>
          <img src={airbnb} alt='airbnb' className='w-[60px] h-[60px]'/>
          <img src={ibm} alt='ibm' className='w-[60px] h-[60px]'/>
        </div>
       
      </div>

      <button className='text-white px-8 py-2 mt-8 border border-1-white'>
        All Partners
      </button>

    </div>
  )
}

export default Partners