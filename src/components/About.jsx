import React from 'react'
import aboutImg from '../assets/images/about-image.jpeg'

export const About = () => {
  return (
    <div className='bg-white'>
      <div className='p-24 grid grid-cols-2'>
        <div className="">
          <h2 className="text-2xl font-medium ">Sobre Nós</h2>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A unde iste doloremque quidem officiis maxime, dolore ex laudantium ut obcaecati, autem, repellendus repudiandae quasi. Dolorum reiciendis dolore non vel illum?
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <img src={aboutImg} alt="" className='w-[400px] h-[400px] object-cover' />
        </div>
      </div>
    </div>
  )
}
