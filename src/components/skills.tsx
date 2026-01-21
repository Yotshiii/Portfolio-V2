"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Globe, Database, Shield, Network, Server, Box, Terminal, Cpu, Layers, Cloud, Lock, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Langages de Programmation",
    skills: ["Python", "Bash"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    icon: Code2,
  },
  {
    title: "Technologies Web",
    skills: ["HTML5", "CSS3", "React", "Node.js", "Express"],
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    icon: Globe,
  },
  {
    title: "Bases de Données",
    skills: ["PostgreSQL", "SQLite", "MySQL"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    icon: Database,
  },
  {
    title: "Cybersécurité",
    skills: ["Audit", "Pentesting", "RootMe", "TryHackMe", "SentinelOne", "Darktrace"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    icon: Shield,
  },
  {
    title: "Réseaux",
    skills: ["Cisco", "HP Aruba", "Dell", "Palo Alto", "StormShield", "Watchguard", "pfSense"],
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    icon: Network,
  },
  {
    title: "Administration Système",
    skills: ["Grafana", "PRTG", "Splunk", "Windows Server", "Active Directory", "DNS/DHCP", "IIS", "Linux", "Apache", "Bind", "Postfix"],
    color: "text-slate-400",
    bgColor: "bg-slate-500/10",
    borderColor: "border-slate-500/20",
    icon: Server,
  },
  {
    title: "Virtualisation",
    skills: ["VirtualBox", "VMware ESXi", "Docker"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    icon: Box,
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
    <section id="skills" ref={sectionRef} className="px-6 py-24 relative overflow-hidden bg-background">
      {/* Background with deep gradients */}
      <div className="absolute inset-0 bg-[#020617] opacity-50 -z-20"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Skills Techniques
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative p-8 rounded-3xl bg-[#0B1221] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Watermark Icon */}
              <category.icon
                className={`absolute -top-6 -right-6 w-48 h-48 opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 ${category.color}`}
              />

              {/* Header */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className={`p-3.5 rounded-2xl ${category.bgColor} border border-white/5 ${category.color} shadow-lg shadow-black/20`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-[#162032] text-slate-300 border border-white/5 hover:border-white/10 hover:bg-[#1C283F] hover:text-white transition-all duration-300 cursor-default"
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
