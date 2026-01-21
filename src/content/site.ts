export type SocialLink = {
  label: string
  href: string
}

export const site = {
  person: {
    name: "Evan JOASSON",
    rolePrimary: "Apprenti architecte cybersécurité,",
    roleSecondary: "Etudiant ingénieur en informatique spécialisé en cybersécurité",
    availabilityBadge: "En recherche d'un stage à l'international dès Mai 2026",
    summary:
      "Je sécurise et construis des systèmes et infrastructures sécurisées, mais j'adore aussi résoudre des problèmes complexes et apprendre de nouvelles technologies.",
  },
  meta: {
    title: "Evan JOASSON - Etudiant Ingénieur en Cybersécurité",
    description:
      "Portfolio d'un étudiant ingénieur en informatique spécialisé en cybersécurité, présentant ses compétences, projets et certifications.",
  },
  nav: [
    { name: "Home", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects-3d" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
  links: {
    github: "https://github.com/Yotshiii",
    linkedin: "https://www.linkedin.com/in/evan-joasson-143aa52b9/",
    email: "evan.joasson@gmail.com",
    resume: "/CV/EVAN_JOASSON_cybersecurity_intern.pdf",
  },
} as const
