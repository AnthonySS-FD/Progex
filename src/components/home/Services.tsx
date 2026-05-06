"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section className="section-y relative">
      <div className="pointer-events-none absolute inset-0 -z-10 mesh-bg-soft" />
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Capacidades · Servicios"
            title={
              <>
                Capacidades de ingeniería <br className="hidden sm:block" />
                <span className="text-gradient-accent">para organizaciones exigentes.</span>
              </>
            }
            description="No comercializamos paquetes cerrados: estructuramos cada compromiso en función del modelo operativo, las restricciones técnicas y los objetivos estratégicos del cliente."
          />
          <Link
            href="/servicios"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-accent"
          >
            Ver todas las capacidades
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            >
              <ServiceCard service={service} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  const isAccent = service.accent === "cyan";

  return (
    <Link
      href={`/servicios#${service.slug}`}
      className={cn(
        "group relative block h-full overflow-hidden rounded-2xl border border-default bg-bg-elev p-6",
        "card-lift ring-soft transition-all hover:border-accent/30",
      )}
    >
      {/* Glow on hover */}
      <div
        className={cn(
          "pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60",
          isAccent ? "bg-accent" : "bg-violet-500",
        )}
        style={{ background: isAccent ? "rgb(var(--accent))" : "rgb(var(--accent-2))" }}
      />

      {/* Icon */}
      <div
        className={cn(
          "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
          isAccent
            ? "bg-accent/10 text-accent"
            : "bg-violet-500/10 text-violet-400",
        )}
        style={{
          color: isAccent ? "rgb(var(--accent))" : "rgb(var(--accent-2))",
          background: isAccent
            ? "rgb(var(--accent) / 0.1)"
            : "rgb(var(--accent-2) / 0.12)",
        }}
      >
        <Icon size={20} />
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">
          {service.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
        />
      </div>

      <p className="mt-2 text-sm text-fg-muted">{service.short}</p>

      <div className="mt-5 flex items-center gap-2 border-t border-default pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px flex-1 bg-fg/[0.08]" />
        <span>Saber más</span>
      </div>
    </Link>
  );
}
