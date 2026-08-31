"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const counters = [
  { end: 1500, suffix: "+", label: "Events Executed" },
  { end: 12,   suffix: "+", label: "Years of Experience" },
  { end: 27,   suffix: "+", label: "Cities Covered Pan India & Internationally" },
  { end: 1000, suffix: "+", label: "Happy Clients" },
];

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedCounter({ end, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1100;
          const startTime = performance.now();

          function tick(now) {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            setValue(Math.round(end * easeOutCubic(t)));
            if (t < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function CountersSection() {
  return (
    <section className="py-20 sm:py-28 section-theme-charcoal" id="impact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className="glass-card-gv p-8 sm:p-12"
          style={{ border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.04)" }}
        >
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
              IMPACT
            </p>
            <h2 className="font-fraunces text-3xl sm:text-4xl text-white">
              Measured excellence, delivered quietly.
            </h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
            {counters.map((c) => (
              <div
                key={c.label}
                className="text-center bg-white/[0.02] border border-white/[0.05] rounded-xl py-8 px-4 hover:border-gv-gold/30 transition-colors duration-500"
              >
                <span className="font-fraunces text-4xl sm:text-5xl text-gradient-gold block mb-3">
                  <AnimatedCounter end={c.end} suffix={c.suffix} />
                </span>
                <span className="text-white/45 font-inter text-xs tracking-wide leading-snug block">
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-10 pt-8 border-t border-white/[0.07] gap-4 reveal">
            <span className="text-white/35 font-inter text-xs tracking-widest uppercase">
              Guestversity Group &nbsp;•&nbsp; Hospitality &amp; Logistics
            </span>
            <Link
              href="/contact"
              className="text-gv-gold font-inter text-sm hover:text-white transition-colors"
            >
              Request a proposal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
