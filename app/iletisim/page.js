"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function IletisimPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "0 212 854 26 71",
      action: "tel:+902128542671",
      description: "Hemen arayın, size yardımcı olalım",
    },
    {
      icon: Mail,
      title: "E-posta",
      info: "info@yeksaninsaat.com",
      action: "mailto:info@yeksaninsaat.com",
      description: "E-posta gönder, en kısa sürede dönüş yapalım",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "0555 123 45 67",
      action: "https://wa.me/905551234567",
      description: "WhatsApp üzerinden mesaj gönderin",
    },
    {
      icon: MapPin,
      title: "Adres",
      info: "Beylikdüzü, İstanbul",
      action: "#",
      description: "Ofisimize bekleriz",
    },
  ];

  const workingHours = [
    { day: "Pazartesi - Cuma", hours: "08:00 - 18:00" },
    { day: "Cumartesi", hours: "09:00 - 16:00" },
    { day: "Pazar", hours: "Kapalı" },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Anasayfa
            </Link>
            <span>/</span>
            <span className="text-foreground">İletişim</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              İletişime Geçin
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü
              sunmak için buradayız.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {contact.description}
                </p>
                {contact.action !== "#" ? (
                  <a
                    href={contact.action}
                    target={contact.title === "WhatsApp" ? "_blank" : "_self"}
                    rel={
                      contact.title === "WhatsApp" ? "noopener noreferrer" : ""
                    }
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <div className="text-foreground font-semibold">
                    {contact.info}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Hızlı İletişim
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902128542671"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <Phone className="mr-2 w-5 h-5" />
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Mesaj
              </a>
              <a
                href="mailto:info@yeksaninsaat.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
              >
                <Mail className="mr-2 w-5 h-5" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours & Location */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Working Hours */}
            <div className="bg-card border border-border rounded-lg p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">
                    Çalışma Saatleri
                  </h2>
                </div>

                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                    >
                      <span className="text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span className="font-semibold text-card-foreground">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not kısmı hep en altta kalır */}
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Not:</strong> Acil durumlar için 7/24 ulaşabilirsiniz.
                </p>
              </div>
            </div>

            {/* Location & Services */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground">
                  Hizmet Bölgelerimiz
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Ana Ofis
                  </h3>
                  <p className="text-muted-foreground">Beylikdüzü, İstanbul</p>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Hizmet Verdiğimiz Şehirler
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <span>• Ankara</span>
                    <span>• İstanbul</span>
                    <span>• İzmir</span>
                    <span>• Bursa</span>
                    <span>• Antalya</span>
                    <span>• Konya</span>
                    <span>• Eskişehir</span>
                    <span>• Bodrum</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Diğer şehirler için de hizmet verebiliriz. Lütfen bizimle
                  iletişime geçin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Merak ettiğiniz konular hakkında bilgi alın
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-card-foreground mb-2">
                Teklif almak için ne kadar süre gerekiyor?
              </h3>
              <p className="text-muted-foreground">
                Projenizin detaylarını aldıktan sonra 24-48 saat içinde size
                detaylı teklif sunuyoruz.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-card-foreground mb-2">
                Hangi bölgelerde hizmet veriyorsunuz?
              </h3>
              <p className="text-muted-foreground">
                Başta Ankara olmak üzere İstanbul, İzmir, Bursa ve çevre illerde
                hizmet veriyoruz. Diğer şehirler için de görüşebiliriz.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-card-foreground mb-2">
                İşlerinizde garanti veriyor musunuz?
              </h3>
              <p className="text-muted-foreground">
                Evet, tüm işlerimizde garanti veriyoruz. Garanti süresi işin
                türüne göre değişmektedir.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-card-foreground mb-2">
                Ödeme koşullarınız nasıl?
              </h3>
              <p className="text-muted-foreground">
                Ödeme planımız projenin büyüklüğüne göre esnek şekilde
                düzenlenir. Detaylar için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Projenizi Konuşalım
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Size özel çözümler sunmak için sabırsızlanıyoruz. Hemen iletişime
            geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+90 212 854 26 71"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hemen Arayın
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/20 text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
