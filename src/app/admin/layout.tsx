"use server"

import { AppSidebar } from '@/components/SideBar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { checkAdmin } from '@/lib/admin'
import React from 'react'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const admin = checkAdmin()

  return (
    <SidebarProvider>
      <div className='w-full flex min-h-screen'>
        <AppSidebar />
        <main className='p-4'>
          <SidebarTrigger />
          {children}
        </main>
      </div>
      
    </SidebarProvider>
  )
}

export default AdminLayout
