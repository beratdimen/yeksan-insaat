"use client"

import Header from "../../../components/header"
import { Building, CheckCircle, ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

export default function KabaInsaatPage() {
  const services = [
    {
      title: "Temel Kazı ve Betonarme İşleri",
      description: "Güvenli ve sağlam temeller için profesyonel kazı ve betonarme uygulamaları",
      features: ["Zemin etüdü ve analizi", "Temel kazı işleri", "Betonarme temel döküm", "Su yalıtımı uygulaması"],
    },
    {
      title: "Duvar Örme ve Sıva İşleri",
      description: "Kaliteli malzemelerle duvar örme ve profesyonel sıva uygulamaları",
      features: [
        "Tuğla ve briket duvar örme",
        "İç ve dış sıva işleri",
        "Mantolama uygulamaları",
        "Dekoratif sıva çeşitleri",
      ],
    },
    {
      title: "Çatı Konstrüksiyonu",
      description: "Dayanıklı ve estetik çatı sistemleri ile yapınızı koruyoruz",
      features: [
        "Ahşap çatı konstrüksiyonu",
        "Çelik çatı sistemleri",
        "Kiremit ve çatı kaplama",
        "Çatı yalıtım işleri",
      ],
    },
    {
      title: "Betonarme Kolon ve Kiriş",
      description: "Yapısal güvenlik için profesyonel betonarme uygulamaları",
      features: ["Kolon ve kiriş kalıp işleri", "Demir donatı montajı", "Beton döküm işleri", "Kalıp sökme ve bitirme"],
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
            <span className="text-foreground">Kaba İnşaat</span>
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
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Kaba İnşaat</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Yapınızın temelinden çatısına kadar tüm kaba inşaat işlerini profesyonel ekibimizle gerçekleştiriyoruz.
                Kaliteli malzeme ve uzman işçilikle güvenli yapılar inşa ediyoruz.
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
                  Projelerimizi İnceleyin
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/construction-foundation-concrete-work.jpg"
                alt="Kaba İnşaat Çalışmaları"
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kaba İnşaat Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Yapınızın sağlam temellerini atmak için gereken tüm hizmetleri sunuyoruz
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Neden Yeksan İnşaat?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Yıl Deneyim</h3>
                <p className="text-muted-foreground">Sektörde uzun yıllar edindiğimiz tecrübe</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">100+</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tamamlanan Proje</h3>
                <p className="text-muted-foreground">Başarıyla tamamladığımız projeler</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">%100</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-muted-foreground">Kaliteli hizmet anlayışımız</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
