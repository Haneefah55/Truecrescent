import StatsCounter from '@/components/StatsCounter'
import WhyChooseUsPage from '@/components/WhyChooseUs'
import { Rocket, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShield } from 'react-icons/fa6'


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
            <h3 className='font-semibold text-left text-3xl mb-3 w-full '>Building Strong Foundations for Every Project</h3>
            <p className='w-full max-w-110'>At <strong>True Crescent Enterprises Limited</strong>, we specialize in premium steel building solutions and high-quality construction materials designed to meet the needs of residential, commercial, and industrial projects. With a commitment to durability, reliability, and customer satisfaction, we provide materials and services that help builders, contractors, and property owners complete projects with confidence.</p>

            <p className='w-full max-w-110 mt-2'>From structural steel to roofing sheets, pipes, cement, and other construction essentials, we are dedicated to delivering products that meet industry standards while maintaining competitive pricing and dependable service.</p>

          </div>
          <div className='flex items-center justify-center border-2 w-full mt-9 md:mt-5 '>
            <div className='w-95 min-w-70 relative h-75 self-center flex'>
              <div className='w-50 min-w-40 z-30 h-50 absolute right-4 -top-2'>
                <Image
                  src={'/images/are.jpeg'}
                  alt=''
                  fill
                  className='bg-cover'

                />
                <div className='absolute bg-black/30 inset-0'/>

              </div>
              <div className='w-50 min-w-40 z-30 h-55 min-h-50 absolute bg-pink-900 left-0 -bottom-5'>
                <Image
                  src={'/images/about.jpg'}
                  alt=''
                  fill
                  className='object-cover'

                />
                <div className='absolute bg-black/30 inset-0'/>

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



    </div>
    
  )
}

export default AboutPage