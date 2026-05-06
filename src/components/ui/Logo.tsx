"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  /** Hide wordmark on screens smaller than `sm` (640px). Useful for navbar. */
  responsiveWordmark?: boolean;
  animated?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  className,
  showWordmark = true,
  responsiveWordmark = false,
  animated = false,
  size = "md",
}: LogoProps) {
  // Heights tuned per usage (sm = navbar scrolled, xl = navbar expanded, md = generic, lg = footer)
  const sizes = {
    sm: { mark: 22, logo: 22 },
    md: { mark: 28, logo: 28 },
    lg: { mark: 40, logo: 40 },
    xl: { mark: 44, logo: 44 },
  };
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center text-fg focus-ring",
        className,
      )}
      aria-label="PROGEX — inicio"
    >
      {/* Standalone infinity mark for very small screens */}
      {responsiveWordmark && (
        <span className="inline-flex sm:hidden">
          <InfinityMark height={s.mark * 1.1} animated={animated} orbits />
        </span>
      )}

      {/* Full PROGEX logotype (real brand asset) */}
      {showWordmark && (
        <ProgexLogotype
          height={s.logo}
          className={cn(responsiveWordmark && "hidden sm:block")}
        />
      )}
    </Link>
  );
}

/**
 * ProgexLogotype — Renderiza el logo oficial de PROGEX desde /public.
 *
 * El archivo es PNG blanco con transparencia (17907x3410). Para que se vea
 * tanto en tema claro como en oscuro:
 *   - En tema oscuro (.dark) se muestra tal cual (blanco sobre fondo oscuro).
 *   - En tema claro se invierte vía CSS (`filter: invert`) para que el blanco
 *     se vuelva negro y sea legible sobre el fondo crema.
 *
 * El ratio del archivo es ~5.25:1, así que la altura define el ancho.
 */
function ProgexLogotype({
  height = 28,
  className,
}: {
  height?: number;
  className?: string;
}) {
  // 17907 / 3410 ≈ 5.25 — usamos el ratio real del archivo.
  const ratio = 17907 / 3410;
  const width = Math.round(height * ratio);

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/progex-logo.png"
      alt="PROGEX"
      width={width}
      height={height}
      style={{
        height,
        width,
        // Transición suave cuando el navbar cambia entre estados expanded/scrolled.
        transition:
          "height 500ms cubic-bezier(0.22, 1, 0.36, 1), width 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={cn(
        "shrink-0 select-none",
        // El PNG es blanco; invertimos en tema claro y volvemos al original en oscuro.
        "invert dark:invert-0",
        className,
      )}
      draggable={false}
    />
  );
}

interface InfinityMarkProps {
  height?: number;
  /** Anima el trazado al montar (path-length draw-on). */
  animated?: boolean;
  /** Activa partículas en órbita siguiendo el path. */
  orbits?: boolean;
  className?: string;
}

// Path canónico del infinito — 80x50 viewBox.
const INF_PATH =
  "M20 25 C 20 12, 40 12, 40 25 C 40 38, 60 38, 60 25 C 60 12, 40 12, 40 25 C 40 38, 20 38, 20 25 Z";

