import Image from 'next/image'
import React from 'react'
import { FaBoxes, FaShieldAlt, FaSmile, FaUserTie } from 'react-icons/fa'
import { FaDollarSign } from 'react-icons/fa6'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const WhyChooseUsPage = ({ color1, color2}: {color1: string, color2: string}) => {
  return (
    <div className='w-full h-auto flex bg-gray-100 py-10 px-6'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center flex-col w-full max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Why Choose Us?</h2>
          <h5 className='text-lg md:text-xl text-center font-medium mb-2'>Building Excellence With Quality & Trust</h5>
          <p className='text-[15px] text-center'>We are committed to delivering high-quality steel products and construction materials that meet industry standards while providing reliable service for every project.</p>
        </div>

        <div className='flex items-center justify-center mt-5 '>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {/* first col */}
            <div className='flex flex-col-reverse items-center justify-center gap-5'>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <FaUserTie color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Experienced & Professional Team</h3>
                <p className=' text-[13px] text-center'>
                  Our knowledgeable team is dedicated to helping clients find the right materials and solutions for their construction needs.
                </p>

              </div>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <TbTruckDelivery color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Reliable Delivery</h3>
                <p className=' text-[13px] text-center'>
                  We prioritize timely and efficient delivery to keep your projects running smoothly and on schedule.

                </p>

              </div>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <FaShieldAlt color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Premium Quality Materials</h3>
                <p className=' text-[13px] text-center'>
                  We supply durable and dependable steel products designed to ensure strength, safety, and long-lasting performance.
                </p>

              </div>

            </div>

            <div className='w-70 relative h-75 self-center mb-3 md:mb-0'>
              <div className={`w-70 h-75 absolute ${color2} left-5 top-5 `} />
              <Image
                src={'/images/why.jpeg'}
                alt='steel building construction materials | true crescent'
                fill
              />
              <div className='absolute z-20 bg-black/20 inset-0'/>

            </div>


            {/* sec col */}

             <div className='flex flex-col items-center justify-center gap-5'>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <FaDollarSign color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Competitive Pricing</h3>
                <p className=' text-[13px] text-center'>
                  We provide quality construction materials at fair and affordable prices without compromising standards.
                </p>

              </div>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <FaSmile color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Customer-Focused Service</h3>
                <p className=' text-[13px] text-center'>
                  Client satisfaction is at the heart of everything we do. We work closely with customers to provide dependable support and professional guidance.

                </p>

              </div>
              <div className='flex flex-col items-center justify-center w-60 h-auto'>
                <FaBoxes color={`${color1}`} size={25} />
                <h3 className='font-medium my-1 text-[15px]'>Wide Range of Products</h3>
                <p className=' text-[13px] text-center'>
                  From structural steel to essential building materials, we offer a broad selection of products for residential, commercial, and industrial projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default WhyChooseUsPage
