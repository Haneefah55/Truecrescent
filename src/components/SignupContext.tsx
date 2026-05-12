"use client"


import {signInGoogle, signUp } from '@/actions/user.action'
import { useAuthStore } from '@/store/auth.store'
import { Eye, EyeOffIcon, Loader } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const SignupContext = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  

  const handleSignup = async(formData: FormData) =>{

    setLoading(true)
    setError("")
    const name= formData.get("name") as string
    const email= formData.get("email") as string
    const password= formData.get("password") as string

    if(!email || !password || !name){
      setError("All fields are required")
      setLoading(false)
      return
    }

    
    const result = await signUp(email, password, name)
    console.log("signup res", result)
    if(!result.success){
      setError(result.error)
      setLoading(false)
      return
    }
    toast.success('Accout Created Successfully; please login to continue')
    setTimeout(() => {
      router.push('/login')
    }, 3500)

    setLoading(false)
    setError("")
    
  }

  const handleGoogleLogin = async() => {
    try {
      await signInGoogle("google")
    } catch (error) {
      
    }
  }
  const { user, checkAuth } = useAuthStore()
  
  

  return (
    <div className='w-full mx-3 max-w-md bg-gray-100 h-auto rounded-xl my-10 shadow-md p-4 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-4 w-full'>
        <h3 className='font-semibold text-2xl'>Create Account</h3>
        <p>Create and account with us to continue</p>

        <button onClick={handleGoogleLogin} className='flex items-center justify-center w-full px-3 bg-white rounded-2xl shadow-md py-2 gap-2'>
          <img src={'/images/google.png'} className='w-5 h-5' />
          Continue with Google

        </button>
        <div className='flex items-center justify-center gap-2'>
          <div className='bg-gray-500 h-0.5 w-30' />
          <p className='text-lg text-gray-500'>Or</p>
          <div className='bg-gray-500 h-0.5 w-30' />
        </div>
        <form action={handleSignup}  className='w-full flex gap-3 mt-3 p-2 flex-col '>
          <div className='flex flex-col gap-2 w-full'>
            <label >
            Name
          </label>
          <input name='name' type='text' required className='w-full p-2 bg-gray-200 focus:border-2 border-slate-900 placeholder:text-gray-900 rounded-lg ' placeholder='Enter your name'/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label >
            Email Address
          </label>
          <input name='email' required type='email' className='w-full p-2 bg-gray-200 focus:border-2 border-slate-900 placeholder:text-gray-900 rounded-lg ' placeholder='Enter your mail'/>
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <label >
            Password
          </label>
          <div className='w-full flex relative '>
            <input name='password' required type={`${showPassword ? "text" : "password"}`} className='w-full p-2 bg-gray-200 focus:border-2 border-slate-900 placeholder:text-gray-900 rounded-lg ' placeholder='Enter password'/>
             
              {
                showPassword ? (<Eye size={20}  className='absolute top-2 right-2' onClick={() => setShowPassword(false)}/>) :
                 (<EyeOffIcon size={20} className='absolute top-2 right-2' onClick={() => setShowPassword(true)} />)
              }

            

          </div>
          {
            error &&
            <p className='my-3 text-red-600 text-xs text-center font-medium'>{error}</p>
          }
          <button disabled={loading} type='submit'  className='w-full p-2 mt-4 hover:bg-slate-800 active:bg-slate-800  text-gray-100 bg-slate-900 rounded-lg '>
            {
              loading ? <Loader size={25} className='animate-spin mx-auto' /> : "Sign Up"
            }
          </button>
          <div className='my-5  flex items-center justify-center text-blue-700 gap-2'>
            <p>Already have an account?</p>
            <Link href={'/login'} className='font-semibold'>
            Login
            </Link>


          </div>
          
         
          </div>


        </form>
        

      </div>

    </div>
  )
}

export default SignupContext