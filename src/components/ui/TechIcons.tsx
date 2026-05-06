"use client";

import { cn } from "@/lib/utils";

const iconWrapper =
  "relative flex h-12 w-12 items-center justify-center rounded-xl bg-bg-elev ring-soft transition-transform duration-300 hover:-translate-y-0.5";

interface TechIconProps {
  className?: string;
  label?: boolean;
}

export function ReactIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="React">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          strokeWidth="1.2"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </svg>
      {label && <Label>React</Label>}
    </div>
  );
}

export function NextIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Next.js">
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <circle cx="12" cy="12" r="11" fill="#000" />
        <path
          d="M9.5 7.5v9M9.5 7.5l5 9"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="13.8" y="7.5" width="1.5" height="6" fill="#fff" />
      </svg>
      {label && <Label>Next.js</Label>}
    </div>
  );
}

export function TypeScriptIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="TypeScript">
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text
          x="12"
          y="17"
          fontSize="10"
          fontWeight="800"
          fontFamily="system-ui"
          fill="#fff"
          textAnchor="middle"
        >
          TS
        </text>
      </svg>
      {label && <Label>TypeScript</Label>}
    </div>
  );
}

export function FlutterIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Flutter">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M14.5 3 L4 13.5 L7.5 17 L18 6.5 Z" fill="#54C5F8" />
        <path d="M14.5 13 L8 19.5 L11.5 23 L18 16.5 Z" fill="#01579B" />
        <path d="M11.5 16 L14.5 13 L18 16.5 L14.5 20 Z" fill="#29B6F6" />
      </svg>
      {label && <Label>Flutter</Label>}
    </div>
  );
}

export function AndroidIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Android">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="#3DDC84">
        <path d="M5 10c0-3.5 3.1-6.5 7-6.5s7 3 7 6.5v.5H5V10zm2-3.2 1-1.7M17 6.8l-1-1.7M9 9h.5M14.5 9h.5" />
        <rect x="5" y="11" width="14" height="7" rx="1" fill="#3DDC84" />
        <rect x="3.5" y="11" width="2" height="6" rx="1" fill="#3DDC84" />
        <rect x="18.5" y="11" width="2" height="6" rx="1" fill="#3DDC84" />
        <rect x="8" y="18" width="2" height="3" rx="0.5" fill="#3DDC84" />
        <rect x="14" y="18" width="2" height="3" rx="0.5" fill="#3DDC84" />
      </svg>
      {label && <Label>Android</Label>}
    </div>
  );
}

export function IOSIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="iOS">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path
          d="M16.5 12.6c0-2.4 2-3.5 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.9-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2-.1 1.6-.7 3-.7s1.8.7 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-3.6zM14.4 5.6c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.7-1.1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z"
          className="text-fg"
        />
      </svg>
      {label && <Label>iOS</Label>}
    </div>
  );
}

export function NodeIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Node.js">
      <svg viewBox="0 0 24 24" className="h-7 w-7">
        <path
          d="M12 2.5L21 7.5v9L12 21.5L3 16.5v-9L12 2.5z"
          fill="#539E43"
          fillOpacity="0.2"
          stroke="#539E43"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="15"
          fontSize="6"
          fontWeight="800"
          fontFamily="system-ui"
          fill="#539E43"
          textAnchor="middle"
        >
          NODE
        </text>
      </svg>
      {label && <Label>Node.js</Label>}
    </div>
  );
}

export function FirebaseIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Firebase">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M5 18 L8 4 L11 9 L13 6 L19 18 L12 22 Z" fill="#FFA000" />
        <path d="M5 18 L8 4 L11 9 L19 18 L12 22 Z" fill="#FFCA28" />
        <path d="M5 18 L19 18 L12 22 Z" fill="#FFA000" opacity=".5" />
      </svg>
      {label && <Label>Firebase</Label>}
    </div>
  );
}

export function SQLIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="SQL">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="2.4" fill="#336791" />
        <path
          d="M5 6 V12 C5 13.4 8 14.4 12 14.4 C16 14.4 19 13.4 19 12 V6"
          stroke="#336791"
          strokeWidth="1.5"
          fill="#336791"
          fillOpacity="0.6"
        />
        <path
          d="M5 12 V18 C5 19.4 8 20.4 12 20.4 C16 20.4 19 19.4 19 18 V12"
          stroke="#336791"
          strokeWidth="1.5"
          fill="#336791"
          fillOpacity="0.4"
        />
      </svg>
      {label && <Label>SQL</Label>}
    </div>
  );
}

export function CloudIcon({ className, label }: TechIconProps) {
  return (
    <div className={cn(iconWrapper, className)} title="Cloud">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <defs>
          <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
        <path
          d="M7 17h10c2.5 0 4-1.8 4-4 0-2.2-1.7-3.7-3.7-3.9C16.7 6.3 14.5 5 12 5c-3 0-5.5 2-6 4.7C3.7 10.2 2 12 2 14.2 2 16.4 4 18 7 17z"
          fill="url(#cloud-grad)"
        />
      </svg>
      {label && <Label>Cloud</Label>}
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-fg-muted">
      {children}
    </span>
  );
}

export const techIcons = [
  { Component: ReactIcon, name: "React" },
  { Component: NextIcon, name: "Next.js" },
  { Component: TypeScriptIcon, name: "TypeScript" },
  { Component: FlutterIcon, name: "Flutter" },
  { Component: AndroidIcon, name: "Android" },
  { Component: IOSIcon, name: "iOS" },
  { Component: NodeIcon, name: "Node.js" },
  { Component: FirebaseIcon, name: "Firebase" },
  { Component: SQLIcon, name: "SQL" },
  { Component: CloudIcon, name: "Cloud" },
];
