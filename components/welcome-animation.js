"use client";

import { useState, useEffect } from "react";

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-b from-white via-blue-100 to-blue-500 flex items-center justify-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <div className="animate-scale-in">
          <div className="mb-6">
            <span className="text-primary-foreground font-bold text-5xl tracking-tight logo-yeksan">
              YEKS<span className="architectural-a"></span>N
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            İnşaat
          </h1>
          <p
            className="text-xl text-primary-foreground/80 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Hoş Geldiniz
          </p>
        </div>
      </div>
    </div>
  );
}
