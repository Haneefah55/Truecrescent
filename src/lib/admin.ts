import User from "@/models/user.model"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"



export const checkAdmin = async() => {
  const { userId } = await auth()

  if(!userId) {
    redirect("/")
  }

  const user = await User.findOne({ clerkId: userId })

  if(user.role !== "admin") {
    redirect("/")
  }

  return JSON.parse(JSON.stringify(user))
}