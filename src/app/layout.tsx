import type { Metadata, Viewport } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import { Toaster } from "sonner"
import CheckAuth from "@/components/CheckAuth";


const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Outfit-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Outfit-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Outfit-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Outfit-Light.ttf",
      weight: "200",
    }
  ],
  variable: "--font-outfit"
})


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    
    <html lang="en" className={`${outfit.className} font-sans`} data-scroll-behavior = "smooth">
      <head>
      
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className=""
      
      >
          <CheckAuth />
          <Toaster position="top-right" />
          {children}
        
        
        
      </body>
    </html>
  );
}
