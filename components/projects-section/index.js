"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsSection() {
  const [api, setApi] = useState();

  const projects = [
    {
      id: 1,
      title: "Beşiktaş Tüpraş Stadyumu",
      image: "/besiktas.jpg",
      status: "Tamamlandı",
      location: "İstanbul",
      description: "Tüpraş Stadyumu inşaatı projesi",
    },
    {
      id: 2,
      title: "SOCAR Star Rafineri",
      image: "/socar.jpg",
      status: "Tamamlandı",
      location: "İzmir",
      description: "SOCAR Star Rafineri inşaatı projesi",
    },
    {
      id: 3,
      title: "Artaş Vadi İstanbul",
      image: "/artas-vadi-istanbul.jpg",
      status: "Tamamlandı",
      location: "İstanbul",
      description: "Vadi İstanbul konut projesi",
    },
    {
      id: 4,
      title: "THY İstanbul Havalimanı",
      image: "/thy.jpg",
      status: "Tamamlandı",
      location: "İstanbul",
      description: "İstanbul Havalimanı inşaatı projesi",
    },
    {
      id: 5,
      title: "Ekici 24 AVM",
      image: "/ekici24.jpg",
      status: "Tamamlandı",
      location: "İstanbul",
      description: "Ekici 24 Alışveriş Merkezi inşaatı projesi",
    },
    {
      id: 6,
      title: "Zen Deniz",
      image: "/zen-deniz.jpg",
      status: "Tamamlandı",
      location: "İstanbul",
      description: "Zen Deniz villa projesi",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projelerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerçekleştirdiğimiz başarılı projelerden örnekler
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    href={`/projelerimiz/${project.id}`}
                    className="group block"
                  >
                    <div className="relative bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {project.location}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              project.status === "Tamamlandı"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50" />
          </Carousel>
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
  );
}
