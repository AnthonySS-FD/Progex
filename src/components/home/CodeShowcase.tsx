"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  CodeWindow,
  tabs,
  getTotalChars,
  getCharsPerTab,
} from "@/components/effects/ScrollCodeReveal";
import { techIcons } from "@/components/ui/TechIcons";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * CodeShowcase — Sección "Cómo construimos".
 *
 * Pin behavior:
 *  - El <section> mide ~200vh en lg+.
 *  - El sticky stage es `top-0 h-screen`, así que el contenido se queda
 *    fijo en pantalla mientras el usuario hace scroll a través de los
 *    100vh sobrantes del padre.
 *  - El scroll progress (0..1 mapea exactamente al periodo "stuck")
 *    alimenta el "tipeo" del código.
 *  - El fondo (mesh + grid) se aplica al SECTION completo, no al sticky,
 *    así no queda un bloque blanco visible al liberar el pin.
 *
 * En mobile (<lg) el sticky se desactiva: la sección fluye normal y el
 * código se escribe a medida que la sección pasa por el viewport.
 */
export function CodeShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const totalChars = useMemo(() => getTotalChars(tabs), []);
  const charsPerTab = useMemo(() => getCharsPerTab(tabs), []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // El padre mide 200vh y el sticky 100vh, así que el progreso 0..1
  // corresponde EXACTAMENTE al periodo "stuck" (100vh de scroll).
  // Mapeamos el tipeo a [0.08 .. 0.78] para tener un pequeño preámbulo
  // antes de empezar y un breve "respiro" con el código completo al final
  // — antes de que el sticky se libere.
  const charProgress = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    [0, totalChars],
  );

  // Progress 0..1 dentro del rango buffered, que se pasa a CodeWindow
  // para que el "tipeo" use exactamente el mismo rango que el tab-switch.
  const typingProgress = useTransform(
    scrollYProgress,
    [0.08, 0.78],
    [0, 1],
    { clamp: true },
  );

  // Cambia de tab automáticamente a medida que el tipeo avanza.
  useMotionValueEvent(charProgress, "change", (latest) => {
    let acc = 0;
    for (let idx = 0; idx < charsPerTab.length; idx++) {
      acc += charsPerTab[idx];
      if (latest <= acc) {
        if (activeTab !== idx) setActiveTab(idx);
        return;
      }
    }
  });

  // Hint que se desvanece cuando el usuario empieza a "tipear".
  const hintOpacity = useTransform(scrollYProgress, [0.05, 0.2], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative lg:h-[240vh]"
    >
      {/* Background que cubre toda la sección (no solo el sticky).
          Así, cuando el sticky se libera al final, no aparece un bloque
          blanco abajo: el fondo sigue presente. */}
      <div className="absolute inset-0 bg-bg-elev/30">
        <div className="absolute inset-0 bg-grid-fade opacity-[0.5]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
      </div>

      {/* Stage pinned: queda quieto durante el typing.
          Usamos min-h-screen + items-center + overflow-visible para evitar que
          el contenido se recorte por arriba/abajo cuando excede los 100vh. */}
      <div className="relative lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center">
        <div className="container relative w-full py-20 lg:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Narrative column */}
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Disciplina técnica · Cómo construimos"
                title={
                  <>
                    Cada decisión técnica <br className="hidden sm:block" />
                    <span className="text-gradient-accent">
                      responde a un objetivo de negocio.
                    </span>
                  </>
                }
                description="No improvisamos arquitectura. Modelamos primero el dominio del negocio, exponemos APIs tipadas y bien documentadas, y diseñamos interfaces que entienden el contexto operativo del usuario. Así construimos software que perdura."
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 space-y-3.5"
              >
                {[
                  {
                    n: "1",
                    title: "Dominio antes que código",
                    text: "Mapeamos las reglas del negocio. Luego se traducen a tipos y servicios.",
                  },
                  {
                    n: "2",
                    title: "Contratos tipados end-to-end",
                    text: "TypeScript estricto del cliente al servidor. Errores que se atrapan en compile-time.",
                  },
                  {
                    n: "3",
                    title: "UI con propósito",
                    text: "Componentes accesibles, performantes y consistentes con la marca del cliente.",
                  },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent">
                      {step.n}
                    </span>
                    <div>
                      <h4 className="font-display text-base font-medium text-fg">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-fg-muted">{step.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-7"
              >
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
                  Stack principal
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {techIcons.map(({ Component, name }, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                    >
                      <Component />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Code column */}
            <div className="lg:col-span-7">
              <CodeWindow
                tabs={tabs}
                activeTab={activeTab}
                progress={typingProgress}
                totalChars={totalChars}
              />

              {/* Hint visible solo en lg+, se desvanece al empezar a tipear */}
              <motion.div
                style={{ opacity: hintOpacity }}
                className="mt-5 hidden text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle lg:block"
              >
                ↓ sigue desplazando para ver el código construirse
                ↓ sigue desplazando para ver el código construirse
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
