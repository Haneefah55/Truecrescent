import React from 'react'
import Navbar from '../component/Navbar'

export default function MainLayout ({ children }: { children: React.ReactNode })  {
  return (
    <div>
      <Navbar />
      { children }
    </div>
  )
}



