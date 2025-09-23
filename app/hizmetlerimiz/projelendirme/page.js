"use client"

import Header from "../../../components/header"
import { PenTool, CheckCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

export default function ProjelendirmePage() {
  const services = [
    {
      title: "Mimari Proje Tasarımı",
      description: "İhtiyaçlarınıza uygun özgün mimari projeler tasarlıyoruz",
      features: ["Konsept tasarım", "Ön proje çizimleri", "Uygulama projeleri", "Detay çizimleri"],
    },
    {
      title: "Yapı Ruhsatı İşlemleri",
      description: "Ruhsat süreçlerinde size rehberlik ediyor ve takip ediyoruz",
      features: [
        "Ruhsat dosyası hazırlama",
        "Belediye takip işleri",
        "İmar durumu analizi",
        "Yasal süreç danışmanlığı",
      ],
    },
    {
      title: "3D Görselleştirme",
      description: "Projelerinizi gerçekçi 3D modellerle görselleştiriyoruz",
      features: ["3D modelleme", "Fotorealistik render", "Sanal tur oluşturma", "Animasyon hazırlama"],
    },
    {
      title: "Statik Proje Hesapları",
      description: "Yapısal güvenlik için detaylı statik hesaplar ve projeler",
      features: ["Betonarme hesapları", "Çelik konstrüksiyon", "Zemin analizi", "Deprem hesapları"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Anasayfa
            </Link>
            <span>/</span>
            <Link href="/hizmetlerimiz" className="hover:text-primary transition-colors">
              Hizmetlerimiz
            </Link>
            <span>/</span>
            <span className="text-foreground">Projelendirme ve Tasarım</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/hizmetlerimiz"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Hizmetlerimize Dön
              </Link>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PenTool className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Projelendirme ve Tasarım</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Hayalinizdeki yapıları kağıda döküyor, teknik çizimlerden 3D görselleştirmeye kadar tüm tasarım
                süreçlerinde yanınızdayız.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Teklif İsteyin
                </a>
                <Link
                  href="/projelerimiz"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  Tasarım Projelerimiz
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/architectural-design-blueprints-drafting.jpg"
                alt="Projelendirme ve Tasarım"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tasarım Hizmet Alanlarımız</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fikrinizden gerçeğe kadar tüm tasarım süreçlerinde profesyonel hizmet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
