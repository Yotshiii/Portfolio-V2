"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Shield } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled ? "top-4" : "top-6",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300",
          "backdrop-blur-xl bg-card/40 border border-border/50",
          "shadow-lg shadow-primary/5",
          isScrolled && "bg-card/60 shadow-xl shadow-primary/10",
        )}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(66, 51, 102, 0.6), rgba(38, 89, 115, 0.6))"
            : "linear-gradient(135deg, rgba(66, 51, 102, 0.4), rgba(38, 89, 115, 0.4))",
        }}
      >
        <div className="flex items-center gap-2 px-3 py-1 border-r border-border/50">
          <Shield className="h-4 w-4 text-primary" />
        </div>

        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "hover:text-primary",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full bg-primary/20 animate-in fade-in zoom-in-95 duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(170, 99, 237, 0.2), rgba(99, 179, 237, 0.2))",
                  }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
