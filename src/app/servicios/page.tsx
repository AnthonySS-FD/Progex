"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  ServiceCarousel,
  serviceImages,
} from "@/components/ui/ServiceCarousel";

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Capacidades · Servicios"
        title={
          <>
            Capacidades de ingeniería que se traducen en{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              impacto de negocio
            </span>
            .
          </>
        }
        description="No comercializamos horas: implementamos soluciones tecnológicas que resuelven problemas estratégicos. Modernización de plataformas críticas, integración de sistemas, automatización operativa y nuevos productos digitales para impulsar la eficiencia y el crecimiento empresarial."
      >
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-sm px-4 py-2 rounded-full glass hover:scale-105 transition focus-ring"
            >
              {s.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="relative pb-32">
        <div className="container space-y-20 sm:space-y-32">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28",
                  reverse && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="lg:col-span-7">
                  <div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm mb-6"
                    style={{
                      background:
                        s.accent === "cyan"
                          ? "rgb(var(--accent) / 0.1)"
                          : "rgb(var(--accent-2) / 0.1)",
                      color:
                        s.accent === "cyan"
                          ? "rgb(var(--accent))"
                          : "rgb(var(--accent-2))",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    Servicio · {String(i + 1).padStart(2, "0")}
                  </div>

                  <h2 className="h-section text-3xl sm:text-4xl lg:text-5xl mb-5">
                    {s.title}
                  </h2>
                  <p className="text-lg opacity-75 leading-relaxed mb-8 max-w-xl">
                    {s.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs uppercase tracking-[0.2em] opacity-50 mb-3">
                      Qué resolvemos
                    </div>
                    {s.solves.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-1 w-5 h-5 rounded-full grid place-items-center shrink-0"
                          style={{
                            background:
                              s.accent === "cyan"
                                ? "rgb(var(--accent) / 0.15)"
                                : "rgb(var(--accent-2) / 0.15)",
                            color:
                              s.accent === "cyan"
                                ? "rgb(var(--accent))"
                                : "rgb(var(--accent-2))",
                          }}
                        >
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="opacity-85">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm opacity-65 mb-8">
                    <span className="font-medium opacity-100">Ideal para:</span>{" "}
                    {s.bestFor}
                  </div>

                  <ButtonLink href="/contacto" arrow variant="secondary">
                    Hablar de este servicio
                  </ButtonLink>
                </div>

                <div className="lg:col-span-5">
                  {/* Marco "vidrio" exterior con padding — la imagen vive
                      dentro de un sub-rectángulo recuadrado, así el efecto
                      de vidrio rodea visiblemente el carrusel y los chips
                      no se cortan contra el borde redondeado. */}
                  <div className="relative aspect-square rounded-3xl glass-pro card-lift p-3 sm:p-4">
                    <div
                      className="relative h-full w-full overflow-hidden rounded-2xl"
                      style={{
                        background:
                          s.accent === "cyan"
                            ? "linear-gradient(135deg, rgb(var(--accent)/0.10), transparent 60%)"
                            : "linear-gradient(135deg, rgb(var(--accent-2)/0.10), transparent 60%)",
                      }}
                    >
                      {/* Carrusel de 3 imágenes referenciales por servicio */}
                      <ServiceCarousel
                        images={
                          serviceImages[s.slug] ?? [
                            {
                              src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
                              alt: s.title,
                            },
                          ]
                        }
                        className="absolute inset-0"
                      />

                      {/* Chip top-left: ícono + número de servicio (legible
                          sobre la imagen, dentro de un rectángulo plano) */}
                      <div className="pointer-events-none absolute left-3 top-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs glass-pro">
                        <Icon
                          className="h-3.5 w-3.5 shrink-0"
                          style={{
                            color:
                              s.accent === "cyan"
                                ? "rgb(var(--accent))"
                                : "rgb(var(--accent-2))",
                          }}
                        />
                        <span className="font-mono uppercase tracking-wider text-fg dark:text-white/90 whitespace-nowrap">
                          Servicio {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Chip bottom-right: slug del servicio + flecha */}
                      <div className="pointer-events-none absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs glass-pro">
                        <span className="font-mono text-fg dark:text-white/80 whitespace-nowrap">
                          {s.slug}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-fg dark:text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative pb-32">
        <div className="container">
          <div className="glass-strong rounded-3xl p-10 sm:p-16 text-center">
            <h3 className="h-section text-3xl sm:text-4xl mb-4">
              ¿Tu necesidad no encaja en una sola caja?
            </h3>
            <p className="opacity-75 mb-8 max-w-2xl mx-auto">
              La mayoría de proyectos reales combinan varios servicios. Cuéntanos
              tu caso y diseñamos una propuesta a medida.
            </p>
            <ButtonLink href="/contacto" size="lg" arrow>
              Solicitar diagnóstico gratuito
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
