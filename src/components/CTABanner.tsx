import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTABanner = () => {
  return (
    <div className='w-full h-120 relative flex items-center justify-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${'/images/steel-construction.jpg'})` }}>

      <div className='absolute py-10 px-5 bg-black/60 flex inset-0 items-center justify-center'>
        <div className='flex items-center justify-center flex-col  text-gray-100'>
          <h2 className='font-semibold text-center text-2xl'>Ready To Start Your Next Construction Project?</h2>
          <p className=' min-w-70 text-center text-lg md:text-xl mt-3'>Partner with us for durable steel products, trusted construction materials, <br />and dependable service tailored to your building needs.</p>
          <div className='flex md:flex-row flex-col items-center justify-center text-[16px] mt-4 gap-4'>
            <Link href={'/products'} className='py-2 px-3 bg-orange-500 border-2 transition hover:bg-transparent active:bg-transparent border-orange-500 duration-300'>
            Explore Products
            </Link>
            <Link href={'/contact'} className='py-2 px-3 bg-transparent border-2 transition hover:bg-orange-500 active:bg-orange-500  border-orange-500 duration-300'>
            Request a Quote
            </Link>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CTABanner