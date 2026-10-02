"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer } from "@/hooks/useFinePointer";

const INTERACTIVE = "a, button, input, select, label, [role='button']";

export default function CustomCursor() {
  const fine = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!fine) return;
    document.body.classList.add("has-cursor");
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => setHovering(Boolean(e.target.closest?.(INTERACTIVE)));
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [fine, x, y]);

  if (!fine) return null;
  return (
    <motion.div aria-hidden="true"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.55 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 rounded-full border-2 border-gold bg-gold/20" />
  );
}
