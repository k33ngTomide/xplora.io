import React from 'react'
import intro from '../assets/introImage.png'
import chart from '../assets/chart.png'
import mchart from '../assets/mchart.png'


const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-24  justify-center'>
      <img src={intro} alt='intro' className='self-center'/>
      <p className="font-inria-sans text-[82px] leading-[98.32px] text-center md:text-[119.94px] font-bold md:leading-[143.81px] text-white">
        Xplora.io
      </p>
      <p className=" font-inter text-[18px] font-light leading-[21.78px]  md:text-[27.41px] md:leading-[33.18px] text-center px-4 text-white md:w-[30%] w-[70%]">
        Analyze your data, create your dashboard, and unite your team
      </p>

      <button className='md:hidden bg-black text-white px-8 py-2 rounded-3xl mt-12'>
        Get Started
      </button>

      <img src={chart} alt='chart' className='self-center hidden md:flex mt-12'/>
      <img src={mchart} alt='mchart' className='flex md:hidden mt-12 w-full'/>
    </div>
  )
}

export default HeroSection