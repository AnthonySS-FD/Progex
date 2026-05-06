# PROGEX — Sitio corporativo

Sitio web premium multipágina para **PROGEX**, empresa de desarrollo de software a medida. Construido con **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

> Diseñado para verse y sentirse como una empresa tecnológica seria: corporativo, moderno, con interacción real al hacer scroll y un efecto característico de código que se escribe a medida que el usuario avanza.

---

## ✨ Highlights

- **Multipágina:** Home, Servicios, Soluciones, Portafolio, Nosotros, Blog/Insights, Contacto.
- **Modo oscuro y claro** con toggle visible (persistido vía `next-themes`). Ambos modos están diseñados, no solo invertidos.
- **Efecto de código al scroll** (`ScrollCodeReveal`): un IDE estilizado con tres archivos donde el código se va escribiendo letra por letra mientras avanzas en la sección.
- **Testimonios flotantes** discretos en esquina inferior izquierda, con glassmorphism, rotación automática, minimizable y cerrable.
- **Botón de WhatsApp flotante** con tooltip y enlace pre-llenado.
- **Animaciones suaves** con Framer Motion en todas las secciones (entradas al scroll, hover refinado, indicador activo del nav, etc.).
- **Mockup visual del producto** en el hero con paneles flotantes y mini-chart animado.
- **Showcase de los 5 productos propios:** Comerciante, Obrasis, Intranort, Cinespp, Logitrack.
- **Stack visible** con íconos a color de las tecnologías clave (React, Next.js, TypeScript, Flutter, Android, iOS, Node, Firebase, SQL, Cloud).
- **SEO listo:** metadata, Open Graph, Twitter cards, idioma `es-PE`.

---

## 🚀 Cómo correrlo

Requisitos: **Node.js 18.17+** y **npm 9+** (o pnpm / yarn).

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo
npm run dev
# Abre http://localhost:3000

# 3. Build de producción
npm run build
npm start
```

---

## 📁 Estructura del proyecto

```
progex-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (fonts, providers, navbar, footer, widgets)
│   │   ├── page.tsx             # Home: compone todas las secciones
│   │   ├── globals.css          # Tokens, utilidades y estilos base
│   │   ├── providers.tsx        # next-themes
│   │   ├── servicios/page.tsx
│   │   ├── soluciones/page.tsx
│   │   ├── portafolio/page.tsx
│   │   ├── nosotros/page.tsx
│   │   ├── blog/page.tsx
│   │   └── contacto/page.tsx
│   ├── components/
│   │   ├── home/                # Secciones de la home
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── CodeShowcase.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── effects/
│   │   │   ├── ScrollCodeReveal.tsx     # ✨ efecto de código al scroll
│   │   │   ├── FloatingTestimonial.tsx  # widget flotante esquina inferior izq
│   │   │   └── WhatsAppFloat.tsx        # botón flotante WhatsApp
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Logo.tsx                 # InfinityMark + InfinityBackground
│   │       ├── PageHero.tsx             # cabecera reutilizable de páginas internas
│   │       ├── SectionHeader.tsx
│   │       └── TechIcons.tsx            # íconos de stack a color
│   └── lib/
│       ├── data.ts             # Servicios, soluciones, testimonios, FAQ, métricas...
│       └── utils.ts            # cn() helper + constantes del SITE
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Personalización rápida

### 1. Cambiar nombre, dominio, WhatsApp y email

Editar **`src/lib/utils.ts`**:

```ts
export const SITE = {
  name: "PROGEX",
  domain: "progex.com",
  whatsapp: "+51999999999", // 👈 reemplazar con número real (con cód. país)
  email: "contacto@progex.com",
  tagline: "Software a medida que se adapta a tu negocio",
};
```

El número de WhatsApp se usa en:
- Botón flotante (`WhatsAppFloat`).
- CTA en la sección final (`FinalCTA`).
- Página de Contacto.

### 2. Cambiar textos, servicios, productos, FAQ, testimonios

Todo el contenido editorial está centralizado en **`src/lib/data.ts`**:

- `services[]` — los 8 servicios.
- `solutions[]` — los 5 productos propios (Comerciante, Obrasis, Intranort, Cinespp, Logitrack).
- `testimonials[]` — citas que aparecen en la sección de testimonios y en el widget flotante.
- `faqs[]` — preguntas frecuentes.
- `processSteps[]` — fases del proceso de trabajo.
- `benefits[]`, `trustMetrics[]`, `partners[]`.

Los casos de éxito viven dentro de **`src/app/portafolio/page.tsx`** en la constante `cases` (movilo a `data.ts` si lo necesitas reutilizar).

### 3. Cambiar paleta de colores

La paleta vive en **`src/app/globals.css`** como variables CSS (RGB en triplete separado para que funcionen los modificadores de opacidad de Tailwind):

