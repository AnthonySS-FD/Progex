"use client";

import { motion } from "framer-motion";
import { InfinityBackground } from "@/components/ui/Logo";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg-soft pointer-events-none opacity-80" />
      <InfinityBackground className="absolute inset-0 pointer-events-none opacity-30" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[rgb(var(--accent)/0.4)] to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="eyebrow inline-flex items-center gap-2 mb-6">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "rgb(var(--accent))",
                boxShadow: "0 0 12px rgb(var(--accent))",
              }}
            />
            {eyebrow}
          </div>
          <h1 className="h-display text-balance">{title}</h1>
          {description && (
            <p className="mt-6 text-lg sm:text-xl opacity-75 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
