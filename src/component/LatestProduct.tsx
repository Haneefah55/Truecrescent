"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const LatestProduct = () => {

  const products = [
    {id: 1, name: "Heavy-Duty H-beam", spec: "200 x 200 x 8mm - Grade S355", img: "/images/h-beam.jpeg", price: "300000"},
    {id: 2, name: "Galvanized Square Tube", spec: "50 x 50 x 2mm - 6mm length", img: "/images/galv.webp", price: "200000"},
    {id: 3, name: "Perforated steel sheet", spec: "2mm thickness - 4` x 8`", img: "/images/steesh.webp", price: "100000"},
    {id: 4, name: "High-Tensil Threaded Rod", spec: "M16 x 1m - Grade 8.8", img: "/images/hihten.webp", price: "50000"},
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: "left" | "right") => {
    if(!scrollRef.current) return

    const scrollAmt = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmt : scrollAmt,
      behavior: "smooth"
    })

  }
  
  return (
    <div className="bg-gray-100 pt-5 pb-16 px-4 w-full flex items-center justify-center  ">
      <div className='w-full relative max-w-6xl flex flex-col gap-4'>
        <h3 className='font-semibold self-start text-xl ml-3  md:text-2xl'>Fresh from the Mill</h3>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-4 snap-mandatory scroll-smooth scrollbar-hide">
          {
            products.map((prod) => (
              <div key={prod.name} className='w-90 h-60 shadow-md overflow-hidden group cursor-pointer flex flex-col border bg-gray-100'>
                <div className='w-full h-3/4 relative'>
                  <Image
                    src={prod.img}
                    alt={prod.name}
                    fill
                    className='object-cover group-hover:scale-110 group-active:scale-110 transition duration-500'
                  />

                </div>
                <div className='flex p-3 flex-col justify-between h-1/4'>
                  <div>
                    <h3 className='text-md font-semibold'>
                      {prod.name}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {prod.spec}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-lg font-bold text-green-600'>
                      ₦{prod.price}
                    </span>
                  </div>
                </div>
                <Link href={`/product/`} className='bg-orange-500 self-end text-white px-3 py-2 w-fit text-sm'>
                  View Details
                </Link>
              </div>
            ))
          }

        </div>
        <button onClick={() => scroll("left")} className='absolute left-2 top-1/2 z-20 backdrop-blur-sm p-2 shadow-md bg-orange-500/80  hover:bg-orange-500  -translate-y-1/2'>
            <FaChevronLeft />
        </button>
        <button onClick={() => scroll("right")} className='absolute right-2 top-1/2 z-20 backdrop-blur-sm p-2 shadow-md bg-orange-500/80 hover:bg-orange-500 -translate-y-1/2'>
          <FaChevronRight />
        </button>

      </div>
        
              


    </div>

      
  
  )
}

export default LatestProduct
