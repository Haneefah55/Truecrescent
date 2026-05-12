
import AddProductForm from '@/components/AddProductForm'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AddProductPage = () => {
  return (
    <div className='w-full max-w-3xl mx-auto flex flex-col gap-5 py-5'>
      <div className='flex gap-3 p-3 bg-gray-100 shadow-md'>
        <Link href={'/admin/product'}>
          <ArrowLeft size={18} />
        </Link>

        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-lg md:text-xl'>Add Product</h3>
          <div className='flex gap-3 text-xs sm:text-sm items-center justify-center'>
            <Link href={'/admin'}>Dashboard</Link>
            <ChevronRight size={12} />
            <Link href={'/admin/products'} >Products</Link>
            <ChevronRight size={12} />
            <Link href={'/admin/products/add-product'}> Add Product
            </Link>

          </div>

        </div>

      </div>
      <div className='flex gap-3 p-3 bg-gray-100 shadow-md '>
        <AddProductForm />
        

      </div>

    </div>
  )
}

export default AddProductPage