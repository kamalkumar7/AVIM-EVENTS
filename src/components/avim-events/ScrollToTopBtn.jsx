"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-[6.5rem] right-6 z-50 w-10 h-10 rounded-full border border-white/[0.12] bg-white/[0.05] backdrop-blur flex items-center justify-center text-white/60 hover:text-gv-gold hover:border-gv-gold/40 transition-all"
      style={{ animation: "heroLineReveal 240ms ease forwards" }}
    >
      ↑
    </button>
  );
}
