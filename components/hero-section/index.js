import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Güvenilir İnşaat
            <span className="text-primary block">Çözümleri</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Yeksan İnşaat olarak 15 yıllık deneyimimizle kaliteli ve güvenilir inşaat hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projelerimiz"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Projelerimizi İnceleyin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
