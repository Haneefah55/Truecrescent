
import { Package2 } from 'lucide-react'
import React from 'react'
import { FaDollarSign, FaShoppingCart } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'

const DashboardPage = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center '>
      <h3 className='font-medium self-center text-xl'>Overview</h3>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
          <div className='w-40 h-30 sm:w-50 sm:h-35 bg-gray-100 shadow-md p-3 flex items-center justify-center gap-2 sm:gap-3'>
            <div className='bg-orange-400 text-white w-8 sm:h-8 p-2 rounded-full flex items-center justify-center'>
              <FaDollarSign />
              
            </div>
            
            <div className=' flex flex-col shrink-0'>
              <h3 className='text-xs sm:text-[15px]'>Total Sales</h3>
              
              <p className='font-semibold '>&#8358; 30,000,000</p>
            </div>

          </div>
          <div className='w-40 h-30 sm:w-50 sm:h-35 bg-gray-100 shadow-md p-3 flex items-center justify-center gap-3'>
            <div className='bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center'>
              <FaShoppingCart />
            </div>
            <div>
              <h3 className='text-xs sm:text-[15px]'>Total Orders</h3>
              <p className='font-semibold text-2xl'>45</p>
            </div>

          </div>
          
          <div className='w-40 h-30 sm:w-50 sm:h-35 bg-gray-100 shadow-md p-3 flex items-center justify-center gap-3'>
            <div className='bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center'>
              <FaUsers />
            </div>
            <div>
              <h3 className='text-xs sm:text-[15px]'>Total Customers</h3>
              <p className='font-semibold text-2xl'>20</p>
            </div>

          </div>
          <div className='w-40 h-30 sm:w-50 sm:h-35 bg-gray-100 shadow-md p-3 flex items-center justify-center gap-3'>
            <div className='bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center'>
              <Package2 size={20} />
            </div>
            <div>
              <h3 className='text-xs sm:text-[15px]'>Total Products</h3>
              <p className='font-semibold text-2xl'>30</p>
            </div>

          </div>
          

        </div>


      </div>
      <div className='flex items-center justify-center'>

        <div className='columns-1 md:columns-2 gap-5 mt-3'>
          <div className='p-3 bg-gray-100 shadow-md w-74 h-55 md:w-100'>
            <div>
              <h4 className='font-medium self-start'>Sales Overview</h4>
            </div>
            <div className='mt-6 flex justify-center items-center '>
              No data found
            </div>

          </div>
            
        </div>

      </div>
      
      
    </div>
  )
}

export default DashboardPage