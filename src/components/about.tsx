"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { User, ShieldCheck, Terminal, Briefcase, Users, Binoculars, Route, ScanEye } from "lucide-react"

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
    <section id="about" ref={sectionRef} className="px-6 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <User className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">Qui suis-je ?</span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-bold uppercase tracking-tight text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-400 drop-shadow-lg">
              À Propos
            </span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Card className="overflow-hidden border-primary/10 bg-card/30 backdrop-blur-md shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3 gap-0">

                {/* Left Column - New Sections */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-12 border-b lg:border-b-0 lg:border-r border-primary/10 order-2 lg:order-1">
                  <div className="space-y-4 text-right lg:text-right">
                    <h3 className="text-2xl font-semibold flex items-center justify-end gap-2">
                      Mon Expérience
                      <span className="w-1 h-8 bg-blue-500 rounded-full" />
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      J'ai eu l'opportunité de travaillé dans plusieurs entreprises et d'encore travailler dans l'une d'elle actuellement
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      Ces expérience me permettent de gagner en maturité, en compétences et en autonomie, mais aussi de m'adapter à différents environnements de travail et de découvrir un très grand nombre de technologie différentes.
                    </p>
                  </div>

                  <div className="space-y-4 text-right lg:text-right">
                    <h3 className="text-2xl font-semibold flex items-center justify-end gap-2">
                      Travail d'équipe
                      <span className="w-1 h-8 bg-purple-500 rounded-full" />
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      Croyant fermement à l'intelligence collective, j'aime collaborer mon équipe afin de trouver les solutions optimales face aux problèmes auquel nos clients font face.
                    </p>
                  </div>
                </div>

                {/* Center Column - Visual Animation */}
                <div className="relative min-h-[400px] lg:min-h-full bg-gradient-to-b from-primary/5 to-secondary/5 flex items-center justify-center p-8 overflow-hidden group order-1 lg:order-2">
                  <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

                  {/* Floating Icons Animation */}
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />

                    {/* Rotating Ring with 4 Icons */}
                    <div className="relative z-10 grid place-items-center w-full h-full border-2 border-dashed border-primary/30 rounded-full animate-[spin_20s_linear_infinite]">
                      {/* Top */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-background p-2.5 rounded-full border border-primary/20 shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                        <Route className="w-6 h-6 text-primary" />
                      </div>
                      {/* Bottom */}
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-background p-2.5 rounded-full border border-secondary/20 shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                        <ScanEye className="w-6 h-6 text-green-500" />
                      </div>
                      {/* Left */}
                      <div className="absolute top-1/2 -left-5 -translate-y-1/2 bg-background p-2.5 rounded-full border border-blue-500/20 shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                        <Briefcase className="w-6 h-6 text-blue-500" />
                      </div>
                      {/* Right */}
                      <div className="absolute top-1/2 -right-5 -translate-y-1/2 bg-background p-2.5 rounded-full border border-purple-500/20 shadow-lg animate-[spin_20s_linear_infinite_reverse]">
                        <Users className="w-6 h-6 text-purple-500" />
                      </div>
                    </div>

                    {/* Center User Icon */}
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <User className="w-16 h-16 text-foreground/80" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Existing Sections */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-12 border-t lg:border-t-0 lg:border-l border-primary/10 order-3">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      <span className="w-1 h-8 bg-primary rounded-full" />
                      Mon Parcours
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      Venant d'un BAC proffessionnel <abbr title="Réseaux Informatiques et Systèmes Communicants">RISC</abbr> et ayant ensuite pu parfaire mes compétences en intégrant un <abbr title="Bachelor Universitaire de Technologie Réseaux et Télécommunications">BUT RT</abbr>, je suis aujourd'hui en école d'ingénieur avec une spécialité en cybersécurité, alliant théorie académique et pratique professionnelle grâce à mon alternance.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      <span className="w-1 h-8 bg-green-500 rounded-full" />
                      Ma Vision
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                      Je vise à construire des infrastructures résilientes et sécurisées, en comprenant aussi bien l'attaque que la défense.
                    </p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
