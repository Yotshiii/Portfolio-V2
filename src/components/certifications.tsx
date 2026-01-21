"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    status: "Earned",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "In Progress",
    status: "In Progress",
  },
  {
    name: "AWS Certified Security",
    issuer: "Amazon Web Services",
    date: "Planned 2025",
    status: "Planned",
  },
]

const achievements = [
  "Top 10% in HackTheBox platform rankings",
  "Winner of University CTF Competition 2024",
  "15+ CVEs submitted to security researchers",
  "Contributed to 3 open-source security tools",
]

export function Certifications() {
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
    <section id="certifications" ref={sectionRef} className="px-6 py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warning/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          Certifications & Achievements
        </h2>

        <div className="space-y-8">
          <div>
            <h3
              className={`text-2xl font-semibold mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
            >
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.name}
                  className={`transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-warning/20 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Award className="h-5 w-5 text-warning group-hover:text-primary transition-colors duration-150" />
                      <Badge
                        variant={cert.status === "Earned" ? "default" : "secondary"}
                        className="group-hover:scale-110 transition-transform duration-150"
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-4">{cert.name}</CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.date}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl font-semibold mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
            >
              Achievements
            </h3>
            <Card
              className={`transition-all duration-200 hover:shadow-xl hover:shadow-success/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li
                      key={achievement}
                      className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                      style={{
                        transitionDelay: `${900 + index * 100}ms`,
                      }}
                    >
                      <span className="text-success mt-1 font-bold">•</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
