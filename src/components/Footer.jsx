import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaQuestion, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: '/'},
    {name: "About Us", href: '/about'},
    {name: "Services", href: '/services'},
    {name: "Products", href: '/products'},
    {name: "Projects", href: '/projects'},
    {name: "Contact Us", href: '/contact'},
    
  ]

  const servicesLinks = [
    { name: "Steel Building Solutions", href: '/services'},
    {name: "Construction Materials Supply", href: '/services'},
    {name: "Roofing Solutions", href: '/services'},
    {name: "Structural Steel", href: '/services'},
    {name: "Project Consultation", href: '/services'},
    {name: "Delivery Services", href: '/services'},
    
  ]
  return (
    <div className='w-full bottom-0  flex relative bg-no-repeat bg-cover items-center justify-center' style={{ backgroundImage: `url(${'/images/herobg.jpg'})` }}>
      <div className='py-8 px-7 bg-slate-800/90 text-gray-100 flex flex-col items-center justify-between'>
        <div className='w-full relative flex items-center justify-center mb-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              <div className='flex flex-col items-center justify-center'>
                
                <h3 className='font-medium'>True Crescent Enterprises Limited</h3>
                <p className='text-sm text-center max-w-75 mt-3'>A trusted supplier of quality steel building solutions and construction materials, serving residential, commercial, and industrial projects with reliability, durability, and excellent customer service.</p>

                

              </div>
              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold text-slate-300'>Quick Links</h3>
                {
                  quickLinks.map((link, index) => (
                    <Link href={link.href} key={index} className='hover:text-orange-400 active:text-orange-400'>
                      {link.name}
                    </Link>
                  ))
                }

              </div>

              <div className='flex flex-col gap-1'>
                <h3 className='text-xl font-semibold text-slate-300'>Services Links</h3>
                {
                  servicesLinks.map((link, index) => (
                    <Link href={link.href} key={index} className='hover:text-orange-400 active:text-orange-400'>
                      {link.name}
                    </Link>
                  ))
                }

              </div>
              <div className='flex flex-col gap-1 items-start'>
                <h3 className='text-2xl font-bold text-slate-300 '>Get in Touch</h3>
                <p className='flex items-center justify-center gap-2'>
                  <Mail size={15} />
                  <span>Go4elitesteel@mail.com</span>
                </p>
                <p className='flex items-center justify-center gap-2'>
                  <FaWhatsapp size={15} />
                  <span>+2348160804480</span>
                </p>
                <p className='flex items-center justify-center gap-2'>
                  <FaLocationDot size={15} />
                  <span>+2348160804480</span>
                </p>
                <p className='flex flex-col items-center mt-3 md:mt-0 justify-center gap-2'>
                  <FaQuestion size={15} className=''/>
                  <span className='text-xs max-w-60'>Have questions about your project or materials? Our team is ready to help you with reliable solutions and professional support.</span>
                </p>

              </div>

            </div>

        </div> 
        <div className='w-full items-center py-2 justify-center border-gray-600 border-t-2 self-baseline text-sm'>
            <p className='text-center text-sm'>Copyright© 2026 <strong>True Crescent Enterprises Limited</strong>. All rights reserved.</p>

        </div> 
 
      </div>  
      
    </div>
  )
}

export default Footer
