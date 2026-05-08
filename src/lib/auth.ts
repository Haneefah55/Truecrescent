import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { connectDb } from './connectDb'
import mongoose from 'mongoose'
import { nextCookies } from 'better-auth/next-js'

await connectDb()
if(!mongoose.connection.db){
  throw new Error ("database not connected")
}
export const auth = betterAuth({
  database: mongodbAdapter(mongoose.connection.db),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "customer",
      }
    }
  },
  plugins: [nextCookies()]

})