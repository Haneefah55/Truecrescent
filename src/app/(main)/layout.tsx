import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        {children}
      </main>
      

    
      <Footer />
    </div>
  )
}

export default MainLayout
