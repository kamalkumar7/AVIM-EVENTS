"use client";

import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Vikram Sharma",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    expertise: "20+ years in luxury event curation",
  },
  {
    id: 2,
    name: "Priya Kapoor",
    role: "Operations Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    expertise: "Logistics & Real-time Command",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Design & Décor Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    expertise: "Thematic Concept & Aesthetics",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Client Relations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    expertise: "Bespoke Experience Delivery",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-28 px-6 md:px-16 scroll-reveal">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
            Our Team
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold max-w-2xl leading-tight">
              Visionaries & Executors
            </h2>
            <Link
              href="/team"
              className="font-label-caps text-xs tracking-widest text-primary uppercase border-b border-primary/40 pb-0.5 hover:border-primary transition-colors whitespace-nowrap"
            >
              Meet the Full Team →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group cursor-pointer"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative overflow-hidden glass-panel mb-4 aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-sm text-on-surface-variant italic">
                    {member.expertise}
                  </p>
                </div>
              </div>
              <h3 className="font-headline-md text-lg text-on-background font-bold mb-1">
                {member.name}
              </h3>
              <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
