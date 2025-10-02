"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HeroSection() {
  const [api, setApi] = useState()

  // Hero slider images
  const heroImages = [
    {
      src: "/construction-team-site.png",
      alt: "Construction Team Site"
    },
    {
      src: "/modern-villa-construction.jpg",
      alt: "Modern Villa Construction"
    },
    {
      src: "/factory-construction-site.jpg", 
      alt: "Factory Construction Site"
    },
    {
      src: "/construction-foundation-work.jpg",
      alt: "Construction Foundation Work"
    },
    {
      src: "/architectural-design-blueprints-drafting.jpg",
      alt: "Architectural Design Blueprints"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return
    }

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="relative overflow-hidden hero-architectural-bg-ultra-transparent h-screen">
      {/* Background Image Slider */}
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative h-screen overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Ultra transparent architectural grid overlay */}
                <div className="absolute inset-0 hero-architectural-bg-ultra-transparent opacity-3" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30" />
      </Carousel>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
              Güvenilir İnşaat
              <span className="text-blue-300 block">Çözümleri</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto drop-shadow-md opacity-90">
              İnşaat sektörünün güvenilir ve tecrübeli ismi Yeksan İnşaat, yapı alanındaki talepleri hızlı ve sorunsuz olarak yıllardır yerine getiriyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projelerimiz"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-lg"
              >
                Projelerimizi İnceleyin
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-semibold"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
