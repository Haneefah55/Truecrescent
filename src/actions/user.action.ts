"use server"

import User from "@/models/user.model"
import { connectDb } from "@/lib/connectDb"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"



export const signUp = async(email: string, password: string, name: string) =>{

  const result = await auth.api.signUpEmail({
    body:{
      email,
      password,
      name,
      callbackURL: '/'
    }
  })

  return result
}

export const signIn = async(email: string, password: string) =>{

  const result = await auth.api.signInEmail({
    body:{
      email,
      password,
      callbackURL: '/'
    }
  })

  return result
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

  const result = await auth.api.signOut({
    headers: await headers()
  })

  return result
}

export const getUser = async() => {
  const result = await auth.api.getSession({
    headers: await headers()
  })

  return result
}


