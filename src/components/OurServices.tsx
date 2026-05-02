"use client"


import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const OurServices = () => {

  const [more1, setMore1] = useState(false)
  const [more2, setMore2] = useState(false)
  const [more3, setMore3] = useState(false)
  const [more4, setMore4] = useState(false)


  return (
  <div className='w-full my-10 px-10 flex items-center justify-center'>
    <div className='flex items-center  justify-center max-w-7xl flex-col'>
      <h3 className='font-bold self-start text-2xl'>Our Services</h3>
      <div className='flex items-center justify-center'>
        <div className='columns-1 md:columns-2 gap-5 mt-3'>
          <div className='w-75 md:w-100 h-fit break-inside-avoid mb-3 bg-gray-100 border-2 border-slate-300 flex flex-col p-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Steel Building Solutions</h3>
              <p className='text-[15px]'>We design and supply durable steel building systems suitable for warehouses, factories, workshops, commercial buildings, and other structural projects. Our steel solutions are built for strength, efficiency, and long-term performance.</p>

            </div>
            <div className={ ` flex-col ${more1 ? "flex" : "hidden"}`}>
              <h3 className=' mb-2 font-bold mt-3' >
                What We Offer:
              </h3>
              <div className='flex flex-col  '>
                <p className='flex gap-2 items-center '>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Steel structure fabrication</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Pre-engineered steel buildings</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Industrial steel frameworks</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Steel installation support</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Custom steel solutions</span>
                </p>
                

              </div>
              

            </div>
            <button onClick={() => setMore1(!more1)} className='cursor-pointer self-start mt-2 text-blue-800'>
              {more1 ? "...see less" : "...see more"}
            </button>


          </div>

          <div className='w-75 md:w-100 h-fit break-inside-avoid mb-3  bg-gray-100 border-2 border-slate-300 flex flex-col p-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Construction Materials Supply</h3>
              <p className='text-[15px]'>We supply high-quality construction materials sourced from trusted manufacturers to ensure reliability and durability on every project.</p>

            </div>
            <div className={ ` flex-col ${more2 ? "flex" : "hidden"}`}>
              <h3 className=' mb-2 font-bold mt-3' >
                Available Materials:
              </h3>
              <div className='flex flex-col  '>
                <p className='flex gap-2 items-center '>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Steel rods and reinforcement bars</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Scaffolding & formwork materials</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Roofing sheets</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Cement and concrete products</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Pipes and fittings</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Building accessories and hardware</span>
                </p>
                

              </div>
              

            </div>
            <button onClick={() => setMore2(!more2)} className='cursor-pointer self-start mt-2 text-blue-800'>
              {more2 ? "...see less" : "...see more"}
            </button>


          </div>

          <div className='w-75 md:w-100 h-fit break-inside-avoid mb-3 bg-gray-100 border-2 border-slate-300 flex flex-col p-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Roofing Solutions</h3>
              <p className='text-[15px]'>Our roofing products combine durability, weather resistance, and modern design to provide lasting protection for residential and commercial buildings.</p>

            </div>
            <div className={ ` flex-col ${more3 ? "flex" : "hidden"}`}>
              <h3 className=' mb-2 font-bold mt-3' >
                Roofing Products:
              </h3>
              <div className='flex flex-col  '>
                <p className='flex gap-2 items-center '>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Aluminum roofing sheets</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Stone-coated roofing</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Long-span roofing sheets</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Roofing accessories</span>
                </p>
                
                

              </div>
              

            </div>
            <button onClick={() => setMore3(!more3)} className='cursor-pointer self-start mt-2 text-blue-800'>
              {more3 ? "...see less" : "...see more"}
            </button>


          </div>

          <div className='w-75 md:w-100 h-fit break-inside-avoid mb-3 bg-gray-100 border-2 border-slate-300 flex flex-col p-4'>
            <div className='flex flex-col'>
              <h3 className='font-semibold mb-1'>Project Support & Consultation</h3>
              <p className='text-[15px]'>We provide expert guidance to help clients select the right materials and steel solutions for their projects.</p>

            </div>
            <div className={ ` flex-col ${more4 ? "flex" : "hidden"}`}>
              <h3 className=' mb-2 font-bold mt-3' >
                Our Support Includes:
              </h3>
              <div className='flex flex-col  '>
                <p className='flex gap-2 items-center '>
                  <FaCheck color='oklch(70.5% 0.213 47.604)'/>
                  <span className='text-[15px]'>Material recommendations</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Quantity estimation</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Project consultation</span>
                </p>
                <p className='flex gap-2 items-center'>
                  <FaCheck color='oklch(70.5% 0.213 47.604)' />
                  <span className='text-[15px]'>Technical assistance</span>
                </p>
                
                

              </div>
              

            </div>
            <button onClick={() => setMore4(!more4)} className='cursor-pointer self-start mt-2 text-blue-800'>
              {more4 ? "...see less" : "...see more"}
            </button>


          </div>

        </div>

      </div>

    </div>

  </div>
  )
}

export default OurServices
