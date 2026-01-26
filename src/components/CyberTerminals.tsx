"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal"
import { Shield, Skull, Zap, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

type Phase = "idle" | "attack" | "success"

export function CyberTerminals() {
    const [phase, setPhase] = useState<Phase>("idle")
    const [attackStep, setAttackStep] = useState(0)
    const [defenseStep, setDefenseStep] = useState(0)
    const [cycleCount, setCycleCount] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef as React.RefObject<Element>, { once: false, amount: 0.3 })

    // Reset function for looping
    const resetAnimation = useCallback(() => {
        setPhase("idle")
        setAttackStep(0)
        setDefenseStep(0)
        setCycleCount(prev => prev + 1)
    }, [])

    // Start animation when in view or after reset
    useEffect(() => {
        if (isInView && phase === "idle") {
            const startTimeout = setTimeout(() => setPhase("attack"), 500)
            return () => clearTimeout(startTimeout)
        }
    }, [isInView, phase, cycleCount])

    // Attack sequence timing - SLOWER (2500ms between steps)
    useEffect(() => {
        if (phase !== "attack") return

        const timings = [0, 2500, 5000, 7500, 10000, 12500]
        const timeouts: NodeJS.Timeout[] = []

        timings.forEach((delay, index) => {
            const timeout = setTimeout(() => {
                setAttackStep(index + 1)
                if (index >= 1) setDefenseStep(index)
                if (index === timings.length - 1) {
                    setTimeout(() => {
                        setPhase("success")
                        // Loop back after success display
                        setTimeout(() => resetAnimation(), 3000)
                    }, 2500)
                }
            }, delay)
            timeouts.push(timeout)
        })

        return () => timeouts.forEach(clearTimeout)
    }, [phase, resetAnimation, cycleCount])

    // Get icon/color based on phase
    const getStatusIcon = () => {
        switch (phase) {
            case "idle":
                return <Zap className="w-5 h-5 text-gray-400" />
            case "attack":
                return attackStep > 4
                    ? <Shield className="w-5 h-5 text-green-400 animate-pulse" />
                    : <Skull className="w-5 h-5 text-red-400 animate-pulse" />
            case "success":
                return <CheckCircle className="w-5 h-5 text-green-400" />
            default:
                return <Zap className="w-5 h-5 text-gray-400" />
        }
    }

    const getConnectionColor = () => {
        if (phase === "success") return "from-green-500/50 to-green-500/50"
        if (phase === "attack" && attackStep > 4) return "from-red-500/30 via-yellow-500/50 to-green-500/50"
        if (phase === "attack") return "from-red-500/50 to-red-500/30"
        return "from-gray-500/30 to-gray-500/30"
    }

    return (
        <div ref={containerRef} className="relative flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
            {/* Attack Terminal with floating effect */}
            <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute -top-3 left-4 px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded text-xs text-red-400 font-mono flex items-center gap-1">
                    <Skull className="w-3 h-3" />
                    ATTACKER
                </div>
                <Terminal key={`attack-${cycleCount}`} className="!w-[300px] !h-[250px] !max-h-[250px] !bg-slate-900/90 !border-red-500/30 overflow-hidden">
                    <TypingAnimation className="text-red-400" duration={80}>
                        {"> nmap -sS 192.168.1.50"}
                    </TypingAnimation>
                    {attackStep >= 1 && (
                        <AnimatedSpan className="text-gray-400">
                            Scanning ports...
                        </AnimatedSpan>
                    )}
                    {attackStep >= 2 && (
                        <AnimatedSpan className="text-red-300">
                            Port 22 (SSH) - OPEN
                        </AnimatedSpan>
                    )}
                    {attackStep >= 3 && (
                        <TypingAnimation className="text-red-400" duration={80}>
                            {"> ssh root@192.168.1.50"}
                        </TypingAnimation>
                    )}
                    {attackStep >= 4 && (
                        <AnimatedSpan className="text-yellow-400">
                            Attempting brute force...
                        </AnimatedSpan>
                    )}
                    {attackStep >= 5 && (
                        <AnimatedSpan className="text-red-500 font-bold">
                            ✗ Connection refused
                        </AnimatedSpan>
                    )}
                    {attackStep >= 6 && (
                        <AnimatedSpan className="text-red-500">
                            ✗ IP blocked by firewall
                        </AnimatedSpan>
                    )}
                </Terminal>
            </motion.div>

            {/* Connection Line with Icon */}
            <div className="relative flex items-center justify-center lg:w-20 w-full h-10 lg:h-auto">
                {/* Horizontal line for desktop */}
                <div className={`hidden lg:block absolute w-full h-0.5 bg-gradient-to-r ${getConnectionColor()} transition-colors duration-500`} />

                {/* Vertical line for mobile */}
                <div className={`lg:hidden absolute h-full w-0.5 bg-gradient-to-b ${getConnectionColor()} transition-colors duration-500`} />

                {/* Animated data packets */}
                {phase === "attack" && attackStep <= 4 && (
                    <motion.div
                        className="absolute w-2 h-2 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                        animate={{
                            x: [-30, 30],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                )}

                {/* Center Icon */}
                <motion.div
                    className="relative z-10 p-2 rounded-full bg-slate-800 border border-slate-700 shadow-lg"
                    animate={{
                        scale: phase === "attack" ? [1, 1.1, 1] : 1,
                        borderColor: phase === "success" ? "rgb(34, 197, 94)" : phase === "attack" ? "rgb(239, 68, 68)" : "rgb(51, 65, 85)"
                    }}
                    transition={{ duration: 0.5, repeat: phase === "attack" ? Infinity : 0 }}
                >
                    {getStatusIcon()}
                </motion.div>
            </div>

            {/* Defense Terminal with floating effect (delayed) */}
            <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="absolute -top-3 left-4 px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-400 font-mono flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    DEFENDER
                </div>
                <Terminal key={`defense-${cycleCount}`} className="!w-[300px] !h-[250px] !max-h-[250px] !bg-slate-900/90 !border-green-500/30 overflow-hidden">
                    <TypingAnimation className="text-green-400" duration={80}>
                        {"[SIEM] Monitoring active..."}
                    </TypingAnimation>
                    {defenseStep >= 1 && (
                        <AnimatedSpan className="text-yellow-400">
                            ⚠ Alert: Port scan detected
                        </AnimatedSpan>
                    )}
                    {defenseStep >= 2 && (
                        <AnimatedSpan className="text-blue-400">
                            → Analyzing traffic pattern
                        </AnimatedSpan>
                    )}
                    {defenseStep >= 3 && (
                        <TypingAnimation className="text-green-400" duration={80}>
                            {"[IDS] Threat identified"}
                        </TypingAnimation>
                    )}
                    {defenseStep >= 4 && (
                        <AnimatedSpan className="text-green-300">
                            ✓ Firewall rule applied
                        </AnimatedSpan>
                    )}
                    {defenseStep >= 5 && (
                        <AnimatedSpan className="text-green-500 font-bold">
                            ✓ Attack blocked successfully
                        </AnimatedSpan>
                    )}
                    {phase === "success" && (
                        <AnimatedSpan className="text-green-400">
                            [LOG] Incident reported
                        </AnimatedSpan>
                    )}
                </Terminal>
            </motion.div>
        </div>
    )
}
