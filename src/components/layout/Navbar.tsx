"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/portafolio", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5",
      )}
    >
      <div
        className={cn(
          "mx-2 sm:mx-4 lg:mx-auto",
          "flex w-auto max-w-[1320px] items-center justify-between gap-1.5 sm:gap-3",
          "rounded-full transition-all duration-500",
          "min-w-0",
          scrolled
            ? "border border-default bg-bg-elev/70 px-2.5 py-2 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-elev/60 sm:px-5"
            : "px-2.5 py-1.5 sm:px-6 lg:px-8",
        )}
      >
        {/* Logo — empieza grande (xl = 44px) y al hacer scroll se reduce al
            tamaño "compacto" del navbar (sm = 22px). La transición CSS está
            definida en el componente Logo, así que el cambio de prop es
            visualmente continuo, no un salto. */}
        <Logo
          className="shrink-0 min-w-0"
          size={scrolled ? "sm" : "xl"}
          showWordmark={true}
          responsiveWordmark
        />

        {/* Desktop nav (lg+) */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  "hover:text-fg",
                  active ? "text-fg" : "text-fg-muted",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-fg/[0.06]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />

          {/* CTA — visible from md (768px) onwards.
              Below md (mobile) it's hidden; the mobile menu has its own CTA. */}
          <ButtonLink
            href="/contacto"
            size="sm"
            className="hidden md:inline-flex"
            arrow
          >
            <span className="hidden lg:inline">Solicitar evaluación</span>
            <span className="lg:hidden">Contacto</span>
          </ButtonLink>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full lg:hidden",
              "border border-default bg-bg-elev/60 text-fg backdrop-blur",
              "transition-colors hover:bg-bg-elev/80",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 -z-10 bg-bg/60 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-3 mt-3 sm:mx-6 lg:hidden"
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl p-5",
                  // Glass más fuerte que el resto: doble capa + ring + halo
                  "border border-default/80 bg-bg-elev/80 shadow-2xl ring-1 ring-fg/[0.04]",
                  "backdrop-blur-2xl supports-[backdrop-filter]:bg-bg-elev/55",
                )}
              >
                {/* Subtle accent glow inside */}
                <span
                  className="pointer-events-none absolute -top-12 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgb(var(--accent)/0.5), rgb(var(--accent-2)/0.5), transparent)",
                  }}
                />

                <nav className="relative flex flex-col">
                  {navItems.map((item, i) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== "/" &&
                        pathname.startsWith(item.href));
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.04 + i * 0.04,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors",
                            active
                              ? "bg-fg/[0.06] text-fg"
                              : "text-fg-muted hover:bg-fg/[0.04] hover:text-fg",
                          )}
                        >
                          <span>{item.label}</span>
                          {active && (
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                background: "rgb(var(--accent))",
                                boxShadow: "0 0 12px rgb(var(--accent))",
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.04 + navItems.length * 0.04,
                  }}
                  className="relative"
                >
                  <ButtonLink
                    href="/contacto"
                    arrow
                    className="mt-4 w-full justify-center"
                  >
                    Solicitar evaluación
                  </ButtonLink>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
