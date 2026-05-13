"use client"

import { createProductReview } from '@/actions/products.action'
import { auth } from '@/lib/auth'
import { useAuthStore } from '@/store/auth.store'
import { Star } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'sonner'

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

type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
  role: string;
} | null

type Props = {
  product: Product,
  onReviewCreated: (review: Review) => void
}

const ProductReviewForm = ({ product, onReviewCreated }: Props) => {
  const [ratings, setRatings] = useState(0)
  const [loading, setLoading] = useState(false)
  const { user } = useAuthStore()
  console.log(user)


  const handleRate =(i: number) => {

    if(!user){
      toast.error("Please login to rate product");
      setRatings(0)
      return
    }

    console.log("index", i)
    const value = i + 1
    setRatings(value)
    
  }

  const handleSubmitComment = async(formData: FormData) =>{
    setLoading(true)

    if(!user){
      toast.error("please login to leave a review")
      setLoading(false)
      setRatings(0)

      return
    } 

    
      const comment = formData.get("comment") as string

      if(!ratings){
        toast.error("product rating is required")
        setLoading(false)
        return
      }
      if (!comment) {
        toast.error("product review is required")
        setLoading(false)
        setRatings(0)
        return
      } 
        
    const result = await createProductReview(comment, ratings, product._id)

    if(!result.success){
      toast.error(result.message)
      setLoading(false)
      setRatings(0)

    }

    if(result?.review){
      onReviewCreated(result?.review)
      setRatings(0)
    }

    toast.success(result.message)
    setLoading(false)  
    setRatings(0)
  }


  return (
    <div className='w-70 md:w-110 flex mt-10 flex-col gap-3'>
      <h3>Please rate "{product?.name}"</h3>

      <div className='flex gap-2'>
        {[...Array(5)].map((_, index) =>{
          
          return (

            <Star

              key={index}
              className={`${ ratings >= index + 1  ? "fill-amber-500 stroke-amber-500" : "fill-none stroke-gray-400" }`}
              onClick={() => handleRate(index)}

              
            />
          )
        })}
      </div>

      <form className='w-70 md:w-110 items-center justify-center' action={handleSubmitComment}>
        <h3 className='font-bold text-xl'>Leave a review </h3>
        <textarea
          name='comment'
          required
          className="w-full py-2 px-4 bg-white/30 bg-opacity-50 rounded-md border-2 border-pink-400 outline-none focus:border-pink-800  transition duration-200 "

          rows={3}
          placeholder='What do you think?'

        />

        <div className='flex items-center justify-center gap-4 mt-3'>
          <button
            className="w-fit py-2 px-5  bg-pink-800 text-gray-100 font-semibold transform transition hover:scale-90 duration-200"
            type= "submit"
            disabled={loading}
        
          >            
            { loading ? "Submitting" : "Submit"}
                                  
          </button>
          
        </div>

      </form>




    </div>
  )
}

export default ProductReviewForm
