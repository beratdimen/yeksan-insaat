import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F4] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center">
                <span className="text-black font-bold text-2xl tracking-tight logo-yeksan">
                  YEKS<span className="architectural-a"></span>N
                </span>
              </div>
            </div>
            <p className="text-gray-700">
              İnşaat sektörünün güvenilir ve tecrübeli ismi Yeksan İnşaat, yapı
              alanındaki talepleri hızlı ve sorunsuz olarak yıllardır yerine
              getiriyor.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/hizmetlerimiz/kaba-insaat"
                  className="hover:text-black transition-colors"
                >
                  Kaba İnşaat
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/tadilat"
                  className="hover:text-black transition-colors"
                >
                  Tadilat
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/yalitim"
                  className="hover:text-black transition-colors"
                >
                  Yalıtım
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz/projelendirme"
                  className="hover:text-black transition-colors"
                >
                  Projelendirme
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">Kurumsal</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/hakkimizda"
                  className="hover:text-black transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/projelerimiz"
                  className="hover:text-black transition-colors"
                >
                  Projelerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="hover:text-black transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">İletişim</h3>
            <div className="space-y-2 text-gray-700">
              <a
                href="tel:+902128542671"
                className="flex items-center space-x-2 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0 212 854 26 71</span>
              </a>
              <a
                href="mailto:bilgi@yeksaninsaat.com"
                className="flex items-center space-x-2 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>bilgi@yeksaninsaat.com</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Barış Mah. Belediye Cad. Ginza Lavinya Park Sitesi B Blok No:
                  30/106 Beylikdüzü / İstanbul
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-700">
          <p>&copy; 2025 Yeksan İnşaat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
