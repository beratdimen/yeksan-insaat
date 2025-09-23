"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group"
      style={{
        background: `conic-gradient(#1A489B ${scrollProgress * 3.6}deg, rgba(26, 72, 155, 0.2) ${scrollProgress * 3.6}deg)`,
      }}
    >
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </div>
    </button>
  )
}
