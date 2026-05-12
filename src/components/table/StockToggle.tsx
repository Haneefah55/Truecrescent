import { toggleInStock } from '@/actions/products.action'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

type Product={
  name: string,
  images: [string],
  category : string,
  createdAt: string
  description: string,
  _id: string,
  imagePublicIds: [string], 
  imageUrls: [string],
  review: []
  spec: string,
  stock: boolean,
  updatedAt: string

}
const StockToggle = ({ product }: {product: Product}) => {
  const [instock, setInstock] = useState(product.stock)
  const [loading, setLoading] = useState(false)

  const handleToggle = async() => {
    setLoading(true)

    const result = await toggleInStock(product._id)
    console.log(result)

    if(result.error){
      setLoading(false)
      toast.error("Something went wrong")
      return
    }

    if(result?.product) {
      setInstock(result.product.stock)
      setLoading(false)
    }

    setLoading(false)

    
    


  
  }


  if(loading){
   return <Loader size={25} className='animate-spin'/>
  }
  

  return (
    <div className='flex items-center max-[400]:flex-col sm:flex-row   md:flex-col justify-center gap-1 sm:gap-2 '>
      
      <button onClick={handleToggle}  className={`relative w-8 h-5 sm:h-6 sm:w-12 cursor-pointer rounded-full transition-colors duration-300 ${instock ? "bg-green-500" : "bg-gray-500"}`}>
        <span className={`bg-gray-100 rounded-full absolute right-2 top-1 sm:top-0.5 h-3 w-3 sm:h-5 sm:w-5 shadow-md transition-transform duration-300 ${instock ? "translate-x-1" : "-translate-x-4"} `}>

        </span>

      </button>
      <span className={` font-medium text-xs sm:text-sm ${instock ? " text-green-600" : "text-red-600"}`}>
        {instock ? "In Stock" : "Out of Stock"}
      </span>
      
    </div>
  )
}

export default StockToggle
