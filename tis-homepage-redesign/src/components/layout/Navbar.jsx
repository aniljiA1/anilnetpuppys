"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import ThemeToggle from "@/components/animation/ThemeToggle";
import Button from "@/components/ui/Button";
import { applyUrl, navItems, phone } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-1 z-50 px-3 pt-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-fg/10 bg-bg/80 px-5 py-2 backdrop-blur-md">
        <a href="#top" className="font-display text-lg font-bold">Tulas International School</a>
        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((n) => <a key={n.href} href={n.href} className="hover:text-gold">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href={applyUrl} className="hidden sm:inline-flex">Apply now</Button>
          <button type="button" className="grid h-11 w-11 place-items-center lg:hidden" aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-fg/10 bg-bg p-4 lg:hidden">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-medium hover:bg-fg/10">{n.label}</a>
            ))}
            <a href={`tel:${phone}`} className="flex items-center gap-2 px-3 py-3 font-medium"><Phone size={16} /> {phone}</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
