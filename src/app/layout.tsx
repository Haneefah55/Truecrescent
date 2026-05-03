import type { Metadata, Viewport } from "next";
import { Outfit, Geist } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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



export const metadata: Metadata = {
  // Basic metadata
  title: 'True Crescent - Steel Construction Materials in Lagos | Quality Steel Building Materials in Nigeria',

  description: 'Leading supplier of steel building materials and construction products in Nigeria. Offering reinforcing bars, roofing sheets, structural steel, cement, and building supplies. Quality guaranteed, competitive prices. We are a building and construction materials magnate serving contractors, developers, and project owners across Nigeria. With decades of experience in project development and contract management, we dont just supply materials—we ensure your project succeeds from ground break to final handover.',
  
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(outfit.className, "font-sans", geist.variable)} data-scroll-behavior = "smooth">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
      <body className=""
      
      >
        <ClerkProvider>
        
          {children}
        </ClerkProvider>
        
        
      </body>
    </html>
  );
}
