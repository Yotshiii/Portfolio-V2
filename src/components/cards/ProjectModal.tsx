"use client"

import React, { useState, useEffect, useMemo } from 'react';
import type { Project3D } from "@/types/project-3d";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, FileText, Layers, Cpu, Award, Globe, Github, FileDown, Presentation } from "lucide-react";

interface Props {
  project: Project3D;
  clickedRect: DOMRect | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, clickedRect, onClose, onNext, onPrev }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [fullScreenImg, setFullScreenImg] = useState<string | null>(null);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const gallery = useMemo(() => {
    const imgs = project.images && project.images.length > 0 ? project.images : [project.image];
    return imgs;
  }, [project]);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [project.id]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleNextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideDirection('left');
    setTimeout(() => {
      onNext();
      setSlideDirection(null);
    }, 300);
  };

  const handlePrevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSlideDirection('right');
    setTimeout(() => {
      onPrev();
      setSlideDirection(null);
    }, 300);
  };

  const openLightbox = (img: string) => {
    setFullScreenImg(img);
  };

  const closeLightbox = () => {
    setFullScreenImg(null);
  };

  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    zIndex: 210,
    transition: 'all 0.5s cubic-bezier(0.85, 0, 0.15, 1)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (!isMounted || isClosing) {
    Object.assign(modalStyle, {
      top: clickedRect?.top || 0,
      left: clickedRect?.left || 0,
      width: clickedRect?.width || '100%',
      height: clickedRect?.height || '100%',
      borderRadius: '10px',
      opacity: 0,
    });
  } else {
    Object.assign(modalStyle, {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      background: 'rgba(0, 0, 0, 0.6)', // Darker dim for better contrast
      backdropFilter: 'blur(10px)', // Global blur effect
      opacity: 1,
    });
  }

  // Helper for section headers
  const SectionHeader = ({ icon: Icon, title, className = "" }: { icon: any, title: string, className?: string }) => (
    <div className={`flex items-center gap-3 mb-4 text-primary ${className}`}>
      <div className="p-2 rounded-lg bg-primary/10">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-lg uppercase tracking-wide text-foreground/90">{title}</h3>
    </div>
  );

  return (
    <>
      <div style={modalStyle}>
        <div className={`relative w-full max-w-7xl flex items-center justify-center gap-6 transition-all duration-500 px-4 h-[90vh] ${isMounted && !isClosing ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}>

          {/* Previous Project Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevProject}
            className="hidden xl:flex h-12 w-12 rounded-full border border-white/10 bg-black/20 hover:bg-primary/20 hover:border-primary/50 text-white/70 hover:text-primary transition-all backdrop-blur-sm"
            title="Previous Project"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className={`w-full bg-background/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full transition-all duration-300 ${slideDirection === 'left' ? '-translate-x-full opacity-0' : slideDirection === 'right' ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}>
            {/* Left Side - Image Carousel */}
            <div className="w-full md:w-[45%] relative h-[30vh] md:h-full overflow-hidden group/img bg-black/50">
              {gallery.map((img, idx) => (
                <img
                  key={`${project.id}-${idx}`}
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  onClick={() => openLightbox(img)}
                  className={`absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity duration-700 ease-in-out ${idx === currentImgIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Gallery Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {gallery.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImgIndex ? 'w-8 bg-primary' : 'w-2 bg-white/40'
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-[55%] flex flex-col h-full bg-card/30">
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border/50 bg-background/50 backdrop-blur-sm sticky top-0 z-20">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                        {project.category}
                      </span>
                    </div>
                    <h2 key={project.title} className="text-3xl md:text-4xl font-black text-foreground tracking-tight">{project.title}</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="rounded-full h-10 w-10 bg-background/50 hover:bg-destructive/10 hover:text-destructive border border-border/50 transition-colors shrink-0"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 custom-scrollbar">

                {/* Context Section */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <SectionHeader icon={FileText} title="Contexte du Projet" />
                  <p key={project.description} className="text-muted-foreground text-lg leading-relaxed pl-2 border-l-2 border-primary/20">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Section */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <SectionHeader icon={Cpu} title="Technologies & Outils" />
                  <div className="flex flex-wrap gap-2.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3.5 py-1.5 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded-md text-sm font-medium text-secondary-foreground transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dynamic Blocks (Features & Competencies) */}
                {project.blocks && project.blocks.length > 0 && (
                  <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    {(() => {
                      const processedGroups = new Set<string>();
                      return project.blocks!.map((block, idx) => {
                        // Default icon based on group or title guess
                        let IconToUse = Layers;
                        let groupTitle = block.title;

                        if (block.groupId === 'fonctionnalites' || block.title.toLowerCase().includes('fonction')) {
                          IconToUse = Layers;
                          groupTitle = "Fonctionnalités Clés";
                        } else if (block.groupId === 'resultats' || block.title.toLowerCase().includes('compétence')) {
                          IconToUse = Award;
                          groupTitle = "Compétences Acquises";
                        } else if (block.groupId === 'architecture') {
                          IconToUse = Globe;
                          groupTitle = "Architecture Technique";
                        }


                        if (block.groupId && processedGroups.has(block.groupId)) {
                          return null;
                        }

                        if (block.groupId) {
                          processedGroups.add(block.groupId);
                          const groupedBlocks = project.blocks!.filter(b => b.groupId === block.groupId);
                          return (
                            <div key={block.groupId}>
                              <SectionHeader icon={IconToUse} title={groupTitle} />
                              <div className="grid grid-cols-1 gap-4">
                                {groupedBlocks.map((groupedBlock, groupIdx) => (
                                  <div key={groupIdx} className="bg-card/50 rounded-xl p-5 border border-border/60 hover:border-primary/30 transition-all shadow-sm">
                                    {groupedBlocks.length > 1 && (
                                      <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-3 pb-2 border-b border-border/50">
                                        {groupedBlock.title}
                                      </h4>
                                    )}

                                    {groupedBlock.content && (
                                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{groupedBlock.content}</p>
                                    )}
                                    {groupedBlock.items && groupedBlock.items.length > 0 && (
                                      <ul className="space-y-2">
                                        {groupedBlock.items.map((item, itemIdx) => (
                                          <li key={itemIdx} className="flex items-start gap-2.5 text-muted-foreground text-sm group/item">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/item:bg-primary transition-colors flex-shrink-0"></span>
                                            <span className="leading-relaxed">{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        // Standalone block fallbacks
                        return (
                          <div key={idx} className="bg-card/50 rounded-xl p-5 border border-border">
                            <h4 className="text-foreground font-bold mb-2">{block.title}</h4>
                            {block.items && <ul className="list-disc pl-5">{block.items.map(i => <li key={i}>{i}</li>)}</ul>}
                          </div>
                        );
                      });
                    })()}
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-6 md:p-8 border-t border-border/50 bg-background/50 backdrop-blur-sm flex flex-col gap-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 h-auto rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Github className="w-5 h-5" />
                  <span>Accéder au projet sur GitHub</span>
                </Button>

                {/* Download Buttons Group */}
                {(project.downloadReport1 || project.downloadReport2 || project.downloadPresentation) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.downloadReport1 && (
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary h-auto py-3 flex flex-col items-center gap-1 text-xs"
                        onClick={() => window.open(project.downloadReport1, '_blank')}
                      >
                        <FileDown className="w-4 h-4 mb-1" />
                        <span>Rapport 1</span>
                      </Button>
                    )}
                    {project.downloadReport2 && (
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary h-auto py-3 flex flex-col items-center gap-1 text-xs"
                        onClick={() => window.open(project.downloadReport2, '_blank')}
                      >
                        <FileDown className="w-4 h-4 mb-1" />
                        <span>Rapport 2</span>
                      </Button>
                    )}
                    {project.downloadPresentation && (
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary h-auto py-3 flex flex-col items-center gap-1 text-xs"
                        onClick={() => window.open(project.downloadPresentation, '_blank')}
                      >
                        <Presentation className="w-4 h-4 mb-1" />
                        <span>Présentation</span>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Next Project Arrow - Desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextProject}
            className="hidden xl:flex h-12 w-12 rounded-full border border-white/10 bg-black/20 hover:bg-primary/20 hover:border-primary/50 text-white/70 hover:text-primary transition-all backdrop-blur-sm"
            title="Next Project"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {fullScreenImg && (
        <div
          className="fixed inset-0 z-[300] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground hover:bg-white/10 rounded-full h-12 w-12"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </Button>

          <img
            src={fullScreenImg}
            alt="Full screen project"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl transition-transform duration-500 scale-100 ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectModal;
