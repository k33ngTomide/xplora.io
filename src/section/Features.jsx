import React from 'react';
import spoonknife from '../assets/spoon&knife.png'
import knight from '../assets/knight.png'
import infinity from '../assets/infinity.png'

const Features = () => {

  const OneFeature = ({image, text1, text2}) => {
    return(
      <div className='flex flex-col items-center justify-center'>
        <img src={image} alt='featureImage' className='w-[30px] h-[30px]' />
        <p className="font-inter text-[20px] font-semibold leading-[30px] tracking-[0.1px] text-center text-white">
          {text1}
        </p>  
        <p className="font-inter text-[16px] font-normal leading-[24px] tracking-[0.2px] text-center w-[60%] md:w-[50%]  text-white">
          {text2}
        </p>
      </div>
    )
  }

  return (
    <div className='py-12'>

        <div className='flex flex-col items-center justify-center mt-32 md:mt-32'>
          <p className="font-inria-sans text-[40px] leading-[62px] tracking-[0.2px] md:text-[52px] font-normal md:leading-[62px] md:tracking-[0.2px] text-white">
            FEATURES
          </p>

          <p className="font-inria-sans text-[16px] leading-[19.18px] tracking-[0.2px] md:text-[24px] font-normal md:leading-[30px] md:tracking-[0.2px] text-center text-white w-[80%]  md:w-[40%] ">
            Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-4 mt-12 justify-center items-center'>
          <OneFeature 
            image={spoonknife} 
            text1={'A single source of truth'} 
            text2={'When you add work to your Slate calendar we automatically calculate useful insights '} 
          />

          <OneFeature 
            image={knight} 
            text1={'Intuitive interface'} 
            text2={'When you add work to your Slate calendar we automatically calculate useful insights'} 
          />

          <OneFeature 
            image={infinity} 
            text1={'Or with rules'} 
            text2={'When you add work to your Slate calendar we automatically calculate useful insights '} 
          />
        </div>
      
    </div>
  )
}

export default Features

        // 'lightFromTop': 'radial-gradient(circle at top, #ffffff, #010219, #010219, #010219, #010219, #010219)',
