"use client"

import { useAuthStore } from '@/store/auth.store'
import React, { useEffect } from 'react'

const CheckAuth = () => {
  const { checkAuth, user } = useAuthStore()


  useEffect(() => {
    checkAuth()

  }, [])
  return null
}

export default CheckAuth