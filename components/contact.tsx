"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:contact@example.com",
    color: "primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "secondary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "accent",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "/resume.pdf",
    color: "success",
  },
]

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
          className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I'm currently seeking internship opportunities and open to collaborating on security research projects. Let's
          connect!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isExternal = method.href.startsWith("http")

            return (
              <Card
                key={method.label}
                className={`hover:scale-110 hover:shadow-xl hover:shadow-${method.color}/20 transition-all duration-150 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${400 + index * 100}ms`,
                }}
              >
                <CardContent className="pt-6">
                  <a
                    href={method.href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon
                      className={`h-8 w-8 text-${method.color} group-hover:scale-125 transition-transform duration-150`}
                    />
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
          className={`bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-150 hover:scale-110 hover:shadow-xl hover:shadow-primary/20 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transitionDelay: "800ms",
          }}
        >
          <a href="mailto:contact@example.com">Send Message</a>
        </Button>
      </div>
    </section>
  )
}