export function InfinityMark({
  height = 30,
  animated = false,
  orbits = false,
  className,
}: InfinityMarkProps) {
  // useId garantiza ids únicos cuando hay varios InfinityMark en la misma página
  // (importante porque animateMotion + xlink:href referencian un id de path).
  const uid = useId().replace(/:/g, "");
  const gradId = `prx-grad-${uid}`;
  const softId = `prx-grad-soft-${uid}`;
  const glowId = `prx-glow-${uid}`;
  const pathId = `prx-path-${uid}`;

  return (
    <svg
      width={height * 1.6}
      height={height}
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        // Transición suave cuando el navbar cambia entre estados expanded/scrolled.
        transition:
          "width 500ms cubic-bezier(0.22, 1, 0.36, 1), height 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={cn("overflow-visible", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(var(--accent))" />
          <stop offset="100%" stopColor="rgb(var(--accent-2))" />
        </linearGradient>
        <linearGradient id={softId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            stopColor="rgb(var(--accent))"
            stopOpacity="0.3"
          />
          <stop
            offset="100%"
            stopColor="rgb(var(--accent-2))"
            stopOpacity="0.3"
          />
        </linearGradient>

        {/* Glow filter para que las partículas brillen */}
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Definición del path para que animateMotion lo refiera */}
        <path id={pathId} d={INF_PATH} />
      </defs>

      {/* Soft halo (el "anillo" externo del infinito) */}
      <path
        d={INF_PATH}
        stroke={`url(#${softId})`}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main infinity */}
      {animated ? (
        <motion.path
          d={INF_PATH}
          stroke={`url(#${gradId})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      ) : (
        <path
          d={INF_PATH}
          stroke={`url(#${gradId})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      )}

      {/* Center node */}
      <circle
        cx="40"
        cy="25"
        r="2.6"
        fill="rgb(var(--accent))"
        className="group-hover:animate-pulse-glow"
      />

      {/* Orbiting particles — viajan a lo largo del path infinito */}
      {orbits && (
        <g filter={`url(#${glowId})`}>
          {/* Estela cian (trail) — viaja con la primera partícula */}
          <circle r="3.2" fill="rgb(var(--accent))" opacity="0.25">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              path={INF_PATH}
              keyTimes="0;1"
              keyPoints="0.02;1.02"
              calcMode="linear"
            />
          </circle>
          {/* Partícula cian principal — vuelta completa cada 6s */}
          <circle r="2" fill="rgb(var(--accent))">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              path={INF_PATH}
            />
            <animate
              attributeName="opacity"
              values="0.95;1;0.7;1;0.95"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Estela violeta — desfasada media vuelta */}
          <circle r="2.6" fill="rgb(var(--accent-2))" opacity="0.22">
            <animateMotion
              dur="6s"
              begin="-3s"
              repeatCount="indefinite"
              rotate="auto"
              path={INF_PATH}
              keyTimes="0;1"
              keyPoints="0.02;1.02"
              calcMode="linear"
            />
          </circle>
          {/* Partícula violeta */}
          <circle r="1.6" fill="rgb(var(--accent-2))">
            <animateMotion
              dur="6s"
              begin="-3s"
              repeatCount="indefinite"
              rotate="auto"
              path={INF_PATH}
            />
            <animate
              attributeName="opacity"
              values="0.85;1;0.6;1;0.85"
              dur="6s"
              begin="-3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Tercera partícula minúscula a 1/4 de fase, más rápida */}
          <circle r="1" fill="rgb(var(--accent))" opacity="0.7">
            <animateMotion
              dur="4s"
              begin="-1s"
              repeatCount="indefinite"
              rotate="auto"
              path={INF_PATH}
            />
          </circle>
        </g>
      )}
    </svg>
  );
}

/**
 * InfinityBackground — Decoración full-bleed.
 *
 * Tres infinitos concéntricos, cada uno escalado y rotado distinto,
 * con un sistema completo de partículas orbitando en velocidades
 * diferentes (efecto "sistema planetario"). Además, cada anillo
 * rota lentamente sobre sí mismo (rotate idle muy sutil) para que
 * el conjunto se sienta vivo aunque no haya scroll ni interacción.
 */
export function InfinityBackground({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `bg-inf-${uid}`;
  const glowId = `bg-glow-${uid}`;

  // Path para el viewBox grande
  const BG_PATH =
    "M100 300 C 100 100, 600 100, 600 300 C 600 500, 1100 500, 1100 300 C 1100 100, 600 100, 600 300 C 600 500, 100 500, 100 300 Z";

  // Configuraciones de los infinitos orbitantes
  const orbits = [
    {
      scale: 1,
      rotate: 0,
      opacity: 0.34,
      stroke: 1.4,
      dur: 22,
      particleColor: "var(--accent)",
      particleSize: 6,
      idleSpin: 60,
      reverse: false,
    },
    {
      scale: 1.18,
      rotate: 18,
      opacity: 0.2,
      stroke: 1.2,
      dur: 30,
      particleColor: "var(--accent-2)",
      particleSize: 4.5,
      idleSpin: 80,
      reverse: true,
    },
    {
      scale: 1.42,
      rotate: -22,
      opacity: 0.11,
      stroke: 1,
      dur: 42,
      particleColor: "var(--accent)",
      particleSize: 3.5,
      idleSpin: 110,
      reverse: false,
    },
  ];

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(var(--accent-2))" stopOpacity="0.6" />
        </linearGradient>

        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {orbits.map((o, i) => (
        <g key={i}>
          {/* Inner group: rotación animada (spin idle) */}
          <g
            style={{
              transformOrigin: "600px 300px",
              transformBox: "view-box",
              animation: `${o.reverse ? "bg-spin-rev" : "bg-spin"} ${o.idleSpin}s linear infinite`,
            }}
          >
            {/* Static positioning (rotación inicial + escala) */}
            <g
              style={{
                transformOrigin: "600px 300px",
                transformBox: "view-box",
                transform: `rotate(${o.rotate}deg) scale(${o.scale})`,
              }}
            >
              {/* Trazado base del infinito */}
              <path
                d={BG_PATH}
                stroke={`url(#${gradId})`}
                strokeWidth={o.stroke}
                fill="none"
                opacity={o.opacity}
              />

              {/* Estela (trail) que sigue a la partícula principal */}
              <circle
                r={o.particleSize * 1.4}
                fill={`rgb(${o.particleColor})`}
                opacity={Math.min(0.5, o.opacity * 1.4)}
                filter={`url(#${glowId})`}
              >
                <animateMotion
                  dur={`${o.dur}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  path={BG_PATH}
                  keyTimes="0;1"
                  keyPoints="0.025;1.025"
                  calcMode="linear"
                />
              </circle>

              {/* Partícula principal que orbita el path completo */}
              <circle
                r={o.particleSize}
                fill={`rgb(${o.particleColor})`}
                opacity={Math.min(1, o.opacity * 3.2)}
                filter={`url(#${glowId})`}
              >
                <animateMotion
                  dur={`${o.dur}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  path={BG_PATH}
                />
              </circle>

              {/* Segunda partícula desfasada media vuelta */}
              <circle
                r={o.particleSize * 0.7}
                fill={`rgb(${o.particleColor})`}
                opacity={Math.min(0.85, o.opacity * 2.4)}
                filter={`url(#${glowId})`}
              >
                <animateMotion
                  dur={`${o.dur}s`}
                  begin={`-${o.dur / 2}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  path={BG_PATH}
                />
              </circle>

              {/* Tercera partícula a 1/3 de fase, más pequeña */}
              <circle
                r={o.particleSize * 0.45}
                fill={`rgb(${o.particleColor})`}
                opacity={Math.min(0.7, o.opacity * 2)}
                filter={`url(#${glowId})`}
              >
                <animateMotion
                  dur={`${o.dur}s`}
                  begin={`-${o.dur / 3}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  path={BG_PATH}
                />
              </circle>
            </g>
          </g>
        </g>
      ))}

      {/* Animaciones de rotación idle (sistema planetario) */}
      <style>{`
        @keyframes bg-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bg-spin-rev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </svg>
  );
}
