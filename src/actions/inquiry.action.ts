"use server";

import { resend } from "@/lib/resend";
import InquiryEmail from "@/components/InquiryEmailTemp";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Inquiry from "@/models/inquiry.model";
import { connectDb } from "@/lib/connectDb";

type InquiryData = {
  name: string, 
  email: string, 
  phone: string, 
  message: string, 
  finalSubject: string,
}
export async function sendInquiry(data: InquiryData) {
  
  const date = new Date(Date.now()).toISOString()

  const session = await auth.api.getSession({
    headers: await headers()
  })
  const userId = session?.user.id.toString()

  const {name, email, phone, message, finalSubject} = data
  

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.NODE_ENV === "development"
          ? "True Crescent <onboarding@resend.dev>"
          : "True Crescent <contact@truecrescent.com.ng>",

      to: "Go4elitesteel@gmail.com",
      subject: `${finalSubject} from ${name}`,

      replyTo: email,

      react: InquiryEmail({
        name,
        email,
        phone,
        message,
        subject: finalSubject,
        date
        
      }),
    });
    console.log("data", data, "error", error)
    if (error) {
      console.log(error.message)
      return { success: false, error: error.message || "Error sending inquiry" }
    }
    //create inquiry collections
    await connectDb()
    await Inquiry.create({
      userId,
      name,
      email,
      subject: finalSubject,
      message

    })

    return { success: true, data }


  } catch (error: any) {
    console.log(error)
    return { success: false, error: error.message || "Error sending inquiry" }
  }
  

  
}