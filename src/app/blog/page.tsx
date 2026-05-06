"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  accent: "cyan" | "violet";
};

const articles: Article[] = [
  {
    slug: "software-medida-vs-saas",
    category: "Estrategia técnica",
    title: "Software a medida vs. SaaS: cuándo conviene cada uno",
    excerpt:
      "El criterio no es el costo: es el costo total de adaptación. Una guía honesta para decidir cuándo construir y cuándo comprar.",
    date: "12 mar 2025",
    readTime: "8 min",
    featured: true,
    accent: "cyan",
  },
  {
    slug: "arquitectura-mvp-escala",
    category: "Arquitectura",
    title: "Arquitectura de un MVP que pueda escalar sin reescribirse",
    excerpt:
      "Las decisiones de los primeros 30 días definen los siguientes tres años. Un framework práctico para no pintarse en una esquina.",
    date: "28 feb 2025",
    readTime: "12 min",
    accent: "violet",
  },
  {
    slug: "automatizacion-procesos-roi",
    category: "Automatización",
    title: "Automatizar procesos: cómo medir el ROI sin engañarse",
    excerpt:
      "No se trata de horas ahorradas. Se trata de qué se hace con esas horas. Una metodología para medir impacto real.",
    date: "15 feb 2025",
    readTime: "6 min",
    accent: "cyan",
  },
  {
    slug: "elegir-stack-tecnologico",
    category: "Stack",
    title: "Cómo elegir un stack tecnológico sin caer en modas",
    excerpt:
      "Next.js, Flutter, Node, cloud nativo. Por qué priorizamos ciertos ecosistemas y cuándo recomendamos algo distinto.",
    date: "01 feb 2025",
    readTime: "10 min",
    accent: "violet",
  },
  {
    slug: "integraciones-erp-legacy",
    category: "Integraciones",
    title: "Integrar con ERPs legacy: la guía que nadie escribe",
    excerpt:
      "SOAP, archivos planos, conectores semi-documentados. Cómo aterrizar integraciones reales en sistemas que tienen 15 años.",
    date: "20 ene 2025",
    readTime: "9 min",
    accent: "cyan",
  },
  {
    slug: "gobierno-datos-empresa",
    category: "Datos",
    title: "Gobierno de datos en empresas medianas: por dónde empezar",
    excerpt:
      "Antes de pensar en BI o IA, hay que poner en orden la casa. Pasos concretos para empezar sin proyectos faraónicos.",
    date: "08 ene 2025",
    readTime: "7 min",
    accent: "violet",
  },
];

export default function BlogPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="Insights & research"
        title={
          <>
            Perspectivas de un equipo que opera{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              software empresarial
            </span>
            .
          </>
        }
        description="Análisis técnicos y estratégicos derivados de implementaciones reales en organizaciones de la región: arquitectura escalable, decisiones de stack, integración con plataformas legacy, automatización y gobierno de datos para áreas de tecnología."
      />

      {/* Featured article */}
      <section className="relative pb-16">
        <div className="container">
          <motion.a
            href={`/blog/${featured.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block relative rounded-3xl overflow-hidden glass-strong group card-lift"
          >
            <div
              className="absolute inset-0 opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(900px circle at 80% 20%, rgb(var(--accent)/0.18), transparent 50%), radial-gradient(700px circle at 0% 80%, rgb(var(--accent-2)/0.15), transparent 50%)",
              }}
            />
            <div className="absolute inset-0 bg-grid-fade opacity-25 pointer-events-none" />

            <div className="relative grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 p-10 sm:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full"
                    style={{
                      background: "rgb(var(--accent) / 0.15)",
                      color: "rgb(var(--accent))",
                    }}
                  >
                    Destacado
                  </span>
                  <span className="text-xs opacity-60">
                    {featured.category}
                  </span>
                </div>
                <h2 className="h-section text-3xl sm:text-4xl lg:text-[2.75rem] mb-5 max-w-2xl">
                  {featured.title}
                </h2>
                <p className="opacity-75 mb-8 max-w-xl">{featured.excerpt}</p>
                <div className="flex items-center gap-5 text-sm opacity-60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 p-10 sm:p-14 flex items-end justify-end">
                <div
                  className="w-16 h-16 rounded-full grid place-items-center transition-transform group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                  }}
                >
                  <ArrowUpRight className="w-7 h-7" color="#0b0c1d" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Articles grid */}
      <section className="relative pb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a, i) => (
              <motion.a
                key={a.slug}
                href={`/blog/${a.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group glass rounded-2xl p-7 flex flex-col card-lift relative overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      a.accent === "cyan"
                        ? "linear-gradient(90deg, transparent, rgb(var(--accent)), transparent)"
                        : "linear-gradient(90deg, transparent, rgb(var(--accent-2)), transparent)",
                  }}
                />
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                    style={{
                      background:
                        a.accent === "cyan"
                          ? "rgb(var(--accent) / 0.12)"
                          : "rgb(var(--accent-2) / 0.12)",
                      color:
                        a.accent === "cyan"
                          ? "rgb(var(--accent))"
                          : "rgb(var(--accent-2))",
                    }}
                  >
                    {a.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="font-display text-xl tracking-tight mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed mb-6 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs opacity-55">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {a.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {a.readTime}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="opacity-60 mb-5 text-sm">
              Más contenido cada mes. Sin spam, sin newsletter intrusiva.
            </p>
            <ButtonLink href="/contacto" variant="secondary" arrow>
              Sugerir un tema
              Sugerir un tema
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
