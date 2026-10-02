"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button type="button" onClick={toggle} role="switch" aria-checked={dark}
      aria-label="Dark mode"
      className="relative flex h-10 w-[68px] items-center rounded-full border border-fg/20 bg-card px-1">
      <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="grid h-8 w-8 place-items-center rounded-full bg-gold text-[#0F2347]"
        style={{ marginLeft: dark ? "auto" : 0 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
