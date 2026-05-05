
"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { useSidebarStore } from "@/store/sideBar.store"
import {
  Home,
  Package,
  Users,
  Settings,
  ShoppingCart,
  ShoppingCartIcon,
  FileTextIcon,
  Store,
  BarChart2,
  BarChart3,
  User2,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaChevronLeft, FaShoppingCart } from "react-icons/fa"
import { MdDashboard, MdSpaceDashboard } from "react-icons/md"
import SideBarTriger from "./SideBarTriger"



export function Sidebar() {
  const admin = '/admin'
  const manageLinks = [
    {
      title: "Products",
      url: `${admin}/products`,
      icon: Package,
      path:'/products'
    },
    {
      title: "Orders",
      url: `${admin}/orders`,
      icon: ShoppingCartIcon,
      path:'/orders'
    },
    {
      title: "Customers",
      url: `${admin}/customers`,
      icon: Users,
      path:'/customers'
    },
    {
      title: "Quotes",
      url: `${admin}/quotes`,
      icon: FileTextIcon,
      path:'/quotes'
    },
    {
      title: "Inventory",
      url: `${admin}/inventory`,
      icon: Store,
      path:'/inventory'
    },
    {
      title: "Analytics",
      url: `${admin}/analytics`,
      icon: BarChart3,
    
    },
    {
      title: "Settings",
      url: `${admin}/settings`,
      icon: Settings,

    },
    {
      title: "Users",
      url: `${admin}/users`,
      icon: User2,
    },
  ]
  const path = usePathname()
  const isMobileScreen = useIsMobile()
  //const [open, setOpen] = useState(!isMobile)
  const { isOpen, setIsOpen } = useSidebarStore()


  useEffect(() => {

    setIsOpen(isMobileScreen)
    /* const main = document.querySelector('main')
    if(main && isMobileScreen) {
      if(isOpen) {
        main.classList.add('ml-64')
      } else {
        main.classList.remove('ml-64')
      }
    }  */

  }, [isMobileScreen])
  return (

    <aside className={`h-full  bg-white shrink-0 transition-transform  ${isOpen ? "translate-x-0 w-60 p-4" : "-translate-x-full w-0 p-0"}  rounded-tl-2xl rounded-bl-2xl overflow-y-auto overflow-x-hidden border-r-2 ${isMobileScreen ? "fixed inset-y-0 z-50 shadow-xl top-6" : "relative"}`}>
      <div className={`${isMobileScreen ? "flex" : "hidden"} rounded-full h-5 w-5 p-2 items-center justify-center bg-orange-400 text-gray-100 absolute top-5 right-0`}>
        <SideBarTriger Icon= {<FaChevronLeft size={12} />} />
      </div>
      <div className={`flex flex-col items-center `}>
        
        <Link href={'/'} className="flex gap-2 items-center justify-center ">
          <img
            src={'/images/logo.png'}
            alt="true crescent logo"
            className="h-7 w-10 "
          />
          <p className="text-slate-900 sm:text-xs md:text-sm font-semibold">True Crescent <br /> Enterprises Limited </p>

        </Link>

        <Link href={'/admin'} className={`flex w-full gap-2 ${path === '/admin' ? "bg-slate-900 text-gray-100" : "" } mt-4 p-2 items-left rounded-lg`}>
          <MdDashboard size={20} />
          <span className={`font-medium ${path === '/admin' ? "text-white font-semibold" : "" } text-[14px]`}>Dashboard</span>

        </Link>

        {
          manageLinks.map((link) => (
            <Link href={`${link.url}`} key={link.title} className={`flex w-full gap-2 ${path.includes(link.url) ? "bg-slate-900 text-gray-100" : "" } hover:bg-slate-700 hover:text-gray-100 active:bg-slate-700 transition duration-300 active:text-gray-100 mt-3 p-2 items-left rounded-lg`}>
              <link.icon size={20} />
              <span className={`font-medium ${path === `${link.url}` ? "text-white font-semibold" : "" } text-[14px]`}>{link.title}</span>

            </Link>
          ))
        }


      </div>
    </aside>
  )
}