
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
 

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  },



}, { timestamps: true })


const User = models.User || mongoose.model("User", userSchema)

export default User
  