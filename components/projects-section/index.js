import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Projesi",
      image: "/modern-villa-construction.jpg",
      status: "Tamamlandı",
      location: "Ankara",
    },
    {
      id: 2,
      title: "Ofis Binası Tadilat",
      image: "/office-renovation.png",
      status: "Devam Ediyor",
      location: "İstanbul",
    },
    {
      id: 3,
      title: "Apartman Yalıtım",
      image: "/apartment-insulation-work.jpg",
      status: "Tamamlandı",
      location: "İzmir",
    },
    {
      id: 4,
      title: "Fabrika İnşaatı",
      image: "/factory-construction-site.jpg",
      status: "Devam Ediyor",
      location: "Bursa",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projelerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerçekleştirdiğimiz başarılı projelerden örnekler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projelerimiz/${project.id}`}
              className="group relative bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      project.status === "Tamamlandı" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projelerimiz"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Tüm Projeleri Görün
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
