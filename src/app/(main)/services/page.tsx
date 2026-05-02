import Link from 'next/link'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className='w-full  overflow-x-hidden'>
       {/* hero */}
      <div  className="w-full h-100 relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/about.jpg'})` }}>
      <div className='absolute bg-black/40 inset-0 flex flex-col pt-24'>
        <Link href={'/'} className='text-gray-100 mt-5 ml-5 md:ml-14 font-light hover:text-orange-600 active:text-orange-600'>
        Home/Services
        </Link>
        <h2 className='text-center font-semibold text-gray-100 mt-15 text-4xl md:text-5xl'>Our services</h2>
        <div className='flex items-center justify-center flex-col'>
          <h3 className='text-center font-semibold text-gray-100 mt-5 text-2xl'>Reliable Steel Building & Construction Material Solutions</h3>
          <p className='text-center font-light text-gray-100 mt-2 max-w-120'>We provide quality steel building systems and construction materials tailored to meet the needs of residential, commercial, and industrial projects.</p>
        </div>
        
       

      </div>


      </div>

      <div>
        
      </div>
    </div>
  )
}

export default ServicesPage