"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { site } from "@/content/site"
import { Button } from "@/components/ui/button"

const navItems = site.nav

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#home" className="text-xl font-bold tracking-tight z-50">
          <span className="font-extrabold">EVAN</span>
          <span className="text-muted-foreground font-normal">JOASSON</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle (Simplified placeholder for now, ensuring functionality) */}
        {/* Ideally would be a sheet/drawer, but keeping simple for this iteration */}
        <div className="md:hidden">
          <Button size="sm" variant="ghost" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
