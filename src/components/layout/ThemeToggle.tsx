"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme ?? theme : "dark";
  const toggle = () => setTheme(current === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label={`Cambiar a modo ${current === "dark" ? "claro" : "oscuro"}`}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full",
        "border border-default bg-bg-elev/60 backdrop-blur",
        "transition-colors hover:border-current hover:text-accent",
        "focus-ring",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {current === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            <Moon size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            <Sun size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
