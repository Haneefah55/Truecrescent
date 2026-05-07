import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server';



const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/user(.*)'])

export default clerkMiddleware(async (auth, req) => {

  const userAgent = req.headers.get("user-agent") || "";
  
  // List of bots to allow
  const allowedBots = [
    "Googlebot",           // Google Search
    "vercel",              // Vercel preview bot
    "HeadlessChrome",      // Vercel screenshot bot
    "bingbot",             // Bing
    "Slurp",               // Yahoo
    "DuckDuckBot",         // DuckDuckGo
    "Baiduspider",         // Baidu
    "YandexBot",           // Yandex
    "facebookexternalhit", // Facebook sharing
    "Twitterbot",          // Twitter/X sharing
    "LinkedInBot",         // LinkedIn sharing
    "WhatsApp",            // WhatsApp link preview
  ];
  
  // Check if request is from a bot
  const isBot = allowedBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );
  
  // Bypass authentication for all bots
  if (isBot) {
    return NextResponse.next();
  }
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}