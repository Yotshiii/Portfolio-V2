"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Globe, Database, Shield, Network, Server, Box } from "lucide-react"

const skillCategories = [
  {
    title: "Cybersécurité",
    subtitle: "Blue & Red Team",
    skills: ["Audit", "Pentesting", "RootMe", "TryHackMe", "SentinelOne", "Darktrace"],
    icon: Shield,
    colSpan: "md:col-span-2",
    hoverBorder: "group-hover:border-purple-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    iconHoverBg: "group-hover:bg-purple-500/20",
    iconHoverText: "group-hover:text-purple-400",
  },
  {
    title: "Réseaux",
    subtitle: "Infrastructure",
    skills: ["Cisco", "HP Aruba", "Dell", "Palo Alto", "StormShield", "Watchguard", "pfSense"],
    icon: Network,
    colSpan: "md:col-span-2",
    hoverBorder: "group-hover:border-orange-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
    iconHoverBg: "group-hover:bg-orange-500/20",
    iconHoverText: "group-hover:text-orange-400",
  },
  {
    title: "Administration Système",
    subtitle: "Linux & Windows",
    skills: ["Grafana", "PRTG", "Splunk", "Windows Server", "Active Directory", "DNS/DHCP", "IIS", "Linux", "Apache", "Bind", "Postfix"],
    icon: Server,
    colSpan: "md:col-span-2",
    hoverBorder: "group-hover:border-cyan-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
    iconHoverBg: "group-hover:bg-cyan-500/20",
    iconHoverText: "group-hover:text-cyan-400",
  },
  {
    title: "Langages",
    subtitle: "Dev & Scripting",
    skills: ["Python", "Bash"],
    icon: Code2,
    colSpan: "md:col-span-1",
    hoverBorder: "group-hover:border-pink-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
    iconHoverBg: "group-hover:bg-pink-500/20",
    iconHoverText: "group-hover:text-pink-400",
  },
  {
    title: "Web",
    subtitle: "Architecture & UI",
    skills: ["HTML5", "CSS3", "React", "Node.js"],
    icon: Globe,
    colSpan: "md:col-span-1",
    hoverBorder: "group-hover:border-blue-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
    iconHoverBg: "group-hover:bg-blue-500/20",
    iconHoverText: "group-hover:text-blue-400",
  },
  {
    title: "Virtualisation",
    subtitle: "Cloud & Containers",
    skills: ["VirtualBox", "VMware", "Docker"],
    icon: Box,
    colSpan: "md:col-span-2",
    hoverBorder: "group-hover:border-indigo-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]",
    iconHoverBg: "group-hover:bg-indigo-500/20",
    iconHoverText: "group-hover:text-indigo-400",
  },
  {
    title: "Bases de Données",
    subtitle: "Server & Data",
    skills: ["PostgreSQL", "SQLite", "MySQL"],
    icon: Database,
    colSpan: "md:col-span-2",
    hoverBorder: "group-hover:border-emerald-500/50",
    hoverShadow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
    iconHoverBg: "group-hover:bg-emerald-500/20",
    iconHoverText: "group-hover:text-emerald-400",
  },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="px-6 py-24 relative overflow-hidden bg-gradient-to-br from-[#0d1f3c] via-[#122a4d] to-[#0d1f3c]">
      {/* Glowing Orbs - More visible */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[80px] animate-orb-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-orb-pulse" />

      {/* Animated Wave - Bottom Left going opposite direction */}
      <svg
        className="absolute bottom-0 left-0 w-[700px] h-[350px] opacity-15 pointer-events-none rotate-180"
        viewBox="0 0 700 350"
        preserveAspectRatio="none"
      >
        <path
          d="M0,175 Q175,125 350,175 T700,175"
          fill="none"
          stroke="rgba(139, 92, 246, 0.4)"
          strokeWidth="1"
          className="animate-wave"
        />
        <path
          d="M0,205 Q175,155 350,205 T700,205"
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1"
          className="animate-wave"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 text-foreground">
        <div className="mb-16 space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">Compétences & Atouts</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Compétences Techniques
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`
                group relative p-8 rounded-[2rem] overflow-hidden 
                bg-card/30 border border-primary/5 backdrop-blur-md
                hover:bg-card/40 hover:scale-[1.01] 
                transition-all duration-500
                ${category.colSpan}
                ${category.hoverBorder}
                ${category.hoverShadow}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              {/* Header Section */}
              <div className="flex items-start gap-5 mb-8">
                {/* Icon Container with Illumination Animation */}
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 
                  bg-primary/10 text-primary/80 shadow-inner border border-primary/10 
                  transition-all duration-500 ease-out
                  ${category.iconHoverBg} 
                  ${category.iconHoverText}
                  group-hover:scale-110 group-hover:rotate-3
                `}>
                  <category.icon className="w-7 h-7 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_currentColor]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1 font-sans text-foreground group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-medium tracking-wide text-sm uppercase group-hover:text-white/60 transition-colors duration-300">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Watermark Icon - Neutral but lights up on hover */}
              <category.icon
                className={`
                  absolute -bottom-12 -right-12 w-64 h-64 opacity-[0.02] 
                  rotate-12 group-hover:rotate-0 transition-all duration-700 pointer-events-none text-foreground
                  group-hover:opacity-[0.1]
                  ${category.iconHoverText}
                `}
              />

              {/* Skills Pills */}
              <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-4 py-2 rounded-xl text-sm font-semibold 
                      bg-background/50 text-muted-foreground border border-border/50 
                      transition-all duration-300 backdrop-blur-sm shadow-sm cursor-default
                      group-hover:border-white/10 group-hover:bg-white/5 group-hover:text-white
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
