"use client"


import { signOut } from '@/actions/user.action'
import { useAuthStore } from '@/store/auth.store'
//import { useAuthStore } from '@/store/auth.store'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'



const Navbar = () => {
  const path = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const { user } = useAuthStore()
  //console.log("user", user)
  const admin = user?.role === "admin"
  const router = useRouter()

  const linkRef = useRef(null)
  const navLinks = [
    { name: "Home", href: '/'},
    { name: "About", href: '/about'},
    { name: "Services", href: '/services'},
    { name: "Products", href: '/products'},
    { name: "Contact", href: '/contact'},
  ]

  const userNavLinks = [
    { name: "Quotes", href: '/user/quotes'},
    { name: "Settings", href: '/user/settings'},
    { name: "Wishlist", href: '/user/wishlist'},
 
  ]

  const handleLogout = async()=>{
    const success = await signOut()
    if(success){
    router.push('/login')
    }
  }

  return (
    <div className='fixed  top-0 left-0 z-50 bg-gray-50 shadow-gray-600 shadow-md flex w-full items-center py-4 px-5 md:px-12 lg:px-20 items- justify-between '>

      <Link href={'/'} className='flex items-center justify-center gap-1.5'>
        <Image src={`/images/logo.png`} className='object-contain' priority 
        width={50} height={50} alt='true crescent logo'/>
        <span className='font-semibold text-md md:text-lg'>True Crescent</span>

      </Link>
      {/* desktop nav */}

      <div className='hidden md:flex items-center justify-center gap-3'>
        {
          navLinks.map((link) => (
            <Link key={link.name} href={`${link.href}`} className={` font-semibold group ${path === link.href ? "text-orange-500": "text-slate-950"}`}>
              {link.name}
              <div className='h-1 w-0 group-hover:w-12.5 block bg-orange-500 transition-all duration-300'/>
            </Link>
          ))
        }
      </div>

      {/* nav menu button */}
      <button onClick={() => setIsMenuOpen(true)} className='md:hidden flex'>
        <FaBars size={25} color='#020618' /> 
      </button>

      <div>
      {!user ? ( 
        <div className='flex items-center gap-2 justify-center'>
       
          <Link href='/login' className='font-semibold text-sm hover:text-orange-500 transition duration-300 active:text-orange-500'>
            Login
          </Link>
           
          <div className='w-0.5 h-4 bg-slate-950'/>
         
          <Link href='/signup' className='font-semibold text-sm hover:text-orange-500 transition duration-300 active:text-orange-500'>
            Sign Up
          </Link>
        
        </div> ) : user.role === "admin" ? (
          <Link href={'/admin'} className='font-semibold text-shadow-slate-950 flex items-center justify-center gap-2 mr-3  hover:text-orange-500 transition duration-300 active:text-orange-500'>
            <MdDashboard size={20}/> 
            <span className='md:block hidden'>Dashboard</span>
          </Link>

        ) : (
          
            <button onClick={() => setIsUserMenuOpen(true)} className='bg-orange-500 w-8 h-8 text-xl font-semibold transition duration-300 hover:bg-orange-300 active:bg-orange-300 text-white flex items-center justify-center p-2 rounded-full'>
              {user?.name.charAt(0).toLocaleUpperCase()}
            </button>
        
          

        )
      }
 
      </div>

      {/* mobile nav */}
      <div ref={linkRef} className={`absolute flex md:hidden top-20 right-0 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-orange-400/70 transition-all duration-500 backdrop-blur-lg w-62.5 h-screen p-5 flex-col gap-5 `}>
       <button onClick={() => setIsMenuOpen(false)} className='md:hidden flex self-end'>
          <FaTimes size={25} color='#020618' /> 
        </button>

        {navLinks.map((link) => (
          <Link  key={link.name} href={link.href} className={`font-semibold focus:text-orange-500 ${path === link.href ? "text-orange-900": "text-slate-950"}`}>
            {link.name}
          </Link>
        ))
        }

      </div>

      {/* user button drop down */}

      <div className={`absolute flex items-center top-18 shadow-md right-0 ${isUserMenuOpen ? "translate-x-0" : "translate-x-full"} bg-white transition-all duration-500 backdrop-blur-lg w-62.5 h-80 rounded-md  flex-col gap-5 `}>
        <button onClick={() => setIsUserMenuOpen(false)} className='flex self-end'>
          <FaTimes size={25} color='#020618' /> 
        </button>

        {userNavLinks.map((link) => (
          <Link  key={link.name} href={link.href} className={`font-semibold focus:text-orange-500 p-3 ${path === link.href ? "text-orange-900": "text-slate-950"}`}>
            {link.name}
          </Link>
        ))
        }

        <div className='border-t-2 border-gray-300 pt-5 flex w-full items-center justify-center'>
          <button onClick={handleLogout} className=' flex font-semibold hover:text-orange-500 active:text-orange-500 cursor-pointer'>
            Logout
          </button>
          
        </div>


      </div>


      

    </div>
  )
}

export default Navbar