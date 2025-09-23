import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  Y
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-secondary-foreground">
                  Yeksan
                </span>
                <span className="text-xs text-muted-foreground">İnşaat</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Güvenilir inşaat çözümleri için doğru adres.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/hizmetlerimiz/kaba-insaat"
                  className="hover:text-white transition-colors"
                >
                  Kaba İnşaat
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/tadilat"
                  className="hover:text-white transition-colors"
                >
                  Tadilat
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/yalitim"
                  className="hover:text-white transition-colors"
                >
                  Yalıtım
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/projelendirme"
                  className="hover:text-white transition-colors"
                >
                  Projelendirme
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">
              Kurumsal
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/hakkimizda"
                  className="hover:text-white transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/projelerimiz"
                  className="hover:text-white transition-colors"
                >
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="hover:text-white transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground mb-4">
              İletişim
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="tel:+905551234567"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0555 123 45 67</span>
              </a>
              <a
                href="mailto:info@yeksaninsaat.com"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@yeksaninsaat.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Ankara, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Yeksan İnşaat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
