"use client"

import React, { useState, useEffect, useMemo } from 'react';
import type { Project3D } from "@/types/project-3d";

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
    // Small delay to trigger expansion transition
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Reset image index when project changes
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

  // Base dimensions and transition logic
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
    // Initial and Closing state: Matches the card dimensions
    Object.assign(modalStyle, {
      top: clickedRect?.top || 0,
      left: clickedRect?.left || 0,
      width: clickedRect?.width || '100%',
      height: clickedRect?.height || '100%',
      borderRadius: '10px',
      background: 'rgba(12, 12, 12, 1)',
    });
  } else {
    // Open state: Full screen modal
    Object.assign(modalStyle, {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      background: 'rgba(3, 7, 18, 0.95)',
      backdropFilter: 'blur(20px)',
    });
  }

  return (
    <>
      <div style={modalStyle}>
        {/* Internal Shutter Panels - contained within the expanding window */}
        <div className={`absolute top-0 left-0 w-full h-[50.5%] bg-gray-950/40 border-b border-indigo-500/20 z-[250] transition-transform duration-500 delay-100 ease-in-out ${
          isMounted && !isClosing ? '-translate-y-full' : 'translate-y-0'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-full h-[50.5%] bg-gray-950/40 border-t border-indigo-500/20 z-[250] transition-transform duration-500 delay-100 ease-in-out ${
          isMounted && !isClosing ? 'translate-y-full' : 'translate-y-0'
        }`}></div>

        <div className={`relative w-full max-w-8xl flex items-center justify-center gap-4 transition-all duration-500 px-4 ${
          isMounted && !isClosing ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}>
          
          {/* Previous Project Arrow */}
          <button 
            onClick={handlePrevProject}
            className="hidden md:flex p-4 rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all transform hover:-translate-x-1"
            title="Previous Project"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className={`w-full max-w-6xl glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row h-[720px] bg-gray-950/80 transition-all duration-300 ${
            slideDirection === 'left' ? '-translate-x-full opacity-0' : slideDirection === 'right' ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {/* Left Side - Image Carousel */}
            <div className="w-full md:w-1/2 relative h-[720px] overflow-hidden group/img">
              {gallery.map((img, idx) => (
                <img 
                  key={`${project.id}-${idx}`}
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`} 
                  onClick={() => openLightbox(img)}
                  className={`absolute inset-0 w-full h-full object-cover cursor-zoom-in transition-opacity duration-700 ease-in-out ${
                    idx === currentImgIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                />
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent pointer-events-none"></div>

              {/* Gallery Navigation Arrows */}
              {gallery.length > 1 && (
                <>
                  <button 
                    onClick={prevImg}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-500/30 border border-indigo-500/50 text-white opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-indigo-500/50 z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextImg}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-500/30 border border-indigo-500/50 text-white opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-indigo-500/50 z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {gallery.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === currentImgIndex ? 'w-6 bg-indigo-500' : 'w-2 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Side - Info */}
            <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 overflow-y-auto flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h2 key={project.title} className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{project.title}</h2>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6 flex-1">
                <p key={project.description} className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-semibold text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom Content Blocks */}
                {project.blocks && project.blocks.length > 0 && (
                  <div className="space-y-4">
                    {(() => {
                      const processedGroups = new Set<string>();
                      return project.blocks!.map((block, idx) => {
                        if (block.groupId && processedGroups.has(block.groupId)) {
                          return null;
                        }
                        if (block.groupId) {
                          processedGroups.add(block.groupId);
                          const groupedBlocks = project.blocks!.filter(b => b.groupId === block.groupId);
                          return (
                            <div key={block.groupId} className="bg-indigo-500/10 rounded-lg p-4 space-y-4 border border-indigo-500/20">
                              {groupedBlocks.map((groupedBlock, groupIdx) => (
                                <div key={groupIdx} className={groupIdx > 0 ? "pt-2 border-t border-indigo-500/10" : ""}>
                                  <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">{groupedBlock.title}</h4>
                                  {groupedBlock.content && (
                                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-2">{groupedBlock.content}</p>
                                  )}
                                  {groupedBlock.items && groupedBlock.items.length > 0 && (
                                    <ul className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-1 pl-4 mt-2">
                                      {groupedBlock.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="list-disc">{item}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return (
                          <div key={idx} className="space-y-2">
                            <h4 className="text-white font-bold text-[10px] uppercase tracking-widest">{block.title}</h4>
                            {block.content && (
                              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{block.content}</p>
                            )}
                            {block.items && block.items.length > 0 && (
                              <ul className="text-gray-400 text-xs md:text-sm leading-relaxed space-y-1 pl-4">
                                {block.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="list-disc">{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      });
                    })()}
                  </div>
                )}

                <div className="pt-8 mt-auto flex items-center justify-between gap-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20 text-sm"
                  >
                    <span>Launch</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {/* Mobile Project Navigation in Footer */}
                  <div className="flex md:hidden items-center gap-2">
                     <button onClick={onPrev} className="p-2 text-gray-400 border border-white/5 rounded-lg" title="Prev Project"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                     <button onClick={onNext} className="p-2 text-gray-400 border border-white/5 rounded-lg" title="Next Project"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Project Arrow */}
          <button 
            onClick={handleNextProject}
            className="hidden md:flex p-4 rounded-full glass border border-white/10 text-white/50 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all transform hover:translate-x-1"
            title="Next Project"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {fullScreenImg && (
        <div 
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in-up"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={fullScreenImg} 
            alt="Full screen project" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 scale-100"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectModal;
