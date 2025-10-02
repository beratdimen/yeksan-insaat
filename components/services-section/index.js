import Link from "next/link"
import { Building, Wrench, Shield, PenTool, Users, ChevronRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Building,
      title: "Kaba İnşaat",
      description: "Temel atma, duvar örme, çatı yapımı gibi yapısal inşaat işleri",
      href: "/hizmetlerimiz/kaba-insaat",
    },
    {
      icon: Wrench,
      title: "Tadilat Hizmetleri",
      description: "Ev ve iş yeri tadilat, yenileme ve modernizasyon işleri",
      href: "/hizmetlerimiz/tadilat",
    },
    {
      icon: Shield,
      title: "Yalıtım İşlemleri",
      description: "Su, ısı ve ses yalıtımı ile enerji verimliliği çözümleri",
      href: "/hizmetlerimiz/yalitim",
    },
    {
      icon: PenTool,
      title: "Projelendirme ve Tasarım",
      description: "Mimari proje tasarımı ve teknik çizim hizmetleri",
      href: "/hizmetlerimiz/projelendirme",
    },
    {
      icon: Users,
      title: "Danışmanlık",
      description: "İnşaat süreçleri ve teknik konularda uzman danışmanlık",
      href: "/hizmetlerimiz/danismanlik",
    },
  ]

  return (
    <section className="py-20 bg-background technical-grid relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesyonel ekibimizle geniş hizmet yelpazesinde kaliteli çözümler sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:bg-card/90"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center text-primary font-medium">
                Detayları Görün
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
