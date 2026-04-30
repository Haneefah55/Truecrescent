import { SignIn } from '@clerk/nextjs'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center mt-5'>
      <SignIn />
    </div>

    
  )
}

export default LoginPage
