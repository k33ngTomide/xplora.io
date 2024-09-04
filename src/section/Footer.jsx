

import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {

  const LeftSection = ({text}) => {
    return (
      <div className='flex flex-col gap-8 mb-8'>
        <p className="font-graphik text-[20px] font-medium leading-[30px] tracking-title text-left text-white">{text}</p>
        <div className='flex flex-col gap-4'>
          <p className='text-white font-graphik text-[16px] font-medium leading-[24px] tracking-title text-left'>Home</p>
          <p className='text-white font-graphik text-[16px] font-medium leading-[24px] tracking-title text-left'>Examples</p>
          <p className='text-white font-graphik text-[16px] font-medium leading-[24px] tracking-title text-left'>Pricing</p>
          <p className='text-white font-graphik text-[16px] font-medium leading-[24px] tracking-title text-left'>Updates</p>
        </div>

      </div>
    )
  }

  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-12 items-center justify-between md:px-16 py-12'>
      
      <div className='flex flex-col md:flex-row justify-between md:w-[50%] px-4 items-start md:px-16 gap-4'>
        <LeftSection text={'Fingertipe'} />
        <LeftSection text={'Resources'} />
        <LeftSection text={'About'} />
      </div>

      <div className='flex flex-col md:w-[50%] md:px-[100px] gap-4'>
        <div className="flex items-center space-x-2 text-white">
          <FaMapMarkerAlt size={24} className="text-white" />
          <span >7480 Mockingbird Hill undefined </span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <FaPhone size={24} className="text-white" />
          <span >(239) 555-0108</span>
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-900">
            <FaLinkedinIn size={24} />
          </a>
        </div>

      </div>

    </div>
  )
}

export default Footer