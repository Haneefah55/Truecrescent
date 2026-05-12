import { getProduct } from '@/actions/products.action'
import ProductPageContext from '@/components/products/ProductPageContext'
import React from 'react'

const Productpage = async({ params }: {params: {slug: string}}) => {
  const product = await getProduct(params.slug)
  console.log(product)

  return (
    <div className='w-full bg-white '>
      <ProductPageContext product={product} />
    </div>
  )
}

export default Productpage