"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, type ComponentType } from "react";
import {
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  HardHat,
  Car,
  Fingerprint,
  Truck,
  SquareParking,
  type LucideIcon,
} from "lucide-react";
import { solutions } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type Solution = (typeof solutions)[number];
export type PreviewProps = { active: boolean };

/* Maps exportados — los reusa la página /soluciones para mostrar el mismo
   "live preview" de cada producto en su tarjeta detallada. */
export const solutionPreviewMap: Record<string, ComponentType<PreviewProps>> = {
  comerciante: ComercianteMockup,
  obrasis: ObrasisMockup,
  intranort: IntranortMockup,
  cisnespp: CisnesppMockup,
  logitrack: LogitrackMockup,
  "progex-garage": ProgexGarageMockup,
};

export const solutionIconMap: Record<string, LucideIcon> = {
  comerciante: ShoppingBag,
  obrasis: HardHat,
  intranort: Car,
  cisnespp: Fingerprint,
  logitrack: Truck,
  "progex-garage": SquareParking,
};

// Aliases locales para no tocar el resto del archivo.
const previewMap = solutionPreviewMap;
const iconMap = solutionIconMap;

export function Solutions() {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="Productos propios · Plataformas en producción"
          title={
            <>
              Capacidad técnica <br className="hidden sm:block" />
              <span className="text-gradient-accent">demostrada en operación real.</span>
            </>
          }
          description="No solo entregamos software para terceros: hemos diseñado, construido y operamos nuestros propios productos en industrias reales — concesionarias, retail, construcción, logística y operaciones de estacionamiento. Pase el cursor sobre cada plataforma para visualizarla en operación."
        />

        {/*
          Bento grid (12 columnas en lg). Mostramos los 5 productos principales;
          Progex Garage queda visible en la página /soluciones (ahí se listan los 6).
          - Comerciante: 8x2 (featured, llena dos filas)
          - Obrasis:     4x1
          - Intranort:   4x1
          - Cisnespp:    6x1
          - Logitrack:   6x1
        */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)]">
          <SolutionCard
            solution={solutions[0]}
            className="lg:col-span-8 lg:row-span-2"
            featured
          />
          <SolutionCard solution={solutions[1]} className="lg:col-span-4" />
          <SolutionCard solution={solutions[2]} className="lg:col-span-4" />
          <SolutionCard solution={solutions[3]} className="lg:col-span-6" />
          <SolutionCard solution={solutions[4]} className="lg:col-span-6" />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/soluciones"
            className="group inline-flex items-center gap-1.5 rounded-full border border-default bg-bg-elev/60 px-5 py-2.5 text-sm text-fg-muted backdrop-blur transition-all hover:border-accent/30 hover:text-fg"
          >
            <Sparkles size={14} className="text-accent" />
            Conocer todos los productos
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =============== CARD =============== */

