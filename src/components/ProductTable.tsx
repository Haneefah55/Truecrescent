
import { getAllProduct } from '@/actions/products.action'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa6'


const ProductTable = async () => {
  const products = await getAllProduct()
  //console.log(products)

  return (
    <div className='w-full mt-3 bg-gray-100  shadow-md overflow-x-auto'>
      {products?.length === 0 ? (
        <p className='p-5 text-center'>No products found.</p>
      ) : (
        <table className='min-w-full border-collapse'>
          <thead>
            <tr>
              <th className='border p-2 text-left text-xs md:text-sm'>Product</th>  
            <th className='border p-2 text-left text-xs md:text-sm'>Category</th>
            <th className='border p-2 text-left text-xs md:text-sm'>Stock</th>
            <th className='border p-2 text-left text-xs md:text-sm'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {products?.map((product: { _id: string; name: string; category: string; stock: number }) => (
            <tr key={product._id}>
              <td className='border p-2'>{product.name}</td>
             
              <td className='border p-2 text-sm md:text-xs flex'>{product.category}</td>
              <td className='border p-2 text-sm md:text-xs flex-nowrap'>{product.stock}</td>
      
              <td className='border p-2 flex items-center flex-col flex-nowrap justify-center gap-2'>
                <button className='bg-blue-500 text-white px-2 flex-nowrap py-1 rounded hover:bg-blue-600'>
                  <FaPen size={10} />
                </button>
                <button className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'>
                  <FaTrashAlt size={10} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}

      
    </div>
  )
}

export default ProductTable
