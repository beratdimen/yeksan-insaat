"use client"

import { Users, Award, Clock, Shield, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description: "Müşterilerimize verdiğimiz sözleri tutarak güven oluşturuyoruz",
    },
    {
      icon: Award,
      title: "Kalite",
      description: "Her projede en yüksek kalite standartlarını uyguluyoruz",
    },
    {
      icon: Clock,
      title: "Zamanında Teslimat",
      description: "Belirlenen sürelerde projelerimizi tamamlıyoruz",
    },
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description: "Müşteri memnuniyeti bizim için en önemli önceliktir",
    },
  ]

  const team = [
    {
      name: "Mehmet Yeksan",
      position: "Kurucu & Genel Müdür",
      experience: "20 yıl",
      image: "/placeholder.svg?key=team01",
    },
    {
      name: "Ahmet Kaya",
      position: "İnşaat Mühendisi",
      experience: "15 yıl",
      image: "/placeholder.svg?key=team02",
    },
    {
      name: "Fatma Demir",
      position: "Mimar",
      experience: "12 yıl",
      image: "/placeholder.svg?key=team03",
    },
    {
      name: "Ali Özkan",
      position: "Proje Yöneticisi",
      experience: "10 yıl",
      image: "/placeholder.svg?key=team04",
    },
  ]

  const achievements = [
    { number: "15+", label: "Yıl Deneyim" },
    { number: "200+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "%100", label: "Müşteri Memnuniyeti" },
  ]

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
            <span className="text-foreground">Hakkımızda</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Yeksan İnşaat Hakkında</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                2009 yılından bu yana inşaat sektöründe faaliyet gösteren Yeksan İnşaat, kaliteli hizmet anlayışı ve
                güvenilir çözümleriyle sektörde öncü konumdadır.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Uzman kadromuz ve modern ekipmanlarımızla kaba inşaat, tadilat, yalıtım, projelendirme ve danışmanlık
                hizmetlerinde müşterilerimizin beklentilerini aşmayı hedefliyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+905551234567"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Bizimle İletişime Geçin
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
                src="/construction-team-site.png"
                alt="Yeksan İnşaat Ekibi"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Değerlerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ekibimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alanında uzman ve deneyimli kadromuzla hizmet veriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.experience} deneyim</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Misyonumuz</h2>
              <p className="text-muted-foreground mb-4">
                İnşaat sektöründe kaliteli, güvenilir ve sürdürülebilir çözümler sunarak müşterilerimizin hayallerini
                gerçeğe dönüştürmek.
              </p>
              <p className="text-muted-foreground">
                Modern teknoloji ve geleneksel ustalığı birleştirerek, her projede mükemmelliği hedeflemek ve sektöre
                değer katmak.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Vizyonumuz</h2>
              <p className="text-muted-foreground mb-4">
                Türkiye'nin önde gelen inşaat firmalarından biri olarak, yenilikçi yaklaşımlarımızla sektöre öncülük
                etmek.
              </p>
              <p className="text-muted-foreground">
                Çevre dostu ve sürdürülebilir inşaat çözümleriyle gelecek nesillere daha yaşanabilir bir dünya bırakmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Neden Yeksan İnşaat?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bizi tercih etmeniz için sebeplerimiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">15+ Yıllık Deneyim</h3>
                  <p className="text-muted-foreground">Sektörde uzun yıllar edindiğimiz tecrübe ve bilgi birikimi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Uzman Kadro</h3>
                  <p className="text-muted-foreground">Alanında uzman mühendis, mimar ve işçi kadrosu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Kaliteli Malzeme</h3>
                  <p className="text-muted-foreground">Sadece birinci sınıf ve sertifikalı malzemeler kullanıyoruz</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Zamanında Teslimat</h3>
                  <p className="text-muted-foreground">Belirlenen sürelerde projelerimizi eksiksiz teslim ediyoruz</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Uygun Fiyat</h3>
                  <p className="text-muted-foreground">Kaliteden ödün vermeden rekabetçi fiyatlar sunuyoruz</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Garanti</h3>
                  <p className="text-muted-foreground">
                    Tüm işlerimizde garanti veriyor, satış sonrası destek sağlıyoruz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
