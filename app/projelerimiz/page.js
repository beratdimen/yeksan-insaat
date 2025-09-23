"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Calendar, Filter, Building, Wrench, Shield, PenTool } from "lucide-react"
import Link from "next/link"

export default function ProjelerimizPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü")

  const projects = [
    {
      id: 1,
      title: "Modern Villa Projesi",
      description: "Ankara'da 300m² modern villa inşaatı",
      image: "/modern-villa-construction.jpg",
      status: "Tamamlandı",
      location: "Ankara",
      date: "2024",
      category: "Kaba İnşaat",
      icon: Building,
    },
    {
      id: 2,
      title: "Ofis Binası Tadilat",
      description: "İstanbul'da 500m² ofis binası komple tadilat",
      image: "/office-renovation.png",
      status: "Devam Ediyor",
      location: "İstanbul",
      date: "2024",
      category: "Tadilat",
      icon: Wrench,
    },
    {
      id: 3,
      title: "Apartman Yalıtım Projesi",
      description: "İzmir'de 8 katlı apartman dış cephe yalıtımı",
      image: "/apartment-insulation-work.jpg",
      status: "Tamamlandı",
      location: "İzmir",
      date: "2023",
      category: "Yalıtım",
      icon: Shield,
    },
    {
      id: 4,
      title: "Fabrika İnşaatı",
      description: "Bursa'da 2000m² endüstriyel fabrika inşaatı",
      image: "/factory-construction-site.jpg",
      status: "Devam Ediyor",
      location: "Bursa",
      date: "2024",
      category: "Kaba İnşaat",
      icon: Building,
    },
    {
      id: 5,
      title: "Lüks Konut Tasarımı",
      description: "Antalya'da özel villa mimari tasarım projesi",
      image: "/luxury-villa-design-antalya.jpg",
      status: "Tamamlandı",
      location: "Antalya",
      date: "2024",
      category: "Projelendirme",
      icon: PenTool,
    },
    {
      id: 6,
      title: "Otel Tadilat Projesi",
      description: "Bodrum'da 50 odalı otel komple yenileme",
      image: "/hotel-renovation-bodrum.jpg",
      status: "Devam Ediyor",
      location: "Bodrum",
      date: "2024",
      category: "Tadilat",
      icon: Wrench,
    },
    {
      id: 7,
      title: "Okul Binası Yalıtımı",
      description: "Eskişehir'de okul binası ısı yalıtım projesi",
      image: "/school-insulation-eskisehir.jpg",
      status: "Tamamlandı",
      location: "Eskişehir",
      date: "2023",
      category: "Yalıtım",
      icon: Shield,
    },
    {
      id: 8,
      title: "Alışveriş Merkezi İnşaatı",
      description: "Konya'da 5000m² alışveriş merkezi inşaatı",
      image: "/shopping-mall-construction-konya.jpg",
      status: "Devam Ediyor",
      location: "Konya",
      date: "2024",
      category: "Kaba İnşaat",
      icon: Building,
    },
  ]

  const filters = ["Tümü", "Devam Ediyor", "Tamamlandı"]

  const filteredProjects =
    activeFilter === "Tümü" ? projects : projects.filter((project) => project.status === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Projelerimiz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Gerçekleştirdiğimiz başarılı projelerden örnekler ve devam eden çalışmalarımız
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground font-medium">Filtrele:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">{filteredProjects.length} proje gösteriliyor</div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projelerimiz/${project.id}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Tamamlandı" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-primary/90 rounded-lg flex items-center justify-center">
                      <project.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{project.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sizin Projeniz de Burada Olsun</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hayalinizdeki projeyi gerçeğe dönüştürmek için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Projenizi Başlatalım
            </a>
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
            >
              Hizmetlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
