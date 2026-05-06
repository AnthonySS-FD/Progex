"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 mesh-bg-soft opacity-60 pointer-events-none" />
      <div className="container relative">
        <SectionHeader
          eyebrow="Voz de nuestros clientes"
          title="Organizaciones que confían en cómo construimos software."
          description="Líderes de tecnología, finanzas y operaciones que migraron desde procesos manuales o sistemas heredados hacia plataformas digitales en producción."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="glass rounded-3xl p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute -top-10 -left-6 text-[180px] leading-none font-bold text-[rgb(var(--accent)/0.08)] select-none pointer-events-none">
                &ldquo;
              </div>
              <Quote
                className="w-10 h-10 mb-6 opacity-80"
                style={{ color: "rgb(var(--accent))" }}
              />
              <p className="font-display text-2xl sm:text-3xl leading-snug tracking-tight relative">
                {t.quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--accent)/0.25), rgb(var(--accent-2)/0.25))",
                    color: "rgb(var(--fg))",
                  }}
                >
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm opacity-70">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Anterior testimonio"
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:opacity-80 transition focus-ring"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:opacity-80 transition focus-ring"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="ml-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Ir al testimonio ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      i === active ? "w-10" : "w-4 opacity-40 hover:opacity-70"
                    )}
                    style={{
                      background:
                        i === active
                          ? "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-2)))"
                          : "rgb(var(--fg))",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-3">
            {testimonials.map((tt, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full text-left rounded-2xl p-5 transition-all duration-500 group",
                  i === active
                    ? "glass-strong scale-[1.02]"
                    : "glass opacity-60 hover:opacity-100"
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">{tt.author}</span>
                  <span
                    className={cn(
                      "text-xs transition",
                      i === active ? "opacity-100" : "opacity-0"
                    )}
                    style={{ color: "rgb(var(--accent))" }}
                  >
                    leyendo
                  </span>
                </div>
                <div className="text-sm opacity-70">
                  {tt.role} · {tt.company}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
