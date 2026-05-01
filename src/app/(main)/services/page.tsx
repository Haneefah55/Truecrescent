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
        <h2 className='text-center font-semibold text-gray-100 mt-25 text-4xl md:text-5xl'>Our services</h2>
       

      </div>


      </div>
    </div>
  )
}

export default ServicesPage