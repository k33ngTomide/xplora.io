

import React from 'react'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'

const Testimonials = () => {

  const OneTestimonial = ({image, name}) => {
    return(
      <div className='flex flex-col bg-custom-dark-blue rounded-lg p-[40px] gap-8'>
        <div className='flex self-left gap-8'>
          <img src={image} alt='testimonialImage' className='w-[50px] h-[50px] rounded-full' />
          <div className='flex flex-col gap-1'>
            <p className="font-graphik text-[16px] font-medium leading-[24px] tracking-link text-left text-white">
              {name}
            </p>
            <p className="font-graphik text-[16px] font-medium leading-[24px] tracking-link text-left text-white">
              Designer
            </p>
          </div>

        </div>
        <div>
          <p className="font-inter text-[16px] font-normal leading-[24px] tracking-[0.2px] text-left text-white">
            Slate helps you see how many more days 
            you need to work to reach your financial 
            goal for the month and year. Slate helps 
            you see how many more days 
            you need to work to reach your financial 
            goal for the month and year.your financial 
            goal for the month and year.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center md:mt-16  gap-4 px-4 md:px-64 py-16'>

      <p class="font-inria-sans text-[40px] leading-[47.96px] md:text-[52px] font-normal md:leading-[62px] md:tracking-[0.2px] text-white mb-4">
        TESTIMONIALS
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4">
        <OneTestimonial image={avatar1} name={'Claire Bell'} />
        <OneTestimonial image={avatar1} name={'Claire Bell'} />
        <OneTestimonial image={avatar2} name={'Ralph Fisher'} />
        <OneTestimonial image={avatar2} name={'Ralph Fisher'} />
        
      </div>

    
    </div>
  )
}

export default Testimonials