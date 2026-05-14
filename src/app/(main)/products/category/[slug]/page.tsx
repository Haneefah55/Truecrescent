"use server"

import { getProductByCategory } from '@/actions/products.action'
import ProductCard from '@/components/products/ProductCard'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ 
  params }: 
  {params: Promise<{slug: string}>}): 
  Promise<Metadata> {

    const { slug } = await params
    const result = await getProductByCategory(slug)
    const products = result?.products
    const category = result?.categoryName

  const cateSlug = slug.replace(/-/g, " ").replace(/&/g, "and")

    if(!category) {
      return {
        title: "Category Not Found"
      }
    }

    return {
      title: category,
      description: `Explore high-quality ${category} products for construction and industrial use`,

      openGraph: {
        title: category,
        description:  `Explore high-quality ${category} products for construction and industrial use`,
        images: products[0].imageUrls[0] ? [products[0].imageUrls[0]] : []
      },
      alternates: {
        canonical: `https://truecrescent.com.ng/products/category/${cateSlug}`
      }
    }


}


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

const ProductcategoryPage = async({ params }: {params: Promise<{slug: string}>}) => {
  const { slug } = await params
  const result = await getProductByCategory(slug)
  

  const products = result?.products
  const category = result?.categoryName

  const cateSlug = slug.replace(/-/g, " ").replace(/&/g, "and")



  
  return (
    <div className='w-full mt-30 flex flex-col items-center justify-center'>
      
      <h3 className='text-2xl md:text-3xl capitalize font-semibold my-10 text-center'>{category || cateSlug } Category</h3>
      <div className='w-full max-w-5xl flex mt-5 items-center justify-center px-5'>
        {
          products.length === 0 && 

          <div className='w-full h-50 text-2xl text-center'>
            No product found in this category
          </div>
        }
        <div className='flex items-center justify-center self-center'>
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
