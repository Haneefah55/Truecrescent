import React from 'react'

type InquiryEmailProps = {
  name: string,
  email: string,
  phone: string,
  message: string,
  subject: string,
  date: string,

}

const InquiryEmailTemp = ({ 
  name,
  email,
  phone,
  message,
  subject,
  date, }: InquiryEmailProps) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#364153", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <div style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px"}}>
        
        <h1 style={{ textTransform: "capitalize"}}>
          New {subject}

        </h1>
        <div>
          <p><strong>{name}</strong></p>
          <p><strong>{email}</strong></p>
          <p><strong>{phone}</strong></p>
        </div>
        <div style={{ marginTop: "10px"}}>
          {message}
        </div>
        <p style={{ marginTop: "20px", fontSize: "14px"}} >{date}</p>
      </div>

      
    </div>
  )
}

export default InquiryEmailTemp