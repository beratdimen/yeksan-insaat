import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-background section-architectural-bg relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Neden Yeksan İnşaat?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              İnşaat sektörünün güvenilir ve tecrübeli ismi Yeksan İnşaat, yapı alanındaki talepleri hızlı ve sorunsuz olarak yıllardır yerine getiriyor. 
              Bugüne kadar birçok önemli yapı projeleri üzerinde çalışmış sektörde kendine önemli bir yer edinmiştir.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">15+ Yıl Deneyim</h3>
                  <p className="text-muted-foreground">Sektörde uzun yıllar edindiğimiz tecrübe</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Uzman Kadro</h3>
                  <p className="text-muted-foreground">Alanında uzman mühendis ve işçi kadrosu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kaliteli Malzeme</h3>
                  <p className="text-muted-foreground">Sadece birinci sınıf malzemeler kullanıyoruz</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
              >
                Daha Fazla Bilgi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/construction-team-site.png"
              alt="Yeksan İnşaat Ekibi"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
