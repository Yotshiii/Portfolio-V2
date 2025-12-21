export type SocialLink = {
  label: string
  href: string
}

export const site = {
  person: {
    name: "Alex Chen",
    role: "Cybersecurity Engineering Student",
    availabilityBadge: "Available for opportunities",
    summary:
      "I build secure systems and analyze vulnerabilities. Passionate about protecting digital infrastructure and solving complex security challenges.",
  },
  meta: {
    title: "Alex Chen - Cybersecurity Engineer",
    description:
      "Portfolio of a cybersecurity engineering student specializing in network security, penetration testing, and secure software development.",
  },
  nav: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:contact@example.com",
    resume: "/resume.pdf",
  },
} as const
