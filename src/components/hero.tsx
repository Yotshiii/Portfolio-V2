"use client"

import { site } from "@/content/site"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/ui/particles"
import { CyberTerminals } from "@/components/CyberTerminals"
import { MatrixText } from "@/components/ui/matrix-text"
import { Construction } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden">
      {/* Deep Blue Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />

      {/* Magic UI Particles - Behind everything else */}
      <Particles
        className="absolute inset-0 z-0 opacity-60"
        quantity={120}
        staticity={30}
        ease={80}
        size={0.8}
        color="#60a5fa"
      />

      {/* Glowing Orbs - z-10 to be above particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Large Orb - Top Right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-orb-float"
          style={{
            top: '-10%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Medium Orb - Bottom Left */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full animate-orb-float"
          style={{
            bottom: '-15%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animationDelay: '3s',
          }}
        />
        {/* Small Orb - Center Right */}
        <div
          className="absolute w-[300px] h-[300px] rounded-full animate-orb-pulse"
          style={{
            top: '40%',
            right: '15%',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Rotating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Rotating Circles - Right Side */}
        <svg
          className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] animate-spin-very-slow"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" />
        </svg>

        {/* Counter-rotating inner circles */}
        <svg
          className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] animate-spin-reverse-slow"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="0.5" strokeDasharray="10 5" />
          <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" strokeDasharray="5 10" />
        </svg>
      </div>

      {/* Animated Wave Lines - More visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <svg
          className="absolute right-0 top-1/2 w-full h-[400px] opacity-40"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 Q200,150 500,200 T1100,200 T1700,200"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            className="animate-wave-flow"
          />
          <path
            d="M-100,230 Q200,180 500,230 T1100,230 T1700,230"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            className="animate-wave-flow"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M-100,260 Q200,210 500,260 T1100,260 T1700,260"
            fill="none"
            stroke="url(#waveGradient3)"
            strokeWidth="1.5"
            className="animate-wave-flow"
            style={{ animationDelay: '2s' }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full relative z-20 md:px-12 px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">

            {/* Construction Warning Badge & Portfolio Label */}
            <div className="flex flex-col items-start gap-6">
              {/* Terminal-style construction alert */}
              <div className="animate-slide-in-left animate-glow-pulse relative overflow-hidden rounded-lg border border-amber-500/30 bg-slate-950/70 backdrop-blur-xl">
                {/* Animated gradient border glow - top edge */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] animate-border-sweep"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.8) 25%, rgba(251, 191, 36, 1) 50%, rgba(245, 158, 11, 0.8) 75%, transparent 100%)',
                    backgroundSize: '200% 100%',
                  }}
                />
                {/* Thick left amber border */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600" />
                <div className="flex items-center gap-3 pl-5 pr-5 py-2.5">
                  <span className="text-amber-500 text-sm">▸</span>
                  <Construction className="w-4 h-4 text-amber-400" />
                  <span className="font-mono text-sm text-amber-300/90 tracking-wide">
                    Site en Construction
                  </span>
                  <span className="animate-terminal-cursor font-mono text-amber-400 text-sm ml-0.5">▌</span>
                </div>
                {/* Animated gradient border glow - bottom edge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px] animate-border-sweep"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.5) 25%, rgba(251, 191, 36, 0.7) 50%, rgba(245, 158, 11, 0.5) 75%, transparent 100%)',
                    backgroundSize: '200% 100%',
                    animationDelay: '2s',
                  }}
                />
              </div>

              <span className="text-sm tracking-[0.3em] text-blue-400 font-medium uppercase">
                Portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white leading-[1.1]">
              Evan <span className="uppercase">JOASSON</span>
            </h1>

            {/* Role with blue line */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-500" />
              <MatrixText
                texts={["Architecte Cybersécurité", "Skieur", "Voyageur", "Futur Motard"]}
                className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide"
              />
            </div>

            {/* Description */}
            <p className="max-w-xl text-base sm:text-lg text-gray-400 leading-relaxed">
              {site.person.summary}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                asChild
                className="h-12 px-8 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                <a href="#projects-3d">
                  Voir mes projets
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 px-8 rounded-md bg-slate-800/80 border-slate-700 hover:bg-slate-700 text-white font-medium"
              >
                <a href="#contact">
                  Me contacter
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>

      {/* Cyber Terminals - Absolute positioned center right */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-8 xl:right-16 z-20 animate-in fade-in duration-1000 fill-mode-both">
        <CyberTerminals />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
