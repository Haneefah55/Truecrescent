"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

const CategoryCarousel = () => {

  const categories = [
    { name: "Steel & Structural Materials", href: '/category/steel-materials', img: '/images/cat1.jpg' },
    { name: "Scaffolding & Formwork Materials", href: '/category/scaffolding-formwork', img: '/images/cat2.jpg' },
    { name: "Roofing & Timber", href: '/category/roofing-timbers', img: '/images/cat3.jpg'},
    { name: "Pipes & Fittings", href: '/category/pipes-fittings', img: '/images/cat4.avif'},
    { name: "Fasteners & Accessories", href: '/category/assessories', img: '/images/cat5.webp'},
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
    <div className="bg-gray-100 pt-5 pb-16 px-4   w-full flex items-center justify-center  ">
      
      <div className='w-full relative max-w-5xl flex flex-col gap-4'>
        <h3 className='font-semibold self-start text-xl ml-3  md:text-2xl'>Explore Our Steel Categories</h3>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto px-4 snap-mandatory scroll-smooth scrollbar-hide">
        {
          categories.map((cat) => (
            <Link href={cat.href} key={cat.name} >
              <div className='relative w-62.5 h-45 rounded-2xl shadow-md overflow-hidden group cursor-pointer'>
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className='object-cover group-hover:scale-110 transition duration-500'

                />
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/65' />
                <div className='absolute  bottom-4 left-4 text-white'>
                  <h3 className='text-lg font-semibold text-center'>
                    {cat.name}
                  </h3>

                </div>
              </div>


            </Link>
          ))
        }

        </div>
        <button onClick={() => scroll("left")} className='absolute left-2 top-1/2 z-20 backdrop-blur-sm p-2 shadow-md bg-white/70 hover:bg-white focus:bg-white -translate-y-1/2'>
          <FaChevronLeft />
        </button>
        <button onClick={() => scroll("right")} className='absolute right-2 top-1/2 z-20 backdrop-blur-sm p-2 shadow-md bg-white/70 hover:bg-white focus:bg-white -translate-y-1/2'>
          <FaChevronLeft />
        </button>

      </div>
      
    </div>
  )
}

export default CategoryCarousel