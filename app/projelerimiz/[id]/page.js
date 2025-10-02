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
      title: "Modern Villa Projesi",
      description: "Ankara'da 300m² modern villa inşaatı",
      longDescription:
        "Bu projede müşterimizin hayalindeki modern villayı gerçeğe dönüştürdük. 300 metrekare yaşam alanına sahip villa, çağdaş mimari anlayışla tasarlandı ve en kaliteli malzemelerle inşa edildi.",
      image: "/modern-villa-construction.jpg",
      gallery: [
        "/modern-villa-construction.jpg",
        "/placeholder.svg?key=villa02",
        "/placeholder.svg?key=villa03",
      ],
      status: "Tamamlandı",
      location: "Ankara",
      date: "2024",
      duration: "8 ay",
      area: "300m²",
      category: "Kaba İnşaat",
      icon: Building,
      features: [
        "Betonarme yapı sistemi",
        "Modern mimari tasarım",
        "Kaliteli malzeme kullanımı",
        "Enerji verimli sistemler",
        "Geniş yaşam alanları",
        "Peyzaj düzenlemesi",
      ],
      services: [
        "Temel işleri",
        "Duvar örme",
        "Çatı konstrüksiyonu",
        "İç ve dış sıva",
      ],
    },
    {
      id: 2,
      title: "Ofis Binası Tadilat",
      description: "İstanbul'da 500m² ofis binası komple tadilat",
      longDescription:
        "İstanbul'da bulunan ofis binasının komple yenilenmesi projesi. Modern çalışma ortamları oluşturarak verimliliği artırmayı hedefledik.",
      image: "/office-renovation.png",
      gallery: [
        "/office-renovation.png",
        "/placeholder.svg?key=office02",
        "/placeholder.svg?key=office03",
      ],
      status: "Devam Ediyor",
      location: "İstanbul",
      date: "2024",
      duration: "6 ay",
      area: "500m²",
      category: "Tadilat",
      icon: Wrench,
      features: [
        "Açık ofis konsepti",
        "Modern aydınlatma",
        "Akustik çözümler",
        "Ergonomik tasarım",
        "Teknoloji entegrasyonu",
        "Sürdürülebilir malzemeler",
      ],
      services: [
        "İç mekan tadilat",
        "Elektrik yenileme",
        "Klima sistemleri",
        "Dekorasyon",
      ],
    },
    {
      id: 3,
      title: "Apartman Yalıtım Projesi",
      description: "İzmir'de 8 katlı apartman dış cephe yalıtımı",
      longDescription:
        "İzmir'de 8 katlı apartmanın enerji verimliliğini artırmak için gerçekleştirdiğimiz kapsamlı dış cephe yalıtım projesi.",
      image: "/apartment-insulation-work.jpg",
      gallery: [
        "/apartment-insulation-work.jpg",
        "/placeholder.svg?key=insul02",
        "/placeholder.svg?key=insul03",
      ],
      status: "Tamamlandı",
      location: "İzmir",
      date: "2023",
      duration: "3 ay",
      area: "1200m²",
      category: "Yalıtım",
      icon: Shield,
      features: [
        "Dış cephe ısı yalıtımı",
        "Enerji tasarrufu",
        "Nem kontrolü",
        "Estetik cephe kaplama",
        "Uzun ömürlü malzemeler",
        "Çevre dostu çözümler",
      ],
      services: [
        "Mantolama sistemi",
        "Cephe kaplama",
        "Detay işleri",
        "Kalite kontrol",
      ],
    },
    {
      id: 4,
      title: "Fabrika İnşaatı",
      description: "Bursa'da 2000m² endüstriyel fabrika inşaatı",
      longDescription:
        "Bursa'da endüstriyel üretim için tasarlanan 2000 metrekare fabrika binasının inşaat projesi.",
      image: "/factory-construction-site.jpg",
      gallery: [
        "/factory-construction-site.jpg",
        "/placeholder.svg?key=factory02",
        "/placeholder.svg?key=factory03",
      ],
      status: "Devam Ediyor",
      location: "Bursa",
      date: "2024",
      duration: "12 ay",
      area: "2000m²",
      category: "Kaba İnşaat",
      icon: Building,
      features: [
        "Endüstriyel yapı sistemi",
        "Yüksek tavan",
        "Ağır yük kapasitesi",
        "Geniş açıklıklar",
        "Vinç sistemleri",
        "Güvenlik standartları",
      ],
      services: [
        "Çelik konstrüksiyon",
        "Betonarme işler",
        "Çatı sistemleri",
        "Altyapı",
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
