"use client";

import { useParams } from "next/navigation";
import Header from "../../../components/header";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  Wrench,
  Shield,
  CheckCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function ProjeDetayPage() {
  const params = useParams();
  const projectId = Number.parseInt(params.id);

  const projects = [
    {
      id: 1,
      title: "Beşiktaş Tüpraş Stadyumu",
      description: "Tüpraş Stadyumu inşaatı projesi",
      longDescription:
        "Beşiktaş Jimnastik Kulübü’nün efsanevi stadyumu Tüpraş Stadyumu’nun modern yapısının inşaatında görev aldık. Proje kapsamında tribün, altyapı, otopark ve VIP alanları yüksek standartlarda inşa edilmiştir.",
      image: "/besiktas.jpg",
      gallery: [
        "/besiktas.jpg",
        "/placeholder.svg?key=besiktas2",
        "/placeholder.svg?key=besiktas3",
      ],
      status: "Tamamlandı",
      location: "İstanbul",
      date: "2019",
      duration: "14 ay",
      area: "45.000m²",
      category: "Kaba İnşaat",
      icon: Building,
      features: [
        "Modern stadyum altyapısı",
        "Ses ve ışık sistem entegrasyonu",
        "Yüksek kapasiteli oturma alanları",
        "Betonarme tribün sistemi",
        "VIP ve medya alanları",
        "Güçlü zemin altyapısı",
      ],
      services: [
        "Temel ve betonarme işleri",
        "Cephe montajı",
        "Tesisat altyapısı",
        "İç mekan uygulamaları",
      ],
    },
    {
      id: 2,
      title: "SOCAR Star Rafineri",
      description: "SOCAR Star Rafineri inşaatı projesi",
      longDescription:
        "SOCAR Türkiye'nin en büyük enerji yatırımlarından biri olan Star Rafineri projesinde yapısal inşaat ve endüstriyel tesis altyapısı alanında görev aldık. Proje, yüksek mühendislik standartlarıyla tamamlandı.",
      image: "/socar.jpg",
      gallery: [
        "/socar.jpg",
        "/placeholder.svg?key=socar2",
        "/placeholder.svg?key=socar3",
      ],
      status: "Tamamlandı",
      location: "İzmir",
      date: "2023",
      duration: "24 ay",
      area: "200.000m²",
      category: "Endüstriyel İnşaat",
      icon: Wrench,
      features: [
        "Endüstriyel tesis altyapısı",
        "Güvenlik standartları",
        "Ağır yük taşıyıcı sistemler",
        "Yangın güvenliği sistemleri",
        "Enerji verimli çözümler",
        "Uzun ömürlü yapısal malzemeler",
      ],
      services: [
        "Betonarme temel sistemleri",
        "Çelik konstrüksiyon",
        "Tesisat altyapısı",
        "Zemin güçlendirme",
      ],
    },
    {
      id: 3,
      title: "Artaş Vadi İstanbul",
      description: "Vadi İstanbul konut projesi",
      longDescription:
        "İstanbul’un en prestijli konut projelerinden biri olan Vadi İstanbul’da konut bloklarının kaba inşaatı, altyapı ve çevre düzenlemesi tarafımızca tamamlanmıştır.",
      image: "/artas-vadi-istanbul.jpg",
      gallery: [
        "/artas-vadi-istanbul.jpg",
        "/placeholder.svg?key=vadi2",
        "/placeholder.svg?key=vadi3",
      ],
      status: "Tamamlandı",
      location: "İstanbul",
      date: "2022",
      duration: "18 ay",
      area: "150.000m²",
      category: "Konut Projesi",
      icon: Building,
      features: [
        "Modern yaşam alanları",
        "Kaliteli betonarme yapı",
        "Yeşil alan düzenlemesi",
        "Yalıtım sistemleri",
        "Enerji verimliliği",
        "Deprem yönetmeliğine uygunluk",
      ],
      services: [
        "Temel işleri",
        "Kaba inşaat",
        "Yalıtım uygulamaları",
        "Çevre düzenlemesi",
      ],
    },
    {
      id: 4,
      title: "THY İstanbul Havalimanı",
      description: "İstanbul Havalimanı inşaatı projesi",
      longDescription:
        "Türkiye'nin en büyük ulaşım yatırımlarından biri olan İstanbul Havalimanı projesinde Türk Hava Yolları tesislerinin inşaat süreçlerinde görev aldık.",
      image: "/thy.jpg",
      gallery: [
        "/thy.jpg",
        "/placeholder.svg?key=thy2",
        "/placeholder.svg?key=thy3",
      ],
      status: "Tamamlandı",
      location: "İstanbul",
      date: "2020",
      duration: "20 ay",
      area: "250.000m²",
      category: "Kamu / Altyapı",
      icon: Shield,
      features: [
        "Havalimanı terminal yapısı",
        "Geniş açıklıklı çelik sistemler",
        "Yüksek güvenlik standartları",
        "Akustik ve iklimlendirme çözümleri",
        "Yüksek kapasiteli altyapı",
        "Modern mimari detaylar",
      ],
      services: [
        "Çelik konstrüksiyon",
        "Altyapı işleri",
        "Cephe kaplama",
        "Mekanik sistem entegrasyonu",
      ],
    },
    {
      id: 5,
      title: "Ekici 24 AVM",
      description: "Ekici 24 Alışveriş Merkezi inşaatı projesi",
      longDescription:
        "İstanbul’un gözde bölgelerinden birinde inşa edilen Ekici 24 Alışveriş Merkezi projesinde kaba inşaat, yalıtım ve iç mekan altyapı çalışmaları yürütülmüştür.",
      image: "/ekici24.jpg",
      gallery: [
        "/ekici24.jpg",
        "/placeholder.svg?key=ekici24_2",
        "/placeholder.svg?key=ekici24_3",
      ],
      status: "Tamamlandı",
      location: "İstanbul",
      date: "2023",
      duration: "10 ay",
      area: "35.000m²",
      category: "Ticari İnşaat",
      icon: Building,
      features: [
        "Modern alışveriş merkezi altyapısı",
        "Yangın güvenliği sistemleri",
        "Enerji tasarruflu çözümler",
        "Yalıtım sistemleri",
        "Modern cephe tasarımı",
        "Geniş mağaza alanları",
      ],
      services: [
        "Temel ve betonarme işler",
        "Isı yalıtımı",
        "Cephe kaplama",
        "İç mekan düzenlemesi",
      ],
    },
    {
      id: 6,
      title: "Zen Deniz",
      description: "Zen Deniz villa projesi",
      longDescription:
        "Zen Deniz projesi, modern mimariyle tasarlanmış özel villa konseptine sahiptir. Geniş yaşam alanları, deniz manzarası ve kaliteli işçilik ile dikkat çekmektedir.",
      image: "/zen-deniz.jpg",
      gallery: [
        "/zen-deniz.jpg",
        "/placeholder.svg?key=zen2",
        "/placeholder.svg?key=zen3",
      ],
      status: "Tamamlandı",
      location: "İstanbul",
      date: "2024",
      duration: "9 ay",
      area: "400m²",
      category: "Villa Projesi",
      icon: Building,
      features: [
        "Deniz manzaralı yaşam alanı",
        "Modern mimari tasarım",
        "Enerji verimli sistemler",
        "Kaliteli malzeme kullanımı",
        "Yalıtım ve güvenlik çözümleri",
        "Doğal ışık optimizasyonu",
      ],
      services: [
        "Kaba inşaat",
        "İzolasyon sistemleri",
        "Çatı ve cephe kaplama",
        "Peyzaj düzenlemesi",
      ],
    },
  ];
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Proje Bulunamadı
          </h1>
          <Link href="/projelerimiz" className="text-primary hover:underline">
            Projelerimize Dön
          </Link>
        </div>
      </div>
    );
  }

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
            <Link
              href="/projelerimiz"
              className="hover:text-primary transition-colors"
            >
              Projelerimiz
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/projelerimiz"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Projelerimize Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {project.title}
                  </h1>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                      project.status === "Tamamlandı"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-8">
                {project.longDescription}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Konum
                    </span>
                  </div>
                  <span className="text-foreground font-semibold">
                    {project.location}
                  </span>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Tarih
                    </span>
                  </div>
                  <span className="text-foreground font-semibold">
                    {project.date}
                  </span>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Alan
                    </span>
                  </div>
                  <span className="text-foreground font-semibold">
                    {project.area}
                  </span>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Süre
                    </span>
                  </div>
                  <span className="text-foreground font-semibold">
                    {project.duration}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Benzer Proje İsteyin
                </a>
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
                >
                  Hizmetlerimizi İnceleyin
                </Link>
              </div>
            </div>

            <div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
              />

              {/* Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {project.gallery.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 2}`}
                    className="w-full h-24 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Proje Özellikleri
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Uygulanan Hizmetler
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {project.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4"
                  >
                    <span className="text-card-foreground font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Benzer Projeler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(
                (p) => p.id !== projectId && p.category === project.category
              )
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projelerimiz/${relatedProject.id}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {relatedProject.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedProject.location}</span>
                      <span
                        className={`px-2 py-1 rounded-full ${
                          relatedProject.status === "Tamamlandı"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {relatedProject.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
