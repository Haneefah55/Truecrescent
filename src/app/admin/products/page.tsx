import ProductTable from '@/components/ProductTable'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'
import React from 'react'

const AdminProductsPage = () => {
  
  return (
    <div className='w-full  '>
      <div className='w-full bg-gray-100 shadow-md mb-3 flex flex-col sm:flex-row p-3 gap-5 justify-between'>
        <div className=''>
          <h3 className='font-semibold text-lg md:text-xl'>Products</h3>
          <p className='text-[14px]'>
            Manage and organize all your products
          </p>

        </div>

        <Link href={'/admin/products/add-product'} className='bg-slate-900 text-gray-100 w-fit h-fit px-3 py-2'>
          Add Product
        </Link>



      </div>

      <ProductTable />



    </div>
  )
}

export default AdminProductsPage