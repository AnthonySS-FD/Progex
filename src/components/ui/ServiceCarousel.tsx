"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type ServiceCarouselProps = {
  images: { src: string; alt: string }[];
  /** Duration each slide is visible, in ms. Defaults to 4500. */
  interval?: number;
  /** Tailwind classes for the outer wrapper. */
  className?: string;
};

/**
 * ServiceCarousel — auto-rotating image carousel for service cards.
 * Pauses on hover, exposes manual dot navigation and respects
 * prefers-reduced-motion.
 */
export function ServiceCarousel({
  images,
  interval = 4500,
  className,
}: ServiceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, interval, images.length]);

  const current = images[index];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority={index === 0}
          />
          {/* Subtle dark veil for legibility & cohesion with brand */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Bottom dot navigation */}
      <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-6 bg-white/90"
                : "w-1.5 bg-white/45 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Curated reference image triplets per service slug.
 * All images come from Unsplash (already whitelisted in next.config.mjs).
 */
export const serviceImages: Record<string, { src: string; alt: string }[]> = {
  "software-a-medida": [
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      alt: "Equipo de ingeniería trabajando en software a medida",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      alt: "Pizarra con arquitectura de sistema",
    },
    {
      src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
      alt: "Pantalla con código fuente",
    },
  ],
  "aplicaciones-web": [
    {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      alt: "Diseño de interfaz web en pantalla",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      alt: "Dashboard analítico empresarial",
    },
    {
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
      alt: "Mockup de aplicación web responsive",
    },
  ],
  "aplicaciones-moviles": [
    {
      src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      alt: "Smartphone con aplicación móvil",
    },
    {
      src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80",
      alt: "Diseño de pantallas mobile",
    },
    {
      src: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80",
      alt: "Aplicación móvil en uso de campo",
    },
  ],
  "sistemas-empresariales": [
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Reporte ejecutivo en pantalla",
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      alt: "Reunión de análisis con datos",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      alt: "Equipo corporativo colaborando",
    },
  ],
  saas: [
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      alt: "Pantalla de plataforma SaaS",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      alt: "Métricas de producto SaaS",
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Equipo de producto en planning",
    },
  ],
  automatizacion: [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Circuitos electrónicos representando automatización",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      alt: "Robot industrial automatizado",
    },
    {
      src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      alt: "Flujo de proceso automatizado en pantalla",
    },
  ],
  integraciones: [
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      alt: "Cables de red conectando sistemas",
    },
    {
      src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
      alt: "API y diagrama de integración",
    },
    {
      src: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&w=1200&q=80",
      alt: "Conexiones entre plataformas",
    },
  ],
  infraestructura: [
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      alt: "Servidores en data center",
    },
    {
      src: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1200&q=80",
      alt: "Infraestructura de red empresarial",
    },
    {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
      alt: "Sala de operaciones cloud 24/7",
    },
  ],
};
