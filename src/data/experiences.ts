import type { Experience } from "@/types/experience"

export const EXPERIENCES: Experience[] = [
    {
        id: "exp-1",
        title: "Architecte Cybersécurité",
        company: "SPIE ICS",
        location: "Bron, France",
        period: "2024 - Présent",
        description: "Conception et mise en œuvre de solutions de sécurité pour protéger les infrastructures IT. Audit de sécurité, pentesting et réponse aux incidents.",
        technologies: ["SentinelOne", "Darktrace", "Palo Alto", "SIEM", "EDR", "XDR", "Zero Trust"],
        theme: "purple",
    },
    {
        id: "exp-2",
        title: "Technicien IT",
        company: "ADS",
        location: "Les Arcs, France - (Station de ski)",
        period: "2022 - 2024",
        description: "Administration des systèmes Linux et Windows, gestion de l'infrastructure réseau et supervision des services.",
        technologies: ["Windows Server", "VMware", "HP Aruba", "Active Directory", "PRTG"],
        theme: "blue",
    },
]
