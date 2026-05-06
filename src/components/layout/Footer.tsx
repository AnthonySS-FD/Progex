"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo, InfinityBackground } from "@/components/ui/Logo";
import { SITE } from "@/lib/utils";

const sections = [
  {
    title: "Capacidades",
    links: [
      { href: "/servicios#software-a-medida", label: "Ingeniería de software a medida" },
      { href: "/servicios#aplicaciones-web", label: "Plataformas web" },
      { href: "/servicios#aplicaciones-moviles", label: "Aplicaciones móviles" },
      { href: "/servicios#sistemas-empresariales", label: "Sistemas empresariales" },
      { href: "/servicios#saas", label: "Productos SaaS" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { href: "/nosotros", label: "Sobre PROGEX" },
      { href: "/portafolio", label: "Casos de éxito" },
      { href: "/soluciones", label: "Productos propios" },
      { href: "/blog", label: "Insights & research" },
      { href: "/contacto", label: "Contacto comercial" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Términos de servicio" },
      { href: "#", label: "Política de privacidad" },
      { href: "#", label: "Cookies" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-default bg-bg">
      <div className="pointer-events-none absolute inset-0 mesh-bg-soft opacity-60" />
      <InfinityBackground className="opacity-[0.04]" />

      <div className="container relative">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="mt-5 max-w-md text-sm text-fg-muted sm:text-base">
              Compañía de ingeniería de software con sede en Lima. Diseñamos,
              construimos y operamos plataformas digitales para organizaciones
              que requieren escalar con disciplina técnica y rigor empresarial.
            </p>

            <address className="mt-8 not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-fg-muted">
                  <MapPin
                    size={14}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>
                    {SITE.address.line1}
                    <br />
                    <span className="text-fg-subtle">{SITE.address.line2}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3 text-fg-muted">
                  <Phone
                    size={14}
                    className="shrink-0 text-accent"
                    aria-hidden
                  />
                  <a
                    href={`tel:${SITE.whatsapp}`}
                    className="font-mono transition-colors hover:text-fg"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-fg-muted">
                  <Mail
                    size={14}
                    className="shrink-0 text-accent"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="transition-colors hover:text-fg"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </address>

            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-default bg-bg-elev/60 text-fg-muted transition-all hover:-translate-y-0.5 hover:border-current hover:text-accent"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom band */}
        <div className="border-t border-default py-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-fg-subtle">
              © {new Date().getFullYear()} {SITE.name} S.A.C. · Todos los
              derechos reservados.
            </p>
            <p className="font-mono text-xs text-fg-subtle">
              {SITE.hours}
            </p>
          </div>
        </div>
      </div>

      {/* Massive wordmark */}
      <div
        aria-hidden
        className="select-none overflow-hidden text-center"
        style={{ marginBottom: "-2vw" }}
      >
        <span
          className="block font-display font-semibold leading-none tracking-tighter"
          style={{
            fontSize: "clamp(4rem, 18vw, 18rem)",
            background:
              "linear-gradient(180deg, rgb(var(--fg) / 0.06), transparent)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PROGEX
        </span>
      </div>
    </footer>
  );
}
