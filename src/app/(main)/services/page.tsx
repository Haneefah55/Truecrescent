import CTABanner from '@/components/CTABanner'
import OurServices from '@/components/OurServices'
import { Building2, FactoryIcon, TractorIcon, WarehouseIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBuilding, FaRoute, FaTruckLoading } from 'react-icons/fa'
import { FaBridge, FaBuildingWheat, FaHouse, FaHouseChimney, FaTruckFast } from 'react-icons/fa6'


export const metadata: Metadata = {
  // Basic metadata
  title: 'Our Services | Structural Steel Construction Materials | Scaffold Formwork Materials',

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
      <div  className="w-full h-screen md:h-96 relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/reinforced-bar.jpg'})` }}>
      <div className='absolute bg-black/60 inset-0 flex flex-col pt-24 px-6'>
        <Link href={'/'} className='text-gray-100 mt-5 ml-5 md:ml-14 font-light hover:text-orange-600 active:text-orange-600'>
        Home/Services
        </Link>
        <p className='text-center font-semibold text-gray-100 mt-20 text-4xl md:text-5xl'>Our services</p>
        <div className='flex items-center justify-center  flex-col'>
          <h1 className='text-center font-semibold text-gray-100 mt-9 md:mt-5 text-xl md:text-2xl'>Reliable Steel Building  Construction Material Solutions</h1>
          <p className='text-center font-light text-gray-100 mt-2 min-w-60 max-w-120'>We provide quality steel building systems and construction materials tailored to meet the needs of residential, commercial, and industrial projects.</p>
        </div>

        
       

      </div>


      </div>

      <div className="w-full h-fit bg-gray-200 py-5 flex items-center justify-center px-6">
        <div className="mb-6 w-full flex justify-center gap-6 max-w-6xl md:gap-4 lg:gap-7 flex-col min-[850]:flex-row ">
          <div className="flex items-center justify-center  flex-col">
            <div className="flex items-center justify-center">
              <h3 className=" text-slate-950  text-5xl md:text-7xl font-bold">What

              </h3>
              <h3 className=" text-slate-950 ml-3 mt-7 md:mt-16 text-3xl md:text-5xl font-bold">We Do ?

              </h3>
            </div>
            <div  className="w-full max-w-100  pb-5 h-fit mt-10 text-white p-4 bg-slate-950">
              <p>At <strong>True Crescent Enterprises Limited</strong>, we provide reliable supply solutions for building, construction, and structural steel projects. We are dedicated to delivering quality materials that ensure strength, durability, and long-lasting performance.
              </p>
              <p className="mt-3 mb-6">Beyond materials, we provide project management and contract management so you never deal with delayed shipments, missing clips and couplers, or mismatched steel grades. We handle welding and fabrication, installation and erection, plus on-site inspection and supervision to catch issues before they cost time and money.</p>

              <Link href={'/services'} className="w-fit py-2 px-3 bg-orange-500 text-white hover:bg-transparent hover:border-2 transition duration-300 active:bg-transparent active:border-2">
                Learn More
              </Link>

            </div>
          </div>
          <div className="w-full max-w-100  h-80 sm:h-100 self-center min-[850]:self-end  mx-7 relative hover:scale-110 active:scale-110 transition duration-300  bg-cover bg-no-repeat py-16 flex items-center justify-center" style={{ backgroundImage: `url(${'/images/are.jpeg'})` }}>
          <div className="absolute inset-0 z-20 bg-black/50" />
          <div className="absolute inset-0 z-40 flex p-6 items-center justify-center flex-col ">
            <Image
            src={'/images/quality.png'}
            alt="qualityn steel construction materials in nigeria"
            width={50}
            height={50}
            />
            <h3 className="text-white font-semibold text-center text-xl">
              True Crescent Enterprises Limited
            </h3>

          </div>


          </div>

          


        </div> 

      </div>

      <OurServices />

      <div className='w-full py-10 flex items-center justify-center '>
        <div className='flex items-center justify-center flex-col max-w-5xl gap-3'>
          <p className='text-xl md:text-2xl font-semibold '>Industries We Serve</p>
          <div className='flex items-center text-orange-500 justify-center self-center gap-5 flex-wrap'>
            <div className='bg-gray-200 gap-3 p-3 w-50 h-40 flex items-center justify-center flex-col'>
              < FaHouseChimney size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black'>Residential Construction</p>

            </div>
            <div className='bg-gray-200 p-3 gap-3 w-50 h-40 flex items-center justify-center flex-col'>
              < FaBuilding size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black'>Commercial Buildings</p>

            </div>
            <div className='bg-gray-200 p-3 gap-3 w-50 h-40 flex items-center justify-center flex-col'>
              < FactoryIcon size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black'>Industrial Facilities</p>

            </div>
            <div className='bg-gray-200 p-3 gap-3 w-50 h-40 flex items-center justify-center flex-col'>
              < WarehouseIcon size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black'>Warehouses</p>

            </div>

            <div className='bg-gray-200 p-3 gap-3 w-50 h-40 flex items-center justify-center flex-col'>
              < TractorIcon size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black text-center'>Argricultural Infrastructure</p>

            </div>
            <div className='bg-gray-200 p-3 gap-3 w-50 h-40 flex items-center justify-center flex-col'>
              < FaBridge size={40} color='oklch(70.5% 0.213 47.604)' />
              <p className='font-medium text-black'>Infrastructure Project</p>

            </div>

          </div>

        </div>

      </div>

      <div className='w-full py-10 flex items-center justify-center bg-gray-100 '>
        <div className='flex items-center justify-center flex-col max-w-5xl gap-3'>
          <p className='text-xl md:text-2xl font-semibold '>Fast & Reliable Delivery Service</p>
          <FaTruckFast  size={80} color='oklch(70.5% 0.213 47.604)'/>
          <p className='text-black max-w-2xl px-5 '>
            We provide fast and reliable delivery service, to ensure that your construction materials arrive safely at your project site and on schedule. Our team is committed to supporting smooth project execution with timely and efficient transportation
          </p>
        </div>

      </div>

      <CTABanner />

      

      
    </div>
  )
}

export default ServicesPage