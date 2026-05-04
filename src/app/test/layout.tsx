"use server"

import DisableBodyScroll from '@/components/DisableBodyScroll'
import { Sidebar } from '@/components/SideBar'
import { checkAdmin } from '@/lib/admin'
import React from 'react'

const AdLayout = ({ children }: { children: React.ReactNode }) => {
  //const admin = checkAdmin()

  

  return (
    <>
      <DisableBodyScroll />

      <div className='w-full flex h-screen overflow-hidden shadow-xl bg-gray-100 border border-slate-900 rounded-2xl '>
        <Sidebar />
        <main className='p-4 flex overflow-y-auto overflow-x-hidden '>
        
          {children}
        </main>
      </div>
    </>
    
      
  
  )
}

export default AdLayout
