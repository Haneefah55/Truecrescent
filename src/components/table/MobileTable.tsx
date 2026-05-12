"use client"

import { deleteProduct, getAllProduct } from '@/actions/products.action'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPen, FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { toast } from 'sonner'
import StockToggle from './StockToggle'

type Products={
  name: string,
  images: [string],
  category : string,
  createdAt: string
  nameSlug: string,
  categorySlug: string,
  description: string,
  _id: string,
  price: number,
  imagePublicIds: [string], 
  imageUrls: [string],
  review: []
  spec: string,
  stock: boolean,
  updatedAt: string

}


const MobileTable = () => {
  const [products, setProducts] = useState<Products[]>([])

  const slug = (name: string) => {
    const slugname= name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")

    return slugname
  }

  const handleDelete= async(id: string) => {
    try {
      const res =await deleteProduct(id)

      if(!res.success){
        toast.error(res.error)
      }
      
      if(res.success) {
        setProducts((prev) => 
          prev.filter((product) => product?._id !== id))
        toast.success(res?.message)
      }
      
    } catch (error) {
      
    }
    
  }

  useEffect(() => {

    const fetchproducts = async() => {
      const result = await getAllProduct()
      setProducts(result)

      console.log("result", result)
    }

    fetchproducts()
  }, [])
  return (

    <>{
      products.length === 0 ? 
      (
        <p className='text-center flex items-center justify-center font-semibold text-xl'>No product found</p>
      ) : (
        <div className='w-full flex items-center max-[400]:p-2 p-5 justify-center'>
          <div className='flex w-full max-w-2xl flex-col items-center justify-center bg-gray-50'>
          {
            products?.map((product: Products) => (
              <div key={product._id} className='border-b-2 p-2 border-gray-300 flex gap-2 min-[500px]:gap-5 relative items-center '>
                <img src={product?.imageUrls[0]} alt={product.name} className='w-20 h-20 rounded-md object-cover' />
                <div className='flex flex-col w-full gap-3'>
                
                  <div className=' flex flex-col'>
                    <Link href={`/products/${slug(product?.name)}`} className='font-semibold text-sm'>{product?.name}</Link>
                    <Link href={`/products/category/${slug(product?.category)}`} className='text-xs text-gray-500'>
                      {product?.category}
                    </Link>
                    

                  </div>

                  <div className='flex gap-2 '>
                    <Link href={`/products/edit-product/${product._id}`} className='border border-blue-600 text-blue-600 px-2 py-1 rounded-md flex items-center justify-center text-sm h-fit gap-1'>
                      <FaPen size={10} />
                      <span className='text-xs'>Edit</span>

                    </Link>
                    <button onClick={() => handleDelete(product._id)} className='border border-red-600 text-red-600 px-2 py-1 rounded-md flex items-center justify-center text-sm gap-1 h-fit'>
                      <FaTrashAlt size={10} />
                      <span className='text-xs'>Delete</span>

                    </button>
                    <div className=' self-end'>
                      <StockToggle product={product} />
                    </div>
                  </div>

                </div>
                


              </div>

            ))
          }
          </div>
         
          
        </div>
      )
    }
    </>
  )
}

export default MobileTable