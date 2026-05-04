"use client"

import { useReviewStore } from '@/store/review.store'
import React, { useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import StarRatings from './StarRatings'
import { FaLocationDot } from 'react-icons/fa6'

const Reviews = () => {
  const { reviews, getReviews } = useReviewStore()
  const scrollRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: "left" | "right") => {
    if(!scrollRef.current) return

    const scrollAmt = 300
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmt : scrollAmt,
      behavior: "smooth"
    })

  }

  const getInitial = (name: string) => {
    const parts = name.split(" ");
    const actualName = parts[1]; // skip "Engr."
    return actualName.charAt(0);
  };





  useEffect(() => {
    getReviews()
    // fetch reviews and set to state
  }, [])
  return (
    <div className="bg-gray-200 py-10 px-4 w-full flex items-center justify-center  ">
      <div className='w-full relative max-w-4xl flex flex-col gap-4'>
        <h3 className='font-semibold self-start text-xl ml-3  md:text-2xl'>Our Satisfied Customers</h3>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-4 snap-mandatory scroll-smooth scrollbar-hide">
          {
            reviews.map((rev) => (
              <div key={rev._id} className='min-w-75 w-100 h-75 shadow-md overflow-hidden group cursor-pointer flex flex-col border bg-gray-100 p-4 justify-center'>
                <div className='flex gap-3'>
                  <div className='rounded-full bg-orange-500 text-gray-100 w-10 h-10 p-2 flex   items-center justify-center'>
                    <p className='text-2xl font-semibold'>{getInitial(rev.name)}</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <p className='font-semibold'>{rev.name}</p>
                    <StarRatings rating={rev.ratings} />
                  </div>

                </div>
                <div>
                  <p className='text-sm text-gray-600 mt-3'>{rev.comment}</p>
                </div>
                <div className='mt-auto flex text-gray-500 gap-2 items-center justify-end'>
                  <FaLocationDot size={12} />
                  <p className='text-sm text-gray-500'> {rev.location}</p>
                </div>

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

export default Reviews
