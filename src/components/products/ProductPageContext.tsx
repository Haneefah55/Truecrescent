"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import StarRatings from '../StarRatings'
import { getUser } from '@/actions/user.action'
import { getProductReview } from '@/actions/products.action'
import Link from 'next/link'
import { toast } from 'sonner'
import { SendIcon } from 'lucide-react'
import { notFound } from 'next/navigation'
import ProductReviewForm from './ProductReviewForm'
import { auth } from '@/lib/auth'
import { useAuthStore } from '@/store/auth.store'

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
  review: [{name: string, comment: string, _id: string, ratings: number, createdAt: string}],
  spec: string,
  stock: boolean,
  updatedAt: string

}

type Review= {
  name: string, 
  comment: string, 
  _id: string, 
  ratings: number, 
  createdAt: string
}

type User= {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role: string;
} 


const ProductPageContext = ({ product }: { product: Product }) => {
  const [avrRatings, setAvrRatings] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [prodReviews, setProdReviews] = useState([])
  const [reviews, setReviews] = useState<Review[]>([])
  //const [user, setUser] = useState<User | null>(null)
  //console.log("user from product", user)
  const { user } = useAuthStore()
  
  const tabs = [
    {
      id: "description",
      label: "Description",

    },
    {
      id: "review",
      label: "Reviews",
   
    },
    
  ]
  const [activeTab, setActiveTab ] = useState("description")
  const subject=encodeURIComponent(`Request Quote for ${product?.name}
  `)

  const handleEmailQuote = () => {
    if(!user) {
      toast.error("Please, login before requesting a quote with email")

      return
    }

    const productUrl = window.location.href

    const body = encodeURIComponent(`

    Hello, 
    I want to request a quote for this product.

    name: ${user?.name},
    email: ${user?.email},

    product: ${product?.name},
    specification: ${product?.spec}

    Product link: ${productUrl}
    
    
    `)


    window.location.href = `mailto:Go4elitesteel@gmail.com?subject=${subject}&body=${body}`
  }
  const handleWhatsappQuote = () => {
   

    const productUrl = window.location.href

    const body = encodeURIComponent(`

    Hello, 
    I want to request a quote for this product.

    name: ${user?.name},
    email: ${user?.email},

    product: ${product?.name},
    specification: ${product?.spec}

    Product link: ${productUrl}
    
    
    `)
    const whatsappUrl = `https://wa.me/2348160804480?=${body}`

    window.open(whatsappUrl, "_blank")
  }
  

  useEffect(() => {

    const fetchReview = async() =>{
      const result = await getProductReview(product?._id)
     console.log(result)
      setAvrRatings(result?.averageRating)
      setTotalReviews(result?.review)
      setProdReviews(result?.productReviews?.review)

    }

    fetchReview()
    

  }, [product?._id])



  if(!product){
    notFound()
  }

  useEffect(() => {
    if(prodReviews) {
      setReviews(prodReviews)
    }

  }, [prodReviews])

  return (
    <div className='mt-30 w-full flex flex-col px-6'>
      <div className='flex items-center justify-center flex-col '>
        <div className='flex flex-col gap-5 md:flex-row items-center justify-center'>
          <div className='w-60 h-60 md:w-70 md:h-70  rounded-lg px-5 relative '>
            <Image
              src={product?.imageUrls[0] || '/images/cat1.jpg'}
              alt={product.name || "product image"}
              fill
              className='rounded-lg'

            />
            <div className='absolute -z-20 inset-0 bg-black/30' />

          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h1 className='font-semibold text-2xl'>
              {product?.name}
            </h1>
            <div className='my-1'>
              <StarRatings rating={avrRatings} />
            </div>
            <p className='text-gray-600 mt-1 text-sm'>({totalReviews} Customer Reviews)</p>
            <p className='text-orange-500 font-medium'>₦ {product.price.toLocaleString()}</p>
            <p className=' my-1 font-medium'>Request Quote</p>

            <button onClick={handleEmailQuote} className='w-fit flex px-3 py-2 bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-600 items-center justify-center '>
              <SendIcon />
              <p>Send Email</p>
          
            </button>
            
            
            <button onClick={handleWhatsappQuote}  className='w-fit flex px-3 py-2 border-2 border-orange-500 text-orange-500 hover:bg-transparent active:bg-transparent items-center justify-center '>Chat on Whatsapp</button>

            

          </div>

        </div>
        <div className='text-gray-600 my-4 w-full max-w-md flex items-start border-t-2 border-gray-800 pt-5 '>
          <i >Category: <span className=' text-orange-500'>{product?.category}</span></i>
        </div>
        {/* product images array */}
        <div className='flex gap-4 flex-wrap my-5  items-center justify-center' >
          {
            product?.imageUrls.map((img, index) => (
              <div key={index} className='w-30 h-30 relative rounded-lg'>
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  className=' rounded-lg'

                />

              </div>
            ))
          }

        </div>
        {/* description and reviews */}

        <div className=' flex items-center justify-center flex-col w-full max-w-md'>
          <div className=' w-full flex px-4 mt-5'>
            
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={` px-4 transition-colors font-semibold text-xl duration-200 ${activeTab === tab.id ? "border-b-2 border-b-orange-500 " : "border-b-2 border-b-gray-500"}`} >
            
                
                {tab.label}
              </button>
            ))}
            <div className='w-full flex border-b-2 border-b-gray-500' />
      
            
          </div>

          {/*** decriptions */}

          <div className={`w-full  p-4 ${activeTab === "description" ? "flex" : "hidden" }`}>

            {product.description}

          </div>

          {/*** reviews */}
          <div className={`w-full  flex-col p-4 ${activeTab === "review" ? "flex" : "hidden" }`}>

            {totalReviews === 0 &&
            
            <div className='flex flex-col gap-3 w-73 md:w-120'>
              <p>There are no reviews yet</p>
              <p>Be the first to review "{product?.name}"</p>

            </div>

            }

            <div className='flex flex-col gap-3 w-73 md:w-120'>

              {prodReviews && prodReviews.map((item: Review, index) =>(
                <div  key={index} className='flex w-70 md:w-110 flex-col bg-gray-100 shadow-lg mb-4 p-2 rounded-md'>
                  <div className='flex items-start gap-5'>
                    <p className='capitalize font-semibold text-pink-600'>{item.name}</p>
                      <div className='my-1'>
                        <StarRatings rating={item.ratings} />
                      </div>
                   

                  </div>

                  <div className='py-2 text-sm'>
                    {item?.comment}
                  </div>

                </div>
              ))

              }

            </div>
            <ProductReviewForm product={product} 
              onReviewCreated={(review: Review) => setReviews((prev) => [
                review,
                ...prev,
              ])}
             />

             
            
            
            

            

          </div>

        </div>


      </div>

    </div>
  )
}

export default ProductPageContext