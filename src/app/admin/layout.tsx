"use server"

import { Sidebar } from '@/components/SideBar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { checkAdmin } from '@/lib/admin'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const admin = checkAdmin()

  return (
    <div className='w-full flex min-h-screen mx-4 overflow-x-hidden my-4 shadow-xl bg-gray-50 border border-gray-200 rounded-2xl'>
      <Sidebar />
      <main className='p-4'>
      
        {children}
      </main>
    </div>
      
  
  )
}

export default AdminLayout
