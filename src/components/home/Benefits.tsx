"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { benefits } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Benefits() {
  return (
    <section className="section-y relative">
      <div className="container">
        <SectionHeader
          eyebrow="Por qué PROGEX"
          align="center"
          title={
            <>
              Lo que su organización recibe
              <br />
              <span className="text-gradient-accent">al elegirnos como partner tecnológico.</span>
            </>
          }
          description="No comercializamos horas de desarrollo: entregamos resultados verificables, arquitecturas sostenibles y un equipo senior comprometido con el ciclo de vida completo del producto."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-default bg-bg-elev/50 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative bg-bg-elev p-7 transition-colors hover:bg-bg-elev/80"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Check size={16} strokeWidth={2.5} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-fg">
                {benefit.title}
              </h3>
              <p className="text-sm text-fg-muted">{benefit.description}</p>

              {/* Subtle hover indicator */}
              <span className="pointer-events-none absolute bottom-0 left-7 h-0.5 w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
