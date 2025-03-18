"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image";
import { Suspense } from "react"
export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
      <Image
              src=""
              width={50}
              alt="Logo"
              quality={100}
              className="block dark:hidden"

            />
            <Image
                src=""
                width={50}
                alt="Logo"
                quality={100}
                className="hidden dark:block"
              />
        {/* <span className="hidden font-bold sm:inline-block">
          Wikers
        </span> */}
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/pricing")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blog
        </Link>
       
      </nav>
    </div>
  )
}