"use client"

import { useState } from "react"
import Link from "next/link" 
import { Menu, Search, Sheet, Wallet } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { SheetTrigger, SheetContent } from "./ui/sheet"

export function Navigation() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">PromptMarket</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/browse" className="transition-colors hover:text-foreground/80 text-foreground">
              Browse
            </Link>
            <Link href="/sell" className="transition-colors hover:text-foreground/80 text-foreground">
              Sell
            </Link>
            <Link href="/governance" className="transition-colors hover:text-foreground/80 text-foreground">
              Governance
            </Link>
            <Link href="/profile" className="transition-colors hover:text-foreground/80 text-foreground">
              Profile
            </Link>
          </nav>
        </div>
       
       
      </div>
    </header>
  )
}

