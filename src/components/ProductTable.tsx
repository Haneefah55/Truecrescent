"use client"
import { getAllProduct } from '@/actions/products.action'
import { useIsMobile } from '@/hooks/use-mobile'
import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa6'
import DesktopTable from './table/DesktopTable'
import MobileTable from './table/MobileTable'


const ProductTable = () => {
  
  const isMobile = useIsMobile()
  //console.log(products)
 

  return (
    <div className='w-full mt-3 bg-gray-100  shadow-md overflow-x-auto'>
      
      { isMobile ? (
        <MobileTable />
      ) : (<DesktopTable />)
      }

      
    </div>
  )
}

export default ProductTable
