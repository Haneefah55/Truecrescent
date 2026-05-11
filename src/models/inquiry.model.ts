import mongoose from 'mongoose'
import { models } from 'mongoose'


const inquirySchema = new mongoose.Schema({

  userId: {
    
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }

}, { timestamps: true })

const Inquiry = models.Inquiry || mongoose.model("Inquiry", inquirySchema)

export default Inquiry