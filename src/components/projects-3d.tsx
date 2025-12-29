"use client"

import type { MouseEvent } from "react"
import { useEffect, useMemo, useState } from "react"
import { PROJECTS_3D } from "@/data/projects-3d"
import ProjectCard from "@/components/cards/ProjectCard"
import ProjectModal from "@/components/cards/ProjectModal"
import type { Project3D } from "@/types/project-3d"

export function Projects3D() {
  const projects = PROJECTS_3D

  const [activeProject, setActiveProject] = useState<Project3D | null>(null)
  const [clickedRect, setClickedRect] = useState<DOMRect | null>(null)
  const [loadingProjectId, setLoadingProjectId] = useState<string | null>(null)

  const activeIndex = useMemo(() => {
    if (!activeProject) return -1
    return projects.findIndex((p) => p.id === activeProject.id)
  }, [activeProject, projects])

  const isModalOpen = Boolean(activeProject && clickedRect)

  useEffect(() => {
    if (!isModalOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isModalOpen])

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

  return (
    <section id="projects-3d" className="px-6 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Projets
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isLoading={loadingProjectId === project.id}
              onTerminalComplete={handleTerminalComplete}
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>

      {activeProject && clickedRect && loadingProjectId === null && (
        <ProjectModal
          project={activeProject}
          clickedRect={clickedRect}
          onClose={handleCloseModal}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  )
}
