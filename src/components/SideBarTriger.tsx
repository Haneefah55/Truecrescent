"use client"

import { useIsMobile } from '@/hooks/use-mobile'
import { useSidebarStore } from '@/store/sideBar.store'
import React, { ReactNode } from 'react'
import { MdSpaceDashboard } from 'react-icons/md'

const SideBarTriger = ({ Icon }: { Icon:ReactNode }) => {

  const { isOpen, toggle } = useSidebarStore()
  const isMobile = useIsMobile()
  return (
    <button onClick={toggle} className='p-2'>
      {Icon}
    </button>
  )
}

export default SideBarTriger
