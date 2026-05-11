"use server"
import { getUser } from '@/actions/user.action'
import LoginContext from '@/components/LoginContext'
import { redirect } from 'next/navigation'
import React from 'react'

const LoginPage = async () => {
  const session = await getUser()
  if(session) {
    redirect('/')
  }

  return (
    <div className='bg-slate-200 flex items-center justify-center w-full min-h-screen'>
      <LoginContext/>
    </div>
  )
}

export default LoginPage