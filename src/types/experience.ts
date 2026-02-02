export type ThemeColor = "purple" | "orange" | "green" | "blue" | "cyan" | "indigo"

export interface Experience {
    id: string
    title: string
    company: string
    location: string
    period: string
    description: string
    technologies: string[]
    logo?: string
    theme: ThemeColor
}

export interface Education {
    id: string
    degree: string
    institution: string
    location: string
    period: string
    description?: string
    fieldOfStudy?: string
    logo?: string
    theme: ThemeColor
}

export type TimelineItem =
    | (Experience & { type: 'experience' })
    | (Education & { type: 'education' })
