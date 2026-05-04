
"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Home,
  Package,
  Users,
  Settings,
  ShoppingCart,
  ShoppingCartIcon,
  FileTextIcon,
  Store,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"



export function Sidebar() {
  const admin = './test'
  const manageLinks = [
    {
      title: "Products",
      url: `${admin}/products`,
      icon: Package,
    },
    {
      title: "Orders",
      url: `${admin}/orders`,
      icon: ShoppingCartIcon,
    },
    {
      title: "Customers",
      url: `${admin}/customers`,
      icon: Users,
    },
    {
      title: "Quotes",
      url: `${admin}/quotes`,
      icon: FileTextIcon,
    },
     {
      title: "Inventory",
      url: `${admin}/inventory`,
      icon: Store,
    },
  ]
  const path = usePathname()

  const isMobile = useIsMobile()

  const [open, setOpen] = useState(!isMobile)
  console.log("path", path)


  useEffect(() => {
    setOpen(!isMobile)

  }, [isMobile])
  return (
    <aside className={`h-full transition-transform p-4 ${open ? "translate-x-0" : "-translate-x-full"} bg-white rounded-tl-2xl rounded-bl-2xl overflow-y-auto overflow-x-hidden border-2`}>
      <div className="flex flex-col items-center border-2 ">
        <Link href={'/'} className="flex gap-2 items-center justify-center ">
          <img
            src={'/images/logo.png'}
            alt="trur crescent logo"
            className="h-7 w-10 "
          />
          <p className="text-slate-900 text-xs font-semibold">True Crescent <br /> Enterprises Limited </p>

        </Link>

        <Link href={'/test'} className={`flex w-full gap-2 ${path === '/test' ? "bg-slate-900 text-gray-100" : "" } mt-4 p-2 items-left rounded-lg`}>
          <MdDashboard size={20} />
          <span className={`font-medium ${path === '/test' ? "text-white font-semibold" : "" } text-[14px]`}>Dashboard</span>

        </Link>

        <p className="font-semibold mt-4 px-2 self-start text-sm text-gray-400">MANAGE</p>

        {
          manageLinks.map((link) => (
            <Link href={`/${link.url}`} className={`flex w-full gap-2 ${path === `.${link.url}` ? "bg-slate-900 text-gray-100" : "" } hover:bg-slate-700 hover:text-gray-100 active:bg-slate-700 transition duration-300 active:text-gray-100 mt-3 p-2 items-left rounded-lg`}>
              <link.icon size={20} />
              <span className={`font-medium ${path === `${link.url}` ? "text-white font-semibold" : "" } text-[14px]`}>{link.title}</span>

            </Link>
          ))
        }


      </div>
    </aside>
  )
}