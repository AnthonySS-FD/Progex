"use client";

import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Layers3,
  HeartHandshake,
  Eye,
  Zap,
  Mail,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { InfinityMark } from "@/components/ui/Logo";
import { trustMetrics } from "@/lib/data";

const values = [
  {
    icon: ShieldCheck,
    title: "Honestidad técnica",
    description:
      "Definimos con transparencia lo viable y lo no viable. Plazos reales, alcances formales y costos auditables desde la primera reunión ejecutiva.",
  },
  {
    icon: Layers3,
    title: "Profundidad arquitectónica",
    description:
      "La estética no compensa una arquitectura frágil. Construimos sobre fundamentos técnicos sólidos, pensados para sostener la operación durante años.",
  },
  {
    icon: HeartHandshake,
    title: "Socio estratégico",
    description:
      "Nos involucramos con la estrategia, no solo con la entrega. Aportamos criterio técnico independiente cuando las decisiones lo exigen.",
  },
  {
    icon: Eye,
    title: "Gobernanza ejecutiva",
    description:
      "Avance en tiempo real, repositorios accesibles y demos quincenales con stakeholders. Cero cajas negras, cero sorpresas en el cierre del proyecto.",
  },
  {
    icon: Compass,
    title: "Tecnología con propósito",
    description:
      "No adoptamos tendencias por novedad. Seleccionamos stacks que sostengan el producto a tres años, no a tres meses, y que el cliente pueda operar.",
  },
  {
    icon: Zap,
    title: "Velocidad con disciplina",
    description:
      "Iteración rápida sin comprometer calidad. Pruebas automatizadas, revisión de código y pipelines de despliegue controlado desde el día uno.",
  },
];

const team = [
  { role: "Frontend Architect", count: "Senior" },
  { role: "Backend Engineers", count: "Senior" },
  { role: "Mobile Developers", count: "iOS · Android · Flutter" },
  { role: "DevOps & SRE", count: "Cloud nativo" },
  { role: "UX/UI Designers", count: "Producto + Brand" },
  { role: "Product Managers", count: "Discovery + delivery" },
  { role: "QA Engineers", count: "Manual + automatizado" },
  { role: "Tech Leads", count: "+10 años" },
];

type Member = {
  name: string;
  role: string;
  email: string;
  photo: string;
};

