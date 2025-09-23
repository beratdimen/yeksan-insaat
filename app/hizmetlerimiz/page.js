"use client"

import { Building, Wrench, Shield, PenTool, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HizmetlerimizPage() {
  const services = [
    {
      icon: Building,
      title: "Kaba İnşaat",
      description: "Temel atma, duvar örme, çatı yapımı gibi yapısal inşaat işleri",
      features: [
        "Temel kazı ve betonarme işleri",
        "Duvar örme ve sıva işleri",
        "Çatı konstrüksiyonu",
        "Betonarme kolon ve kiriş yapımı",
      ],
      href: "/hizmetlerimiz/kaba-insaat",
      image: "/construction-foundation-work.jpg",
    },
    {
      icon: Wrench,
      title: "Tadilat Hizmetleri",
      description: "Ev ve iş yeri tadilat, yenileme ve modernizasyon işleri",
      features: [
        "İç mekan tadilat ve dekorasyon",
        "Mutfak ve banyo yenileme",
        "Elektrik ve tesisat yenileme",
        "Dış cephe tadilat işleri",
      ],
      href: "/hizmetlerimiz/tadilat",
      image: "/home-renovation-interior.png",
    },
    {
      icon: Shield,
      title: "Yalıtım İşlemleri",
      description: "Su, ısı ve ses yalıtımı ile enerji verimliliği çözümleri",
      features: [
        "Dış cephe ısı yalıtımı",
        "Su yalıtımı ve izolasyon",
        "Ses yalıtımı uygulamaları",
        "Çatı yalıtım sistemleri",
      ],
      href: "/hizmetlerimiz/yalitim",
      image: "/building-insulation-thermal.jpg",
    },
    {
      icon: PenTool,
      title: "Projelendirme ve Tasarım",
      description: "Mimari proje tasarımı ve teknik çizim hizmetleri",
      features: ["Mimari proje tasarımı", "Yapı ruhsatı işlemleri", "3D görselleştirme", "Statik proje hesapları"],
      href: "/hizmetlerimiz/projelendirme",
      image: "/architectural-design-blueprints.jpg",
    },
    {
      icon: Users,
      title: "Danışmanlık",
      description: "İnşaat süreçleri ve teknik konularda uzman danışmanlık",
      features: [
        "İnşaat süreç danışmanlığı",
        "Malzeme seçimi rehberliği",
        "Maliyet analizi",
        "Kalite kontrol hizmetleri",
      ],
      href: "/hizmetlerimiz/danismanlik",
      image: "/construction-consulting-meeting.jpg",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Hizmetlerimiz</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Profesyonel ekibimizle geniş hizmet yelpazesinde kaliteli çözümler sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/90 rounded-lg mb-2">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Detayları İncele
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projeniz İçin Teklif Alın</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hangi hizmete ihtiyacınız olursa olsun, size özel çözümler sunmaya hazırız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905551234567"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Hemen Arayın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
            >
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
