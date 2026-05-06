"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { solutions } from "@/lib/data";
import {
  solutionPreviewMap,
  solutionIconMap,
} from "@/components/home/Solutions";
import { cn } from "@/lib/utils";

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Productos propios · Plataformas en producción"
        title={
          <>
            Plataformas digitales operando en{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              organizaciones líderes
            </span>
            .
          </>
        }
        description="No exhibimos prototipos: presentamos productos propios que sostienen la operación diaria de empresas reales. Cada solución surgió de un reto concreto y evolucionó hasta convertirse en una plataforma replicable a nivel sectorial — evidencia tangible de nuestra capacidad para construir software que perdura."
      >
        <div className="flex flex-wrap gap-3">
          {solutions.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="text-sm px-4 py-2 rounded-full glass hover:scale-105 transition focus-ring"
            >
              {s.name}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="relative pb-32">
        <div className="container space-y-24 sm:space-y-32">
          {solutions.map((s, i) => {
            const Preview = solutionPreviewMap[s.slug];
            const Icon = solutionIconMap[s.slug] ?? Sparkles;
            return (
            <motion.article
              key={s.slug}
              id={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28"
            >
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                {/* Visual — preview real del sistema en lugar del nombre gigante */}
                <div className={cn("lg:col-span-7", i % 2 === 1 && "lg:order-2")}>
                  <div
                    className={cn(
                      "relative h-full min-h-[460px] rounded-3xl overflow-hidden card-lift glass-pro",
                      "bg-gradient-to-br",
                      s.gradient
                    )}
                  >
                    {/* Grid texture muy sutil */}
                    <div className="absolute inset-0 bg-grid-fade opacity-[0.18]" />

                    <div className="relative h-full flex flex-col">
                      {/* Header — número, ícono y badge */}
                      <div className="flex items-center justify-between p-5 sm:p-6 border-b border-default/60">
                        <div className="flex items-center gap-2.5">
                          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                            <Icon size={15} strokeWidth={1.8} />
                          </span>
                          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                            {String(i + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}
                            <span className="mx-1.5 opacity-50">·</span>
                            <span className="text-fg-muted">{s.category}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span
                              className="absolute inset-0 rounded-full"
                              style={{
                                background: "rgb(var(--accent))",
                                animation: "pulse 2s ease-in-out infinite",
                              }}
                            />
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                            En producción
                          </span>
                        </div>
                      </div>

                      {/* Live preview area — el mockup real del producto.
                          Pasamos active=true en esta página de detalle: las
                          animaciones se ejecutan permanentemente porque aquí
                          el usuario sí está viendo el producto en foco. */}
                      <div className="relative flex-1 min-h-[240px]">
                        {Preview ? (
                          <Preview active />
                        ) : (
                          <div className="absolute inset-0 grid place-items-center">
                            <div
                              className="font-display font-semibold leading-none"
                              style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                backgroundImage:
                                  "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {s.name}
                            </div>
                          </div>
                        )}

                        {/* Wordmark sutil del producto en la esquina */}
                        <div className="pointer-events-none absolute bottom-3 left-5 sm:left-6 font-display font-semibold tracking-tight text-fg/[0.06] text-3xl sm:text-4xl select-none">
                          {s.name}
                        </div>
                      </div>

                      {/* Mini metrics chart */}
                      <div className="grid grid-cols-3 gap-2 p-5 sm:p-6 border-t border-default/60">
                        {s.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg p-3 sm:p-4"
                            style={{
                              background: "rgb(var(--bg-elev) / 0.6)",
                              border: "1px solid rgb(var(--border))",
                            }}
                          >
                            <div
                              className="font-display text-lg sm:text-xl font-semibold leading-tight"
                              style={{ color: "rgb(var(--accent))" }}
                            >
                              {m.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] opacity-65 mt-1 leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={cn("lg:col-span-5 flex flex-col justify-center", i % 2 === 1 && "lg:order-1")}>
                  <div className="eyebrow mb-4">{s.category}</div>
                  <h2 className="h-section text-4xl sm:text-5xl mb-6">
                    {s.name}
                  </h2>

                  <p className="opacity-80 mb-6 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <Target
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "rgb(var(--accent-2))" }}
                      />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-50 mb-1">
                          Problema
                        </div>
                        <div className="opacity-85 text-sm">{s.problem}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Sparkles
                        className="w-5 h-5 mt-1 shrink-0"
                        style={{ color: "rgb(var(--accent))" }}
                      />
                      <div>
                        <div className="text-xs uppercase tracking-wider opacity-50 mb-1">
                          Resultado
                        </div>
                        <div className="opacity-85 text-sm">{s.result}</div>
                      </div>
                    </div>
                  </div>

                  <ButtonLink href="/contacto" arrow variant="secondary">
                    Solicitar una solución similar
                  </ButtonLink>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative pb-32">
        <div className="container">
          <div className="glass rounded-3xl p-10 sm:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <TrendingUp
                  className="w-10 h-10 mb-5"
                  style={{ color: "rgb(var(--accent))" }}
                />
                <h3 className="h-section text-3xl sm:text-4xl mb-4">
                  Su próxima plataforma puede convertirse en un producto líder de su industria.
                </h3>
                <p className="opacity-75 leading-relaxed">
                  Cada una de estas plataformas inició como una iniciativa
                  estratégica para resolver un reto específico. Hoy operan a
                  escala en organizaciones reales. La fórmula es replicable
                  para su sector.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <ButtonLink href="/contacto" size="lg" arrow>
                  Solicitar evaluación
                </ButtonLink>
                <ButtonLink
                  href="/portafolio"
                  variant="secondary"
                  size="lg"
                  arrow
                >
                  Ver casos de éxito
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
