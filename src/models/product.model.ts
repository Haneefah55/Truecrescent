import mongoose from 'mongoose'
import { models } from 'mongoose'

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  spec: String,
  description: String,
  price: Number,
  discountedPrice: Number,
  images: {
    type: [String],
    default: [],
  },
  review: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
          
      },
      comment: {
        type: String,
        required: true,
      },

      ratings: Number,
      
      createdAt: {
        type: Date,
        default: Date.now(),
      },

    },

  ],
  category: {
    type: String,
    required: true,
  },
  stock: Boolean,

}, { timestamps: true })

const Product = models.Product || mongoose.model("Product", productSchema)

export default Product