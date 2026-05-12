import Image from 'next/image'
import React from 'react'

type Product={
  name: string,
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
const ProductPageContext = ({ product }: { product: Product}) => {
  return (
    <div className='mt-30 w-full flex flex-col'>
      <div className='flex items-center justify-center border-2 border-black'>
        <div className='flex flex-col md:flex-row items-center mt-20 justify-center'>
          <div className='w-60 h-60 rounded-md px-5 relative'>
            <Image
              src={product?.imageUrls[0] || '/images/cat1.jpg'}
              alt={product.name || "product image"}
              fill

            />

          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h1 className='font-semibold text-2xl'>
              {product?.name}
            </h1>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductPageContext