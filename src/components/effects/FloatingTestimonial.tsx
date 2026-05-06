"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, X, ChevronUp, MessageSquareQuote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FloatingTestimonial() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 6500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show || minimized) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      8000,
    );
    return () => clearInterval(t);
  }, [show, minimized]);

  if (closed) return null;

  const t = testimonials[index];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "fixed bottom-5 left-5 z-30 hidden sm:bottom-7 sm:left-7 sm:block",
          )}
        >
          {minimized ? (
            <button
              onClick={() => setMinimized(false)}
              className="group flex items-center gap-2 rounded-full glass-strong px-4 py-2.5 text-sm shadow-xl ring-soft transition-all hover:-translate-y-0.5"
              aria-label="Mostrar testimonio"
            >
              <MessageSquareQuote
                size={15}
                className="text-accent"
              />
              <span className="text-fg">Lo que dicen nuestros clientes</span>
              <ChevronUp size={14} className="text-fg-muted" />
            </button>
          ) : (
            <div className="relative w-[320px] overflow-hidden rounded-2xl glass-strong shadow-2xl ring-soft">
              {/* Decorative gradient */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent-2/20 blur-3xl" />

              <div className="relative p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Quote size={13} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                      Testimonio
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setMinimized(true)}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-fg/[0.05] hover:text-fg"
                      aria-label="Minimizar"
                    >
                      <ChevronUp
                        size={13}
                        style={{ transform: "rotate(180deg)" }}
                      />
                    </button>
                    <button
                      onClick={() => setClosed(true)}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-fg/[0.05] hover:text-fg"
                      aria-label="Cerrar"
                    >
                      <X size={12} />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-[13.5px] leading-relaxed text-fg">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-default pt-3">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, rgb(var(--accent) / 0.25), rgb(var(--accent-2) / 0.25))",
                          color: "rgb(var(--fg))",
                        }}
                      >
                        {t.author
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-fg">
                          {t.author}
                        </p>
                        <p className="truncate text-[11px] text-fg-muted">
                          {t.role} · {t.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-3 flex gap-1">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={cn(
                        "h-1 flex-1 rounded-full transition-all",
                        i === index
                          ? "bg-accent"
                          : "bg-fg/[0.1] hover:bg-fg/[0.2]",
                      )}
                      aria-label={`Testimonio ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
