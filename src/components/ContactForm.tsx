"use client"

import { sendInquiry } from '@/actions/inquiry.action'
import { Loader, SendIcon } from 'lucide-react'
import React, { ReactEventHandler, useState } from 'react'
import { toast } from 'sonner'

const ContactForm = ({ user }: { user:any }) => {
  const [subjectSelected, setSubjectSelected] = useState("")
  const [subject, setSubject] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const subjects = [
    { value: "quote", label: "Request a Quote" },
    { value: "product", label: "Product Inquiry" },
    { value: "custom", label: "Custom Project Request" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "billing", label: "Billing Question" },
    { value: "general", label: "General Inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "others", label: "Others" },
  ];
  const handleSubmit = async(formData: FormData) => {
    setLoading(true)
    setError("")
    
    if(!user) {
      
      toast.error("please login before continuing")
      setLoading(false)
      return
    }
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const subject = formData.get("subject") as string;
    const customSubject = formData.get("customSubject") as string;

    if(!name || !email || !message || !subject){
      setError("All fields are required")
      setLoading(false)
      return
    }
    
    const finalSubject = subject === "others" ? customSubject : subject
    const data = {name, email, phone, message, finalSubject}


    const res = await sendInquiry(data)
    console.log("res", res)

    if(!res.success){
      setError(res.error)
      setLoading(false)
      return
    }
    
    setError("")
    setLoading(false)
    toast.success("Inquiry email sent successfully")
  


  }
 
  return (
    <form action={handleSubmit} onSubmit={(e) => {
      
    }} className=' w-full flex  gap-3 flex-col'>
      <div className='flex flex-col gap-1'>
        <label className='font-semibold'>
          Name
        </label>
        <input name='name' type='text' className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500 placeholder:text-gray-500' placeholder='Your name' />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='font-semibold'>
          Email Address
        </label>
        <input name='email' type='email' className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500 placeholder:text-gray-500' placeholder='you@example.com' />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='font-semibold'>
          Phone Number
        </label>
        <input name='phone' type='text' className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500 placeholder:text-gray-500' placeholder='+23490000000' />
      </div>

      <div className='flex flex-col gap-1'>
        <label className='font-semibold'>
          Subject
        </label>
        
        <select name="subject"  value={subjectSelected} onChange={(e) => setSubjectSelected(e.target.value)} className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500'>
          <option value="">Select a subject</option>

          {subjects.map((subject) => (
            <option key={subject.value} value={subject.value}>
              {subject.label}
            </option>
          ))}
        </select>
      </div>
      {
        subjectSelected === "others" &&
        <input name='customSubject' className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500' placeholder='Enter your subject' required={subjectSelected === "others"}/>
      }
      <div className='flex flex-col gap-1'>
        <label className='font-semibold'>
          Message
        </label>
        <textarea name='message'  className='w-full flex px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-gray-500 placeholder:text-gray-500' placeholder='Type your message here'></textarea>
      </div>
      {
        error &&
        <p className='my-3 text-red-600 text-xs text-center font-medium'>{error}</p>
      }

      <button disabled={loading} type='submit' className='w-full mt-2 flex px-3 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-600 '>
        {
          loading ? <Loader className='mx-auto animate-spin' /> :
          <div className='flex items-center justify-center gap-3 mx-auto'>
            <SendIcon />
            <p>Send Message</p>
          </div>
        }

      </button>



    </form>
  )
}

export default ContactForm