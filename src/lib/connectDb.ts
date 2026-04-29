import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI!

export const connectDb = async () =>{
  try{
    const conn = await mongoose.connect(mongoUri)
    console.log(`Mongodb connected. ${conn.connection.host}`)
  }catch(error: unknown){
    if (error instanceof Error) {
      console.log("error connecting to mongodb.",  error.message)
    } else {
      console.log("An unknown error occurred.")
    }
    process.exit(1)
  }
}