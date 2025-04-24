"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
import { Button } from './button'
import Image from 'next/image'
import logo from '@/images/Reddit-Logo.png'
import reddit from '@/images/reddit.png'
import { useSidebar } from './sidebar'

const Header = () => {
  const { user } = useUser();
  const { toggleSidebar, open, isMobile } = useSidebar();
  return (
    <header className='flex items-center justify-between p-2 border-b border-gray-200'>
      {/* left side */}
      <div className='h-10 flex items-center'>
        {open ? (
          <ChevronLeftIcon className='w-6 h-6 cursor-pointer' onClick={toggleSidebar} />
        ) : (
          <div className="flex items-center gap-2">
            <MenuIcon className='w-6 h-6 cursor-pointer' onClick={toggleSidebar} />
            <Image src={logo}
              alt='logo'
              width={150}
              height={150}
              className='hidden md:block' />

            <Image
              src={reddit}
              alt='reddit'
              width={40}
              height={40}
              className='block md:hidden' />
          </div>
        )}

      </div>

      {/* right side */}
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant='outline'>
            <SignInButton mode='modal' />
          </Button>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header