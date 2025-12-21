import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <p className="text-sm font-medium text-primary">{site.person.availabilityBadge}</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {site.person.name}
          </h1>
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {site.person.role}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {site.person.summary}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all bg-transparent"
            >
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-secondary/10 hover:border-secondary/50 hover:scale-110 transition-all bg-transparent"
            >
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="hover:bg-accent/10 hover:border-accent/50 hover:scale-110 transition-all bg-transparent"
            >
              <a href={site.links.email} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  )
}
