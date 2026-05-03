import OurServices from '@/components/OurServices'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
  // Basic metadata
  title: 'Our Services – Steel Materials,Scaffold Formwork Materials, Welding, Project Management ',

  description: ' Merchant dealer of steel, formwork, scaffolding. Plus welding, installation, erection, on-site inspection. Project management available..',

  authors: [{ name: 'True Crescent Enterprises Limited' }],
  creator: 'True Crescent',
  publisher: 'True Crescent Lagos',
  // URL metadata
  metadataBase: new URL('https://truecrescent.com.ng'),
  alternates: {
    canonical: '/',
  },
  
 
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'True Crescent - Steel & Construction Materials Supplier Nigeria',
    description: 'Quality steel building materials and construction supplies. From reinforcing bars to roofing sheets, we deliver excellence across Nigeria.',
    url: 'https://truecrescent.com.ng',
    siteName: 'True Crescent',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'True Crescent Steel Building Materials',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'True Crescent - Steel & Construction Materials Nigeria',
    description: 'Quality steel building and construction materials supplier in Nigeria.',
    images: ['/twitter-image.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Verification (Google Search Console)

  
  // Additional metadata
  category: 'Construction Materials',
  classification: 'Steel Building Materials Supplier',
  
  // Contact info for rich results
  other: {
    'contact:phone': '+2348160804480',
    'contact:email': 'Go4elitesteel@gmail.com',
    'business:hours': 'Mon-Sun 8am-6pm',
  },
}

const ServicesPage = () => {

  return (
    <div className='w-full bg-gray-50 overflow-x-hidden'>
       {/* hero */}
      <div  className="w-full h-screen relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/about.jpg'})` }}>
      <div className='absolute bg-black/40 inset-0 flex flex-col pt-24'>
        <Link href={'/'} className='text-gray-100 mt-5 ml-5 md:ml-14 font-light hover:text-orange-600 active:text-orange-600'>
        Home/Services
        </Link>
        <p className='text-center font-semibold text-gray-100 mt-20 text-3xl md:text-5xl'>Our services</p>
        <div className='flex items-center justify-center  flex-col'>
          <h1 className='text-center font-semibold text-gray-100 mt-5 text-xl md:text-2xl'>Reliable Steel Building  Construction Material Solutions</h1>
          <p className='text-center font-light text-gray-100 mt-2 min-w-60 max-w-120'>We provide quality steel building systems and construction materials tailored to meet the needs of residential, commercial, and industrial projects.</p>
        </div>

        
       

      </div>


      </div>
      <OurServices />
      

      
    </div>
  )
}

export default ServicesPage