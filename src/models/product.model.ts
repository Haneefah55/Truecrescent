import mongoose from 'mongoose'
import { models } from 'mongoose'
import { string } from 'zod'

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  spec: String,
  description: String,
  imageUrls: {
    type: [String],
    default: [],
  },
  imagePublicIds: {
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
  stock: {
    type: Boolean,
    default: true
  }

}, { timestamps: true })

const Product = models.Product || mongoose.model("Product", productSchema)

export default Product