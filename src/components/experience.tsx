"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { EXPERIENCES } from "@/data/experiences"
import { EDUCATION } from "@/data/education"
import type { Experience, Education } from "@/types/experience"
import { Briefcase, GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    const experiences = useMemo(() => EXPERIENCES, [])
    const education = useMemo(() => EDUCATION, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="experience" ref={sectionRef} className="py-24 relative bg-gradient-to-br from-[#0d1f3c] via-[#122a4d] to-[#0d1f3c] overflow-hidden">
            {/* --- DECORATION FROM SKILLS SECTION --- */}

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[80px] animate-orb-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-orb-pulse" />

            {/* Animated Wave - Bottom Left going opposite direction */}
            <svg
                className="absolute bottom-0 left-0 w-[700px] h-[350px] opacity-15 pointer-events-none rotate-180"
                viewBox="0 0 700 350"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,175 Q175,125 350,175 T700,175"
                    fill="none"
                    stroke="rgba(139, 92, 246, 0.4)"
                    strokeWidth="1"
                    className="animate-wave"
                />
                <path
                    d="M0,205 Q175,155 350,205 T700,205"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="1"
                    className="animate-wave"
                    style={{ animationDelay: '1.5s' }}
                />
            </svg>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Global Section Title - Left Aligned (Like Skills) */}
                <div className="mb-16 md:mb-24 space-y-6 text-left">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700`}>
                        <BookOpen className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300 tracking-wider uppercase">Carrière & Études</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Mon Parcours
                    </h2>
                    <p className={`text-slate-400 max-w-2xl text-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-200`}>
                        Une expertise forgée par des expériences concrètes et une formation solide.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-20">

                    {/* COLUMN 1: EXPERIENCE PRO */}
                    <div>
                        {/* Header */}
                        <div className={`flex items-center gap-4 mb-12 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"} transition-all duration-700`}>
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                <Briefcase className="w-6 h-6 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Expérience Pro</h2>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
                            {/* Gradient Line Overlay (Blue) */}
                            <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent h-3/4" />

                            {experiences.map((item, index) => (
                                <Card
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    color="blue"
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </div>

                    {/* COLUMN 2: FORMATION */}
                    <div>
                        {/* Header */}
                        <div className={`flex items-center gap-4 mb-12 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} transition-all duration-700 delay-200`}>
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                <GraduationCap className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Formation</h2>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
                            {/* Gradient Line Overlay (Purple) */}
                            <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent h-3/4" />

                            {education.map((item, index) => (
                                <Card
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    color="purple"
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

function Card({ item, index, color, isVisible }: { item: Experience | Education, index: number, color: "blue" | "purple", isVisible: boolean }) {
    const isExperience = 'company' in item

    // Dynamic Styles based on color prop
    const styles = {
        blue: {
            dot: "bg-blue-500 shadow-[0_0_0_4px_#0B1120] border-2 border-blue-400", // Using bg color for border simulation
            iconBox: "text-blue-400",
            hoverBorder: "group-hover:border-blue-500/30",
        },
        purple: {
            dot: "bg-purple-500 shadow-[0_0_0_4px_#0B1120] border-2 border-purple-400",
            iconBox: "text-purple-400",
            hoverBorder: "group-hover:border-purple-500/30",
        }
    }[color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative group"
        >
            {/* Timeline Dot */}
            <div className={`absolute -left-[41px] top-6 w-4 h-4 rounded-full ${styles.dot} z-10 transition-all duration-300 group-hover:scale-125`} />

            {/* Card Content - Dark Navy Theme */}
            <div className={`bg-[#0F1629] border border-slate-800/60 rounded-2xl p-6 md:p-8 hover:bg-[#131B2E] transition-all duration-300 ${styles.hoverBorder} group-hover:-translate-y-1 group-hover:shadow-xl`}>

                {/* Header: Title + Date Badge */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                            {isExperience ? (item as Experience).title : (item as Education).degree}
                        </h3>

                        {/* Subtitle with Icon */}
                        <div className={`flex items-center gap-2 font-medium ${styles.iconBox}`}>
                            {isExperience ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                            <span>
                                {isExperience ? (item as Experience).company : (item as Education).institution}
                            </span>
                        </div>
                    </div>

                    {/* Date Badge - Right Aligned Pill style */}
                    <div className="self-start px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs font-mono text-slate-400 whitespace-nowrap flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                </p>

                {/* Location - For both Experience and Education */}
                {item.location && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                    </div>
                )}

                {/* Tags (for Experience) */}
                {isExperience && (item as Experience).technologies && (
                    <div className="flex flex-wrap gap-2">
                        {(item as Experience).technologies.map(t => (
                            <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wide group-hover:border-slate-700 transition-colors">
                                {t}
                            </span>
                        ))}
                    </div>
                )}

            </div>
        </motion.div>
    )
}
