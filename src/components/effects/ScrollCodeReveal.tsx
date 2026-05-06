"use client";

import { motion, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ScrollCodeReveal — Efecto premium de IDE vivo.
 * El código se "escribe" mientras el usuario hace scroll dentro de la sección.
 * No es un decorado: cuenta la historia de cómo PROGEX construye software.
 */

type Tab = {
  id: string;
  filename: string;
  language: string;
  /** array of pre-tokenized lines */
  lines: TokenLine[];
};

type Token = { t: string; c?: string };
type TokenLine = Token[];

const k = (s: string): Token => ({ t: s, c: "tk-key" });
const s = (s: string): Token => ({ t: s, c: "tk-str" });
const f = (s: string): Token => ({ t: s, c: "tk-fn" });
const n = (s: string): Token => ({ t: s, c: "tk-num" });
const c = (s: string): Token => ({ t: s, c: "tk-com" });
const o = (s: string): Token => ({ t: s, c: "tk-op" });
const i = (s: string): Token => ({ t: s, c: "tk-id" });
const x = (s: string): Token => ({ t: s });

const tabs: Tab[] = [
  {
    id: "domain",
    filename: "domain/orders.ts",
    language: "TypeScript",
    lines: [
      [c("// Modelado del dominio: el negocio dicta el código.")],
      [k("export"), x(" "), k("type"), x(" "), i("Order"), x(" "), o("="), x(" {")],
      [x("  "), i("id"), o(":"), x(" "), i("OrderId"), o(";")],
      [x("  "), i("status"), o(":"), x(" "), s('"draft"'), x(" "), o("|"), x(" "), s('"placed"'), x(" "), o("|"), x(" "), s('"paid"'), o(";")],
      [x("  "), i("items"), o(":"), x(" "), i("LineItem"), x("[]"), o(";")],
      [x("  "), i("totals"), o(":"), x(" "), i("Money"), o(";")],
      [x("};")],
      [],
      [k("export"), x(" "), k("function"), x(" "), f("place"), x("("), i("draft"), o(":"), x(" "), i("Order"), x("): "), i("Order"), x(" {")],
      [x("  "), k("if"), x(" ("), i("draft"), x("."), i("items"), x("."), f("length"), x(" "), o("==="), x(" "), n("0"), x(") "), k("throw"), x(" "), k("new"), x(" "), f("EmptyOrder"), x("();")],
      [x("  "), k("return"), x(" { ..."), i("draft"), o(","), x(" "), i("status"), o(":"), x(" "), s('"placed"'), x(" };")],
      [x("}")],
    ],
  },
  {
    id: "api",
    filename: "api/orders.route.ts",
    language: "Next.js",
    lines: [
      [c("// API contract: tipado end-to-end, validación en el borde.")],
      [k("import"), x(" { "), i("z"), x(" } "), k("from"), x(" "), s('"zod"'), o(";")],
      [k("import"), x(" { "), i("place"), x(" } "), k("from"), x(" "), s('"@/domain/orders"'), o(";")],
      [],
      [k("const"), x(" "), i("Body"), x(" "), o("="), x(" "), i("z"), x("."), f("object"), x("({")],
      [x("  "), i("items"), o(":"), x(" "), i("z"), x("."), f("array"), x("("), i("LineItem"), x("),")],
      [x("  "), i("customerId"), o(":"), x(" "), i("z"), x("."), f("string"), x("()."), f("uuid"), x("(),")],
      [x("});")],
      [],
      [k("export"), x(" "), k("async"), x(" "), k("function"), x(" "), f("POST"), x("("), i("req"), o(":"), x(" "), i("Request"), x(") {")],
      [x("  "), k("const"), x(" "), i("data"), x(" "), o("="), x(" "), i("Body"), x("."), f("parse"), x("("), k("await"), x(" "), i("req"), x("."), f("json"), x("());")],
      [x("  "), k("const"), x(" "), i("order"), x(" "), o("="), x(" "), f("place"), x("({ "), i("status"), o(":"), x(" "), s('"draft"'), o(","), x(" ..."), i("data"), x(" });")],
      [x("  "), k("return"), x(" "), i("Response"), x("."), f("json"), x("("), i("order"), x(", { "), i("status"), o(":"), x(" "), n("201"), x(" });")],
      [x("}")],
    ],
  },
  {
    id: "ui",
    filename: "ui/CheckoutButton.tsx",
    language: "React",
    lines: [
      [c("// UX que entiende el contexto del usuario.")],
      [k("export"), x(" "), k("function"), x(" "), f("CheckoutButton"), x("({ "), i("cart"), x(" }: "), i("Props"), x(") {")],
      [x("  "), k("const"), x(" ["), i("loading"), o(","), x(" "), i("setLoading"), x("] "), o("="), x(" "), f("useState"), x("("), k("false"), x(");")],
      [],
      [x("  "), k("async"), x(" "), k("function"), x(" "), f("handleClick"), x("() {")],
      [x("    "), f("setLoading"), x("("), k("true"), x(");")],
      [x("    "), k("await"), x(" "), f("placeOrder"), x("("), i("cart"), x(");")],
      [x("    "), f("track"), x("("), s('"order_placed"'), x(", { "), i("value"), o(":"), x(" "), i("cart"), x("."), i("total"), x(" });")],
      [x("  }")],
      [],
      [x("  "), k("return"), x(" <"), f("Button"), x(" "), i("onClick"), o("={"), i("handleClick"), x("} "), i("loading"), o("={"), i("loading"), x("}>")],
      [x("    Confirmar pedido →")],
      [x("  </"), f("Button"), x(">;")],
      [x("}")],
    ],
  },
];

/** Total chars across all tabs, including line breaks. Exported for the parent driver. */
export function getTotalChars(allTabs: Tab[] = tabs) {
  return allTabs.reduce(
    (sum, tab) =>
      sum +
      tab.lines.reduce(
        (s, line) => s + line.reduce((ss, t) => ss + t.t.length, 0) + 1,
        0,
      ),
    0,
  );
}

/** Char count per tab — useful to derive activeTab from a global char index. */
export function getCharsPerTab(allTabs: Tab[] = tabs) {
  return allTabs.map((tab) =>
    tab.lines.reduce(
      (s, line) => s + line.reduce((ss, t) => ss + t.t.length, 0) + 1,
      0,
    ),
  );
}

export { tabs };

export interface CodeWindowProps {
  tabs: Tab[];
  activeTab: number;
  progress: MotionValue<number>;
  totalChars: number;
}

export function CodeWindow({ tabs, activeTab, progress, totalChars }: CodeWindowProps) {
  // Compute how many chars to render for each tab based on global progress
  const offsets = useMemo(() => {
    const arr: number[] = [0];
    let acc = 0;
    for (const t of tabs) {
      acc += t.lines.reduce(
        (s, line) => s + line.reduce((ss, tt) => ss + tt.t.length, 0) + 1,
        0,
      );
      arr.push(acc);
    }
    return arr;
  }, [tabs]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-12 -z-10 mesh-bg opacity-60 blur-3xl" />

      {/* Marco "vidrio profesional" alrededor del IDE — el editor real
          (oscuro, opaco) vive dentro del marco para mantener legibilidad. */}
      <div className="relative rounded-2xl glass-pro p-2 sm:p-2.5 shadow-2xl">
      <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0A0E1F]">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#070A18] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            ~/progex/{tabs[activeTab].filename}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-white/40">live</span>
          </div>
        </div>

        {/* Tabs bar */}
        <div className="flex border-b border-white/5 bg-[#08091A]">
          {tabs.map((t, i) => (
            <div
              key={t.id}
              className={cn(
                "relative flex items-center gap-2 border-r border-white/5 px-4 py-2.5 font-mono text-[11px] transition-colors",
                i === activeTab
                  ? "bg-[#0A0E1F] text-white"
                  : "text-white/40",
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  i === activeTab ? "bg-cyan-400" : "bg-white/20",
                )}
              />
              <span>{t.filename.split("/").pop()}</span>
              {i === activeTab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400"
                />
              )}
            </div>
          ))}
        </div>

        {/* Code body */}
        <div className="grid grid-cols-[44px_1fr] overflow-hidden">
          {/* Line numbers */}
          <div className="border-r border-white/5 bg-[#070A18] py-5 font-mono text-[11px] text-white/25">
            {tabs[activeTab].lines.map((_, idx) => (
              <div key={idx} className="px-3 text-right leading-[1.7]">
                {String(idx + 1).padStart(2, "0")}
              </div>
            ))}
          </div>

          {/* Code lines */}
          <div className="relative py-5 pr-6">
            {tabs.map((tab, ti) => (
              <TabContent
                key={tab.id}
                tab={tab}
                progress={progress}
                tabStartChar={offsets[ti]}
                tabEndChar={offsets[ti + 1]}
                totalChars={totalChars}
                isActive={ti === activeTab}
              />
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/5 bg-[#070A18] px-4 py-2 font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-4">
            <span>{tabs[activeTab].language}</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              build passing
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>UTF-8</span>
            <span>spaces: 2</span>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

interface TabContentProps {
  tab: Tab;
  progress: MotionValue<number>;
  tabStartChar: number;
  tabEndChar: number;
  totalChars: number;
  isActive: boolean;
}

function TabContent({
  tab,
  progress,
  tabStartChar,
  tabEndChar,
  totalChars,
  isActive,
}: TabContentProps) {
  // Map global progress to local chars typed inside this tab
  const tabRange = useTransform(progress, [0, 1], [
    -tabStartChar,
    totalChars - tabStartChar,
  ]);

  if (!isActive) return null;

  return (
    <div className="code-window">
      {tab.lines.map((line, lineIdx) => (
        <CodeLine
          key={lineIdx}
          line={line}
          lineIdx={lineIdx}
          tab={tab}
          tabRange={tabRange}
        />
      ))}
    </div>
  );
}

function CodeLine({
  line,
  lineIdx,
  tab,
  tabRange,
}: {
  line: TokenLine;
  lineIdx: number;
  tab: Tab;
  tabRange: MotionValue<number>;
}) {
  // Char index where this line starts within the tab
  const charStart = useMemo(() => {
    let s = 0;
    for (let i = 0; i < lineIdx; i++) {
      s += tab.lines[i].reduce((ss, t) => ss + t.t.length, 0) + 1;
    }
    return s;
  }, [tab, lineIdx]);

  const lineLength = line.reduce((s, t) => s + t.t.length, 0);

  // Remaining chars to render in this line
  const localProgress = useTransform(tabRange, (latest) =>
    Math.max(0, Math.min(lineLength, latest - charStart)),
  );

  return (
    <motion.div
      style={{ minHeight: "1.7em" }}
      className="px-4 leading-[1.7]"
    >
      <RenderTokens line={line} progress={localProgress} />
    </motion.div>
  );
}

function RenderTokens({
  line,
  progress,
}: {
  line: TokenLine;
  progress: MotionValue<number>;
}) {
  const [val, setVal] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    setVal(Math.floor(latest));
  });

  let consumed = 0;
  return (
    <span>
      {line.map((tok, i) => {
        const start = consumed;
        const end = consumed + tok.t.length;
        consumed = end;
        const visible = Math.max(0, Math.min(tok.t.length, val - start));
        if (visible <= 0) return null;
        return (
          <span key={i} className={tok.c ?? ""}>
            {tok.t.slice(0, visible)}
          </span>
        );
      })}
      {line.length === 0 && <span>&nbsp;</span>}
    </span>
  );
}

