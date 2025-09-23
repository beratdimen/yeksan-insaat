"use client"

import { useState, useEffect } from "react"
import WelcomeAnimation from "../components/welcome-animation"
import HeroSection from "../components/hero-section"
import ServicesSection from "../components/services-section"
import BrandsSlider from "../components/brands-slider"
import ProjectsSection from "../components/projects-section"
import AboutSection from "../components/about-section"
import ContactCTASection from "../components/contact-cta-section"

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showWelcome && <WelcomeAnimation />}
      <HeroSection />
      <ServicesSection />
      <BrandsSlider />
      <ProjectsSection />
      <AboutSection />
      <ContactCTASection />
    </>
  )
}
