"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { InfinityBackground } from "@/components/ui/Logo";
import { SITE } from "@/lib/utils";

export function FinalCTA() {
  const waLink = `https://wa.me/${SITE.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(
    "Hola PROGEX, me gustaría agendar una conversación inicial sobre una iniciativa tecnológica."
  )}`;

  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <InfinityBackground className="absolute inset-0 pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-grid-fade opacity-30 pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-2 mb-6"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgb(var(--accent))",
                boxShadow: "0 0 16px rgb(var(--accent))",
              }}
            />
            Hablemos de su próxima iniciativa
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="h-display text-balance text-[clamp(1.9rem,6vw,3.6rem)]"
          >
            Construyamos la plataforma tecnológica{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              que su organización necesita.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl opacity-75 max-w-2xl mx-auto leading-relaxed"
          >
            Agende una sesión de descubrimiento ejecutivo sin costo ni
            compromiso. En 30 minutos evaluamos si somos el partner tecnológico
            indicado para acompañar su siguiente fase de transformación.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <ButtonLink href="/contacto" size="lg" arrow>
              Solicitar evaluación
            </ButtonLink>
            <ButtonLink
              href={waLink}
              variant="secondary"
              size="lg"
              external
            >
              <MessageCircle className="w-5 h-5" />
              Conversar por WhatsApp
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm opacity-60"
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "rgb(var(--accent))" }}
              />
              SLA &lt; 24 h hábiles
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "rgb(var(--accent-2))" }}
              />
              NDA desde el primer contacto
            </span>
            <span className="inline-flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5" />
              Sin compromiso comercial
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
