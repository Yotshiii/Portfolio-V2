"use client"

import type { MouseEvent } from "react"
import { useEffect, useMemo, useState, useRef } from "react"
import { PROJECTS_3D } from "@/data/projects-3d"
import ProjectCard from "@/components/cards/ProjectCard"
import ProjectModal from "@/components/cards/ProjectModal"
import type { Project3D } from "@/types/project-3d"
import { Filter, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects3D() {
  const projects = PROJECTS_3D

  const [activeProject, setActiveProject] = useState<Project3D | null>(null)
  const [clickedRect, setClickedRect] = useState<DOMRect | null>(null)
  const [loadingProjectId, setLoadingProjectId] = useState<string | null>(null)

  // Filter state
  const [filter, setFilter] = useState<string>("TOUT")
  const [visibleCount, setVisibleCount] = useState<number>(6)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  // Refs for FLIP animation
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const prevButtonTop = useRef<number | null>(null)

  // Height animation refs/state
  const contentRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<string | number>("auto")

  // Handle height animation on visibleCount change
  useEffect(() => {
    // Determine the element to measure (innerRef is preferred for natural height)
    const measureRef = innerRef.current || contentRef.current
    if (!measureRef) return

    // Use requestAnimationFrame to ensure the browser has painted the previous frame
    requestAnimationFrame(() => {
      // Create a microtask to read height after reflow
      if (measureRef) {
        setContentHeight(measureRef.scrollHeight)
      }
    })

    // Reset to auto after transition
    const cleanupTimer = setTimeout(() => {
      setContentHeight("auto")
    }, 700)

    return () => {
      clearTimeout(cleanupTimer)
    }
  }, [visibleCount])

  useEffect(() => {
    if (!contentRef.current) return

    // Just rendered with new items. The height has effectively changed in DOM flow.
    // But we wrapped it. 
    // If we want to animate FROM old height TO new height:

    // We can't easily capture "old height" here effectively without layout effect ref pattern.
    // Instead we will rely on FLIP + css transition if we set height explicitly.

    // Simplified specific height animation:
    const el = contentRef.current

    // 1. Measure full height
    const targetHeight = el.scrollHeight

    // 2. Set height to this pixel value to allow transition (if it was previously auto)
    // But if we want to transition TO this, we needed to start at Old Height.

    // To do this properly:
    // a. Before render (handleShowMore), save current height in ref.
    // b. Set state 'height' to that pixel value.
    // c. Render happens.
    // d. LayoutEffect/Effect: Measure new scrollHeight.
    // e. Set state 'height' to new pixel value. transition runs.
    // f. Timeout -> set 'height' to 'auto'

  }, [visibleCount])

  const activeIndex = useMemo(() => {
    if (!activeProject) return -1
    return projects.findIndex((p) => p.id === activeProject.id)
  }, [activeProject, projects])

  const isModalOpen = Boolean(activeProject && clickedRect)

  // Unique categories for filter
  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category))
    return ["TOUT", ...Array.from(cats)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (filter === "TOUT") return projects
    return projects.filter(p => p.category === filter)
  }, [projects, filter])

  useEffect(() => {
    if (!isModalOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isModalOpen])

  // Mouse move handler for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  // Layout Effect for smooth FLIP animation of the button container
  useEffect(() => {
    const container = buttonContainerRef.current
    if (!container || prevButtonTop.current === null) return

    const currentTop = container.getBoundingClientRect().top
    const delta = prevButtonTop.current - currentTop

    // Invert: Apply transform to put it back where it was
    if (delta !== 0) {
      container.style.transition = 'none'
      container.style.transform = `translateY(${delta}px)`

      // Force reflow
      container.getBoundingClientRect()

      // Play: Animate to zero
      container.style.transition = 'transform 700ms cubic-bezier(0.25, 0.8, 0.25, 1)'
      container.style.transform = 'translateY(0)'
    }

    // Reset
    prevButtonTop.current = null
  }, [visibleCount])

  const handleProjectClick = (project: Project3D, event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    setClickedRect(rect)
    setActiveProject(project)
    setLoadingProjectId(project.id)
  }

  const handleTerminalComplete = () => {
    window.setTimeout(() => setLoadingProjectId(null), 50)
  }

  const handleCloseModal = () => {
    setActiveProject(null)
    setClickedRect(null)
    setLoadingProjectId(null)
  }

  const goNext = () => {
    if (activeIndex < 0) return
    const next = projects[(activeIndex + 1) % projects.length]
    setActiveProject(next)
  }

  const goPrev = () => {
    if (activeIndex < 0) return
    const prev = projects[(activeIndex - 1 + projects.length) % projects.length]
    setActiveProject(prev)
  }

  const handleShowMore = () => {
    if (buttonContainerRef.current) prevButtonTop.current = buttonContainerRef.current.getBoundingClientRect().top
    if (contentRef.current) {
      // Lock current height
      setContentHeight(contentRef.current.offsetHeight)
    }
    setVisibleCount(prev => prev + 6)
  }

  const handleShowLess = () => {
    if (buttonContainerRef.current) prevButtonTop.current = buttonContainerRef.current.getBoundingClientRect().top
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight)
    }
    setVisibleCount(6)
  }

  // Animate height after render
  useEffect(() => {
    if (!contentRef.current) return

    // Use requestAnimationFrame to ensure the browser has painted the previous frame (height locked)
    // before we start the transition to the new height.
    requestAnimationFrame(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    })

    // Reset to auto after transition
    const cleanupTimer = setTimeout(() => {
      setContentHeight("auto")
    }, 700) // Match duration

    return () => {
      clearTimeout(cleanupTimer)
    }
  }, [visibleCount])

  return (
    <section
      id="projects-3d"
      ref={sectionRef}
      className="px-6 py-24 relative overflow-hidden bg-background min-h-screen flex flex-col items-center"
    >
      {/* Dynamic Grid Background with Spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary), 0.05), transparent 40%),
            linear-gradient(rgba(var(--background), 0.9), rgba(var(--background), 0.9))
          `
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1600px] w-full relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8 pt-12">
          <div className="relative group">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              PROJETS
            </h2>
          </div>

          {/* Command Line Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-xl bg-card/30 backdrop-blur-md border border-primary/10 shadow-lg">
            <div className="px-3 py-1 flex items-center gap-2 text-xs font-mono text-muted-foreground border-r border-border/50">
              <Terminal className="w-3 h-3" />
              <span>FILTRE:</span>
            </div>
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => { setFilter(cat); setVisibleCount(6); }}
                variant="ghost"
                size="sm"
                className={`
                  relative px-4 py-1.5 h-auto text-xs font-mono tracking-wider transition-all duration-300
                  ${filter === cat
                    ? "bg-primary/20 text-primary border border-primary/30 shadow-[0_0_10px_rgba(var(--primary),0.2)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }
                `}
              >
                {filter === cat && (
                  <span className="absolute inset-0 border border-primary/50 animate-pulse rounded-md pointer-events-none"></span>
                )}
                {cat}
              </Button>
            ))}
            <div className="ml-2 px-2 text-primary/50 hidden sm:block">
              <Sparkles className="w-3 h-3 animate-spin duration-[3000ms]" />
            </div>
          </div>
        </div >

        {/* Dynamic Content Wrapper for Height Animation */}
        < div
          ref={contentRef}
          className="transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] overflow-hidden"
          style={{ height: contentHeight }
          }
        >
          <div ref={innerRef}>
            {/* Projects Grid to Flex */}
            <div className="flex flex-wrap justify-center gap-8 perspective-[1000px]">
              {filteredProjects.slice(0, visibleCount).map((project, index) => (
                <div
                  key={project.id}
                  className="animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard
                    project={project}
                    isLoading={loadingProjectId === project.id}
                    onTerminalComplete={handleTerminalComplete}
                    onClick={handleProjectClick}
                  />
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className="w-full py-20 text-center text-muted-foreground font-mono">
                  <p>{`> Aucun projet trouvé pour: "${filter}"`}</p>
                </div>
              )}
            </div>

            {/* Pagination Buttons */}
            <div ref={buttonContainerRef} className="mt-16 flex justify-center gap-4 pb-2">
              {filteredProjects.length > visibleCount && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShowMore}
                  className="font-mono text-xs tracking-widest uppercase border-primary/20 hover:bg-primary/10 hover:text-primary transition-all hover:scale-105"
                >
                  Plus de projets_
                </Button>
              )}

              {visibleCount > 6 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShowLess}
                  className="font-mono text-xs tracking-widest uppercase border-primary/20 hover:bg-primary/10 hover:text-primary transition-all hover:scale-105"
                >
                  Moins de projets_
                </Button>
              )}
            </div>
          </div>
        </div >
      </div >

      {
        activeProject && clickedRect && loadingProjectId === null && (
          <ProjectModal
            project={activeProject}
            clickedRect={clickedRect}
            onClose={handleCloseModal}
            onNext={goNext}
            onPrev={goPrev}
          />
        )
      }
    </section >
  )
}
