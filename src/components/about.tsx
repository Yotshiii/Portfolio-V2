"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="px-6 py-20 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          À propos
        </h2>
        <div
          className={`space-y-4 text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p>
            Je suis étudiant en ingénierie informatique avec une spécialité en cybersécurité. 
            <br />Mon objectif ? Comprendre à la fois les techniques offensives et défensives pour construire des systèmes et des infrastructures sécurisées sur le long terme.
          </p>
          <p>
            Actuellement en train de poursuivre mon diplôme en informatique / cybersécurité en alternance, j'acquiert des compétences pratiques en travaillant sur des projets réels tout en étudiant les concepts théoriques.
          </p>
        </div>
      </div>
    </section>
  )
}