```css
:root {            /* modo claro */
  --bg: 250 250 247;
  --fg: 12 13 28;
  --accent: 0 198 174;       /* cian primario */
  --accent-2: 124 58 237;    /* violeta secundario */
  --border: 12 13 28 / 0.08;
  /* ... */
}

.dark {            /* modo oscuro */
  --bg: 7 8 21;
  --fg: 235 238 252;
  --accent: 0 229 199;
  --accent-2: 139 92 246;
  /* ... */
}
```

Cambiando esos valores se refresca todo el sistema (gradientes, glows, focus rings, botones, etc.).

### 4. Cambiar fuentes

Las fuentes se cargan vía `next/font/google` en **`src/app/layout.tsx`**:

```ts
const display = Bricolage_Grotesque({ ... });
const body    = Manrope({ ... });
const mono    = JetBrains_Mono({ ... });
```

Reemplaza por las que prefieras y mantén las mismas variables CSS (`--font-display`, `--font-body`, `--font-mono`).

### 5. Cambiar el logo

El logo es 100% SVG en **`src/components/ui/Logo.tsx`**. Los componentes son:
- `<Logo />` — versión usada en navbar (símbolo + wordmark).
- `<InfinityMark />` — solo el símbolo de infinito animable.
- `<InfinityBackground />` — versión decorativa para fondos.

Si reemplazas por un SVG propio, basta con sustituir el contenido del `<svg>` en `InfinityMark` (mantén los `defs` de gradiente o ajústalos).

### 6. Imágenes / mockups

El sitio usa **mockups generados por código** (sin fotos), por lo que no hay imágenes reemplazables. Si quieres añadir fotos:
- Súbelas a `/public/...`.
- Importa con `next/image` para optimización automática.

### 7. Cambiar artículos del blog

Los artículos placeholder viven en `src/app/blog/page.tsx` en la constante `articles`. Reemplázalos por datos reales o conéctalo a un CMS (Sanity, Contentlayer, MDX, etc.).

---

## 🎨 El efecto del código al scroll

Componente: **`src/components/effects/ScrollCodeReveal.tsx`**, usado dentro de `CodeShowcase` en la home.

Cómo funciona:
- Define **3 archivos** ya tokenizados (`domain/orders.ts`, `api/orders.route.ts`, `ui/CheckoutButton.tsx`).
- Usa `useScroll` de Framer Motion para mapear el scroll de la sección a un progreso de "tipeo".
- A medida que avanzas, los caracteres del archivo activo se van escribiendo, con cursor parpadeante.
- Cuando un archivo termina, el siguiente tab se activa solo y empieza a escribirse.

Para cambiar el código mostrado, edita los arrays `lines` dentro de cada `File` en `ScrollCodeReveal.tsx`. Los helpers `k`, `s`, `f`, `n`, `c`, `o`, `i`, `x` representan los tokens de syntax highlight (keyword, string, function, number, comment, operator, identifier, x = unstyled).

---

## 🌗 Modo claro/oscuro

- Toggle: `src/components/layout/ThemeToggle.tsx` (sun/moon).
- Provider: `src/app/providers.tsx` (usa `next-themes` con `defaultTheme: "dark"` y `attribute: "class"`).
- Las variables CSS cambian automáticamente al alternar la clase `.dark` en `<html>`.

Para cambiar el modo por defecto, edita `defaultTheme` en `providers.tsx`.

---

## 📦 Scripts

| Script | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` con HMR. |
| `npm run build` | Build de producción optimizado. |
| `npm start` | Sirve el build de producción. |
| `npm run lint` | ESLint (Next.js core-web-vitals). |

---

## 🧱 Stack

- **Framework:** Next.js 14 (App Router, RSC + Client Components)
- **UI:** React 18, Tailwind CSS 3
- **Animación:** Framer Motion 11
- **Iconografía:** lucide-react
- **Theming:** next-themes
- **Type-safety:** TypeScript 5 (`strict: true`)
- **Fuentes:** Bricolage Grotesque · Manrope · JetBrains Mono (vía `next/font`)

---

## ✅ Checklist de validación cumplido

- [x] Estructura multipágina real (7 páginas).
- [x] Hero impactante con mockup visual y métricas flotantes.
- [x] Sección de servicios con 8 capacidades técnicas.
- [x] Showcase de los 5 productos propios (Comerciante, Obrasis, Intranort, Cinespp, Logitrack).
- [x] Sección de proceso de trabajo (5 fases).
- [x] Beneficios para empresas.
- [x] Testimonios principales + widget flotante.
- [x] FAQ con accordion.
- [x] CTA final + WhatsApp flotante.
- [x] Modo claro/oscuro diseñados ambos.
- [x] Efecto de código que se escribe al hacer scroll.
- [x] Animaciones suaves al entrar y al hover.
- [x] Tipografía y jerarquía visual cuidadas.
- [x] Tecnologías destacadas con íconos a color.
- [x] Componentes reutilizables y carpetas modulares.
- [x] Listo para producción.

---

## 📝 Licencia

Proyecto entregado para uso interno de PROGEX. Adáptalo libremente.
