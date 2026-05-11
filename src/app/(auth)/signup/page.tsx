import { getUser } from '@/actions/user.action'
import SignupContext from '@/components/SignupContext'
import { redirect } from 'next/navigation'
import React from 'react'


const SignupPage = async() => {
  const session = await getUser()
    if(session) {
      redirect('/')
    }
  
  
  return (
    <div className='bg-slate-200 flex items-center justify-center w-full min-h-screen'>
      <SignupContext />
    </div>
  )
}

export default SignupPage
