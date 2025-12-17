"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Security Tools",
    skills: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Kali Linux", "OWASP ZAP"],
    color: "primary",
  },
  {
    title: "Programming & Scripting",
    skills: ["Python", "C/C++", "Bash", "PowerShell", "Go", "JavaScript"],
    color: "secondary",
  },
  {
    title: "Security Domains",
    skills: [
      "Penetration Testing",
      "Network Security",
      "Web Security",
      "Cryptography",
      "Malware Analysis",
      "Cloud Security",
    ],
    color: "accent",
  },
  {
    title: "Frameworks & Standards",
    skills: ["OWASP Top 10", "NIST Framework", "ISO 27001", "MITRE ATT&CK", "CIS Controls"],
    color: "success",
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
    <section id="skills" ref={sectionRef} className="px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-success/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-accent to-success bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-${category.color}/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? "0ms" : `${index * 150}ms`,
                transitionProperty: isVisible ? "transform, box-shadow" : "opacity, transform",
                transitionDuration: isVisible ? "500ms" : "1000ms",
              }}
            >
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full bg-${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
