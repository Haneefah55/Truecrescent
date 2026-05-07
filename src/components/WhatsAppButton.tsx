import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
  
    <a href='https://wa.me/message/QA7SVQ3B52ZMA1?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20products.' className='fixed bottom-20 right-6 z-50 bg-green-500 hover:scale-150  hover:-translate-y-3 text-white p-3 animate-bounce rounded-full shadow-xl transition-all duration-300 backdrop-blur-sm'>
      <FaWhatsapp size={25} />
    </a>
    
  )
}

export default WhatsAppButton
