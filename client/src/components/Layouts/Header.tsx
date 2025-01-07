import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NavigationMenuDemo } from './Navbar'
import { CiSearch } from "react-icons/ci"
import { FaShoppingBag } from "react-icons/fa"

export default function Header() {
  return (
    <div className='w-full py-2'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
        
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[160px] h-[60px]">
              <Image
                src="/images/logo.jpg"
                alt="Yody Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex-grow px-8">
            <NavigationMenuDemo />
          </div>

          
          <div className="flex items-center">
            <div className="mr-2">
              <button className="px-2"><Link href="/login"> Đăng nhập / </Link></button>
              <button><Link href="/register"> Đăng ký </Link></button>
            </div>
            <div className="relative flex items-center bg-white rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="pl-8 pr-3 outline-none w-[150px] h-[30px] text-sm border border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg"
              />
              <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none" />
            </div>
            <div className="p-2 hover:bg-red-600 rounded-lg transition-colors cursor-pointer">
              <FaShoppingBag className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}