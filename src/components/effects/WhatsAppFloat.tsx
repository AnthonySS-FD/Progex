"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/utils";

/**
 * WhatsAppFloat — Botón flotante con personalidad.
 *
 * Visual layers (from back to front):
 *  1. Triple pulse ring (3 anillos desfasados que se expanden)
 *  2. Glow halo que respira
 *  3. Botón principal (verde radial gradient)
 *  4. Shine sweep que pasa cada 6s (efecto "brillo de cristal")
 *  5. Icono WhatsApp + label expandible
 *
 * Idle: respira sutil. Hover: se expande horizontalmente revelando
 * "Háblanos por WhatsApp" + el icono hace un saludo + glow se intensifica.
 */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [autoTip, setAutoTip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1200);
    const start = setTimeout(() => setAutoTip(true), 5000);
    const hide = setTimeout(() => setAutoTip(false), 9500);
    return () => {
      clearTimeout(t1);
      clearTimeout(start);
      clearTimeout(hide);
    };
  }, []);

  const message = encodeURIComponent(
    "Hola PROGEX, me gustaría agendar una conversación inicial sobre una iniciativa tecnológica.",
  );
  const href = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${message}`;

  const showTip = autoTip && !hovered;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", damping: 14, stiffness: 200 }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Wrapper para idle "breathing" */}
          <motion.div
            animate={
              hovered
                ? { scale: 1, y: 0 }
                : { scale: [1, 1.04, 1], y: [0, -2, 0] }
            }
            transition={
              hovered
                ? { duration: 0.25, ease: "easeOut" }
                : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative"
          >
            {/* === GLOW PULSANTE DE FONDO === */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(37, 211, 102, 0.55), transparent 70%)",
                filter: "blur(18px)",
                animation: "wa-glow 2.6s ease-in-out infinite",
              }}
            />

            {/* === TRIPLE PULSE RING === */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "rgba(37, 211, 102, 0.5)",
                animation: "wa-pulse 2.4s ease-out infinite",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "rgba(37, 211, 102, 0.4)",
                animation: "wa-pulse 2.4s ease-out infinite",
                animationDelay: "0.8s",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background: "rgba(37, 211, 102, 0.3)",
                animation: "wa-pulse 2.4s ease-out infinite",
                animationDelay: "1.6s",
              }}
            />

            {/* === BOTÓN PRINCIPAL === */}
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hablar por WhatsApp"
              className="relative flex h-14 items-center overflow-hidden rounded-full pl-1"
              animate={{
                paddingRight: hovered ? 18 : 4,
                boxShadow: hovered
                  ? "0 22px 50px -10px rgba(37, 211, 102, 0.85), 0 0 0 1px rgba(37, 211, 102, 0.55), 0 0 0 8px rgba(37, 211, 102, 0.14)"
                  : "0 14px 36px -8px rgba(37, 211, 102, 0.7), 0 0 0 1px rgba(37, 211, 102, 0.45), 0 0 28px rgba(37, 211, 102, 0.35)",
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #25D366, #128C7E)",
              }}
            >
              {/* Glossy overlay */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"
              />

              {/* Shine sweep — barre el botón cada 6s */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
              >
                <span
                  className="absolute inset-y-0 -left-full w-1/2"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent, rgba(255,255,255,0.5), transparent)",
                    animation: "wa-shine 6s ease-in-out infinite",
                  }}
                />
              </span>

              {/* Icon — círculo a la izquierda */}
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
                <motion.svg
                  viewBox="0 0 32 32"
                  className="h-7 w-7 fill-white drop-shadow-sm"
                  animate={hovered ? { rotate: [0, -10, 8, -4, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  aria-hidden
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/*
                    Icono WhatsApp oficial (viewBox 32x32, centrado).
                    Reemplazable por una imagen propia: ver README sección "Cambiar icono WhatsApp".
                  */}
                  <path d="M16 3C8.832 3 3 8.832 3 16c0 2.293.598 4.527 1.734 6.5L3 29l6.668-1.715A12.94 12.94 0 0 0 16 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 23.625a10.6 10.6 0 0 1-5.395-1.477l-.387-.23-3.957 1.02 1.055-3.86-.252-.398A10.555 10.555 0 0 1 5.375 16C5.375 10.14 10.14 5.375 16 5.375S26.625 10.14 26.625 16 21.86 26.625 16 26.625zm5.836-7.918c-.32-.16-1.89-.93-2.183-1.04-.293-.106-.508-.16-.722.16-.215.32-.829 1.04-1.016 1.254-.187.215-.375.24-.695.08-.32-.16-1.351-.498-2.574-1.586a9.732 9.732 0 0 1-1.793-2.215c-.187-.32-.02-.494.142-.654.146-.144.32-.375.481-.563.16-.187.214-.32.32-.535.106-.215.054-.402-.026-.563-.08-.16-.722-1.738-.989-2.379-.26-.625-.524-.539-.722-.55a13.07 13.07 0 0 0-.616-.011 1.179 1.179 0 0 0-.856.402c-.293.32-1.122 1.097-1.122 2.674 0 1.578 1.149 3.099 1.31 3.314.16.215 2.262 3.46 5.484 4.852.766.33 1.363.526 1.829.674.769.244 1.469.21 2.022.128.617-.092 1.89-.773 2.157-1.519.267-.747.267-1.387.187-1.519-.08-.133-.293-.213-.613-.373z" />
                </motion.svg>
              </span>

              {/* Label expandible */}
              <AnimatePresence initial={false}>
                {hovered && (
                  <motion.div
                    key="wa-label"
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 4 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{
                      width: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.2, delay: 0.08 },
                    }}
                    className="relative z-10 overflow-hidden whitespace-nowrap"
                  >
                    <span className="block pr-2 text-sm font-semibold text-white">
                      Atención comercial
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          </motion.div>

          {/* Floating tip — aparece periódicamente, oculto en hover */}
          <AnimatePresence>
            {showTip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.92 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="glass pointer-events-none absolute bottom-full right-0 mb-3 max-w-[240px] origin-bottom-right rounded-2xl px-4 py-3 text-sm text-fg shadow-xl"
              >
                <p className="font-medium leading-snug">¿Hablamos?</p>
                <p className="mt-0.5 text-xs text-fg-muted">
                  Atención comercial directa por WhatsApp.
                </p>
                <span
                  className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-bg/70 backdrop-blur-md"
                  style={{
                    borderRight: "1px solid rgb(var(--border))",
                    borderBottom: "1px solid rgb(var(--border))",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Local keyframes */}
          <style jsx>{`
            @keyframes wa-pulse {
              0% {
                transform: scale(1);
                opacity: 0.55;
              }
              80% {
                transform: scale(1.85);
                opacity: 0;
              }
              100% {
                transform: scale(1.85);
                opacity: 0;
              }
            }
            @keyframes wa-glow {
              0%,
              100% {
                opacity: 0.55;
                transform: scale(1);
              }
              50% {
                opacity: 0.95;
                transform: scale(1.18);
              }
            }
            @keyframes wa-shine {
              0%,
              60% {
                left: -50%;
              }
              80% {
                left: 120%;
              }
              100% {
                left: 120%;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
