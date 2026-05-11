"use server"

import User from "@/models/user.model"
import { connectDb } from "@/lib/connectDb"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"



export const signUp = async(email: string, password: string, name: string) =>{

  try {
    const result = await auth.api.signUpEmail({
      body:{
        email,
        password,
        name,
        callbackURL: '/login'
      }
    })
    //console.log(result)

  return { success: true, data: result }
  } catch (error: any) {
    const response = error?.message
    console.log("response", response)
    return { success: false, error: response }
    
  }

  
}

export const signIn = async(email: string, password: string) =>{

  try {
    const result = await auth.api.signInEmail({
      body:{
        email,
        password,
        callbackURL: '/'
      }
    })

    return { success: true, data: result }
  } catch (error: any) {
    const response = error?.message
    console.log("response", response)
    return { success: false, error: response }
  }
}

export const signInGoogle = async(provider: "google") =>{

  const { url } = await auth.api.signInSocial({
    body:{
      provider,
      callbackURL: '/'
    }
  })

  if(url) {
    redirect(url)
  }

}


export const signOut = async() =>{
  try {
    const result = await auth.api.signOut({
      headers: await headers()
    })

    return result
  } catch (error) {
    console.log(error)
  }

  
}

export const getUser = async() => {
  const result = await auth.api.getSession({
    headers: await headers()
  })

  return result
}

export const checkAdmin = async() => {
  const result = await auth.api.getSession({
    headers: await headers()
  })

  const user = result?.user
  const isAdmin = user?.role === "admin"
  
  return {user, isAdmin}
}


