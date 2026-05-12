import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Product={
  name: string,
  images: [string],
  category : string,
  createdAt: string
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

const ProductCard = ({ product }: {product: Product }) => {

  const slug = (name: string) => {
    const slugname= name.toLowerCase().replace(/\s+/g, "-")

    return slugname
  }
  return (
    
    <div  className='w-65 md:-90 h-60 shadow-md overflow-hidden group cursor-pointer flex flex-col border bg-gray-100'>
      <div className='w-full h-3/4 relative'>
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          className='object-cover group-hover:scale-110 group-active:scale-110 transition duration-500'
        />

      </div>
      <div className='flex p-3 flex-col justify-between h-1/4'>
        <div>
          <h3 className='text-md font-semibold'>
            {product.name}
          </h3>
          <p className='text-sm text-gray-600'>
            {product.spec}
          </p>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <span className='text-lg font-bold text-green-600'>
            ₦{product.price}
          </span>
        </div>
      </div>
      <Link href={`/products/${slug(product?.name)}`} className='bg-orange-500 self-end text-white px-3 py-2 w-fit text-sm'>
        View Details
      </Link>
    </div>
    
  )
}

export default ProductCard
