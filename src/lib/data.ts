import {
  Code2,
  Smartphone,
  Building2,
  Cloud,
  Workflow,
  Plug,
  Server,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  solves: string[];
  bestFor: string;
  accent: "cyan" | "violet";
};

export const services: Service[] = [
  {
    slug: "software-a-medida",
    icon: Code2,
    title: "Ingeniería de software a medida",
    short:
      "Plataformas digitales diseñadas en torno a tu operación, no a una plantilla.",
    description:
      "Diseñamos e implementamos soluciones de software empresarial alineadas a los procesos reales del negocio, eliminando la fricción de los productos genéricos y asegurando una arquitectura preparada para sostener crecimiento y cumplimiento normativo.",
    solves: [
      "Procesos manuales que erosionan productividad y trazabilidad",
      "Sistemas heredados que bloquean iniciativas estratégicas",
      "Requisitos críticos que ningún SaaS cubre sin compromisos",
    ],
    bestFor:
      "Organizaciones con operaciones complejas, procesos propios y necesidad de control sobre su stack tecnológico.",
    accent: "cyan",
  },
  {
    slug: "aplicaciones-web",
    icon: LayoutGrid,
    title: "Plataformas web empresariales",
    short:
      "Aplicaciones web de alto rendimiento, accesibles y arquitectónicamente sostenibles.",
    description:
      "Construimos plataformas web sobre stacks modernos con métricas de performance auditables, accesibilidad WCAG y arquitectura modular preparada para escalar a miles de usuarios concurrentes.",
    solves: [
      "Experiencias web que erosionan la percepción de marca corporativa",
      "Tiempos de carga que penalizan conversión e indicadores comerciales",
      "Plataformas internas inmantenibles tras varios años de evolución",
    ],
    bestFor:
      "Equipos que necesitan portales corporativos, dashboards ejecutivos o productos web de cara al cliente.",
    accent: "violet",
  },
  {
    slug: "aplicaciones-moviles",
    icon: Smartphone,
    title: "Aplicaciones móviles iOS & Android",
    short:
      "Aplicaciones nativas y multiplataforma con experiencia premium y arquitectura offline-first.",
    description:
      "Desarrollamos aplicaciones móviles profesionales con integración a sensores y hardware del dispositivo, sincronización offline, despliegue en stores corporativos y monitoreo activo de adopción y estabilidad en producción.",
    solves: [
      "Operaciones críticas que ocurren fuera de la oficina",
      "Equipos de campo sin herramientas digitales unificadas",
      "Iniciativas B2C que requieren llegar al cliente final con escala",
    ],
    bestFor:
      "Compañías con fuerza de ventas, equipos en terreno, operaciones logísticas o productos digitales B2C.",
    accent: "cyan",
  },
  {
    slug: "sistemas-empresariales",
    icon: Building2,
    title: "Sistemas empresariales (ERP · CRM · BPM)",
    short:
      "ERPs, CRMs y plataformas operativas a la medida del modelo de negocio.",
    description:
      "Implementamos sistemas empresariales que centralizan información crítica, automatizan flujos transversales entre áreas y entregan visibilidad ejecutiva en tiempo real para tomar decisiones basadas en datos.",
    solves: [
      "Información fragmentada entre áreas funcionales",
      "Reportería manual, tardía y sin trazabilidad",
      "Ausencia de gobierno sobre procesos críticos del negocio",
    ],
    bestFor:
      "Compañías medianas y grandes con múltiples áreas operativas y necesidad de gobernanza transversal.",
    accent: "violet",
  },
  {
    slug: "saas",
    icon: Cloud,
    title: "Productos SaaS B2B",
    short:
      "De idea validada a SaaS multi-tenant en producción, listo para escalar comercialmente.",
    description:
      "Acompañamos a fundadores y unidades de innovación corporativa desde la validación del MVP hasta la operación de un SaaS robusto: arquitectura multi-tenant, billing, onboarding self-service, observabilidad y SLAs productivos.",
    solves: [
      "Iniciativas de producto sin equipo técnico fundacional",
      "MVPs que requieren profesionalizarse para clientes enterprise",
      "Plataformas SaaS existentes con problemas estructurales de escala",
    ],
    bestFor:
      "Fundadores y áreas de innovación lanzando o consolidando productos digitales recurrentes.",
    accent: "cyan",
  },
  {
    slug: "automatizacion",
    icon: Workflow,
    title: "Automatización de procesos",
    short:
      "Eliminamos trabajo manual repetitivo y lo reemplazamos por procesos confiables, trazables y auditables.",
    description:
      "Diseñamos workflows, agentes y automatizaciones que liberan capacidad operativa, eliminan errores humanos en tareas críticas y generan trazabilidad completa para auditoría y cumplimiento.",
    solves: [
      "Conciliaciones recurrentes que consumen horas semanales",
      "Cargas de datos entre sistemas con riesgo operativo",
      "Generación de reportes ejecutivos que demoran días",
    ],
    bestFor:
      "Áreas de finanzas, operaciones, back-office y compliance con presión sostenida sobre su capacidad.",
    accent: "violet",
  },
  {
    slug: "integraciones",
    icon: Plug,
    title: "Integración entre sistemas",
    short:
      "Conectamos las plataformas que tu organización ya opera — sin reemplazos forzados.",
    description:
      "Diseñamos e implementamos APIs, ETLs y conectores robustos entre ERPs, CRMs, pasarelas de pago, facturación electrónica, BI y servicios de terceros, asegurando consistencia transaccional entre sistemas.",
    solves: [
      "Plataformas críticas que no comparten datos en tiempo real",
      "Doble digitación con riesgo operativo y financiero",
      "Errores recurrentes por desincronización entre sistemas",
    ],
    bestFor:
      "Compañías con ecosistemas heterogéneos donde reemplazar es inviable, pero la fragmentación pesa.",
    accent: "cyan",
  },
  {
    slug: "infraestructura",
    icon: Server,
    title: "Infraestructura cloud y operación 24/7",
    short:
      "Cloud, observabilidad, alta disponibilidad y operación productiva con SLAs medibles.",
    description:
      "Diseñamos y operamos infraestructura cloud (AWS, Azure, GCP) con observabilidad de extremo a extremo, alta disponibilidad y políticas de costo controladas. Incluye redes, telecom y soporte 24/7 cuando el caso de negocio lo exige.",
    solves: [
      "Incidentes recurrentes con impacto económico directo",
      "Costos de cloud sin gobernanza ni atribución por unidad",
      "Ausencia de monitoreo, alertas y capacidad de respuesta",
    ],
    bestFor:
      "Organizaciones con operaciones críticas, exigencias de uptime y métricas de continuidad operativa.",
    accent: "violet",
  },
];

