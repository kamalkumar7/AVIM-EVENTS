"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function LeadershipCarousel({ leaders = [], config = {} }) {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);
  const startX = useRef(null);

  const displayLeaders = leaders.length > 0 ? leaders : [
    {
      name: config.name || "Mohammed Tabraiz Saheb",
      title: config.title || "Founder & Managing Director",
      description: config.body || "Mohammed Tabraiz Saheb leads AVIM Events with a Clear Vision to deliver Best Guest Management service in Logistics and Hospitality. Under his direction, the company has Built a Reputation for Planning, Coordination, Execution at large scale.",
      quote: config.vision_quote || "To Care for Every Guest, once they arrive and leave with unforgettable Happy Memories.",
      imageUrl: config.photo_url || "/images/avim-events/placeholder-hero.svg",
    }
  ];

  const total = displayLeaders.length;

  const advance = useCallback((dir) => {
    setIndex((i) => (i + dir + total) % total);
    setProgressKey((k) => k + 1);
  }, [total]);

  const next = useCallback(() => advance(1), [advance]);
  const prev = useCallback(() => advance(-1), [advance]);

  function startTimer() {
    clearInterval(timerRef.current);
    if (total > 1) timerRef.current = setInterval(next, 7000);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [next, total]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleMouseEnter() { clearInterval(timerRef.current); }
  function handleMouseLeave() { startTimer(); }

  function handlePointerDown(e) { startX.current = e.clientX; }
  function handlePointerUp(e) {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 40 && total > 1) {
      delta < 0 ? next() : prev();
      startTimer();
    }
    startX.current = null;
  }

  function goTo(i) { setIndex(i); setProgressKey((k) => k + 1); startTimer(); }

  return (
    <section
      className="pt-20 pb-10 sm:pt-28 sm:pb-12 section-theme-black overflow-hidden"
      id="leadership"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full px-6 md:px-12 lg:px-16">

        {/* Slides */}
        <div
          className="overflow-hidden select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(${-index * 100}%,0,0)`,
              transition: "transform 600ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {displayLeaders.map((leader, i) => (
              <div key={i} className="basis-full shrink-0 min-w-0" aria-hidden={i !== index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                  {/* Image */}
                  <div className="order-2 lg:order-1 reveal-left">
                    <div
                      className="glass-card-gv relative overflow-hidden aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0"
                      style={{
                        border: "1px solid rgba(212,175,55,0.25)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.08)",
                        background: "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.12) 0%, transparent 55%), rgba(255,255,255,0.03)",
                      }}
                    >
                      <Image
                        src={leader.imageUrl || "/images/avim-events/placeholder-hero.svg"}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 50%)" }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="order-1 lg:order-2 reveal-right">
                    <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                      {config.label || "LEADERSHIP"}
                    </p>
                    <h2 className="font-fraunces text-4xl sm:text-5xl text-white mb-3 leading-snug">
                      {leader.name}
                    </h2>
                    <p className="font-inter text-sm text-white/50 italic mb-7 tracking-wide">
                      {leader.title}
                    </p>
                    <p className="font-inter text-white/65 text-base leading-relaxed mb-8">
                      {leader.description}
                    </p>
                    {leader.quote && (
                      <div className="glass-card-gv p-6" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                        <p className="text-gv-gold font-inter text-[9px] tracking-[0.3em] uppercase font-semibold mb-3">
                          VISION STATEMENT
                        </p>
                        <blockquote className="font-fraunces text-white/85 text-lg leading-relaxed">
                          &ldquo;{leader.quote}&rdquo;
                        </blockquote>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav: prev | dots (center) | next */}
        {total > 1 && (
          <div className="relative flex justify-center items-center mt-10">
            <button
              onClick={() => { prev(); startTimer(); }}
              aria-label="Previous leader"
              className="absolute left-0 w-9 h-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/50 hover:border-gv-gold/50 hover:text-gv-gold hover:bg-gv-gold/5 transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.5 2L3.5 6l4 4" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {displayLeaders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to leader ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === index ? "bg-gv-gold w-8" : "bg-white/20 hover:bg-white/40 w-1.5"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); startTimer(); }}
              aria-label="Next leader"
              className="absolute right-0 w-9 h-9 rounded-full border border-white/12 bg-white/[0.03] flex items-center justify-center text-white/50 hover:border-gv-gold/50 hover:text-gv-gold hover:bg-gv-gold/5 transition-all duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 2l4 4-4 4" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
