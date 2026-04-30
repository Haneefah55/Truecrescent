

import HomeHero from "../../components/HomeHero";
import { HiBadgeCheck } from "react-icons/hi";
import { FaCog, FaHeadset, FaTruck } from "react-icons/fa";
import CategoryCarousel from "../../components/CategoryCarousel";
import Image from "next/image";
import Link from "next/link";
import LatestProduct from "@/components/LatestProduct";


export default function Home() {
  
  return (
    <div className="w-full overflow-x-hidden">

      {/* hero */}
      <HomeHero />

      {/*  value propositions  */}
      <div className="bg-gray-100 py-10 flex items-center justify-center flex-col md:flex-row" >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 hover:bg-orange-700 focus:bg-orange-700 transition duration-300 ">
            <HiBadgeCheck  size={35} color="white" />
            <h3 className="font-medium text-sm">Premium Materials</h3>
            <p className="font-light text-center text-xs">Certified mills. Every batch inspected.</p>
          </div>
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 hover:bg-orange-700 focus:bg-orange-700 transition duration-300  ">
            <FaCog  size={35} color="white" />
            <h3 className="font-medium text-sm">Build to Last</h3>
            <p className="font-light text-center text-xs">High-grade steel for real job sites. </p>
          </div>

          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3  hover:bg-orange-700 focus:bg-orange-700 transition duration-300 ">
            <FaTruck  size={35} color="white" />
            <h3 className="font-medium text-sm">On-Time Delivery</h3>
            <p className="font-light text-center text-xs">Scheduled warehouse to site. No delays.</p>
          </div>
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 hover:bg-orange-700 focus:bg-orange-700 transition duration-300  ">
            <FaHeadset  size={35} color="white" />
            <h3 className="font-medium text-sm">Expert Support</h3>
            <p className="font-light text-center text-xs">Steel specialist. Real people. Quick help.</p>
          </div>
          

        </div>

      </div>
      {/* category carousel */}
      <CategoryCarousel />

      {/* who we are section */}

      <div className="relative w-full h-160  sm:h-100 md:h-screen">

        <Image
          src={'/images/about.jpg'}
          fill
          priority
          className="object-cover"
          alt="about true crescent, quality steel construction and building materials"

        /> 
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-5 py-7 ">
          <div className="grid grid-cols-1 min-[600px]:grid-cols-2 w-full  max-w-6xl">
            <div className="flex mb-6 w-full md:mb-0 self-center  justify-center sm:justify-start">
              <h3 className=" text-gray-100 text-5xl md:text-7xl font-bold">Who

              </h3>
              <h3 className=" text-gray-100 ml-3 mt-7 md:mt-16 text-3xl md:text-5xl font-bold">We Are ?

              </h3>
            </div> 
            <div className="w-full max-w-100 pb-5 h-auto mt-10 bg-orange-500">
              
              <p className="text-gray-50 text-[16px] p-4 ">
                <span className="font-semibold  text-xl"> True Crescent</span> is a leading provider of high-quality steel construction and building materials. With over 20 years of experience, we are committed to delivering exceptional products and services to our customers.
              </p>
              
              <p className="text-gray-50 text-[16px] mb-4  p-4">
                Our extensive product range includes structural steel, rebar, steel sheets, and custom fabrication services. We source our materials from trusted mills and ensure that every batch undergoes rigorous quality inspections.
              </p>
              <Link href={'/about'} className="w-fit py-2 px-3 mt-10 ml-5  bg-slate-950 text-white hover:bg-transparent hover:border-2 transition duration-300 active:bg-transparent active:border-2">
                Learn More
              </Link>
            </div>

          </div>
        </div>
    

      
        

      </div>

      {/* what we do section */}

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
              <p className="mt-3 mb-6">Whether you are handling residential, commercial, or industrial projects, we supply the essential materials needed to support successful construction.</p>

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
            alt="quality"
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

      {/* new product section */}

      <LatestProduct />


        

    
      



      
    </div>
  );
}
