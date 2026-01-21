"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { site } from "@/content/site"

type Accent = "primary" | "secondary" | "accent" | "success"

const contactMethods: Array<{ icon: any; label: string; href: string; accent: Accent }> = [
  {
    icon: Mail,
    label: "Email",
    href: site.links.email,
    accent: "primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: site.links.github,
    accent: "secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: site.links.linkedin,
    accent: "accent",
  },
  {
    icon: FileText,
    label: "Resume",
    href: site.links.resume,
    accent: "success",
  },
]

const accentClasses: Record<Accent, { icon: string; shadow: string }> = {
  primary: { icon: "text-primary", shadow: "hover:shadow-primary/20" },
  secondary: { icon: "text-secondary", shadow: "hover:shadow-secondary/20" },
  accent: { icon: "text-accent", shadow: "hover:shadow-accent/20" },
  success: { icon: "text-green-500", shadow: "hover:shadow-green-500/20" },
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="px-6 py-20 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {
            "I'm currently seeking internship opportunities and open to collaborating on security research projects. Let's connect!"
          }
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isExternal = method.href.startsWith("http")
            const accent = accentClasses[method.accent]

            return (
              <Card
                key={method.label}
                className={`hover:scale-110 hover:shadow-xl ${accent.shadow} transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                <CardContent className="pt-6">
                  <a
                    href={method.href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon className={`h-8 w-8 ${accent.icon} group-hover:scale-125 transition-transform`} />
                    <span className="text-sm font-medium">{method.label}</span>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button
          size="lg"
          asChild
          className={`bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{
            transitionDelay: "800ms",
          }}
        >
          <a href={site.links.email}>Send Message</a>
        </Button>
      </div>
    </section>
  )
}
