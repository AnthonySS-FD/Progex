"use client";

import { motion } from "framer-motion";
import { trustMetrics, partners } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="relative w-full overflow-hidden border-y border-default bg-bg-elev/30 py-14 sm:py-16">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow mb-3">Confianza medible</p>
              <h3 className="h-section text-2xl text-fg sm:text-3xl">
                Empresas reales con sistemas reales en producción.
              </h3>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {trustMetrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="min-w-0 rounded-xl border border-default bg-bg-elev p-3 ring-soft sm:p-4"
                >
                  <div className="font-display text-xl font-semibold text-fg sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1 break-words text-[11px] leading-snug text-fg-muted sm:text-sm">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-8">
            <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle lg:text-left">
              Empresas que confían en nuestro trabajo
            </p>
            <div className="marquee-mask relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee gap-8 sm:gap-12">
                {[...partners, ...partners].map((p, i) => (
                  <div
                    key={i}
                    className="flex h-12 shrink-0 items-center px-2 font-display text-lg font-medium tracking-tight text-fg-muted opacity-60 grayscale transition-all hover:text-fg hover:opacity-100 hover:grayscale-0 sm:text-2xl"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
