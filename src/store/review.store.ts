
import { getReviews } from "@/actions/review.action";
import { create } from "zustand";

type Review ={
  _id: string,
  name: string,
  comment: string,
  ratings: number,
  location: string,
}

type ReviewState = {
  reviews: Review[],
  getReviews: () => Promise<void>,
}

export const useReviewStore = create<ReviewState>((set) =>({
  reviews: [],
  getReviews: async () => {
    const response = await getReviews()
    console.log(response)
    set({ reviews: response })
  }
  
}))