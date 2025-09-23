"use client"

import Header from "../../../components/header"
import { Users, CheckCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

export default function DanismanlikPage() {
  const services = [
    {
      title: "İnşaat Süreç Danışmanlığı",
      description: "İnşaat projelerinizin her aşamasında uzman rehberliği",
      features: ["Proje planlama", "İş programı hazırlama", "Süreç yönetimi", "Kalite kontrol"],
    },
    {
      title: "Malzeme Seçimi Rehberliği",
      description: "Doğru malzeme seçimi için teknik danışmanlık hizmeti",
      features: ["Malzeme analizi", "Kalite değerlendirme", "Maliyet optimizasyonu", "Tedarikçi önerileri"],
    },
    {
      title: "Maliyet Analizi",
      description: "Detaylı maliyet hesaplamaları ve bütçe planlaması",
      features: ["Metraj hesapları", "Birim fiyat analizi", "Bütçe planlaması", "Maliyet kontrolü"],
    },
    {
      title: "Kalite Kontrol Hizmetleri",
      description: "İnşaat kalitesini garanti altına alan kontrol hizmetleri",
      features: ["Şantiye denetimi", "Malzeme kontrolü", "İşçilik kalitesi", "Standart uygunluk"],
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
            <span className="text-foreground">Danışmanlık</span>
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
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Danışmanlık</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                İnşaat projelerinizde doğru kararlar alabilmeniz için uzman danışmanlık hizmeti veriyoruz. Deneyimimizle
                size rehberlik ediyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Danışmanlık Alın
                </a>
                <Link
                  href="/projelerimiz"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  Danışmanlık Projelerimiz
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/construction-consulting-meeting-professionals.jpg"
                alt="Danışmanlık Hizmetleri"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Danışmanlık Hizmet Alanlarımız</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İnşaat projelerinizde başarıya ulaşmanız için kapsamlı danışmanlık desteği
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
