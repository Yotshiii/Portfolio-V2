import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"
import { MatrixText } from "@/components/ui/matrix-text"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start md:px-24 px-6 py-20 relative overflow-hidden bg-background">
      {/* Animated background gradients - Subtle and deep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
      </div>

      <div className="max-w-5xl w-full relative z-10 text-left pl-2">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">

          {/* Main Heading Group */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
              Evan JOASSON
            </h1>
            <div className="block">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent pb-3">
                Architecte Cybersécurité
              </h2>
            </div>
          </div>

          {/* Subtitle / Role - Keeping MatrixText for cool tech feel but styled as subtitle */}
          <div className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 max-w-2xl mt-4">
            <MatrixText
              texts={[
                "◉ Etudiant Ingénieur en Informatique / Cybersécurité",
                "◉ Skieur",
                "◉ Voyageur",
                "◉ Futur Motard"
              ]}
              className="text-slate-300"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mt-6">
            {site.person.summary}
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10">
            {/* Primary CTA */}
            <Button
              asChild
              className="h-14 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 group"
            >
              <a href="#projects-3d" className="flex items-center gap-2">
                Découvrir mon travail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            {/* Social Icons - Minimal */}
            <div className="flex items-center gap-4">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={site.links.email}
                className="p-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
