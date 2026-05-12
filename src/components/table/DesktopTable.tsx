"use client"
import { deleteProduct, getAllProduct } from '@/actions/products.action'
import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from 'react-icons/fa'
import StockToggle from './StockToggle'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

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

const DesktopTable = () => {
  const router = useRouter()
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
    <>
    {
      products.length === 0 ? 
      (
        <p className='text-center flex items-center justify-center font-semibold text-xl'>No products found</p>
      ) : (

      <table className='min-w-full border-collapse'>
          <thead>
            <tr>
              <th className='border p-2 text-left text-xs md:text-sm'>Image</th>  
            <th className='border p-2 text-left text-xs md:text-sm'>Name</th>
            <th className='border p-2 text-left text-xs md:text-sm'>Category</th>
            <th className='border p-2 text-left text-xs md:text-sm'>Status</th>
            <th className='border p-2 text-left text-xs md:text-sm'>Action</th>
          </tr>
        </thead>
        <tbody>

          {products?.map((product: Products) => (
            <tr key={product._id} className='border-b-2 border-gray-400' >
              <td className=' p-2'>
                <img src={product?.imageUrls[0]} className='w-20 h-20 object-left' />

              </td>
              
              <td className=' p-2 '>
                <Link href={`/products/${slug(product?.name)}`} className='font-semibold text-sm'>{product?.name}</Link>
              </td>
              <td className=' p-2'>
                <Link href={`/products/category/${slug(product?.category)}`} className='text-xs text-gray-500'>
                  {product?.category}
                </Link>

              </td>
              <td className='p-2 text-center'>
                <StockToggle product={product} />
              </td>
      
              <td className='p-2 text-center cursor-pointer'>
                <div className='flex items-center justify-center gap-3'>
                  <Link href={`/products/edit-product/${product._id}`} className='text-blue-500 hover:text-blue-300 '>
                  <FaPen size={15} />
                  </Link>
                  <button onClick={() => handleDelete(product._id)} className='text-red-500  hover:text-red-700'>
                    <FaTrashAlt size={15} />
                  </button>

                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )
    }
    </>
    
  )
}

export default DesktopTable