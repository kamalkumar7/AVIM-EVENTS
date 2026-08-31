"use client";

import { useState } from "react";

const DEFAULT_GALLERY = [
  { id: 1, category: "WEDDING", title: "The Royal Mandap", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
  { id: 2, category: "CORPORATE", title: "Gala Dinner Setup", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
  { id: 3, category: "SOCIAL", title: "Lounge Ambiance", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
  { id: 4, category: "WEDDING", title: "Palace Illumination", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
  { id: 5, category: "SOCIAL", title: "Exotic Florals", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
  { id: 6, category: "WEDDING", title: "The Grand Entrance", imageUrl: "/images/guestversity/placeholder-portfolio.svg" },
];

const CATEGORIES = ["ALL", "WEDDING", "CORPORATE", "SOCIAL"];

export default function GalleryGrid({ items: propItems = [] }) {
  const [active, setActive] = useState("ALL");

  const items = propItems.length > 0 ? propItems : DEFAULT_GALLERY;

  const filtered = active === "ALL"
    ? items
    : items.filter((item) => item.category.toUpperCase() === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="font-inter text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300"
            style={
              active === cat
                ? { borderColor: "rgba(212,175,55,0.7)", color: "#D4AF37", background: "rgba(212,175,55,0.08)" }
                : { borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)" }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="glass-card-gv relative overflow-hidden group break-inside-avoid hover:border-gv-gold/40 transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.imageUrl || "/images/guestversity/placeholder-portfolio.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/images/guestversity/placeholder-portfolio.svg"; }}
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                style={{ background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)" }}
              >
                <div>
                  <span
                    className="font-inter text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ border: "1px solid rgba(212,175,55,0.5)", color: "rgba(212,175,55,0.9)" }}
                  >
                    {item.category}
                  </span>
                  <h3 className="font-fraunces text-base text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-white/35 font-inter text-sm py-16">No items in this category yet.</p>
      )}
    </div>
  );
}
