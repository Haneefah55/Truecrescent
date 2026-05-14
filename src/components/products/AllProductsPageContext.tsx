"use client"


import { getProducts } from '@/actions/products.action'
import React, { useEffect, useState } from 'react'
import { FaBullseye } from 'react-icons/fa6'
import ProductCard from './ProductCard'
import Link from 'next/link'

type Product={
  name: string,
  images: [string],
  category : string,
  createdAt: string
  description: string,
  nameSlug: string,
  categorySlug: string,
  _id: string,
  price: number,
  imagePublicIds: [string], 
  imageUrls: [string],
  review: []
  spec: string,
  stock: boolean,
  updatedAt: string

}



const AllProductsPageContext = () => {
  const [pageNum, setPageNum] = useState(1)
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const categories = [
    "Steel & Structural Materials",
    "Scaffolding & Formwork Materials",
    "Stainless Steel Materials",
    "Pipes & Accessories",
    "Welding Consumables",
    "Paint",

  ]
  const slug = (name: string) => {
    const slugname= name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")

    return slugname
  }

  useEffect(() => {
  
    const fetchProducts = async() =>{
      setLoading(true)
      try {
        const res = await getProducts(pageNum)
        console.log("res, ", res)

        setProducts(res.product)
        setTotalPages(res.totalPage)
      } catch (error) {
        console.log(error)
      }
    }
    

    fetchProducts()
  
  }, [pageNum])

  return (
    <div className='w-full mt-10 flex flex-col'>
      
      <div className='w-full max-w-5xl flex self-center mx-auto mt-5 items-center justify-center px-5 flex-col '>
        <p className='text-lg font-semibold mb-5 text-center'>Browse by category</p>
        <div className='flex items-center justify-center gap-4 flex-wrap'>
          {
            categories.map((cat, index) => (
              <Link href={`/products/category/${slug(cat)}`} key={index} className='px-3 py-2 border-2 border-orange-500 text-sm'>
                {cat}
              </Link>
            ))
          }

        </div>



      </div>

      <h3 className='text-2xl md:text-3xl font-semibold self-center my-10 text-center'>All Products</h3>
      <div className='w-full max-w-5xl flex mt-5 self-center items-center justify-center px-5'>
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

export default AllProductsPageContext
