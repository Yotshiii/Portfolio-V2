"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ShieldCheck, Lock, Sparkles, Filter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type ThemeColor = "purple" | "orange" | "green"

interface Certification {
  name: string
  issuer: string
  date: string
  status: string
  icon: any
  logo?: string
  theme: ThemeColor
}

const certifications: Certification[] = [
  {
    name: "Pre-Sales/Tech Accreditation Proficient (Expert)",
    issuer: "SentinelOne",
    date: "Nov. 2025",
    status: "Earned",
    icon: Award,
    logo: "/logos/SentinelOne_logo.png",
    theme: "purple",
  },
  {
    name: "Pre-Sales/Tech Accreditation Applied (Professional)",
    issuer: "SentinelOne",
    date: "March 2025",
    status: "Earned",
    icon: Award,
    logo: "/logos/SentinelOne_logo.png",
    theme: "purple",
  },
  {
    name: "Sales Accreditation Applied",
    issuer: "SentinelOne",
    date: "March 2025",
    status: "Earned",
    icon: Award,
    logo: "/logos/SentinelOne_logo.png",
    theme: "purple",
  },
  {
    name: "Microsoft AZ-900",
    issuer: "Microsoft",
    date: "In Progress",
    status: "In Progress",
    icon: Award,
    logo: "/logos/Microsoft_logo.png",
    theme: "green",
  },
  {
    name: "Cyber Engineer Certified",
    issuer: "Darktrace",
    date: "In Progress",
    status: "In Progress",
    icon: Award,
    logo: "/logos/Darktrace_logo.png",
    theme: "orange",
  },
  {
    name: "Threat Visualizer Certified",
    issuer: "Darktrace",
    date: "In Progress",
    status: "In Progress",
    icon: Award,
    logo: "/logos/Darktrace_logo.png",
    theme: "orange",
  },
  {
    name: "Email Security Certified",
    issuer: "Darktrace",
    date: "In Progress",
    status: "In Progress",
    icon: Award,
    logo: "/logos/Darktrace_logo.png",
    theme: "orange",
  },
]

const themeStyles = {
  purple: {
    border: "via-purple-500/50",
    glow: "rgba(168, 85, 247, 0.15)", // purple-500
    iconBg: "from-purple-500/20 to-indigo-500/20",
    text: "text-purple-400",
    shadow: "group-hover:shadow-purple-900/20",
    badge: "text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]",
    activeFilter: "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
  },
  orange: {
    border: "via-orange-500/50",
    glow: "rgba(249, 115, 22, 0.15)", // orange-500
    iconBg: "from-orange-500/20 to-amber-500/20",
    text: "text-orange-400",
    shadow: "group-hover:shadow-orange-900/20",
    badge: "text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.2)]",
    activeFilter: "bg-orange-500/20 text-orange-300 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
  },
  green: {
    border: "via-green-500/50",
    glow: "rgba(34, 197, 94, 0.15)", // green-500
    iconBg: "from-green-500/20 to-emerald-500/20",
    text: "text-green-400",
    shadow: "group-hover:shadow-green-900/20",
    badge: "text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]",
    activeFilter: "bg-green-500/20 text-green-300 border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
  },
}

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Filters
  const [selectedIssuer, setSelectedIssuer] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const uniqueIssuers = ["All", ...Array.from(new Set(certifications.map(c => c.issuer)))]
  const uniqueStatuses = ["All", ...Array.from(new Set(certifications.map(c => c.status)))]

  // Filter Logic
  const filteredCerts = certifications.filter(cert => {
    const matchIssuer = selectedIssuer === "All" || cert.issuer === selectedIssuer
    const matchStatus = selectedStatus === "All" || cert.status === selectedStatus
    return matchIssuer && matchStatus
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      observer.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="certifications" ref={sectionRef} className="py-32 relative overflow-hidden bg-black/40">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Ambient Glows - Mixed colors to represent diversity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">Expertise & Validation</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold tracking-tight text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Certifications
            </span>
          </h2>
        </div>

        {/* Filters */}
        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>

          {/* Company Filter */}
          <div className="flex bg-slate-900/50 backdrop-blur-md p-1 rounded-full border border-slate-800/50">
            {uniqueIssuers.map(issuer => (
              <button
                key={issuer}
                onClick={() => setSelectedIssuer(issuer)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedIssuer === issuer
                  ? "text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {selectedIssuer === issuer && (
                  <motion.div
                    layoutId="activeIssuerFilter"
                    className="absolute inset-0 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{issuer}</span>
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex bg-slate-900/50 backdrop-blur-md p-1 rounded-full border border-slate-800/50">
            {uniqueStatuses.map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedStatus === status
                  ? "text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {selectedStatus === status && (
                  <motion.div
                    layoutId="activeStatusFilter"
                    className="absolute inset-0 bg-slate-700 rounded-full shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid md:grid-cols-3 gap-8 perspective-1000 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => {
              const styles = themeStyles[cert.theme];
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={cert.name}
                  className="group relative"
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent ${styles.border} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                  <Card className={`relative h-full bg-slate-950/50 backdrop-blur-xl border-slate-800/50 overflow-hidden hover:border-slate-700/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl ${styles.shadow}`}>
                    {/* Internal Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.glow}, transparent 40%)`
                      }}
                    />

                    <CardHeader className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${styles.iconBg} backdrop-filter backdrop-blur-sm border border-white/10 shadow-inner group-hover:bg-white/10 transition-colors duration-300 w-16 h-16 flex items-center justify-center overflow-hidden`}>
                          {cert.logo ? (
                            <img
                              src={cert.logo}
                              alt={`${cert.issuer} logo`}
                              className="w-full h-full object-contain filter drop-shadow hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <cert.icon className="h-8 w-8 text-white" />
                          )}
                        </div>
                        <Badge
                          variant="outline"
                          className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider border-0 bg-slate-900/80 backdrop-blur ${styles.badge}`}
                        >
                          {cert.status}
                        </Badge>
                      </div>

                      <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all line-clamp-2">
                        {cert.name}
                      </CardTitle>

                      <CardDescription className="flex items-center gap-2 text-slate-400 font-medium">
                        <span className={styles.text}>{cert.issuer}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span>{cert.date}</span>
                      </CardDescription>

                      {/* Decorative Line */}
                      <div className={`mt-6 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:${styles.border} transition-colors duration-500`} />
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
