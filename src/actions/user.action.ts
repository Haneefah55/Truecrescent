"use server"

import User from "@/models/user.model"
import { connectDb } from "@/lib/connectDb"
import { auth, currentUser } from "@clerk/nextjs/server"

export const syncUser = async () => {
  try {
    await connectDb()
    const currentuser = await currentUser()
    const { userId } = await auth()
    
    if (!currentuser || !userId) return

    const userExist = await User.findOne({ clerkId: userId }).lean()
    if (userExist) {
      
      return JSON.parse(JSON.stringify(userExist))
    }

    const user = await User.create({
        username: currentuser.username || currentuser.emailAddresses[0].emailAddress.split("@")[0],
        email: currentuser?.emailAddresses[0].emailAddress,
        clerkId: userId,
    })

    console.log("newly created user", user)

   /*  const userInfo = {
      id: user._id.toString(),
      clerkId: user.clerkId,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt.toISOString(),
      role: user.role,
      cartItems: user.cartItems,
      wishlist: user.wishlist,
      shippingAddress: user.shippingAddress,
    } */
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.log("error in syncUser action", error)
  }
}