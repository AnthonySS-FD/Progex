"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { TechBadgeIcon } from "@/components/ui/TechBadgeIcon";
import { cn } from "@/lib/utils";

type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  accent: "cyan" | "violet";
};

const cases: CaseStudy[] = [
  {
    slug: "distribuidora-andina",
    industry: "Distribución mayorista",
    title: "ERP a medida para una distribuidora con +20 sucursales",
    client: "Distribuidora Andina",
    problem:
      "Operación con cuatro sistemas distintos, conciliación manual diaria y visibilidad de inventario con 48h de retraso.",
    solution:
      "ERP centralizado con módulos de ventas, almacén, cuentas por cobrar, rutas y reportería ejecutiva. Migración progresiva por sucursales.",
    result:
      "Inventario en tiempo real, cierres de caja automatizados y dashboards ejecutivos con datos confiables.",
    metrics: [
      { value: "−72%", label: "Tiempo de cierre" },
      { value: "+34%", label: "Rotación de stock" },
      { value: "20+", label: "Sucursales en línea" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    accent: "cyan",
  },
  {
    slug: "grupo-constructor",
    industry: "Construcción",
    title: "Plataforma de gestión de obras y valorizaciones",
    client: "Grupo Constructor Norte",
    problem:
      "Avance físico de obra reportado en Excel, valorizaciones con errores recurrentes y costos reales sin trazabilidad.",
    solution:
      "Plataforma con avance por partida, valorizaciones automáticas, almacén de obra y panel ejecutivo. App móvil para residentes en campo.",
    result:
      "Valorizaciones en horas en lugar de días, control real de costos por proyecto y visibilidad ejecutiva por obra.",
    metrics: [
      { value: "−81%", label: "Tiempo de valorización" },
      { value: "−34%", label: "Pérdidas por desviación" },
      { value: "150+", label: "Obras gestionadas" },
    ],
    stack: ["Flutter", "Next.js", "Node.js", "AWS"],
    accent: "violet",
  },
  {
    slug: "cadena-cines",
    industry: "Entretenimiento",
    title: "Venta online y backoffice para cadena de cines",
    client: "Cadena Regional",
    problem:
      "Venta de entradas solo presencial, programación manual y nula visibilidad de ocupación por función.",
    solution:
      "Plataforma de venta online, app móvil, backoffice de programación y dashboard de ocupación en tiempo real.",
    result:
      "Lanzamiento en seis salas en 14 semanas, venta digital escalable y métricas operativas en vivo.",
    metrics: [
      { value: "+240%", label: "Venta digital" },
      { value: "+18%", label: "Ocupación promedio" },
      { value: "<2s", label: "Tiempo de checkout" },
    ],
    stack: ["Next.js", "React Native", "Node.js", "Stripe"],
    accent: "cyan",
  },
  {
    slug: "retail-omnicanal",
    industry: "Retail",
    title: "Integración omnicanal entre tiendas, ecommerce y marketplaces",
    client: "Cadena Retail",
    problem:
      "Stock duplicado entre canales, sobreventa frecuente y conciliación contable manual entre tres sistemas.",
    solution:
      "Capa de integración entre POS, ecommerce y marketplaces. Stock unificado, sincronización en tiempo real y conciliación automática.",
    result:
      "Sobreventa eliminada, lanzamiento de marketplaces en cuatro semanas y conciliación automática contable.",
    metrics: [
      { value: "0", label: "Sobreventas/mes" },
      { value: "−92%", label: "Trabajo manual contable" },
      { value: "4", label: "Canales sincronizados" },
    ],
    stack: ["Node.js", "Kafka", "PostgreSQL", "Docker"],
    accent: "violet",
  },
  {
    slug: "logistica-flota",
    industry: "Logística",
    title: "Trazabilidad de flota y entregas para operador logístico",
    client: "Servicios Logísticos S.A.",
    problem:
      "Sin visibilidad real del estado de envíos, evidencias de entrega en papel y reclamos sin trazabilidad.",
    solution:
      "App de chofer con captura de evidencias, GPS en tiempo real, panel de control y portal del cliente con seguimiento.",
    result:
      "Visibilidad de entrega en tiempo real, reclamos con trazabilidad inmediata y SLA medible por ruta.",
    metrics: [
      { value: "+27%", label: "Entregas a tiempo" },
      { value: "−41%", label: "Reclamos por entrega" },
      { value: "100%", label: "Visibilidad de flota" },
    ],
    stack: ["Flutter", "Next.js", "Node.js", "MongoDB"],
    accent: "cyan",
  },
  {
    slug: "fintech-onboarding",
    industry: "Fintech",
    title: "Onboarding digital con KYC para fintech regional",
    client: "Fintech Local",
    problem:
      "Alta de clientes presencial, validación manual y abandono del 60% en el flujo previo.",
    solution:
      "Onboarding 100% digital con captura de documento, validación facial, scoring y firma electrónica integrada.",
    result:
      "Conversión disparada, time-to-onboard bajo 5 minutos y cumplimiento regulatorio total.",
    metrics: [
      { value: "+165%", label: "Conversión" },
      { value: "<5 min", label: "Onboarding" },
      { value: "100%", label: "Cumplimiento KYC" },
    ],
    stack: ["Next.js", "Node.js", "AWS Rekognition", "PostgreSQL"],
    accent: "violet",
  },
];

export default function PortafolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos de éxito · Portafolio"
        title={
          <>
            Plataformas en producción que sostienen{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              operaciones de empresas líderes
            </span>
            .
          </>
        }
        description="No exhibimos prototipos: presentamos plataformas que operan diariamente al servicio de organizaciones reales. Cada caso documenta el contexto del cliente, el reto estratégico, la arquitectura entregada y el impacto medible en su operación."
      />

      <section className="relative pb-32">
        <div className="container space-y-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.05 }}
              className="group relative rounded-3xl overflow-hidden glass card-lift"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    c.accent === "cyan"
                      ? "radial-gradient(900px circle at 0% 0%, rgb(var(--accent)/0.10), transparent 50%)"
                      : "radial-gradient(900px circle at 100% 0%, rgb(var(--accent-2)/0.10), transparent 50%)",
                }}
              />

              <div className="relative grid lg:grid-cols-12 gap-0">
                {/* Left content */}
                <div className="lg:col-span-8 p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xs uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                      style={{
                        background:
                          c.accent === "cyan"
                            ? "rgb(var(--accent) / 0.12)"
                            : "rgb(var(--accent-2) / 0.12)",
                        color:
                          c.accent === "cyan"
                            ? "rgb(var(--accent))"
                            : "rgb(var(--accent-2))",
                      }}
                    >
                      {c.industry}
                    </span>
                    <span className="text-xs opacity-50 font-mono">
                      {c.client}
                    </span>
                  </div>

                  <h2 className="h-section text-2xl sm:text-3xl lg:text-4xl mb-6 max-w-2xl">
                    {c.title}
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-5 mb-6">
                    <Block label="Problema" content={c.problem} />
                    <Block label="Solución" content={c.solution} />
                    <Block label="Resultado" content={c.result} />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-6">
                    {c.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full font-mono inline-flex items-center gap-1.5"
                        style={{
                          background: "rgb(var(--fg) / 0.05)",
                          border: "1px solid rgb(var(--fg) / 0.08)",
                        }}
                      >
                        <TechBadgeIcon tech={t} size={14} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right metrics column */}
                <div
                  className={cn(
                    "lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between gap-6",
                    "border-t lg:border-t-0 lg:border-l"
                  )}
                  style={{ borderColor: "rgb(var(--border))" }}
                >
                  <div className="space-y-5">
                    {c.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div
                          className="font-display text-3xl sm:text-4xl font-semibold leading-none"
                          style={{
                            color:
                              c.accent === "cyan"
                                ? "rgb(var(--accent))"
                                : "rgb(var(--accent-2))",
                          }}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs opacity-65 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-60 group-hover:opacity-100 transition">
                    <span>Caso completo bajo NDA</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative pb-32">
        <div className="container">
          <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center">
            <h3 className="h-section text-3xl sm:text-4xl mb-4">
              Cuéntanos tu caso, te decimos cómo lo abordaríamos.
            </h3>
            <p className="opacity-75 mb-8 max-w-2xl mx-auto">
              En 30 minutos podemos darte una primera lectura técnica, posibles
              caminos y un rango de esfuerzo. Sin compromiso.
            </p>
            <ButtonLink href="/contacto" size="lg" arrow>
              Solicitar diagnóstico
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-2 flex items-center gap-2">
        <span className="w-3 h-px bg-current opacity-40" />
        <span className="w-3 h-px bg-current opacity-40" />
        {label}
      </div>
      <p className="text-sm opacity-85 leading-relaxed">{content}</p>
    </div>
  );
}
