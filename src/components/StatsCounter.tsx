"use client"

import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp  from 'react-countup'
import { FaTruckLoading } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa6'

const StatsCounter = () => {
   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5

  })
  const stats = [
    { number: 500, label: "Projects Completed" },
    { number: 10, label: "Years Experience" },
    { number: 1000, label: "Happy Customers" },
  ];
  return (
    <div ref={ref} className='w-full bg-slate-900 py-4 flex items-center justify-center'>
      <div className='flex items-center justify-center py-5 place-items-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 text-gray-100 gap-6 p-3 md:p-6 self-center'>
          {
            stats.map((item, index) => (
              <div key={index} className=' text-center '>
                <h3 className='text-2xl font-semibold'>
                  {
                    inView &&
                      <CountUp start={1} end={item.number} duration={5}/>
                  }
                  +
                </h3>
                <p className='mt-3 '>{item.label}</p>
    

              </div>
            ))
          }
          <div className='flex flex-col items-center'>
            <FaTruck size={30} />
            <p className='mt-3 '>Nationwide Delivery</p>

          </div>

        </div>
        

      </div>

    </div>
  )
}

export default StatsCounter