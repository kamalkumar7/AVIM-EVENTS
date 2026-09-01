"use client";

import { useState, useEffect, useRef } from "react";

const DEFAULT_STATS = [
  { end: 1500, suffix: "+", label: "Total Events Managed" },
  { end: 12, suffix: "+", label: "Years of Experience" },
  { end: 27, suffix: "+", label: "Cities Covered Pan India & Internationally" },
  { end: 500, suffix: "+", label: "Luxury Weddings Managed" },
  { end: 60, suffix: "+", label: "Corporate Collaborations" },
  { end: 24, suffix: "/7", label: "Command-center Support" },
];

const DEFAULT_MILESTONES = [
  {
    title: "Narendra Modi Event – GKVK",
    badge: "India",
    desc: "A National-Level Milestone Engagement executed with High-Security coordination, Precision Guest movement, and Uncompromising On-Ground Discipline.",
    dominant: true,
  },
  {
    title: "Dubai Work – Palazzo Versace",
    badge: "Dubai",
    desc: "High-Profile International Engagement delivered with Luxury-Grade Hospitality Standards, Discreet VIP Handling, and Composed Execution.",
    dominant: false,
  },
  {
    title: "Oman Engagement",
    badge: "Oman",
    desc: "Cross-Border Guest Operations, Airport-to-Venue Routing, and On-Ground Hospitality Choreography aligned to International Expectations.",
    dominant: false,
  },
  {
    title: "Sri Lanka High-Level Event",
    badge: "Sri Lanka",
    desc: "A High-Level Platform managed with Disciplined Timelines, Stakeholder Protocol, and Premium Guest Experience Control.",
    dominant: false,
  },
  {
    title: "EX CM Engagement",
    badge: "India",
    desc: "Protocol-Sensitive Engagement delivered with Quiet Reliability, Coordinated Movement Planning, and Zero Disruption Operations.",
    dominant: false,
  },
  {
    title: "Indian National Congress Event",
    badge: "India",
    desc: "Large-Audience Guest and Logistics Operations delivered with Sharp Coordination, Controlled Access, and a Premium On-Ground Finish.",
    dominant: false,
  },
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
          const duration = 1200;
          const startTime = performance.now();
          function tick(now) {
            const t = Math.min((now - startTime) / duration, 1);
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

export default function AboutStatsSection({ stats: propStats = [], milestones: propMilestones = [] }) {
  const stats = propStats.length > 0
    ? propStats.map((s) => ({ end: Number(s.value) || 0, suffix: s.suffix || "+", label: s.label }))
    : DEFAULT_STATS;

  const milestones = propMilestones.length > 0
    ? propMilestones.map((m) => ({
        title: m.title,
        badge: m.badge || m.location || "",
        desc: m.description || "",
        dominant: m.featured || false,
      }))
    : DEFAULT_MILESTONES;

  return (
    <>
      {/* ── Stats ── */}
      <section className="py-20 sm:py-28 section-theme-charcoal" id="achievements">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
              ACHIEVEMENTS
            </p>
            <h2 className="font-fraunces text-3xl sm:text-4xl text-white">
              Built for luxury. Proven at scale.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 reveal">
            {stats.map((s, i) => (
              <div
                key={s.id ?? i}
                className="glass-card-gv text-center py-10 px-6 hover:border-gv-gold/40 transition-colors duration-500"
              >
                <span className="font-fraunces text-4xl sm:text-5xl text-gradient-gold block mb-3">
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </span>
                <span className="text-white/45 font-inter text-xs tracking-wide leading-snug block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

      {/* ── Global Milestones ── */}
      <section className="py-20 sm:py-28 section-theme-navy" id="milestones">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 reveal">
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
              GLOBAL ACHIEVEMENTS
            </p>
            <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-3">
              Global Milestones &amp; Prestigious Engagements
            </h2>
            <p className="font-inter text-white/50 text-sm max-w-lg mx-auto">
              Trusted across nations, institutions, and high-profile platforms.
            </p>
            <div
              className="mx-auto mt-5"
              style={{
                height: "1px",
                width: "160px",
                background: "linear-gradient(to right, transparent, rgba(212,175,55,.75), transparent)",
              }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <div
                key={m.id ?? i}
                className={`glass-card-gv flex flex-col sm:flex-row items-start gap-6 p-7 sm:p-10 hover:border-gv-gold/40 transition-all duration-500 reveal ${
                  m.dominant ? "border-gv-gold/30" : ""
                }`}
                style={
                  m.dominant
                    ? {
                        background:
                          "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 60%), rgba(255,255,255,0.03)",
                        boxShadow:
                          "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15) inset",
                      }
                    : {}
                }
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="font-fraunces text-2xl text-gradient-gold" style={{ lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-inter text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
                    style={{ border: "1px solid rgba(212,175,55,0.35)", color: "rgba(212,175,55,0.8)" }}
                  >
                    {m.badge}
                  </span>
                </div>

                <div
                  className="hidden sm:block w-px self-stretch shrink-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)",
                  }}
                />

                <div>
                  <h3 className={`font-fraunces mb-2 text-white ${m.dominant ? "text-xl sm:text-2xl" : "text-lg"}`}>
                    {m.title}
                  </h3>
                  <p className="font-inter text-sm text-white/55 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
