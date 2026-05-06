import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/effects/WhatsAppFloat";
import { FloatingTestimonial } from "@/components/effects/FloatingTestimonial";
import { SITE } from "@/lib/utils";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "PROGEX es una compañía de ingeniería de software empresarial con sede en Lima. Diseñamos, construimos y operamos plataformas digitales escalables, sistemas a medida, aplicaciones móviles e integraciones para organizaciones que requieren disciplina técnica y rigor empresarial.",
  keywords: [
    "ingeniería de software empresarial",
    "desarrollo de software a medida",
    "consultoría tecnológica",
    "transformación digital",
    "plataformas web empresariales",
    "aplicaciones móviles iOS Android",
    "sistemas ERP a medida",
    "integración de sistemas",
    "productos SaaS B2B",
    "automatización de procesos",
    "PROGEX",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Compañía de ingeniería de software empresarial. Diseñamos, construimos y operamos plataformas digitales escalables para organizaciones líderes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Ingeniería de software empresarial: plataformas web, aplicaciones móviles, integración de sistemas y automatización de procesos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="antialiased min-h-screen bg-bg text-fg selection:bg-[rgb(var(--accent)/0.25)]">
        <Providers>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <FloatingTestimonial />
        </Providers>
      </body>
    </html>
  );
}
