"use client";
import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
  }, []);

  const toggle = useCallback(() => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("tis-theme", next); } catch {}
    setTheme(next);
  }, []);

  return { theme, toggle };
}
