// lib/checkRateLimit.ts
import { headers } from "next/headers"
import { ratelimit } from "./ratelimit"

export async function checkRateLimit(identifier?: string) {
  const headerList = await headers()

  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0] ||
    headerList.get("x-real-ip") ||
    "unknown"

  // You can combine identifier (like userId) with IP
  const key = identifier ? `${identifier}-${ip}` : ip

  const result = await ratelimit.limit(key)

  return result // { success: boolean, limit, reset, remaining }
}