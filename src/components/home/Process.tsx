"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import {
  Compass,
  Pencil,
  Hammer,
  Rocket,
  TrendingUp,
  Check,
  type LucideIcon,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const stepIcons: LucideIcon[] = [Compass, Pencil, Hammer, Rocket, TrendingUp];

/**
 * Process — Pinned horizontal scroll experience.
 * On desktop the section measures ~400vh, the inner stage is `sticky top-0 h-screen`,
 * and the cards translate horizontally as the user scrolls.
 *
 * On mobile (< lg) the sticky behaviour is disabled and the steps render as a
 * scroll-revealed vertical timeline so the experience stays smooth on touch.
 */
export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const total = processSteps.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  const trackX = useTransform(smooth, [0.08, 0.92], ["0%", `-${(total - 1) * (100 / total)}%`]);
  const lineDraw = useTransform(smooth, [0.08, 0.92], [0, 1]);
  const barWidth = useTransform(smooth, [0.08, 0.92], ["0%", "100%"]);

  const [activeStep, setActiveStep] = useState(0);
  useMotionValueEvent(smooth, "change", (latest) => {
    const eased = Math.max(0, Math.min(1, (latest - 0.08) / (0.92 - 0.08)));
    const idx = Math.min(total - 1, Math.floor(eased * total));
    if (idx !== activeStep) setActiveStep(idx);
  });

  return (
    <section ref={sectionRef} className="relative bg-bg-elev/30 lg:h-[400vh]">
      {/* Decorative background fills the WHOLE section */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 mesh-bg-soft" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--border))] to-transparent" />
      </div>

      {/* Sticky stage — pinned only on desktop */}
      <div className="relative lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        <div className="container relative w-full pt-20 pb-24 lg:py-12">
          <SectionHeader
            eyebrow="Metodología · Cómo trabajamos"
            title={
              <>
                Un proceso disciplinado,
                <br />
                <span className="text-gradient-accent">con gobernanza ejecutiva.</span>
              </>
            }
            description="Cada iniciativa avanza con visibilidad continua del alcance, los plazos y los entregables. Sin cajas negras: stakeholders ven qué se construye, cuándo se libera y cómo impacta el negocio."
          />

          {/* Step counter + progress bar (desktop only) */}
          <div className="mt-10 hidden items-center gap-4 lg:flex">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              Paso{" "}
              <span className="text-fg">
                {String(activeStep + 1).padStart(2, "0")}
              </span>{" "}
              <span className="opacity-50">/ {String(total).padStart(2, "0")}</span>
            </span>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-fg/10">
              <motion.div
                style={{ width: barWidth }}
                className="absolute inset-y-0 left-0 rounded-full"
                aria-hidden
              >
                <div
                  className="h-full w-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                  }}
                />
              </motion.div>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle">
              ↓ scroll
            </span>
          </div>

          {/* DESKTOP: horizontal track */}
          <div className="relative mt-12 hidden lg:block">
            <ConnectorPath progress={lineDraw} count={total} />

            <motion.div
              style={{ x: trackX }}
              className="flex w-[500%] items-stretch gap-0 will-change-transform"
            >
              {processSteps.map((step, idx) => {
                const Icon = stepIcons[idx] ?? Compass;
                return (
                  <DesktopStepCard
                    key={step.n}
                    n={step.n}
                    title={step.title}
                    description={step.description}
                    Icon={Icon}
                    progress={smooth}
                    index={idx}
                    total={total}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* MOBILE: vertical reveal timeline */}
          <div className="mt-14 lg:hidden">
            <MobileTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopStepCard({
  n,
  title,
  description,
  Icon,
  progress,
  index,
  total,
}: {
  n: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const span = (0.92 - 0.08) / total;
  const enter = 0.08 + index * span;
  const peak = enter + span * 0.5;
  const exit = enter + span;

  const scale = useTransform(
    progress,
    [enter - span * 0.3, peak, exit + span * 0.3],
    [0.92, 1, 0.92],
  );
  const opacity = useTransform(
    progress,
    [enter - span * 0.4, peak, exit + span * 0.4],
    [0.45, 1, 0.45],
  );
  const checked = useTransform(progress, [exit, exit + 0.001], [0, 1]);
  const checkScale = useTransform(checked, [0, 1], [0.6, 1]);
  const haloOpacity = useTransform(progress, [enter, peak, exit], [0, 0.55, 0]);
  const underlineScale = useTransform(progress, [enter, peak, exit], [0, 1, 0]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className="flex w-1/5 shrink-0 items-center justify-center px-6"
    >
      <div className="group relative w-full max-w-md">
        {/* Glow halo on active card */}
        <motion.div
          aria-hidden
          style={{ opacity: haloOpacity }}
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-3xl"
        >
          <div
            className="h-full w-full rounded-[2rem]"
            style={{
              background:
                "radial-gradient(closest-side, rgb(var(--accent)/0.5), rgb(var(--accent-2)/0.25), transparent)",
            }}
          />
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl glass-pro p-7 shadow-2xl">
          {/* Top row: number + icon + check */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-default bg-bg-elev">
                <span
                  className="absolute inset-0 rounded-xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgb(var(--accent)/0.18), transparent 70%)",
                  }}
                />
                <Icon className="relative h-5 w-5 text-accent" strokeWidth={1.7} />
              </div>
              <span
                className="font-mono text-3xl font-semibold leading-none tracking-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {n}
              </span>
            </div>

            {/* Check stamp */}
            <motion.div
              style={{ opacity: checked, scale: checkScale }}
              className="grid h-9 w-9 place-items-center rounded-full"
              aria-hidden
            >
              <div
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                  color: "rgb(var(--bg))",
                }}
              >
                <Check size={16} strokeWidth={3} />
              </div>
            </motion.div>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-fg">
            {title}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-muted">
            {description}
          </p>

          <motion.span
            aria-hidden
            style={{ scaleX: underlineScale }}
            className="mt-7 block h-px w-full origin-left bg-gradient-to-r from-accent via-accent-2 to-transparent"
          />

          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Etapa {index + 1} de {total}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConnectorPath({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  const lineOpacity = useTransform(progress, [0, 0.05, 1], [0, 1, 1]);

  const points = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const x = 50 + i * (900 / (count - 1));
      const y = i % 2 === 0 ? 70 : 130;
      return { x, y };
    });
  }, [count]);

  const path = useMemo(() => {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx1 = (prev.x + curr.x) / 2;
      const cx2 = (prev.x + curr.x) / 2;
      d += ` C ${cx1} ${prev.y}, ${cx2} ${curr.y}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [points]);

  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-48 w-full -translate-y-1/2 opacity-50"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="proc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(var(--accent))" />
          <stop offset="100%" stopColor="rgb(var(--accent-2))" />
        </linearGradient>
      </defs>
      <path
        d={path}
        stroke="rgb(var(--fg) / 0.08)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 6"
      />
      <motion.path
        d={path}
        stroke="url(#proc-grad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        pathLength={1}
        style={{
          pathLength: progress,
          opacity: lineOpacity,
        }}
      />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="rgb(var(--accent))" opacity={0.8} />
      ))}
    </svg>
  );
}

function MobileTimeline() {
  return (
    <div className="relative space-y-6">
      {processSteps.map((step, idx) => {
        const Icon = stepIcons[idx] ?? Compass;
        return (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={cn(
              "group relative grid grid-cols-[44px_1fr] gap-4",
              "rounded-2xl glass-pro p-4",
            )}
          >
            <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-default bg-bg-elev">
              <span
                className="absolute inset-0 rounded-xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, rgb(var(--accent)/0.18), transparent 70%)",
                }}
              />
              <Icon className="relative h-5 w-5 text-accent" strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                <span
                  className="font-semibold"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.n}
                </span>
                <span className="opacity-50">·</span>
                Etapa {idx + 1}
              </div>
              <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
