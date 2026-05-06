import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * SITE — fuente única de verdad de los datos corporativos.
 * Cualquier cambio en información de contacto se hace aquí y se propaga
 * automáticamente a Footer, página /contacto, WhatsAppFloat, FinalCTA y
 * cualquier otro consumidor que importe SITE.
 */
export const SITE = {
  name: "PROGEX",
  domain: "progex.pe",
  whatsapp: "+51980958122",
  whatsappDisplay: "+51 980 958 122",
  email: "comercial@progex.pe",
  phone: "+51 980 958 122",
  address: {
    line1: "Av. Paseo de la República 1936",
    line2: "Lince 15046, Lima, Perú",
    full: "Av. Paseo de la República 1936, Lince 15046, Lima, Perú",
    mapsQuery: "Av+Paseo+de+la+Republica+1936+Lince+Lima+Peru",
  },
  hours: "Lun – Vie · 09:00 – 18:00 (GMT-5)",
  tagline:
    "Ingeniería de software empresarial para organizaciones que escalan",
};
