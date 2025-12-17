"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Network Intrusion Detection System",
    description:
      "Built a machine learning-based IDS using Python and Scikit-learn to detect anomalous network traffic patterns with 95% accuracy.",
    detailedDescription:
      "This project implements a comprehensive Network Intrusion Detection System (NIDS) capable of analyzing network traffic in real-time. The system uses multiple machine learning algorithms including Random Forest, SVM, and Neural Networks to identify potential security threats. It processes packet captures, extracts relevant features, and classifies traffic as normal or malicious with 95% accuracy. The system includes a web dashboard for monitoring alerts and visualizing network statistics.",
    tech: ["Python", "Scikit-learn", "Wireshark", "TCP/IP"],
    github: "https://github.com",
    demo: null,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Secure Chat Application",
    description:
      "Developed an end-to-end encrypted messaging app implementing AES-256 encryption and RSA key exchange protocols.",
    detailedDescription:
      "A full-stack secure messaging application that ensures complete privacy through end-to-end encryption. The app uses RSA-2048 for secure key exchange and AES-256-GCM for message encryption. Features include user authentication, real-time message delivery via WebSockets, perfect forward secrecy, and message integrity verification. The application also includes group chat functionality, file sharing with encryption, and secure session management.",
    tech: ["Go", "WebSockets", "Cryptography", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Vulnerability Scanner",
    description:
      "Created an automated web application security scanner that identifies OWASP Top 10 vulnerabilities with detailed reporting.",
    detailedDescription:
      "An automated security scanner designed to identify common web application vulnerabilities based on the OWASP Top 10. The tool performs comprehensive scans including SQL injection detection, XSS vulnerability testing, CSRF token validation, security header analysis, and authentication/authorization flaws. It generates detailed reports with severity ratings, proof of concepts, and remediation recommendations. The scanner supports both authenticated and unauthenticated scans.",
    tech: ["Python", "BeautifulSoup", "SQLMap", "OWASP"],
    github: "https://github.com",
    demo: null,
    gradient: "from-accent/20 to-success/20",
  },
  {
    title: "Ransomware Analysis Lab",
    description:
      "Set up an isolated environment for analyzing ransomware behavior, documenting encryption methods and IOCs.",
    detailedDescription:
      "A controlled virtual environment specifically designed for safe malware analysis. This lab includes multiple isolated VMs with network monitoring tools, process monitors, and memory analysis utilities. The setup allows for dynamic and static analysis of ransomware samples, tracking file system modifications, network communications, registry changes, and encryption patterns. Documentation includes detailed IOC extraction, YARA rules creation, and behavioral analysis reports that help in developing detection signatures.",
    tech: ["Virtual Machines", "IDA Pro", "Malware Analysis", "Reverse Engineering"],
    github: null,
    demo: null,
    gradient: "from-success/20 to-primary/20",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

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
              onClick={() => openProjectModal(project)}
              className={`flex flex-col group relative overflow-hidden cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transition: isVisible
                  ? "transform 0.15s ease, box-shadow 0.15s ease"
                  : `opacity 1s ease ${index * 150}ms, transform 1s ease ${index * 150}ms`,
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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl pr-8">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-primary">Detailed Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedProject.github && (
                    <Button variant="default" asChild className="flex-1">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button variant="secondary" asChild className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
