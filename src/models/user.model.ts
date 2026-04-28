
import mongoose from 'mongoose'
import { models } from 'mongoose'

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  cartItems: [
    {
      quantity: {
        type: Number,
        default: 1,
      },
      
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
      
    },
  
  ],

  wishlist: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    }

  ],

  shippingAddress: [
    {
      street: { type: String },
      city:    { type: String },
      state:   { type: String },
      phoneNo: { type: Number },
      zipCode: { type: String },
    }
  ],

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  },

  review: {
    
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    
  }

}, { timestamps: true })


const User = models.User || mongoose.model("User", userSchema)

export default User
  