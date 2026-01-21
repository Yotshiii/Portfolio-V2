"use client"

import { useEffect, useState } from "react"

interface MatrixTextProps {
    texts: string[]
    className?: string
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*"

export function MatrixText({ texts, className }: MatrixTextProps) {
    const [displayText, setDisplayText] = useState(texts[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout
        let timeout: NodeJS.Timeout
        let iteration = 0
        let isDeleting = false

        const animate = () => {
            const currentString = texts[currentIndex]

            interval = setInterval(() => {
                setDisplayText((prev) =>
                    currentString
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return currentString[index]
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)]
                        })
                        .join("")
                )

                if (iteration >= currentString.length) {
                    clearInterval(interval)
                    // Wait before switching
                    timeout = setTimeout(() => {
                        const nextIndex = (currentIndex + 1) % texts.length
                        setCurrentIndex(nextIndex)
                        // Reset for next string
                        iteration = 0
                    }, 3000)
                }

                iteration += 1 // Faster reveal
            }, 20)
        }

        animate()

        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [currentIndex, texts])

    return (
        <span className={`font-mono ${className}`}>
            {displayText}
        </span>
    )
}
