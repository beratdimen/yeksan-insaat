import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Projenizi Hayata Geçirelim</h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          İnşaat projeleriniz için profesyonel çözümler arıyorsanız, bizimle iletişime geçin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+905551234567"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
          >
            <Phone className="mr-2 w-5 h-5" />
            Hemen Arayın
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
          >
            İletişim Sayfası
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
