"use client"

import React, { useState, useRef, useMemo, useCallback } from 'react';
import type { Project3D } from "@/types/project-3d";
import TerminalOverlay from '@/components/cards/TerminalOverlay';

interface Props {
  project: Project3D;
  isLoading: boolean;
  onTerminalComplete: () => void;
  onClick: (project: Project3D, event: React.MouseEvent) => void;
}

const ProjectCard: React.FC<Props> = ({ project, isLoading, onTerminalComplete, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const mouseLeaveDelayRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current || isLoading) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    setMouseX(x);
    setMouseY(y);
  }, [isLoading]);

  const handleMouseEnter = useCallback(() => {
    if (mouseLeaveDelayRef.current) {
      clearTimeout(mouseLeaveDelayRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseLeaveDelayRef.current = window.setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  }, []);

  const cardStyle = useMemo(() => {
    if (!cardRef.current) return {};
    const width = cardRef.current.offsetWidth;
    const height = cardRef.current.offsetHeight;
    const rX = (mouseX / width) * 30;
    const rY = (mouseY / height) * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }, [mouseX, mouseY]);

  const cardBgTransform = useMemo(() => {
    const base = { backgroundImage: `url(${project.image})` }
    if (!cardRef.current) {
      return { ...base, transform: "translateX(0px) translateY(0px)" }
    }
    const width = cardRef.current.offsetWidth || 1
    const height = cardRef.current.offsetHeight || 1
    const tX = (mouseX / width) * -40
    const tY = (mouseY / height) * -40

    return { ...base, transform: `translateX(${tX}px) translateY(${tY}px)` }
  }, [mouseX, mouseY, project.image])


  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => onClick(project, e)}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={cardBgTransform}></div>

        {/* Terminal Overlay when active - embedded within the card's 3D container */}
        {isLoading && (
          <TerminalOverlay
            projectName={project.title}
            onComplete={onTerminalComplete}
          />
        )}

        {/* Removed transition-opacity duration-300 as it conflicts with custom CSS */}
        {/* Removed transition-opacity duration-300 as it conflicts with custom CSS */}
        <div className={`card-info ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <h1>{project.title}</h1>
          <p>{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/10 font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/10 font-bold uppercase tracking-widest">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
