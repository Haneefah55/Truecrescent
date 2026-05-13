import { getProduct } from '@/actions/products.action'
import { getUser } from '@/actions/user.action'
import ProductPageContext from '@/components/products/ProductPageContext'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ 
  params }: 
  {params: Promise<{slug: string}>}): 
  Promise<Metadata> {

    const { slug } = await params
    const product = await getProduct(slug)

    if(!product) {
      return {
        title: "Product Not Found"
      }
    }

    return {
      title: product.name,
      description: product.description,

      openGraph: {
        title: product.name,
        description: product.description,
        images: [product.imageUrls[0]]
      },
      alternates: {
        canonical: `https://truecrescent.com.ng/products/${product.nameSlug}`
      }
    }


}


const Productpage = async({ params }: {params: Promise<{slug: string}>}) => {
  const { slug } = await params
  const product = await getProduct(slug)
  const session = await getUser()



  return (
    <div className='w-full bg-white '>

      <ProductPageContext product={product}  />
    </div>
  )
}

export default Productpage