function SolutionCard({
  solution,
  className,
  featured,
}: {
  solution: Solution;
  className?: string;
  featured?: boolean;
}) {
  const [active, setActive] = useState(false);
  const Preview = previewMap[solution.slug];
  const Icon = iconMap[solution.slug] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTouchStart={() => setActive(true)}
      className={cn("min-w-0", className)}
    >
      <Link
        href={`/soluciones#${solution.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl glass-pro",
          "transition-all duration-500 hover:border-accent/40",
          featured ? "min-h-[460px]" : "min-h-[260px]",
        )}
      >
        {/* Decorative gradient that intensifies on hover */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-90",
            solution.gradient,
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

        {/* Live preview area */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden border-b border-default/50",
            featured ? "h-56" : "h-36",
          )}
        >
          {Preview ? <Preview active={active} /> : null}

          {/* Gradient mask for text readability */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgb(var(--bg-elev)/0.9) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={13} strokeWidth={2} />
                </span>
                <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
                  {solution.category}
                </p>
              </div>
              <h3
                className={cn(
                  "mt-2 font-display font-semibold tracking-tight text-fg",
                  featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
                )}
              >
                {solution.name}
              </h3>
            </div>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>

          <p
            className={cn(
              "mt-3 text-sm text-fg-muted",
              !featured && "line-clamp-2",
            )}
          >
            {solution.description}
          </p>

          {/* Metrics row — only on featured card */}
          {featured && (
            <div className="mt-auto grid grid-cols-3 gap-3 border-t border-default/60 pt-5">
              {solution.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-lg font-semibold text-fg">
                    {m.value}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-snug text-fg-subtle">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA reveal at bottom on hover (non-featured) */}
          {!featured && (
            <div className="mt-auto pt-4">
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
                  >
                    <span>Ver caso</span>
                    <ArrowUpRight size={12} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="status"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Producto activo
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

/* =============== MOCKUPS =============== */
/* Cada mockup recibe `active` (true cuando el usuario hace hover sobre la card)
   y dispara su animación principal. En reposo se ven semi-estáticos para no
   competir entre sí. */

function ComercianteMockup({ active }: PreviewProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
      <svg viewBox="0 0 400 200" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="com-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--accent-2))" />
          </linearGradient>
          <linearGradient id="com-area" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Frame */}
        <rect x="20" y="14" width="360" height="172" rx="10" fill="rgb(var(--bg)/0.85)" stroke="rgb(var(--border))" />
        {/* Header bar */}
        <rect x="20" y="14" width="360" height="28" rx="10" fill="rgb(var(--surface)/0.6)" />
        <circle cx="36" cy="28" r="3" fill="rgb(var(--accent))" />
        <text x="48" y="32" fill="rgb(var(--fg-muted))" fontSize="9" fontFamily="ui-monospace, monospace">
          caja / ventas hoy
        </text>
        <text x="364" y="32" textAnchor="end" fill="rgb(var(--accent))" fontSize="10" fontWeight="600" fontFamily="ui-monospace, monospace">
          +12.4%
        </text>

        {/* KPI */}
        <text x="36" y="68" fill="rgb(var(--fg-subtle))" fontSize="8" fontFamily="ui-monospace, monospace">
          INGRESOS
        </text>
        <text x="36" y="92" fill="rgb(var(--fg))" fontSize="22" fontWeight="700" fontFamily="var(--font-display), sans-serif">
          S/ 8,420
        </text>

        {/* Area chart */}
        <motion.path
          d="M 36 160 L 80 140 L 120 148 L 160 120 L 200 130 L 240 100 L 280 112 L 320 80 L 364 90 L 364 178 L 36 178 Z"
          fill="url(#com-area)"
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0.55 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d="M 36 160 L 80 140 L 120 148 L 160 120 L 200 130 L 240 100 L 280 112 L 320 80 L 364 90"
          stroke="url(#com-line)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 1 }}
          animate={active ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut", repeat: active ? Infinity : 0, repeatType: "loop" }}
        />

        {/* Pulsing dot at the end */}
        <motion.circle
          cx="364"
          cy="90"
          r="4"
          fill="rgb(var(--accent))"
          animate={active ? { r: [4, 6, 4], opacity: [1, 0.6, 1] } : { r: 4, opacity: 1 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

function ObrasisMockup({ active }: PreviewProps) {
  const projects = [
    { name: "Las Palmas", pct: 0.78, color: "rgb(var(--accent))" },
    { name: "Edificio Norte", pct: 0.46, color: "rgb(var(--accent-2))" },
    { name: "Ampliación Sur", pct: 0.92, color: "rgb(var(--accent))" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-3">
      <div className="flex w-full max-w-[300px] flex-col gap-2">
        {projects.map((p, i) => (
          <div key={p.name} className="rounded-lg border border-default bg-bg-elev/60 p-2 backdrop-blur-sm">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-mono uppercase tracking-wider text-fg-muted">
                {p.name}
              </span>
              <span className="font-mono font-semibold text-fg">
                {Math.round(p.pct * 100)}%
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-fg/[0.06]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: p.color }}
                initial={{ width: 0 }}
                animate={{ width: active ? `${p.pct * 100}%` : `${p.pct * 65}%` }}
                transition={{
                  duration: active ? 1.1 : 0.6,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * IntranortMockup — pipeline de ventas de concesionaria automotriz.
 * Tres modelos de vehículo con stock disponible y leads activos.
 * Al hacer hover, los stocks "respiran" para sugerir movimiento real.
 */
function IntranortMockup({ active }: PreviewProps) {
  const models = [
    { model: "Toyota Hilux", stock: 12, leads: 38, trend: "+24%" },
    { model: "Hyundai Tucson", stock: 7, leads: 26, trend: "+12%" },
    { model: "Nissan Sentra", stock: 18, leads: 14, trend: "+8%" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-3">
      <div className="flex w-full max-w-[320px] flex-col gap-1.5">
        {models.map((m, i) => (
          <motion.div
            key={m.model}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: active ? 1 : 0.6, x: 0 }}
            transition={{
              duration: 0.45,
              delay: active ? i * 0.12 : i * 0.05,
              ease: "easeOut",
            }}
            className="flex items-center gap-3 rounded-lg border border-default bg-bg-elev/70 p-2 backdrop-blur-sm"
          >
            {/* Vehicle silhouette icon */}
            <div
              className="grid h-7 w-9 shrink-0 place-items-center rounded-md"
              style={{
                background:
                  "linear-gradient(135deg, rgb(var(--accent)/0.18), rgb(var(--accent-2)/0.10))",
                border: "1px solid rgb(var(--border))",
              }}
            >
              <Car size={13} className="text-accent" strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="truncate text-[10px] font-medium text-fg">
                {m.model}
              </div>
              <div className="mt-0.5 flex items-center gap-2 font-mono text-[9px] text-fg-subtle">
                <span>
                  Stock <span className="text-fg-muted">{m.stock}</span>
                </span>
                <span className="opacity-40">·</span>
                <span>
                  Leads <span className="text-fg-muted">{m.leads}</span>
                </span>
              </div>
            </div>

            <motion.span
              className="font-mono text-[10px] font-semibold text-accent"
              animate={
                active
                  ? { opacity: [0.6, 1, 0.6] }
                  : { opacity: 0.85 }
              }
              transition={{
                duration: 1.6,
                delay: i * 0.15,
                repeat: active ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              {m.trend}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * CisnesppMockup — feed de marcaciones de asistencia en tiempo real.
 * Lista de empleados con hora de entrada, sucursal y estado (puntual/tarde).
 * Al hacer hover, las nuevas marcaciones aparecen una a una para sugerir
 * actividad en vivo.
 */
function CisnesppMockup({ active }: PreviewProps) {
  const checkins = [
    { name: "Carlos M.", branch: "Sede Norte", time: "08:01", status: "ok" },
    { name: "Andrea V.", branch: "Sede Centro", time: "08:04", status: "ok" },
    { name: "Daniel P.", branch: "Sede Sur", time: "08:18", status: "late" },
    { name: "Patricia R.", branch: "Sede Norte", time: "08:00", status: "ok" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-3">
      <div className="flex w-full max-w-[320px] flex-col gap-1.5">
        {checkins.map((c, i) => {
          const isLate = c.status === "late";
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: -4 }}
              animate={{
                opacity: active ? 1 : 0.6,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                delay: active ? i * 0.18 : i * 0.05,
                ease: "easeOut",
              }}
              className="flex items-center gap-2.5 rounded-lg border border-default bg-bg-elev/70 p-2 backdrop-blur-sm"
            >
              {/* Fingerprint slot — simulates biometric scan */}
              <div
                className="relative grid h-7 w-7 shrink-0 place-items-center rounded-md"
                style={{
                  background: isLate
                    ? "rgb(166 120 30 / 0.12)"
                    : "rgb(20 118 75 / 0.12)",
                  border: `1px solid ${
                    isLate ? "rgb(166 120 30 / 0.30)" : "rgb(20 118 75 / 0.30)"
                  }`,
                }}
              >
                <Fingerprint
                  size={12}
                  strokeWidth={1.8}
                  style={{
                    color: isLate ? "rgb(166 120 30)" : "rgb(20 118 75)",
                  }}
                />
                {/* scan ring on hover */}
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-md"
                    style={{
                      border: `1px solid ${
                        isLate ? "rgb(166 120 30)" : "rgb(20 118 75)"
                      }`,
                    }}
                    animate={{ opacity: [0, 0.6, 0], scale: [1, 1.4, 1.4] }}
                    transition={{
                      duration: 1.6,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate text-[10px] font-medium text-fg">
                  {c.name}
                </div>
                <div className="font-mono text-[9px] text-fg-subtle">
                  {c.branch}
                </div>
              </div>

              <div className="flex flex-col items-end gap-0.5">
                <span className="font-mono text-[10px] font-semibold text-fg">
                  {c.time}
                </span>
                <span
                  className="font-mono text-[8px] uppercase tracking-wider"
                  style={{
                    color: isLate ? "rgb(166 120 30)" : "rgb(20 118 75)",
                  }}
                >
                  {isLate ? "Tarde" : "Puntual"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * ProgexGarageMockup — vista cenital de un piso de estacionamiento.
 * Plazas en filas con espacios marcados como ocupados (silueta de auto) o
 * libres. Un contador en la esquina muestra ocupación en tiempo real;
 * al hacer hover, una plaza libre se "ocupa" para sugerir un ingreso vivo.
 */
function ProgexGarageMockup({ active }: PreviewProps) {
  // 2 filas x 9 plazas. Set de plazas ocupadas en reposo.
  const cols = 9;
  const occupiedBase = new Set<number>([0, 1, 3, 4, 6, 7, 9, 10, 12, 14, 16, 17]);
  // Plaza extra que se ocupa al hacer hover (simula ingreso en vivo).
  const liveSlot = 5;
  const occupiedActive = new Set<number>([...occupiedBase, liveSlot]);
  const occupied = active ? occupiedActive : occupiedBase;
  const total = 18;
  const occupancyCount = occupied.size;
  const occupancyPct = Math.round((occupancyCount / total) * 100);
  const occupancyDisplay = `${occupancyCount} / ${total} ocupado`;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
      {/* Header chip — total plazas + ocupación */}
      <div className="flex w-full max-w-[280px] items-center justify-between font-mono text-[9px] uppercase tracking-wider">
        <span className="text-fg-subtle">Sede Plaza Norte · Piso 2</span>
        <motion.span
          className="font-semibold text-accent"
          animate={{ opacity: active ? [0.6, 1, 0.6] : 1 }}
          transition={{ duration: 1.6, repeat: active ? Infinity : 0 }}
        >
          {occupancyDisplay}
        </motion.span>
      </div>

      {/* Top-down parking floor */}
      <div className="relative w-full max-w-[280px] rounded-md border border-default bg-bg-elev/40 p-2 backdrop-blur-sm">
        {/* Driving lane line in the middle */}
        <div
          className="pointer-events-none absolute inset-x-3 top-1/2 h-px -translate-y-1/2"
          style={{
            background:
              "repeating-linear-gradient(to right, rgb(var(--fg)/0.18) 0 6px, transparent 6px 12px)",
          }}
        />

        {/* Two rows of slots */}
        {[0, 1].map((row) => (
          <div
            key={row}
            className={cn(
              "grid grid-cols-9 gap-[3px]",
              row === 0 ? "mb-2" : "mt-2",
            )}
          >
            {Array.from({ length: cols }, (_, c) => {
              const id = row * cols + c;
              const isOccupied = occupied.has(id);
              const isLive = active && id === liveSlot;
              return (
                <motion.div
                  key={id}
                  className="relative h-5 rounded-[2px] border"
                  initial={false}
                  animate={{
                    background: isOccupied
                      ? "rgb(var(--accent) / 0.35)"
                      : "rgb(var(--fg) / 0.04)",
                    borderColor: isOccupied
                      ? "rgb(var(--accent) / 0.55)"
                      : "rgb(var(--fg) / 0.10)",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: isLive ? 0.6 : 0,
                  }}
                >
                  {/* Mini car silhouette when occupied */}
                  {isOccupied && (
                    <motion.span
                      className="absolute inset-1 rounded-[1px]"
                      style={{
                        background:
                          "linear-gradient(180deg, rgb(var(--accent)) 0%, rgb(var(--accent-2)) 100%)",
                      }}
                      initial={isLive ? { scaleY: 0, opacity: 0 } : false}
                      animate={
                        isLive
                          ? { scaleY: 1, opacity: 1 }
                          : { scaleY: 1, opacity: 1 }
                      }
                      transition={{ duration: 0.35, delay: isLive ? 0.7 : 0 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-fg-subtle">
        <span className="flex items-center gap-1">
          <span
            className="h-2 w-2.5 rounded-[1px]"
            style={{ background: "rgb(var(--accent) / 0.55)" }}
          />
          ocupado
        </span>
        <span className="flex items-center gap-1">
          <span
            className="h-2 w-2.5 rounded-[1px] border"
            style={{
              background: "rgb(var(--fg)/0.04)",
              borderColor: "rgb(var(--fg)/0.10)",
            }}
          />
          libre
        </span>
        <span className="opacity-50">{occupancyPct}% lleno</span>
      </div>
    </div>
  );
}

function LogitrackMockup({ active }: PreviewProps) {
  const path =
    "M 30 130 C 80 100, 120 160, 170 110 S 270 70, 320 90 S 380 50, 380 50";
  return (
    <div className="absolute inset-0 flex items-center justify-center p-2">
      <svg viewBox="0 0 400 180" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="logi-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--accent))" />
            <stop offset="100%" stopColor="rgb(var(--accent-2))" />
          </linearGradient>
          <pattern id="logi-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(var(--fg)/0.05)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Map grid */}
        <rect x="10" y="10" width="380" height="160" fill="url(#logi-grid)" rx="8" />
        <rect x="10" y="10" width="380" height="160" fill="none" stroke="rgb(var(--border))" rx="8" />

        {/* Faded reference path */}
        <path d={path} stroke="rgb(var(--fg)/0.15)" strokeWidth="2" strokeDasharray="4 5" fill="none" />

        {/* Drawn path */}
        <motion.path
          d={path}
          stroke="url(#logi-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0.4 }}
          animate={{ pathLength: active ? 1 : 0.55 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* Origin & destination markers */}
        <circle cx="30" cy="130" r="5" fill="rgb(var(--accent))" />
        <circle cx="380" cy="50" r="5" fill="rgb(var(--accent-2))" />
        <circle cx="380" cy="50" r="9" fill="none" stroke="rgb(var(--accent-2))" strokeOpacity="0.4">
          <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Truck icon traveling along path */}
        <motion.g
          initial={false}
          animate={active ? { opacity: 1 } : { opacity: 0.7 }}
        >
          <circle r="4" fill="rgb(var(--bg))" stroke="rgb(var(--accent))" strokeWidth="2">
            <animateMotion dur="5s" repeatCount="indefinite" path={path} rotate="auto" />
          </circle>
        </motion.g>
      </svg>
    </div>
  );
}
