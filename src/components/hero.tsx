import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"
import { MatrixText } from "@/components/ui/matrix-text"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start md:px-20 px-6 py-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float opacity-50 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed opacity-50 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow opacity-30" />
      </div>

      <div className="max-w-5xl w-full relative z-10 text-left">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg shadow-primary/5 hover:bg-primary/15 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <p className="text-sm font-medium text-primary tracking-wide uppercase text-[10px] sm:text-xs">
              {site.person.availabilityBadge}
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2">
              {site.person.name}
            </h1>

            <div className="h-[4rem] text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground flex items-center justify-center md:justify-start">
              <MatrixText
                texts={[
                  "Apprenti architecte cybersécurité",
                  "Etudiant ingénieur en informatique spécialisé en cybersécurité"
                ]}
                className="text-primary/90"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0 text-justify">
            {site.person.summary}
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-12 w-12 rounded-xl bg-background/50 border-input/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 group-hover:fill-current" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-12 w-12 rounded-xl bg-background/50 border-input/50 backdrop-blur-sm hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/25 transition-all duration-300 group"
            >
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 group-hover:fill-current" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-12 w-12 rounded-xl bg-background/50 border-input/50 backdrop-blur-sm hover:bg-destructive hover:text-white hover:border-destructive hover:scale-110 hover:shadow-lg hover:shadow-destructive/25 transition-all duration-300 group"
            >
              <a href={site.links.email} aria-label="Email">
                <Mail className="h-5 w-5 group-hover:fill-current" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorer</span>
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
