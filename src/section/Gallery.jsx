
import React from 'react'
import drone from '../assets/drone.png'
import tablet from '../assets/tablet.png'
import windowSide from '../assets/windowside.png'
import livingRoom from '../assets/livingroom.png'
import codescreen from '../assets/codescreen.png'
import laptoppressing from '../assets/laptoppressing.png'
import camera from '../assets/camera.png'
import mobileGallery from '../assets/mobile gallery.png'


const Gallery = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-12 py-12'>

      <p class="font-inria-sans text-[40px] leading-[47.96px] md:text-[52px] font-normal md:leading-[62px] md:tracking-[0.2px] text-white mb-4">
        GALLERY
      </p>

      <p className="font-inter text-[20px] font-normal leading-[24.2px] text-center text-white mb-16 w-[70%] md:w-[33%]">
        We focus on ergonomics and meeting you where you work. 
        It's only a keystroke away.
      </p>

      <div className='hidden md:flex flex-col gap-8'>

        <div className='flex gap-4 justify-between'>
          <img src={drone} alt='gallery1' className='rounded-lg'/>
          <img src={tablet} alt='gallery2' className='rounded-lg'/>
          <img src={windowSide} alt='gallery3' className='rounded-lg'/>
          <img src={livingRoom} alt='gallery4' className='rounded-lg'/>

        </div>

        <div className='flex gap-4 justify-between'>
          <img src={codescreen} alt='gallery1' className='rounded-lg' />
          <img src={laptoppressing} alt='gallery2' className='rounded-lg'/>
          <img src={camera} alt='gallery3' className='rounded-lg' />
        </div>

      </div>

      <div className='flex md:hidden justify-center items-center w-full'>
        <img src={mobileGallery} alt='mobileGallery' className='w-full' />
      </div>

      <button className='text-white px-8 py-2 mt-8 border border-1-white'>
        See more
      </button>

    </div>
  )
}

export default Gallery