export type Solution = {
  slug: string;
  name: string;
  category: string;
  problem: string;
  result: string;
  description: string;
  metrics: { label: string; value: string }[];
  gradient: string;
};

export const solutions: Solution[] = [
  {
    slug: "comerciante",
    name: "Comerciante",
    category: "Gestión comercial inteligente",
    problem:
      "Negocios con ventas, inventario, caja y operaciones fragmentadas en herramientas que no conversan entre sí.",
    result:
      "Una sola plataforma para optimizar ventas, inventario y operación diaria, con reportería en tiempo real para tomar decisiones.",
    description:
      "Sistema integral de gestión comercial: ventas, inventario, caja, clientes, compras y reportería avanzada en una plataforma unificada.",
    metrics: [
      { label: "Tiempo de cierre de caja", value: "−68%" },
      { label: "Quiebres de stock", value: "−54%" },
      { label: "Adopción del equipo", value: "92%" },
    ],
    gradient: "from-cyan-500/20 via-cyan-500/10 to-transparent",
  },
  {
    slug: "obrasis",
    name: "Obrasis",
    category: "Construcción e ingeniería",
    problem:
      "Proyectos de construcción con avances, costos, materiales y planillas dispersos en hojas de cálculo y reportes desactualizados.",
    result:
      "Plataforma completa que centraliza la gestión de proyectos de construcción e ingeniería de extremo a extremo.",
    description:
      "Plataforma para constructoras y empresas de ingeniería: control de avance, valorizaciones, almacén de obra, planillas y reportería ejecutiva en tiempo real.",
    metrics: [
      { label: "Visibilidad de avance", value: "Tiempo real" },
      { label: "Reducción de pérdidas", value: "−34%" },
      { label: "Obras gestionadas", value: "+150" },
    ],
    gradient: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
  {
    slug: "intranort",
    name: "Intranort",
    category: "Sistema empresarial · Concesionarias",
    problem:
      "Concesionarias automotrices con gestión de inventario, ventas, postventa y atención al cliente en sistemas separados.",
    result:
      "Sistema integral diseñado para concesionarias: inventario de vehículos, pipeline de ventas, postventa y CRM en una sola plataforma.",
    description:
      "Plataforma empresarial para concesionarias de automóviles. Centraliza stock vehicular, gestión de leads, cotizaciones, ventas, postventa y satisfacción del cliente.",
    metrics: [
      { label: "Tiempo de gestión", value: "−40%" },
      { label: "Satisfacción del cliente", value: "+32%" },
      { label: "Concesionarias activas", value: "+8" },
    ],
    gradient: "from-cyan-500/20 via-violet-500/15 to-transparent",
  },
  {
    slug: "cisnespp",
    name: "Cisnespp",
    category: "Control de asistencia",
    problem:
      "Equipos de retail y fuerza de ventas dispersos en múltiples puntos sin control real de asistencia, ausencias y puntualidad.",
    result:
      "Control preciso de asistencia con verificación biométrica/geolocalización, reportería ejecutiva y reducción medible de ausencias no justificadas.",
    description:
      "Sistema de control de asistencia diseñado para retail y fuerza de ventas en terreno: marcación con biometría, geolocalización, reportes de puntualidad y alertas en tiempo real.",
    metrics: [
      { label: "Precisión de marcación", value: "99.4%" },
      { label: "Ausencias no justificadas", value: "−61%" },
      { label: "Puntos de marcación", value: "+45" },
    ],
    gradient: "from-violet-500/20 via-cyan-500/15 to-transparent",
  },
  {
    slug: "logitrack",
    name: "Logitrack",
    category: "App móvil · Logística",
    problem:
      "Operaciones logísticas sin trazabilidad real de unidades, sin visibilidad para el cliente y con tiempos de entrega impredecibles.",
    result:
      "Aplicación móvil de seguimiento logístico en tiempo real con trazabilidad GPS, evidencias de entrega y panel ejecutivo.",
    description:
      "App móvil de seguimiento logístico en tiempo real para conductores y operadores. Trazabilidad GPS, gestión de rutas, evidencias de entrega y panel de control para el equipo central.",
    metrics: [
      { label: "Tiempos de entrega", value: "+35%" },
      { label: "Visibilidad de flota", value: "Tiempo real" },
      { label: "Costos operativos", value: "−18%" },
    ],
    gradient: "from-cyan-500/20 via-cyan-400/10 to-violet-500/15",
  },
  {
    slug: "progex-garage",
    name: "Progex Garage",
    category: "Control de estacionamientos",
    problem:
      "Centros comerciales y operadores de estacionamiento sin control real de ocupación, ingresos, tarifas y tiempos de permanencia.",
    result:
      "Control inteligente de estacionamientos con detección de ocupación en tiempo real, automatización de barreras y reportería de ingresos por sede.",
    description:
      "Plataforma de control inteligente para centros comerciales y operadores de estacionamiento: ocupación en tiempo real, tarificación dinámica, automatización de accesos y dashboard de ingresos consolidado.",
    metrics: [
      { label: "Visibilidad de ocupación", value: "100%" },
      { label: "Tiempo de ingreso", value: "−72%" },
      { label: "Centros conectados", value: "+18" },
    ],
    gradient: "from-violet-500/20 via-cyan-500/10 to-transparent",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "PROGEX entendió nuestro modelo operativo antes de plantear una sola línea técnica. La plataforma que construyeron lleva tres años en producción y sigue evolucionando al ritmo del negocio.",
    author: "Carolina Méndez",
    role: "Gerente de Operaciones",
    company: "Distribuidora Andina",
  },
  {
    quote:
      "Migramos de un ERP genérico a una plataforma a medida y el cambio fue inmediato. Por primera vez la información sirve para tomar decisiones, no solo para llenar reportes mensuales.",
    author: "Ricardo Salas",
    role: "CFO",
    company: "Grupo Constructor Norte",
  },
  {
    quote:
      "Su equipo no es un proveedor más: actúa como una extensión de nuestro área de tecnología. Cada decisión técnica se discute con visión de producto y con visión de negocio.",
    author: "Andrea Vargas",
    role: "Head of Product",
    company: "Fintech regional",
  },
  {
    quote:
      "Necesitábamos automatizar procesos críticos que demoraban días. PROGEX entregó en seis semanas y el retorno se materializó dentro del primer trimestre operativo.",
    author: "Jorge Linares",
    role: "Director de TI",
    company: "Cadena retail nacional",
  },
  {
    quote:
      "Lo que más valoramos es la disciplina: alcances, plazos y costos siempre transparentes. Es un partner tecnológico de largo plazo, no un proveedor de servicios.",
    author: "Mariana Cueva",
    role: "Gerente General",
    company: "Servicios Logísticos S.A.",
  },
];

export const faqs = [
  {
    q: "¿Cómo se estructura una iniciativa con PROGEX?",
    a: "Iniciamos con una sesión de descubrimiento sin costo donde mapeamos objetivos de negocio, procesos involucrados, restricciones y stakeholders. De allí entregamos una propuesta formal con alcance, fases, equipo asignado, plazos y modelo de inversión, antes de escribir una sola línea de código.",
  },
  {
    q: "¿Cuánto demora una implementación a medida?",
    a: "Un MVP empresarial toma típicamente entre 8 y 14 semanas. Plataformas más complejas se entregan por fases iterativas con releases productivos cada 2 a 4 semanas, asegurando valor incremental y visibilidad continua para el equipo ejecutivo.",
  },
  {
    q: "¿Trabajan con tecnologías específicas o se adaptan a nuestro stack?",
    a: "Operamos con preferencia sobre stacks modernos (Next.js, React, Node, .NET, Flutter, cloud nativo en AWS / Azure / GCP), pero nos adaptamos al ecosistema del cliente cuando existen sistemas heredados que mantener o políticas corporativas que respetar.",
  },
  {
    q: "¿Qué ocurre después de la puesta en producción?",
    a: "Ofrecemos planes formales de soporte, evolución de producto y acompañamiento estratégico con SLAs definidos. La mayoría de nuestros clientes mantiene relación con PROGEX por varios años después del primer release productivo.",
  },
  {
    q: "¿Quién es propietario del código y la propiedad intelectual?",
    a: "El cliente, sin excepciones. Código fuente, documentación, infraestructura y todos los activos del proyecto se entregan a su nombre desde el primer día. PROGEX no opera bajo modelos de vendor lock-in.",
  },
  {
    q: "¿Pueden integrar con plataformas existentes en nuestra organización?",
    a: "Sí. Diseñamos integraciones con ERPs (SAP, Oracle, Dynamics, Odoo), CRMs (Salesforce, HubSpot), pasarelas de pago, facturación electrónica regional, sistemas legacy y APIs propietarias o públicas, asegurando consistencia transaccional.",
  },
  {
    q: "¿Cómo abordan la seguridad y la confidencialidad?",
    a: "Firmamos NDA desde el primer contacto. Aplicamos prácticas de seguridad alineadas a OWASP, cifrado en tránsito y reposo, autenticación robusta (SSO / SAML / OAuth), control de accesos por rol, auditoría de código y revisiones periódicas. Cuando el sector lo exige, alineamos a estándares como ISO 27001 o PCI-DSS.",
  },
  {
    q: "¿Atienden organizaciones fuera del Perú?",
    a: "Sí. Operamos con clientes en LATAM, Estados Unidos y Europa, en español e inglés, con metodologías ágiles, herramientas colaborativas y documentación técnica diseñada para colaboración remota multi-zona horaria.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Descubrimiento estratégico",
    description:
      "Mapeamos objetivos de negocio, procesos críticos, restricciones y stakeholders antes de proponer arquitectura. Sin asumir nada.",
  },
  {
    n: "02",
    title: "Diseño y arquitectura",
    description:
      "Definimos producto, experiencia, arquitectura técnica y plan de entrega. Documentación formal desde el día uno y trazabilidad completa de decisiones.",
  },
  {
    n: "03",
    title: "Construcción iterativa",
    description:
      "Desarrollo en sprints con releases frecuentes a entornos productivos. Visibilidad continua, demos quincenales y métricas auditables del avance.",
  },
  {
    n: "04",
    title: "Lanzamiento y estabilización",
    description:
      "QA estructurado, capacitación al equipo cliente, despliegue productivo controlado y monitoreo activo durante la ventana de estabilización.",
  },
  {
    n: "05",
    title: "Evolución continua",
    description:
      "Soporte con SLAs formales, mantenimiento evolutivo y nuevas capacidades. El producto crece al ritmo del negocio, no a contrarreloj.",
  },
];

export const benefits = [
  {
    title: "Equipo senior dedicado",
    description:
      "Arquitectos, ingenieros y diseñadores con experiencia comprobada en proyectos enterprise. Cero modelo de juniors haciendo demos para clientes corporativos.",
  },
  {
    title: "Gobernanza ejecutiva del proyecto",
    description:
      "Dashboards de avance, demos quincenales con stakeholders y comunicación directa con quien arquitecta y construye la solución.",
  },
  {
    title: "Propiedad intelectual del cliente",
    description:
      "Cero vendor lock-in. Repositorios, infraestructura y accesos a nombre de la organización desde el primer día del compromiso.",
  },
  {
    title: "Performance medible y auditable",
    description:
      "Cada release entrega métricas verificables: tiempos de carga, tasas de error, adopción real. Decisiones basadas en datos, no en intuición.",
  },
  {
    title: "Diseño integrado al producto",
    description:
      "Arquitectura técnica y diseño de experiencia avanzan en paralelo desde el día uno, no como capas independientes ni como un complemento estético.",
  },
  {
    title: "Operación post-lanzamiento",
    description:
      "El go-live es el inicio del valor, no el cierre del proyecto. Soporte, evolución y crecimiento sostenido bajo SLAs formales.",
  },
];

export const trustMetrics = [
  { value: "+12", label: "años entregando software empresarial" },
  { value: "+80", label: "plataformas operando en producción" },
  { value: "+6", label: "productos propios en escala" },
  { value: "99.9%", label: "uptime productivo sostenido" },
];

export const partners = [
  "Grupo Andina",
  "NorteBank",
  "RetailMax",
  "BuildPro",
  "LogiSur",
  "MediCare",
  "EduTech",
  "AgroVision",
];
