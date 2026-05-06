"use client";

/**
 * TechBadgeIcon — small (14×14 by default) representative SVG icon for a
 * given technology label. Used inline next to a tech name in stack pills.
 *
 * Rendering: returns null if there's no matching icon, so the caller can
 * gracefully fall back to a text-only pill.
 */

type Props = {
  tech: string;
  size?: number;
  className?: string;
};

const wrapperBase = "shrink-0 inline-flex items-center justify-center";

export function TechBadgeIcon({ tech, size = 14, className }: Props) {
  const key = tech.toLowerCase().trim();
  const Icon = ICONS[normalize(key)];
  if (!Icon) return null;
  return (
    <span
      className={`${wrapperBase} ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Icon />
    </span>
  );
}

/** Map common variants to a canonical key. */
function normalize(key: string): string {
  if (key.includes("aws rekognition")) return "aws";
  if (key.startsWith("aws")) return "aws";
  if (key.includes("react native")) return "reactnative";
  if (key.includes("react")) return "react";
  if (key.includes("next")) return "nextjs";
  if (key.includes("typescript")) return "typescript";
  if (key.includes("node")) return "nodejs";
  if (key.includes("postgres")) return "postgres";
  if (key === "redis") return "redis";
  if (key.includes("flutter")) return "flutter";
  if (key.includes("mongo")) return "mongodb";
  if (key.includes("stripe")) return "stripe";
  if (key.includes("kafka")) return "kafka";
  if (key.includes("docker")) return "docker";
  if (key.includes("kubernetes") || key === "k8s") return "kubernetes";
  if (key.includes("azure")) return "azure";
  if (key.includes("gcp") || key.includes("google cloud")) return "gcp";
  if (key.includes("firebase")) return "firebase";
  if (key.includes("python")) return "python";
  if (key.includes(".net") || key.includes("dotnet")) return "dotnet";
  if (key.includes("graphql")) return "graphql";
  return key;
}

const ICONS: Record<string, () => JSX.Element> = {
  react: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
    </svg>
  ),
  reactnative: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
    </svg>
  ),
  nextjs: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M9.5 7.5v9M9.5 7.5l5 9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="13.8" y="7.5" width="1.5" height="6" fill="#fff" />
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="12" y="17" fontSize="10" fontWeight="800" fontFamily="system-ui" fill="#fff" textAnchor="middle">TS</text>
    </svg>
  ),
  nodejs: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M12 2.5L21 7.5v9L12 21.5L3 16.5v-9L12 2.5z" fill="#539E43" fillOpacity="0.25" stroke="#539E43" strokeWidth="1.4" />
      <text x="12" y="14.6" fontSize="5.5" fontWeight="800" fontFamily="system-ui" fill="#539E43" textAnchor="middle">JS</text>
    </svg>
  ),
  postgres: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <ellipse cx="12" cy="6" rx="7" ry="2.4" fill="#336791" />
      <path d="M5 6 V12 C5 13.4 8 14.4 12 14.4 C16 14.4 19 13.4 19 12 V6" stroke="#336791" strokeWidth="1.4" fill="#336791" fillOpacity="0.6" />
      <path d="M5 12 V18 C5 19.4 8 20.4 12 20.4 C16 20.4 19 19.4 19 18 V12" stroke="#336791" strokeWidth="1.4" fill="#336791" fillOpacity="0.4" />
    </svg>
  ),
  redis: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M3 9c0-1.4 4-2.4 9-2.4S21 7.6 21 9 17 11.4 12 11.4 3 10.4 3 9z" fill="#DC382D" />
      <path d="M3 13c0-1.4 4-2.4 9-2.4s9 1 9 2.4-4 2.4-9 2.4-9-1-9-2.4z" fill="#DC382D" opacity=".82" />
      <path d="M3 17c0-1.4 4-2.4 9-2.4s9 1 9 2.4-4 2.4-9 2.4-9-1-9-2.4z" fill="#DC382D" opacity=".62" />
    </svg>
  ),
  flutter: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M14.5 3 L4 13.5 L7.5 17 L18 6.5 Z" fill="#54C5F8" />
      <path d="M14.5 13 L8 19.5 L11.5 23 L18 16.5 Z" fill="#01579B" />
      <path d="M11.5 16 L14.5 13 L18 16.5 L14.5 20 Z" fill="#29B6F6" />
    </svg>
  ),
  mongodb: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M12 2c1.6 4.5 5 7 5 11.5 0 4.2-2.4 7-5 8.5-2.6-1.5-5-4.3-5-8.5C7 9 10.4 6.5 12 2z" fill="#4DB33D" />
      <path d="M12 2v20" stroke="#3F9C35" strokeWidth="1.2" />
    </svg>
  ),
  stripe: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <text x="12" y="16" fontSize="10" fontWeight="800" fontFamily="system-ui" fill="#fff" textAnchor="middle">S</text>
    </svg>
  ),
  kafka: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <circle cx="6" cy="6" r="2.4" fill="#231F20" />
      <circle cx="6" cy="18" r="2.4" fill="#231F20" />
      <circle cx="18" cy="12" r="2.6" fill="#231F20" />
      <path d="M8 7l8 4M8 17l8-4" stroke="#231F20" strokeWidth="1.4" />
    </svg>
  ),
  docker: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect x="2" y="11" width="20" height="6" rx="1" fill="#0db7ed" />
      <rect x="4" y="9" width="3" height="3" fill="#0db7ed" />
      <rect x="8" y="9" width="3" height="3" fill="#0db7ed" />
      <rect x="12" y="9" width="3" height="3" fill="#0db7ed" />
      <rect x="8" y="6" width="3" height="3" fill="#0db7ed" />
    </svg>
  ),
  kubernetes: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <polygon points="12,2 21,7 19,17 12,22 5,17 3,7" fill="#326CE5" />
      <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.4" />
    </svg>
  ),
  aws: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <text x="12" y="11" fontSize="5" fontWeight="800" fontFamily="system-ui" fill="#fff" textAnchor="middle">AWS</text>
      <path d="M5 16c4 1.5 10 1.5 14 0" stroke="#FF9900" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  ),
  azure: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <path d="M11 4 L4 18 H10 L13.5 12 Z" fill="#0078D4" />
      <path d="M14 9 L20 18 H10 L12 15 H16 Z" fill="#50E6FF" />
    </svg>
  ),
  gcp: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M14 6l-2 3 2 3 4-2-1-2z" fill="#EA4335" />
      <path d="M10 8l-3 4 3 5 4-2-2-4z" fill="#4285F4" />
      <path d="M5 13l3 5h6l-2-3z" fill="#34A853" />
      <path d="M14 6l4 4 1-3-3-1z" fill="#FBBC05" />
    </svg>
  ),
  firebase: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M5 18 L8 4 L11 9 L13 6 L19 18 L12 22 Z" fill="#FFA000" />
      <path d="M5 18 L8 4 L11 9 L19 18 L12 22 Z" fill="#FFCA28" />
    </svg>
  ),
  python: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M9 4h6c2 0 3 1 3 3v3h-6c-2 0-3 1-3 3v3H6c-2 0-3-1-3-3V7c0-2 1-3 3-3z" fill="#3776AB" />
      <path d="M15 20H9c-2 0-3-1-3-3v-3h6c2 0 3-1 3-3V8h3c2 0 3 1 3 3v6c0 2-1 3-3 3z" fill="#FFD43B" />
      <circle cx="8" cy="7" r="0.9" fill="#fff" />
      <circle cx="16" cy="17" r="0.9" fill="#fff" />
    </svg>
  ),
  dotnet: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#512BD4" />
      <text x="12" y="16" fontSize="9" fontWeight="800" fontFamily="system-ui" fill="#fff" textAnchor="middle">.N</text>
    </svg>
  ),
  graphql: () => (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" stroke="#E10098" strokeWidth="1.4" />
      <circle cx="12" cy="3" r="1.4" fill="#E10098" />
      <circle cx="21" cy="8" r="1.4" fill="#E10098" />
      <circle cx="21" cy="16" r="1.4" fill="#E10098" />
      <circle cx="12" cy="21" r="1.4" fill="#E10098" />
      <circle cx="3" cy="16" r="1.4" fill="#E10098" />
      <circle cx="3" cy="8" r="1.4" fill="#E10098" />
    </svg>
  ),
};
