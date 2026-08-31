"use client";

import { useState, useEffect, useCallback } from "react";

const items = [
  { cat: "AWARDS",          title: "Best Hospitality Service Award",  sub: "The Grand Indian Wedding Race • National recognition",   file: "awards-1.jpg",         col: "col-span-7", row: "row-span-2" },
  { cat: "CORPORATE",       title: "CXO Cocktails & Conversations",    sub: "Run-of-show • VIP protocols • Stage-managed moments",    file: "corporate-1.jpg",      col: "col-span-5", row: "row-span-1" },
  { cat: "HOSPITALITY",     title: "White‑Glove Check‑Ins",           sub: "Concierge welcome • Escorting • Guest-first touchpoints", file: "hospitality-1.jpg",    col: "col-span-3", row: "row-span-1" },
  { cat: "OPS",             title: "On‑Ground Command",               sub: "Shift briefings • Queue control • Last‑mile decisions",   file: "ops-1.jpg",            col: "col-span-2", row: "row-span-1" },
  { cat: "DESTINATION",     title: "Sunset Destination Mandap",       sub: "Beachside layouts • Guest routing • Wind‑proof detailing", file: "destination-1.jpg",   col: "col-span-7", row: "row-span-1" },
  { cat: "CEREMONY",        title: "Moonlit Varmala",                  sub: "Low‑light ambience • Couple reveal • Aisle management",  file: "ceremony-1.jpg",       col: "col-span-5", row: "row-span-2", float: true },
  { cat: "LOGISTICS",       title: "Airport & Fleet Logistics",        sub: "Guest pickups • Routing grids • Chauffeur briefings",    file: "logistics-1.jpg",      col: "col-span-4", row: "row-span-1" },
  { cat: "OPS",             title: "Leela Ops Briefing",              sub: "Housekeeping sync • Banquet huddles • F&B routing",       file: "ops-2.jpg",            col: "col-span-3", row: "row-span-1" },
  { cat: "VENUE",           title: "Palatial Ballroom Welcome",       sub: "Pre‑function hospitality • Checkpoint zoning",           file: "venue-1.jpg",          col: "col-span-5", row: "row-span-1" },
  { cat: "LUXURY WEDDING",  title: "Sangeet & Dance Night",           sub: "Couple entries • Performance blocking • Crowd energy",    file: "luxury-wedding-1.jpg", col: "col-span-7", row: "row-span-2" },
  { cat: "CORPORATE",       title: "Brand Showcase Gala",             sub: "Lighting design • Stage reveal • Guest journey",         file: "corporate-2.jpg",      col: "col-span-5", row: "row-span-1" },
  { cat: "HOSPITALITY",     title: "High‑Touch Guest Care",           sub: "Rooming lists • Late check‑ins • VIP follow‑through",    file: "hospitality-2.jpg",    col: "col-span-3", row: "row-span-1" },
];

export default function PortfolioGallery() {
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);

  const navigate = useCallback(
    (dir) => {
      setLightbox((prev) => {
        if (prev === null) return null;
        return (prev + dir + items.length) % items.length;
      });
    },
    []
  );

  useEffect(() => {
    function onKey(e) {
      if (lightbox === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, navigate]);

  return (
    <section className="py-20 sm:py-28" id="portfolio"
      style={{
        background: "radial-gradient(ellipse at 20% 30%, rgba(212,175,55,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.03) 0%, transparent 45%), linear-gradient(to bottom, #050505, #0A0A0C)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-fraunces text-4xl sm:text-5xl text-gradient-gold mb-4">
            Moments We&apos;ve Crafted
          </h2>
          <p className="text-white/50 font-inter text-sm">
            From Luxury Weddings to High‑Profile Corporate Events.
          </p>
          <p className="text-white/25 font-inter text-xs mt-3">
            Click any frame to experience the showcase in full-screen.
          </p>
        </div>

        {/* Masonry grid */}
        <div
          className="grid grid-cols-12 gap-3 reveal"
          style={{ gridAutoRows: "10rem" }}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`${item.col} ${item.row} relative group overflow-hidden rounded-xl cursor-pointer text-left border border-white/[0.06] transition-all duration-700 hover:border-gv-gold/40`}
              style={{
                animation: item.float
                  ? "heroFilmZoom 7.5s ease-in-out infinite alternate"
                  : undefined,
              }}
            >
              {/* Image */}
              <img
                src={`/images/guestversity/portfolio/${item.file}`}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] group-hover:scale-110 group-hover:saturate-[1.2]"
                onError={(e) => {
                  e.currentTarget.src = "/images/guestversity/placeholder-portfolio.svg";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-700 group-hover:from-black/60" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gv-gold font-inter text-[9px] tracking-[0.2em] uppercase font-semibold block mb-0.5">
                  {item.cat}
                </span>
                <h4 className="text-white font-fraunces text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-white/50 font-inter text-[10px] mt-1 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.sub}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(8px)" }}
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] glass-card-gv overflow-hidden"
            style={{
              animation: "heroLineReveal 320ms cubic-bezier(.2,.8,.2,1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/guestversity/portfolio/${items[lightbox].file}`}
              alt={items[lightbox].title}
              className="w-full max-h-[70vh] object-contain"
              onError={(e) => {
                e.currentTarget.src = "/images/guestversity/placeholder-portfolio.svg";
              }}
            />
            <div className="p-5">
              <span className="text-gv-gold font-inter text-[10px] tracking-[0.2em] uppercase">
                {items[lightbox].cat}
              </span>
              <h3 className="font-fraunces text-xl text-white mt-1">
                {items[lightbox].title}
              </h3>
              <p className="text-white/50 font-inter text-sm mt-1">
                {items[lightbox].sub}
              </p>
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white hover:border-gv-gold/50 hover:text-gv-gold transition-all"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white hover:border-gv-gold/50 hover:text-gv-gold transition-all"
              aria-label="Next"
            >
              →
            </button>
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-white/60 hover:text-white transition-colors text-lg"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
