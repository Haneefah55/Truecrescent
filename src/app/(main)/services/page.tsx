import OurServices from '@/components/OurServices'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ServicesPage = () => {

  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
       {/* hero */}
      <div  className="w-full h-screen relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/about.jpg'})` }}>
      <div className='absolute bg-black/40 inset-0 flex flex-col pt-24'>
        <Link href={'/'} className='text-gray-100 mt-5 ml-5 md:ml-14 font-light hover:text-orange-600 active:text-orange-600'>
        Home/Services
        </Link>
        <h2 className='text-center font-semibold text-gray-100 mt-20 text-3xl md:text-5xl'>Our services</h2>
        <div className='flex items-center justify-center  flex-col'>
          <h3 className='text-center font-semibold text-gray-100 mt-5 text-xl md:text-2xl'>Reliable Steel Building & Construction Material Solutions</h3>
          <p className='text-center font-light text-gray-100 mt-2 min-w-60 max-w-120'>We provide quality steel building systems and construction materials tailored to meet the needs of residential, commercial, and industrial projects.</p>
        </div>

        
       

      </div>


      </div>
      <OurServices />
      <div className='w-full mb-4 flex items-center justify-center'>
        <div className='w-100 h-100 sm:w-130 sm:h-110 md:w-170 relative bg-no-repeat bg-cover' style={{ backgroundImage: `url(${'/images/truck.jpg'})` }}>
          
          <div className='absolute inset-0 bg-black/50 flex justify-center items-end '>
            <div className='flex flex-col w-90 md:w-100 mb-3 text-gray-100 bg-white/10 p-5 mr-5'>
              <h1 className='font-semibold text-2xl mb-3'>Delivery Services</h1>
              <p className='text-xl'>We offer fast and dependable delivery services to ensure materials arrive safely and on time at your project location.</p>

            </div>


          </div>

        </div>

      </div>

      
    </div>
  )
}

export default ServicesPage