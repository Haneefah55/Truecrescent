"use server"

import User from "@/models/user.model"
import { connectDb } from "@/lib/connectDb"
import { auth, currentUser } from "@clerk/nextjs/server"

export const syncUser = async () => {
  try {
    await connectDb()
    const user = await currentUser()
    const { userId } = await auth()
    
    if (!user || !userId) return

    const userExist = await User.findOne({ clerkId: userId })
    if (userExist) {
      
      return userExist
    }

    const newUser = await User.create({
        username: user.username || user.emailAddresses[0].emailAddress.split("@")[0],
        email: user?.emailAddresses[0].emailAddress,
        clerkId: userId,
    })
    return newUser
  } catch (error) {
    console.log("error in syncUser action", error)
  }
}