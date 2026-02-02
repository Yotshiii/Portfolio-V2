"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import { site } from "@/content/site"
import { Particles } from "@/components/ui/particles"

type Accent = "primary" | "secondary" | "accent" | "success"

const contactMethods: Array<{ icon: any; label: string; href: string; accent: Accent }> = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${site.links.email}`,
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
    label: "Mon CV",
    href: site.links.resume,
    accent: "success",
  },
]

const accentClasses: Record<Accent, { icon: string; shadow: string; border: string }> = {
  primary: { icon: "text-blue-400", shadow: "hover:shadow-blue-500/20", border: "group-hover:border-blue-500/50" },
  secondary: { icon: "text-purple-400", shadow: "hover:shadow-purple-500/20", border: "group-hover:border-purple-500/50" },
  accent: { icon: "text-cyan-400", shadow: "hover:shadow-cyan-500/20", border: "group-hover:border-cyan-500/50" },
  success: { icon: "text-emerald-400", shadow: "hover:shadow-emerald-500/20", border: "group-hover:border-emerald-500/50" },
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
    <section id="contact" ref={sectionRef} className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Deep Blue Background - EXACT COPY FROM HERO */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

      {/* Magic UI Particles - More Visible (Like Hero) */}
      <Particles
        className="absolute inset-0 z-0 opacity-60"
        quantity={120}
        staticity={30}
        ease={80}
        size={0.8}
        color="#60a5fa"
      />

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-orb-float"
          style={{
            top: '-20%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-orb-float"
          style={{
            bottom: '-10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '0.5s',
          }}
        />
      </div>

      {/* Rotating Geometric Shapes - Added missing circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-60">
        {/* Main Rotating Circles */}
        <svg
          className="absolute -left-[10%] bottom-[10%] w-[600px] h-[600px] animate-spin-very-slow"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.5" />
        </svg>

        {/* Counter-rotating inner circles (Added) */}
        <svg
          className="absolute -left-[10%] bottom-[10%] w-[600px] h-[600px] animate-spin-reverse-slow"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.5" strokeDasharray="10 5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" strokeDasharray="5 10" />
        </svg>
      </div>

      {/* Animated Wave Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <svg
          className="absolute right-0 bottom-0 w-full h-[300px] opacity-40"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,150 Q200,100 500,150 T1100,150 T1700,150"
            fill="none"
            stroke="url(#contactWave1)"
            strokeWidth="1.5"
            className="animate-wave-flow"
          />
          <path
            d="M-100,180 Q200,130 500,180 T1100,180 T1700,180"
            fill="none"
            stroke="url(#contactWave2)"
            strokeWidth="1.5"
            className="animate-wave-flow"
            style={{ animationDelay: '0.5s' }}
          />
          <defs>
            <linearGradient id="contactWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="contactWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      {/* --- CONTENT --- */}
      <div className="max-w-5xl mx-auto text-center relative z-20 px-6 py-24">

        {/* Header Block */}
        <div className="mb-16 space-y-6">
          {/* REMOVED SMALL TITLE "CONTACT"" */}

          <h2 className={`text-4xl md:text-5xl font-extralight text-white tracking-tight ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-100`}>
            Restons en <span className="font-bold">Contact</span>
          </h2>

          <p className={`text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-200`}>
            Je suis actuellement à la recherche d'un stage à l'international et ouvert aux collaborations sur des projets de recherche en sécurité.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isExternal = method.href.startsWith("http")
            const accent = accentClasses[method.accent]

            return (
              <Card
                key={method.label}
                className={`bg-slate-900/40 backdrop-blur-sm border-slate-800/60 hover:bg-slate-800/60 transition-all duration-500 group 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                hover:-translate-y-2 hover:shadow-2xl ${accent.border}`}
              >
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                  <a
                    href={method.href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex flex-col items-center gap-4 w-full h-full"
                  >
                    <div className={`p-4 rounded-full bg-slate-950/50 border border-slate-800 group-hover:scale-110 transition-transform duration-300 ${accent.shadow}`}>
                      <Icon className={`h-6 w-6 ${accent.icon}`} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{method.label}</span>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button
          size="lg"
          asChild
          className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 h-12 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          style={{
            transitionDelay: "800ms",
          }}
        >
          <a href={`mailto:${site.links.email}`}>M'envoyer un message</a>
        </Button>
      </div>
    </section>
  )
}
