"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Network Intrusion Detection System",
    description:
      "Built a machine learning-based IDS using Python and Scikit-learn to detect anomalous network traffic patterns with 95% accuracy.",
    tech: ["Python", "Scikit-learn", "Wireshark", "TCP/IP"],
    github: "https://github.com",
    demo: null,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Secure Chat Application",
    description:
      "Developed an end-to-end encrypted messaging app implementing AES-256 encryption and RSA key exchange protocols.",
    tech: ["Go", "WebSockets", "Cryptography", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Vulnerability Scanner",
    description:
      "Created an automated web application security scanner that identifies OWASP Top 10 vulnerabilities with detailed reporting.",
    tech: ["Python", "BeautifulSoup", "SQLMap", "OWASP"],
    github: "https://github.com",
    demo: null,
    gradient: "from-accent/20 to-success/20",
  },
  {
    title: "Ransomware Analysis Lab",
    description:
      "Set up an isolated environment for analyzing ransomware behavior, documenting encryption methods and IOCs.",
    tech: ["Virtual Machines", "IDA Pro", "Malware Analysis", "Reverse Engineering"],
    github: null,
    demo: null,
    gradient: "from-success/20 to-primary/20",
  },
]

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="px-6 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`flex flex-col group relative overflow-hidden transition-all duration-150 hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? "0ms" : `${index * 150}ms`,
                transitionProperty: isVisible ? "transform, box-shadow" : "opacity, transform",
                transitionDuration: isVisible ? "150ms" : "1000ms",
              }}
            >
              <div className="absolute inset-0 transition-transform duration-150 group-hover:scale-105" />

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-150`}
              />

              <CardHeader className="relative z-10">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="group-hover:border-primary/50 transition-colors duration-150"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-primary/20 hover:border-primary/50 bg-transparent transition-all duration-150"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:bg-secondary/20 hover:border-secondary/50 bg-transparent transition-all duration-150"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
