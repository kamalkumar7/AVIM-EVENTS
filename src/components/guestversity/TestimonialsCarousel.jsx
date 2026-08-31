"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DEFAULT_TESTIMONIALS = [
  {
    author: "Prashobh Jayachandran",
    time: "2 months ago",
    quote:
      "Outstanding work by Thoufiq and the team. Their professionalism and attention to detail made our event truly seamless. Highly recommended!",
  },
  {
    author: "Khorshed Bulsara",
    time: "2 months ago",
    quote:
      "Flawless planning and execution. Every minute detail was attended to with care. A world-class hospitality experience from start to finish.",
  },
  {
    author: "Sant V",
    time: "3 months ago",
    quote:
      "They stood with us at all times — a stress-free event is their promise, and they kept it. Couldn't have asked for a better team.",
  },
  {
    author: "Suresh Nair",
    time: "2 months ago",
    quote:
      "Wonderful experience overall. The team was constantly updating information and ensuring every guest felt like royalty.",
  },
  {
    author: "Manoj Gupta",
    time: "8 months ago",
    quote:
      "Gold Standard in Event Car Logistics. Flawless logistics from start to finish — every vehicle was on time, every driver briefed perfectly.",
  },
  {
    author: "Srijith Rajeev",
    time: "1 year ago",
    quote:
      "Couldn't have asked for a better hospitality team. Their composure and warmth under pressure is something you rarely find.",
  },
  {
    author: "Mukund Korapati",
    time: "1 year ago",
    quote:
      "Incredible experience working with Guestversity. Seamless handling of guests from arrival to departure — truly world-class.",
  },
  {
    author: "Monna Rizvi",
    time: "1 year ago",
    quote:
      "Brilliant at getting us places on time, every time. The coordination was exceptional and the team's attitude impeccable.",
  },
  {
    author: "Kotnath Venugopal",
    time: "1 year ago",
    quote:
      "Exceptionally professional, proactive, and prompt. The kind of team that anticipates needs before you even voice them.",
  },
  {
    author: "Suthirth Vaidya",
    time: "1 year ago",
    quote:
      "Organised all vehicle requirements for our event flawlessly. Very professional approach, zero hiccups throughout.",
  },
  {
    author: "Jayasree Balasubramanian",
    time: "2 months ago",
    quote:
      "Superb management by the hospitality team. Every touchpoint was handled with grace and efficiency.",
  },
  {
    author: "CMA Shankar Iyer",
    time: "1 year ago",
    quote:
      "Excellent transport arrangements for our corporate gathering. Precision timing, courteous staff — exemplary service.",
  },
];

export default function TestimonialsCarousel({ testimonials: propTestimonials = [], config = {} }) {
  const testimonials = propTestimonials.length > 0
    ? propTestimonials.map((t) => ({ author: t.author, time: t.timeAgo, quote: t.quote }))
    : DEFAULT_TESTIMONIALS;

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const startX = useRef(null);

  const total = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 6000);
  }

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  function handleMouseEnter() { clearInterval(timerRef.current); }
  function handleMouseLeave() { resetTimer(); }

  function handlePointerDown(e) { startX.current = e.clientX; }
  function handlePointerUp(e) {
    if (startX.current === null) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      resetTimer();
    }
    startX.current = null;
  }

  function goTo(i) { setIndex(i); resetTimer(); }

  return (
    <section
      className="py-20 sm:py-28 section-theme-black"
      id="testimonials"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
              {config.label || "TESTIMONIALS"}
            </p>
            <h2 className="font-fraunces text-3xl sm:text-4xl text-white leading-tight max-w-xl">
              {config.heading || "CLIENT REVIEWS — Here's what our clients have to say about us"}
            </h2>
          </div>
          {/* Prev / Next */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => { prev(); resetTimer(); }}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/60 hover:border-gv-gold/50 hover:text-gv-gold transition-all"
            >
              ←
            </button>
            <button
              onClick={() => { next(); resetTimer(); }}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/60 hover:border-gv-gold/50 hover:text-gv-gold transition-all"
            >
              →
            </button>
          </div>
        </div>

        {/* Slide */}
        <div
          className="overflow-hidden select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(${-index * 100}%,0,0)`,
              transition: "transform 500ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-1"
                aria-hidden={i !== index}
              >
                <div className="glass-card-gv p-8 sm:p-12 max-w-3xl mx-auto text-center">
                  <span
                    className="font-fraunces text-6xl text-gv-gold/20 leading-none block mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="font-fraunces text-xl sm:text-2xl text-white/85 italic leading-relaxed mb-8">
                    {t.quote}
                  </p>
                  <p className="font-inter font-semibold text-white text-sm">
                    {t.author}
                  </p>
                  <p className="font-inter text-gv-gold text-[11px] tracking-widest uppercase mt-1">
                    {t.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gv-gold w-5"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
