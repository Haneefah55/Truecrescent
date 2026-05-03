"use client"

import Link from 'next/link'
import React, { useState } from 'react'


const HomeHero = () => {
  const [showButton, setShowButton] = useState(false)

  return (
    <div className="w-full min-h-screen relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/herobg.jpg'})` }}>
      <div className="absolute inset-0 flex flex-col px-6 bg-linear-to-r from-black/85 via-black/50 to-transparent justify-center md:px-16">
        <div className='moveup mt-36 relative  ' onAnimationEnd={() => setShowButton(true)}>
          <p className='text-gray-100 font-thin  mb-1 text-md '>Quality. Strength. Reliability </p>
          <h1 className='text-gray-100 font-semibold mb-3 text-3xl md:text-4xl'>Trusted Premium Quality Steel Materials</h1>
          <p className='text-gray-100 mt-5 mb-3 text-md md:text-xl w-72 md:w-125'>
            For over 10 years, we have being supplying premium quality steel construction materials to builders, contractors and industrial projects. 
          </p>

        </div>
        
        <div className={` ${showButton ? "flex" : "hidden"} relative showup gap-3 mt-4 flex-row items-center justify-center self-start`}>
          <Link href={'/product'} className='bg-slate-950 text-sm md:text-md text-white p-2 hover:bg-transparent border-slate-950 hover:border-2 focus:border-2 focus:text-white hover:text-white focus:bg-transparent transition-all duration-300'>
          View Products
          </Link>
          <Link href={'/contact'} className='bg-orange-600 md:text-md text-sm text-white p-2 hover:bg-transparent border-orange-600 hover:border-2 focus:border-2 focus:text-white hover:text-white focus:bg-transparent transition-all duration-300'>
          Request a quote
          </Link>

        </div>

      
      </div>

    </div>
  )
}

export default HomeHero