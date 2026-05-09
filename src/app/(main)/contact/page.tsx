import { Clock1, Clock10, Mail, MailCheckIcon, MapPin, NotepadTextIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className='mt-10 flex flex-col bg-gray-50 w-full overflow-x-hidden'>
      <div className='flex h-30 sm:h-60 md:h-90 relative bg-no-repeat bg-contain lg:bg-cover ' style={{ backgroundImage: `url(${'/images/contact.png'})` }}>
        <div className='absolute inset-0 bg-black/30 flex' />

        

      </div>
      <div className='flex items-center justify-center my-5'>
       <div className=' font-semibold text-3xl md:text-5xl'>Get In Touch
        <div className='h-1 w-20 bg-orange-500 mt-1 self-start' />
      </div>
      
      </div>
      <p className='w-full self-center-safe text-center max-w-md my-3 flex items-center px-6 justify-center'>
        We’d love to hear from you. Whether you have questions about our products, need a custom quote, or want to discuss your project requirements, our team is ready to assist you.
      </p>
      <div className='flex w-full max-w-5xl items-center justify-center flex-col md:flex-row mx-auto place-content-center px-5'>
        <div className='flex p-4 gap-3 '>
          <div className='flex items-center p-2 justify-center w-20 h-20 rounded-full bg-slate-950/20 text-slate-900'>
            <NotepadTextIcon size={50} />
          </div>
          <div className='flex flex-col gap-3 w-50 sm:w-90 md:w-75'>
            <h3 className='font-semibold text-xl'>Request a Quote</h3>
            <p className='full'>
              Looking for pricing or a custom solution? Send us your project details through Email or WhatsApp, and we’ll get back to you with a personalized quote as soon as possible.
            </p>
          </div>

        </div>
        <div className='flex p-4 gap-3 '>
          <div className='flex items-center p-2 justify-center w-20 h-20 rounded-full bg-orange-500/20 text-orange-400'>
            <MailCheckIcon size={50} />
          </div>
          <div className='flex flex-col gap-3 w-50 sm:w-90 md:w-75'>
            <h3 className='font-semibold text-xl'>Contact Support</h3>
            <p className='w-full'>
              Looking for pricing or a custom solution? Send us your project details through Email or WhatsApp, and we’ll get back to you with a personalized quote as soon as possible.
            </p>
          </div>



        </div>

      </div>

      <div className=' flex my-10 w-full max-w-6xl px-6 flex-col md:flex-row items-center justify-center'>
        <div className='flex flex-col gap-4  '>
          <div className='flex flex-col items-start gap-3 shadow-md bg-slate-800/10 p-5 rounded-xl'>
            <a href='https://wa.me/2348160804480?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20products' target="_blank" rel="noopener noreferrer" className='flex items-center justify-center gap-3'>
              <div className='flex items-center justify-center p-1 w-10 h-10 rounded-full bg-slate-900 text-white'>
                <FaWhatsapp size={25} />
              </div>
              <div>
                <p className='font-semibold'>Chat on Whatsapp</p>
                <p>+2348160804480</p>

              </div>
              

            </a>

            <a href='mailto:Go4elitesteel@gmail.com?subject=Product%20Inquiry&body=Hello%2C%20I%20I%20would%20like%20to%20know%20more%20about%20your%20products' className='flex items-center justify-center gap-3'>
              <div className='flex items-center justify-center p-1 w-10 h-10 rounded-full bg-slate-900 text-white'>
                <Mail size={25} />
              </div>
              <div>
                <p className='font-semibold'>Send an Email</p>
                <p>Go4elitesteel@gmail.com</p>

              </div>
              

            </a>
            <div className='flex items-center justify-center gap-3'>
              <div className='flex items-center justify-center p-1 w-10 h-10 rounded-full bg-slate-900 text-white'>
                <MapPin size={25} />
              </div>
              <div>
                <p className='font-semibold'>Visit Us</p>
                <p>Plot 4 Orowunmi Street Orile Iganmu Lagos State</p>

              </div>
              

            </div>


            

          </div>
          <div className='flex gap-3 bg-orange-500/30 shadow-md p-5 flex-col items-center justify-center md:flex-row rounded-xl '>
          <Clock10 size={50} color='oklch(70.5% 0.213 47.604)'/>
          <div className='max-w-75'>
            <p className='font-semibold text-xl mb-1'>Fast Response</p>
            <p>We aim to respond to all inquiries promptly during business hours.
For urgent requests, we recommend contacting us via WhatsApp for quicker communication.</p>
          </div>


          </div>

        </div>

        <div className='flex items-center justify-center w-full mx-5 max-w-sm bg-gray-100 rounded-xl shadow-md p-5 flex-col gap-3'>
          <h3 className='text-2xl font-semibold '>Contact Us</h3>
          <p className='text-sm'>Fill out the form below and submit, we will get back to you shortly</p>


        </div>
        

      </div>



     
  
    </div>
  )
}

export default ContactPage
