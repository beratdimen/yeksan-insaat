"use client";

import { useState, useEffect } from "react";

export default function BrandsSlider() {
  const brands = [
    { name: "Akçansa", logo: "/1.jpg" },
    { name: "Çimsa", logo: "/2.jpg" },
    { name: "Nuh Çimento", logo: "/3.jpg" },
    { name: "İzocam", logo: "/5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [brands.length]);

  return (
    <section className="py-16 bg-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Çalıştığımız Markalar
          </h2>
          <p className="text-muted-foreground">
            Kaliteli malzemeler için güvendiğimiz markalar
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {brands.concat(brands).map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-4">
                <div className="bg-background border border-border rounded-lg p-6 h-24 flex items-center justify-center hover:shadow-md transition-shadow">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-h-12 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
