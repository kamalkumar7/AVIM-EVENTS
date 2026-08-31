"use client";

const DEFAULT_PROPERTIES = [
  "JW Marriott", "Taj", "Four Seasons", "Radisson", "ITC Hotels",
  "The Leela", "Shangri-La", "The Oberoi", "Conrad", "Renaissance", "Ritz Carlton",
];

export default function PropertiesSection({ properties = [], config = {} }) {
  const list = properties.length > 0 ? properties : DEFAULT_PROPERTIES.map((name) => ({ name, logoUrl: null }));
  const doubled = [...list, ...list];

  return (
    <section className="py-20 sm:py-28 section-theme-black" id="properties">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 reveal">
          <h2 className="font-fraunces text-3xl sm:text-5xl text-gradient-gold mb-4">
            {config.heading || "Properties We Have Worked At"}
          </h2>
          <p className="text-white/50 font-inter text-sm tracking-wide">
            {config.subtitle || "Trusted by some of the most prestigious hospitality brands."}
          </p>
        </div>

        {/* Text marquee */}
        <div
          className="relative overflow-hidden mb-16"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
        >
          <div className="marquee-properties flex items-center">
            {doubled.map((prop, i) => (
              <span
                key={i}
                className="flex-shrink-0 mx-3 border border-gv-gold/20 bg-gv-gold/[0.04] rounded-full px-5 py-2 text-white/70 font-inter text-sm tracking-wide whitespace-nowrap"
              >
                {prop.name}
              </span>
            ))}
          </div>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 reveal">
          {list.map((prop) => (
            <div
              key={prop.name}
              className="group border border-white/[0.06] bg-white/[0.02] rounded-xl p-4 flex items-center justify-center transition-all duration-500 hover:border-gv-gold/40 hover:bg-gv-gold/[0.03]"
              style={{ minHeight: "80px" }}
            >
              {prop.logoUrl ? (
                <img
                  src={prop.logoUrl}
                  alt={prop.name}
                  loading="lazy"
                  className="h-10 w-auto max-w-[110px] object-contain grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:scale-105"
                />
              ) : (
                <span className="text-white/40 font-inter text-xs text-center leading-tight">{prop.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
