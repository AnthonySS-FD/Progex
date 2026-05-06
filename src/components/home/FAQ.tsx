"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeader
              align="left"
              eyebrow="Preguntas frecuentes"
              title="Lo que las áreas ejecutivas suelen consultar."
              description="Si su consulta no se encuentra aquí, escríbanos a comercial@progex.pe — un consultor senior responde en menos de 24 horas hábiles."
            />
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={cn(
                    "rounded-2xl border overflow-hidden transition-colors duration-300",
                    isOpen ? "glass-strong" : "glass"
                  )}
                  style={{
                    borderColor: isOpen
                      ? "rgb(var(--accent) / 0.4)"
                      : "rgb(var(--border))",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-6 focus-ring rounded-2xl"
                  >
                    <span className="font-display text-lg sm:text-xl tracking-tight">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-9 h-9 rounded-full grid place-items-center"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))"
                          : "rgb(var(--fg) / 0.05)",
                        color: isOpen ? "#0b0c1d" : "rgb(var(--fg))",
                      }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-6 -mt-1 opacity-80 leading-relaxed max-w-2xl">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
