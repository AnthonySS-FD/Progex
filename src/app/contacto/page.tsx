"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/utils";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // Mock submit — replace with real API/email service.
    setTimeout(() => setStatus("sent"), 1100);
  };

  const waLink = `https://wa.me/${SITE.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent("Hola PROGEX, quiero conversar sobre un proyecto.")}`;

  const fieldClass =
    "w-full bg-transparent border rounded-xl px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-[rgb(var(--accent)/0.6)] focus:ring-2 focus:ring-[rgb(var(--accent)/0.18)]";

  return (
    <>
      <PageHero
        eyebrow="Contacto comercial"
        title={
          <>
            Hablemos sobre tu próxima iniciativa{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)))",
              }}
            >
              tecnológica.
            </span>
          </>
        }
        description="Compártenos el contexto de tu organización y el reto que buscas resolver. Un consultor senior te responderá en menos de 24 horas hábiles con una primera evaluación técnica y comercial — sin costo ni compromiso."
      />

      <section className="relative pb-32">
        <div className="container grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgb(var(--accent)/0.6), rgb(var(--accent-2)/0.6), transparent)",
                }}
              />

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-6 grid place-items-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent-2)))",
                    }}
                  >
                    <CheckCircle2 className="w-8 h-8" color="#0b0c1d" />
                  </div>
                  <h3 className="h-section text-2xl sm:text-3xl mb-3">
                    Hemos recibido tu solicitud, {form.name.split(" ")[0]}.
                  </h3>
                  <p className="opacity-75 max-w-md mx-auto">
                    Un consultor senior revisará tu caso y te contactará en
                    menos de 24 horas hábiles desde{" "}
                    <span className="font-mono">{SITE.email}</span>.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight mb-1">
                      Solicita una evaluación inicial
                    </h3>
                    <p className="text-sm opacity-60">
                      Cuanto más contexto compartas, más precisa será nuestra
                      primera respuesta técnica.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Nombre" htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Cómo te llamas"
                        className={fieldClass}
                        style={{ borderColor: "rgb(var(--border))" }}
                      />
                    </Field>
                    <Field label="Correo corporativo" htmlFor="email">
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="nombre@empresa.com"
                        className={fieldClass}
                        style={{ borderColor: "rgb(var(--border))" }}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Empresa" htmlFor="company">
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          setForm({ ...form, company: e.target.value })
                        }
                        placeholder="Tu empresa"
                        className={fieldClass}
                        style={{ borderColor: "rgb(var(--border))" }}
                      />
                    </Field>
                    <Field label="Rango de inversión (opcional)" htmlFor="budget">
                      <select
                        id="budget"
                        value={form.budget}
                        onChange={(e) =>
                          setForm({ ...form, budget: e.target.value })
                        }
                        className={fieldClass}
                        style={{ borderColor: "rgb(var(--border))" }}
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="<15k">Menor a USD 15k</option>
                        <option value="15-40k">USD 15k – 40k</option>
                        <option value="40-100k">USD 40k – 100k</option>
                        <option value=">100k">Mayor a USD 100k</option>
                        <option value="explorando">Aún explorando</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Describe el reto a resolver" htmlFor="message">
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Modernización de un sistema legacy, integración entre plataformas, lanzamiento de un producto digital, automatización de procesos críticos…"
                      className={`${fieldClass} resize-none`}
                      style={{ borderColor: "rgb(var(--border))" }}
                    />
                  </Field>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="group"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                          Enviando…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Solicitar evaluación
                        </>
                      )}
                    </Button>
                    <span className="text-xs opacity-55 max-w-xs">
                      Al enviar aceptas ser contactado por nuestro equipo
                      comercial. Tu información es confidencial; firmamos NDA
                      cuando aplica.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block glass-strong rounded-2xl p-6 card-lift relative overflow-hidden"
            >
              <div
                className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ background: "#25D366" }}
              />
              <div className="relative flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-6 h-6" color="#fff" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-lg tracking-tight mb-1">
                    WhatsApp Business
                  </div>
                  <div className="text-sm opacity-70 mb-2">
                    Atención comercial en horario hábil.
                  </div>
                  <div className="text-sm font-mono">{SITE.phone}</div>
                </div>
              </div>
            </a>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                  style={{
                    background: "rgb(var(--accent) / 0.12)",
                    color: "rgb(var(--accent))",
                  }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg tracking-tight mb-1">
                    Correo comercial
                  </div>
                  <div className="text-sm opacity-70 mb-2">
                    Propuestas formales, RFPs y licitaciones.
                  </div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm font-mono hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                  style={{
                    background: "rgb(var(--accent-2) / 0.12)",
                    color: "rgb(var(--accent-2))",
                  }}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-lg tracking-tight mb-1">
                    Sede corporativa
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {SITE.address.line1}
                    <br />
                    <span className="opacity-70">{SITE.address.line2}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-2xl p-5">
                <Clock
                  className="w-5 h-5 mb-3"
                  style={{ color: "rgb(var(--accent))" }}
                />
                <div className="font-semibold text-sm mb-0.5">{"<24 h"}</div>
                <div className="text-xs opacity-65">SLA de primera respuesta</div>
              </div>
              <div className="glass rounded-2xl p-5">
                <Building2
                  className="w-5 h-5 mb-3"
                  style={{ color: "rgb(var(--accent-2))" }}
                />
                <div className="font-semibold text-sm mb-0.5">NDA</div>
                <div className="text-xs opacity-65">desde el primer contacto</div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* === Google Maps === */}
      <section className="relative pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Encabezado */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="eyebrow mb-4 flex items-center gap-2">
                <span className="inline-block h-px w-6 bg-current opacity-40" />
                Sede corporativa
              </div>
              <h2 className="h-section text-3xl sm:text-4xl mb-4">
                Lima, Perú · Atendiendo a clientes en toda la región.
              </h2>
              <p className="opacity-75 leading-relaxed mb-6">
                Nuestra sede principal opera desde Lince, distrito financiero
                de Lima. Trabajamos con organizaciones en LATAM, Estados Unidos
                y Europa, en español e inglés, bajo metodologías de
                colaboración remota y entregas presenciales bajo demanda.
              </p>
              <div className="flex items-start gap-3 text-sm">
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center shrink-0"
                  style={{
                    background: "rgb(var(--accent) / 0.12)",
                    color: "rgb(var(--accent))",
                  }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium">{SITE.address.line1}</div>
                  <div className="opacity-65 text-xs">{SITE.address.line2}</div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="lg:col-span-8">
              <div
                className={
                  "relative overflow-hidden rounded-3xl glass-strong " +
                  "ring-1 ring-fg/[0.04]"
                }
                style={{ minHeight: 380 }}
              >
                {/* Borde sutil top */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgb(var(--accent)/0.5), rgb(var(--accent-2)/0.5), transparent)",
                  }}
                />

                {/*
                  Embed sin API key (maps.google.com).
                  La ubicación viene de SITE.address.mapsQuery — modificarla
                  ahí actualiza el mapa en toda la web.
                */}
                <iframe
                  title="Ubicación de PROGEX — Av. Paseo de la República 1936, Lince, Lima"
                  src={`https://maps.google.com/maps?q=${SITE.address.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
                  style={{ minHeight: 380 }}
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="block text-xs uppercase tracking-[0.18em] opacity-60 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