const teamMembers: Member[] = [
  {
    name: "Diego Ramírez",
    role: "CEO & Tech Lead",
    email: "diego@progex.pe",
    photo: "https://i.pravatar.cc/400?img=12",
  },
  {
    name: "Camila Torres",
    role: "Head of Product",
    email: "camila@progex.pe",
    photo: "https://i.pravatar.cc/400?img=47",
  },
  {
    name: "Andrés Salinas",
    role: "Frontend Architect",
    email: "andres@progex.pe",
    photo: "https://i.pravatar.cc/400?img=15",
  },
  {
    name: "Lucía Mendoza",
    role: "UX / UI Designer",
    email: "lucia@progex.pe",
    photo: "https://i.pravatar.cc/400?img=49",
  },
  {
    name: "Rodrigo Pérez",
    role: "Backend Engineer",
    email: "rodrigo@progex.pe",
    photo: "https://i.pravatar.cc/400?img=33",
  },
  {
    name: "Valeria Quispe",
    role: "Mobile Developer",
    email: "valeria@progex.pe",
    photo: "https://i.pravatar.cc/400?img=44",
  },
  {
    name: "Martín Aguilar",
    role: "DevOps & SRE",
    email: "martin@progex.pe",
    photo: "https://i.pravatar.cc/400?img=11",
  },
  {
    name: "Sofía Linares",
    role: "QA Engineer",
    email: "sofia@progex.pe",
    photo: "https://i.pravatar.cc/400?img=45",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre PROGEX"
        title={
          <>
            Una compañía de ingeniería de software construida{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              para perdurar
            </span>
            .
          </>
        }
        description="Arquitectos, ingenieros y diseñadores con experiencia comprobada en plataformas empresariales. No comercializamos horas: construimos relaciones tecnológicas de largo plazo con organizaciones que apuestan por software hecho con criterio."
      />

      {/* Numbers */}
      <section className="relative pb-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass">
            {trustMetrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-8 sm:p-10 text-center"
                style={{ background: "rgb(var(--bg))" }}
              >
                <div
                  className="font-display text-4xl sm:text-5xl font-semibold mb-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {m.value}
                </div>
                <div className="text-sm opacity-70">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative pb-32">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">
              <span className="inline-block h-px w-6 bg-current opacity-40 mr-2" />
              Nuestra historia
            </div>
            <h2 className="h-section text-3xl sm:text-4xl mb-8">
              De equipo técnico a partner de empresas.
            </h2>
            <div className="relative w-32 h-32 mb-2">
              <InfinityMark height={120} animated orbits />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[1.05rem] opacity-85 leading-relaxed">
            <p>
              PROGEX nació como un equipo pequeño que rechazaba la idea de que
              el software a medida tenía que ser caro, lento o frágil. Empezamos
              construyendo soluciones para empresas locales que ningún SaaS
              cubría bien.
            </p>
            <p>
              Con cada proyecto fuimos puliendo lo que hoy es nuestra ventaja:
              entender el negocio antes de proponer tecnología, documentar todo,
              entregar en sprints visibles y construir productos que la gente
              realmente usa.
            </p>
            <p>
              Algunos de esos proyectos crecieron tanto que se convirtieron en
              productos propios:{" "}
              <span className="font-semibold">Comerciante</span>,{" "}
              <span className="font-semibold">Obrasis</span>,{" "}
              <span className="font-semibold">Intranort</span>,{" "}
              <span className="font-semibold">Cisnespp</span>,{" "}
              <span className="font-semibold">Logitrack</span> y{" "}
              <span className="font-semibold">Progex Garage</span>. Cada uno
              demuestra lo mismo: cuando entiendes el problema, el software
              perdura.
            </p>
            <p>
              Hoy seguimos construyendo software a medida —porque ahí está la
              raíz— pero con la experiencia de haber visto productos crecer
              años en producción.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative pb-32">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-4 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-current opacity-40" />
              Cómo trabajamos
            </div>
            <h2 className="h-section text-3xl sm:text-4xl lg:text-5xl">
              Principios que se notan en cada commit.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-2xl p-7 card-lift"
                >
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center mb-5"
                    style={{
                      background: "rgb(var(--accent) / 0.12)",
                      color: "rgb(var(--accent))",
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl tracking-tight mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm opacity-75 leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4 flex items-center gap-2">
                <span className="inline-block h-px w-6 bg-current opacity-40" />
                Equipo
              </div>
              <h2 className="h-section text-3xl sm:text-4xl mb-6">
                Senior por defecto.
              </h2>
              <p className="opacity-75 leading-relaxed mb-6">
                No subcontratamos. No rotamos perfiles júnior por horas. Cada
                proyecto se asigna a un equipo dedicado con seniority real,
                liderado por un Tech Lead con más de una década construyendo
                producto.
              </p>
              <ButtonLink href="/contacto" arrow variant="secondary">
                Conversar con el equipo
              </ButtonLink>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {team.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="glass-pro rounded-xl px-5 py-4 flex items-center justify-between"
                  >
                    <span className="font-medium">{t.role}</span>
                    <span className="text-xs opacity-60 font-mono">
                      {t.count}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team members — names, roles, photos, emails */}
      <section className="relative pb-32">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-4 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-current opacity-40" />
              Conoce al equipo
            </div>
            <h2 className="h-section text-3xl sm:text-4xl lg:text-5xl mb-4">
              Las personas detrás de cada{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                }}
              >
                proyecto
              </span>
              .
            </h2>
            <p className="opacity-75 leading-relaxed">
              Un equipo dedicado, con seniority real y comunicación directa.
              Sin intermediarios: hablas con quien construye tu producto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((m, i) => (
              <motion.article
                key={m.email}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group glass-pro rounded-2xl p-5 card-lift flex flex-col"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, rgb(var(--accent)/0.15) 100%)",
                    }}
                  />
                </div>

                <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                  {m.name}
                </h3>
                <p className="mt-0.5 text-sm text-accent">{m.role}</p>

                <a
                  href={`mailto:${m.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-xs text-fg-muted transition-colors hover:text-fg break-all"
                >
                  <Mail size={13} className="shrink-0" />
                  <span className="min-w-0 truncate">{m.email}</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
