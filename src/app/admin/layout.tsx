"use server"

import AdminButton from '@/components/AdminButton'
import DisableBodyScroll from '@/components/DisableBodyScroll'
import { Sidebar } from '@/components/SideBar'
import SideBarTriger from '@/components/SideBarTriger'

//import { checkAdmin } from '@/lib/admin'
import { currentUser } from '@clerk/nextjs/server'
import { MdSpaceDashboard } from 'react-icons/md'

const AdLayout = async ({ children }: { children: React.ReactNode }) => {


  //const admin = checkAdmin()
  const user = await currentUser()
  

  

  return (
    <>
      <DisableBodyScroll />

      <div className='mt-5 flex md:mt-2 h-screen overflow-hidden  bg-gray-50 border-2 border-slate-400 rounded-2xl '>
        
        <Sidebar />
        <main className='p-4 flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <div className='bg-gray-100 shadow-md mb-4 flex items-center justify-between gap-2 p-2'>
            <div className='flex gap-2'>
              <SideBarTriger Icon= {<MdSpaceDashboard size={24} />} />
              <div>
                <span className='font-medium'>Admin Dashboard</span>
                <p className='text-sm'>Welcome back <strong className='ml-2 capitalize text-[16px]'>{user?.username}</strong></p>
              </div>
             

            
              

            </div>
              <div className='mr-5'>
                <AdminButton />
              </div>
            

          </div>
        
          {children}
        </main>
      </div>
    </>
    
      
  
  )
}

export default AdLayout
