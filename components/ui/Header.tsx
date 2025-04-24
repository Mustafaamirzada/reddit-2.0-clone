"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import { Button } from './button'

const Header = () => {
  const { user } = useUser();
  return (
    <header>Header
      {/* left side */}

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