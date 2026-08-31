"use client";

import { useState } from "react";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "Maharaja's Grand Wedding",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    location: "Jaipur Palace",
    guests: "1200+",
  },
  {
    id: 2,
    title: "Tech Summit Gala",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=800&q=80",
    location: "Mumbai Convention",
    guests: "850+",
  },
  {
    id: 3,
    title: "Diamond Jubilee Celebration",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1516534775068-bb57d732bfe4?w=800&q=80",
    location: "Udaipur Fort",
    guests: "600+",
  },
  {
    id: 4,
    title: "Brand Launch Spectacle",
    category: "Launch",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    location: "Delhi Auditorium",
    guests: "2000+",
  },
];

export default function PortfolioShowcase() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-28 px-6 md:px-16 scroll-reveal">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
            Portfolio
          </p>
          <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold max-w-2xl leading-tight mb-6">
            Moments That Define Excellence
          </h2>
          <p className="font-body-rt text-lg text-on-surface-variant max-w-2xl">
            A curated collection of our most iconic events, each a testament to
            meticulous planning and flawless execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-72 md:h-96 overflow-hidden border border-primary/20 bg-surface-container-low">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-headline-lg text-2xl text-on-background font-bold mb-3">
                    {item.title}
                  </h3>
                  <div className="flex gap-6 mb-4 text-sm text-on-surface-variant">
                    <span>📍 {item.location}</span>
                    <span>👥 {item.guests}</span>
                  </div>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 font-label-caps text-xs tracking-widest text-primary uppercase border-b border-primary/40 pb-0.5 hover:border-primary transition-colors w-fit"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block border border-primary text-primary font-label-caps text-xs uppercase tracking-widest px-12 py-4 hover:bg-primary/10 transition-colors font-semibold"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
