import CTABanner from '@/components/CTABanner'
import StatsCounter from '@/components/StatsCounter'
import WhyChooseUsPage from '@/components/WhyChooseUs'
import { Rocket, ShieldCheck } from 'lucide-react'
import { Metadata, Viewport } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAward } from 'react-icons/fa'

export const metadata: Metadata = {
  // Basic metadata
  title: 'About Us | Steel Building Materials | Steel Construction Solutions | True Crescent Enterprises Limited',

  description: ' We deliver quality products, professional service, and durable solutions for every project. From reinforcing bars to roofing sheets, we are your trusted partner in construction materials across Nigeria.',

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


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}


const AboutPage = () => {
 


  return (

    <div className='w-full  overflow-x-hidden'>
      {/* hero */}
      <div  className="w-full h-100 relative bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'/images/about.jpg'})` }}>
      <div className='absolute bg-black/40 inset-0 flex flex-col pt-24'>
        <Link href={'/'} className='text-gray-100 mt-5 ml-5 md:ml-14 font-light hover:text-orange-600 active:text-orange-600'>
        Home/About
        </Link>
        <h2 className='text-center font-semibold text-gray-100 mt-25 text-4xl md:text-5xl'>About Us</h2>
       

      </div>


      </div>

      <div className='w-full bg-gray-100 py-10 flex items-center justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 w-full p-4 max-w-6xl gap-4 self-center'>
          <div className='flex flex-col items-center justify-center w-full '>
            <h3 className='font-semibold text-left text-3xl mb-3 w-full max-w-110 '>Building Strong Foundations for Every Project</h3>
            <p className='w-full max-w-110'>At <strong>True Crescent Enterprises Limited</strong>, we specialize in premium steel building solutions and high-quality construction materials designed to meet the needs of residential, commercial, and industrial projects. With a commitment to durability, reliability, and customer satisfaction, we provide materials and services that help builders, contractors, and property owners complete projects with confidence.</p>

            <p className='w-full max-w-110 mt-2'>From structural steel to roofing sheets, pipes, cement, and other construction essentials, we are dedicated to delivering products that meet industry standards while maintaining competitive pricing and dependable service.</p>

          </div>
          <div className='flex items-center justify-center w-full mt-9 md:mt-5 '>
            <div className='w-95 min-w-70 relative h-75 self-center flex px-5'>
              <div className='w-50 h-50 absolute z-30 -left-5 -top-7 bg-slate-950'/>
              <div className='w-90 min-w-70 z-30 h-85 min-h-70 absolute right-4 -top-2'>
                <Image
                  src={'/images/are.jpeg'}
                  alt=''
                  fill
                  className='bg-cover'

                />
                <div className='absolute bg-black/0.5 inset-0'/>
                <div className='absolute w-85 h-15 bg-slate-950 text-gray-100 z-20 bottom-7 left-7 flex p-4 items-center justify-center'>
                  <FaAward  size={25} />
                  <p className='text-xs ml-2'>Leading supplier of premium steel building and high-quality construction materials</p>
                </div>

              </div>

              
              
              

            </div>

          </div>
          

        </div>

      </div>
      
      <StatsCounter />
      {/* our mission and vision */}
      <div className='bg-gray-200 py-10 flex items-center justify-center'>
        <div className='w-full max-w-6xl flex items-center justify-center place-items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='md:w-100 w-70 flex items-center justify-center flex-col p-5 bg-slate-950 text-white gap-4'>

              <ShieldCheck size={60}/>
              <h3 className='text-2xl text-center font-bold'>Our Mission</h3>
              <p className='text-center'>To provide reliable steel building solutions and quality construction materials that support safe, durable, and cost-effective construction projects.</p>
            


            </div>

            <div className='md:w-100 w-70 flex items-center justify-center flex-col p-5 bg-slate-950 text-white gap-4'>

              <Rocket size={60}/>
              <h3 className='text-2xl text-center font-bold'>Our Vision</h3>
              <p className='text-center'>To become a leading name in the steel and construction industry by consistently delivering quality products, excellent customer service, and innovative building solutions.</p>
            


            </div>

          </div>

        </div>

      </div>

      <WhyChooseUsPage color1={"oklch(12.9% 0.042 264.695)"} color2={"bg-slate-600"} />

      <CTABanner />



    </div>
    
  )
}

export default AboutPage