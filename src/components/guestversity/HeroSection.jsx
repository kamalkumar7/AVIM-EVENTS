"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  "/images/guestversity/hero/hero-1.jpg",
  "/images/guestversity/hero/hero-2.jpg",
  "/images/guestversity/hero/hero-3.jpg",
  "/images/guestversity/hero/hero-4.jpg",
  "/images/guestversity/hero/hero-5.jpg",
  "/images/guestversity/hero/hero-6.jpg",
];

export default function HeroSection() {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden section-theme-black"
      style={{ minHeight: "92vh" }}
      id="home"
    >
      {/* ── Background film (cross-fade slideshow) ── */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${src}), url(/images/guestversity/placeholder-hero.svg)`,
              opacity: activeImg === i ? 0.16 : 0,
              transform: activeImg === i ? "scale(1.05)" : "scale(1)",
              transition:
                activeImg === i
                  ? "opacity 2400ms cubic-bezier(.2,.8,.2,1), transform 8000ms ease"
                  : "opacity 2400ms cubic-bezier(.2,.8,.2,1)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* ── Dark overlay ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.62) 50%, rgba(5,5,5,0.94) 100%)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* ── Aurora gradient ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(212,175,55,0.06) 0%, transparent 55%), radial-gradient(ellipse at 75% 20%, rgba(12,31,63,0.35) 0%, transparent 50%)",
          animation: "auroraShift 12s ease-in-out infinite",
        }}
      />

      {/* ── Drifting blobs ── */}
      <div
        className="absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%)",
          animation: "blobDrift 18s cubic-bezier(.2,.8,.2,1) infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute -bottom-24 right-0 w-[420px] h-[420px] rounded-full z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(12,31,63,0.45) 0%, transparent 70%)",
          animation: "blobDrift 18s cubic-bezier(.2,.8,.2,1) infinite 3s",
          filter: "blur(60px)",
        }}
      />

      {/* ── Floating lines ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden hidden sm:block">
        {[20, 45, 70].map((top, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px anim-line"
            style={{
              top: `${top}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 30%, rgba(212,175,55,0.14) 50%, rgba(212,175,55,0.08) 70%, transparent 100%)",
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-24 pt-36 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left column */}
        <div className="lg:col-span-7 reveal">
          {/* Badge */}
          <div className="inline-flex items-center border border-gv-gold/25 bg-white/[0.04] rounded-full px-5 py-2 mb-8">
            <span className="text-gv-gold text-[10px] font-semibold tracking-[0.2em] uppercase font-inter">
              HOSPITALITY &nbsp;•&nbsp; LOGISTICS &nbsp;•&nbsp; EVENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-fraunces text-4xl sm:text-[3.5rem] leading-[1.06] mb-6">
            <span className="block text-gradient-gold hero-headline-line">
              Redefining Hospitality
            </span>
            <span className="block text-white hero-headline-line">
              &amp; Logistics Excellence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-[540px] font-inter">
            Guestversity Group delivers Five‑Star Guest Experiences, Precision
            Logistics, and Royal Wedding &amp; Corporate Event Execution —
            bringing Guest Management, Travel, Designing, and Production under
            one Disciplined, 24/7 Hospitality Team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/services" className="gold-btn glow-pulse px-8 py-3.5 text-center">
              Explore Services
            </Link>
            <Link href="/about" className="ghost-btn px-8 py-3.5 text-center">
              Our Story
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-5 text-white/40 text-xs font-inter tracking-wide">
            <span>
              <span className="text-gv-gold mr-1.5">•</span>
              Wedding Management
            </span>
            <span>
              <span className="text-gv-gold mr-1.5">•</span>
              Corporate‑grade
            </span>
          </div>
        </div>

        {/* Right column — Glassmorphism card */}
        <div className="lg:col-span-5 reveal-right">
          <div className="glass-card-gv relative overflow-hidden p-7 sm:p-9">
            {/* Watermark */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-[0.14] pointer-events-none"
              style={{ backgroundImage: "url(/images/guestversity/logo.svg)" }}
            />

            <div className="relative z-10">
              {/* Title row */}
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-fraunces text-xl sm:text-2xl text-white">
                  Signature Execution
                </h3>
                <span className="text-gv-gold text-[9px] tracking-[0.22em] font-semibold font-inter mt-1">
                  PREMIUM
                </span>
              </div>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed mb-7 font-inter">
                A polished operating system for luxury events — from arrival to
                farewell, every touchpoint is choreographed.
              </p>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  ["White‑glove", "Guest Experience"],
                  ["Precision", "Logistics"],
                  ["Royal", "Weddings"],
                  ["Composed", "Corporate"],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-3.5"
                  >
                    <span className="text-gv-gold font-fraunces text-base block leading-tight">
                      {val}
                    </span>
                    <span className="text-white/40 text-[11px] font-inter tracking-wide">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs font-inter">
                <span className="text-white/35">
                  Based across India &nbsp;•&nbsp; Built for scale
                </span>
                <Link
                  href="/about"
                  className="text-gv-gold hover:text-white transition-colors"
                >
                  View impact →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-[9px] tracking-[0.34em] font-inter font-semibold">
          SCROLL
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            style={{ animation: "scrollDot 1.65s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
