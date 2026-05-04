import mongoose from 'mongoose'
import { models } from 'mongoose'


const reviewSchema = new mongoose.Schema({

  name: String,

  comment: {
    type: String,
    required: true,
  },

  ratings: Number,
  location: String,

}, { timestamps: true })

const Review = models.Review || mongoose.model("Review", reviewSchema)

export default Review