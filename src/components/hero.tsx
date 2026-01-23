import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/content/site"
import { MatrixText } from "@/components/ui/matrix-text"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start md:px-12 px-6 pt-32 pb-20 relative overflow-hidden bg-background">

      <div className="max-w-7xl w-full relative z-10 text-left">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">

          {/* Main Heading Group */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9]">
              Evan JOASSON
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light tracking-wide h-12">
              <MatrixText
                texts={[
                  "Architecte Cybersécurité",
                  "Skieur",
                  "Voyageur",
                  "Futur Motard"
                ]}
                className="italic"
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Je suis <span className="text-foreground font-semibold">Evan Joasson</span>, Architecte en cybersécurité.
              Actuellement en école d&apos;ingénieur informatique avec une spécialisation en cybersécurité, je construis des infrastructures sécurisées et résilientes.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button
              asChild
              className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg"
            >
              <a href="#projects-3d">
                View My Work
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-14 px-8 rounded-full border-2 border-input hover:bg-secondary text-lg"
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
