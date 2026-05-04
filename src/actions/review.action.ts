"use server"


import { connectDb } from "@/lib/connectDb"
import Review from "@/models/review.model"

export const getReviews = async () => {
  try {
    await connectDb()

    const reviews = await Review.find().sort({ createdAt: -1 }).lean()
    const result = JSON.parse(JSON.stringify(reviews))
    //console.log("reviews", result)

    return result
  } catch (error: any) {
    console.log(error)
    console.log("error in getReviews action", error)
  }
}