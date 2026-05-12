"use server"

import { getProductByCategory } from '@/actions/products.action'
import ProductCard from '@/components/products/ProductCard'
import React from 'react'
type Product={
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

const ProductcategoryPage = async({ params }: {params: {slug: string}}) => {
  const slug = params.slug
  const result = await getProductByCategory(slug)
  

  const products = result?.products
  const category = result?.categoryName

  const cateSlug = slug.replace(/-/g, " ").replace(/&/g, "and")



  
  return (
    <div className='w-full mt-30'>
      
      <h3 className='text-2xl md:text-3xl capitalize font-semibold my-10 text-center'>{category || cateSlug } Category</h3>
      <div className='w-full max-w-5xl flex mt-5 items-center justify-center px-5'>
        {
          products.length === 0 && 

          <div className='w-full h-50 text-2xl text-center'>
            No product found in this category
          </div>
        }
        <div className='flex items-center justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            products?.map((product: Product) => (
              <ProductCard product={product} key={product.name} />

            ))
          }

        </div>

      </div>
      </div>
      

      
    </div>
  )
}

export default ProductcategoryPage
