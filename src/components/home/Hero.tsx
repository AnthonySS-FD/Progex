"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, BarChart3, Box } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { InfinityMark } from "@/components/ui/Logo";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 bg-grid-fade opacity-[0.4]" />
        <FloatingOrbs />
        <BackgroundInfinity />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="min-w-0 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-default bg-bg-elev/60 px-3 py-1.5 backdrop-blur"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-fg-muted sm:text-[11px] sm:tracking-[0.18em]">
                Atendiendo nuevas iniciativas · {new Date().toLocaleString("es", { month: "long" })} {new Date().getFullYear()}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="h-display break-words text-[clamp(2rem,8vw,4.6rem)] text-fg"
            >
              Ingeniería de software{" "}
              <span className="relative inline-block">
                <span className="text-gradient-accent">empresarial</span>
                <UnderlineFlourish />
              </span>{" "}
              <br className="hidden sm:block" />
              para organizaciones que escalan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-xl text-base text-fg-muted sm:text-lg"
            >
              Diseñamos, construimos y operamos plataformas digitales escalables
              que impulsan eficiencia operativa, transformación de procesos y
              crecimiento sostenido. Equipo senior, gobernanza ejecutiva y
              propiedad intelectual del cliente desde el día uno.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contacto" size="lg" arrow>
                Solicitar evaluación
              </ButtonLink>
              <ButtonLink href="/soluciones" variant="secondary" size="lg">
                Conocer capacidades
              </ButtonLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-fg-subtle"
            >
              <Pill>NDA desde el primer contacto</Pill>
              <Pill>Propiedad intelectual del cliente</Pill>
              <Pill>SLA productivo medible</Pill>
            </motion.div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative lg:col-span-5">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        aria-hidden
        className="inline-block h-1 w-1 rounded-full bg-accent"
      />
      {children}
    </span>
  );
}

function UnderlineFlourish() {
  return (
    <svg
      className="absolute -bottom-1 left-0 w-full"
      viewBox="0 0 200 8"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M2 5 Q 50 1, 100 4 T 198 3"
        stroke="rgb(var(--accent))"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
}

function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 24, 0],
          x: [0, -16, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[15%] bottom-[10%] h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]"
        style={{ background: "rgb(var(--accent-2) / 0.25)" }}
      />
    </>
  );
}

function BackgroundInfinity() {
  return (
    <svg
      className="absolute left-1/2 top-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      viewBox="0 0 800 400"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-inf" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(var(--accent))" />
          <stop offset="100%" stopColor="rgb(var(--accent-2))" />
        </linearGradient>
      </defs>
      <motion.path
        d="M150 200 C 150 80, 400 80, 400 200 C 400 320, 650 320, 650 200 C 650 80, 400 80, 400 200 C 400 320, 150 320, 150 200 Z"
        stroke="url(#hero-inf)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="8 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, strokeDashoffset: [0, -100] }}
        transition={{
          pathLength: { duration: 2 },
          strokeDashoffset: { duration: 18, repeat: Infinity, ease: "linear" },
        }}
      />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/30 via-transparent to-violet-500/30 blur-2xl" />

      {/* Floating panel: live metrics */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-12 z-20 hidden glass-strong rounded-2xl p-3 ring-soft sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-400">
            <Activity size={16} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-fg-subtle">
              Uptime
            </div>
            <div className="text-sm font-semibold text-fg">99.98%</div>
          </div>
        </div>
      </motion.div>

      {/* Floating panel: sparkline */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-4 bottom-16 z-20 hidden glass-strong rounded-2xl p-3 ring-soft sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <BarChart3 size={16} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-fg-subtle">
              Conversión
            </div>
            <div className="text-sm font-semibold text-fg">+23.4%</div>
          </div>
        </div>
      </motion.div>

      {/* Main panel — vidrio profesional para resaltar el dashboard */}
      <div className="relative overflow-hidden rounded-2xl glass-pro shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-default px-4 py-3">
          <div className="flex items-center gap-2">
            <InfinityMark height={18} />
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
              progex.cloud
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-fg-subtle">running</span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 p-5">
          <div>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-xs text-fg-subtle">Transacciones · 24h</span>
              <span className="font-mono text-[10px] text-emerald-400">
                +12.4%
              </span>
            </div>
            <div className="font-display text-3xl font-semibold tracking-tight text-fg">
              1,284
            </div>
            <SparkChart />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Sesiones activas", value: "47" },
              { label: "Latencia P95", value: "182ms" },
              { label: "Error rate", value: "0.02%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-default bg-surface/50 p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-fg-subtle">
                  {stat.label}
                </div>
                <div className="mt-1 font-mono text-sm font-semibold text-fg">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-default bg-surface/40 p-3">
            <div className="mb-2 flex items-center gap-2">
              <Box size={12} className="text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                Servicios
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: "api / orders", status: "healthy" },
                { name: "api / billing", status: "healthy" },
                { name: "worker / sync", status: "healthy" },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="font-mono text-fg-muted">{s.name}</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px]">{s.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SparkChart() {
  return (
    <svg
      viewBox="0 0 200 50"
      className="mt-2 h-12 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="spark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 35 L 20 28 L 40 32 L 60 22 L 80 26 L 100 18 L 120 22 L 140 14 L 160 18 L 180 10 L 200 12 L 200 50 L 0 50 Z"
        fill="url(#spark-grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      />
      <motion.path
        d="M0 35 L 20 28 L 40 32 L 60 22 L 80 26 L 100 18 L 120 22 L 140 14 L 160 18 L 180 10 L 200 12"
        stroke="rgb(var(--accent))"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
