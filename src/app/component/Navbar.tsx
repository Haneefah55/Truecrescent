"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = () => {
  const path = usePathname()

  const navLinks = [
    { name: "Home", href: '/'},
    { name: "About", href: '/about'},
    { name: "Services", href: '/services'},
    { name: "Products", href: '/products'},
    { name: "Contact", href: '/contact'},
  ]

  const isActive = path.includes
  return (
    <div className='fixed  top-0 left-0 z-50 bg-gray-50 shadow-gray-800 flex w-full items-center py-3 px-8 items- justify-between '>
      <Link href={'/'} className='flex items-center justify-center gap-1.5'>
        <Image src={`/images/logo.png`} width={50} height={50} alt='true crescent logo'/>
        <span className='font-semibold text-md md:text-xl'>True Crescent</span>

      </Link>

      <div className='flex items-center justify-center gap-3'>
        {
          navLinks.map((link) => (
            <Link key={link.name} href={`${link.href}`} className=''>
              {link.name}
            </Link>
          ))
        }
      </div>


      

    </div>
  )
}

export default Navbar