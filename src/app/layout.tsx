import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../app/component/Navbar"
import localFont from 'next/font/local'

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


// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https:truecrescent.vercel.app'),
  title:  'True Crescent | Quality Steel Construction Materials in Lagos, Nigeria',
  description: 'Buy premium steel construction and building materials in Lagos, Nigeria: rods, angles, beams, sheets. Fast delivery nationwide. Wholesale & retail available.',
  keywords: ['steel construction materials Lagos', 'steel rods Nigeria', 'building materials Ikeja', 'steel beams Lekki', 'steel fabrication', 'structural steel supplier', 'steel erection services', 'quality construction materials', 'best steel connstruction materials', 'steel building materials Nigeria', 'steel supplier Nigeria'],
  authors: [{ name: 'True Crescent Enterprises Limited' }],
  creator: 'True Crescent',
  publisher: 'True Crescent Lagos',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://truecrescent.vercel.app',
    siteName: 'True Crescent Enterprises Limited ',
    title: 'True Crescent Enterprises Limited  - Quality Steel Construction Materials',
    description: 'Premium steel products for construction in Lagos. Shop rods, angles, beams, and sheets with local delivery.',
    images: [{
      url: '/images/og-home.png',
      width: 1200,
      height: 630,
      alt: 'True Crescent Enterprises Limited  - Quality Steel Construction Materials'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'True Crescent Enterprises Limited  - Quality Steel Construction Materials',
    description: 'Buy premium steel construction and building materials in Lagos, Nigeria: rods, angles, beams, sheets. Fast delivery nationwide. Wholesale & retail available.',
    images: ['/images/og-home.jpg'],
    creator: 'True Crescent Enterprises Limited',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-code',
    }
  },
  alternates: {
    canonical: 'https://truecrescent.vercel.app',
  },
  category: 'steel construction and building materials',
};

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
    <html lang="en" className={outfit.className} data-scroll-behavior = "smooth">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </head>
      <body className=""
      
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
