import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects3D } from "@/components/projects-3d"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects3D />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
