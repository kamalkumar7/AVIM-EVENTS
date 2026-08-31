"use client";

const DEFAULT_TIEUPS = [
  { name: "7XWeddings", logoUrl: null },
  { name: "ANK", logoUrl: null },
  { name: "Catapultt", logoUrl: null },
  { name: "Meragi", logoUrl: null },
  { name: "Odyssey", logoUrl: null },
  { name: "Taarini", logoUrl: null },
  { name: "WeddingChariot", logoUrl: null },
  { name: "WeddingChimes", logoUrl: null },
  { name: "WeddingTales", logoUrl: null },
  { name: "Wedlock", logoUrl: null },
];

export default function TieupMarquee({ partners = [], config = {} }) {
  const list = partners.length > 0 ? partners : DEFAULT_TIEUPS;
  const doubled = [...list, ...list];

  return (
    <section className="py-20 sm:py-28 section-theme-black" id="tieups">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 reveal">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gv-gold/30" />
          <h2 className="font-fraunces text-3xl sm:text-4xl text-gradient-gold text-center leading-tight">
            {config.heading || "WEDDING & CORPORATE TIE-UPS"}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gv-gold/30" />
        </div>
        <p className="text-white/50 text-center font-inter text-sm tracking-wide">
          {config.subtitle || "Trusted partners and tieups across hospitality and events."}
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/25 to-transparent mt-8" />
      </div>

      <div
        className="relative overflow-hidden"
        style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="marquee-tieups">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-3"
              style={{ minWidth: "180px", minHeight: "170px" }}
            >
              <div className="h-full border border-gv-gold/20 bg-black/40 backdrop-blur rounded-2xl flex flex-col items-center justify-center gap-3 px-5 py-6 transition-all duration-300 hover:border-gv-gold/50 hover:bg-gv-gold/[0.03]">
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    loading="lazy"
                    style={{ height: "104px", width: "auto", maxWidth: "140px", objectFit: "contain" }}
                    onError={(e) => { e.currentTarget.src = "/images/guestversity/placeholder-logo.svg"; }}
                  />
                ) : (
                  <div className="flex items-center justify-center" style={{ height: "104px", width: "140px" }}>
                    <span className="text-gv-gold/40 font-fraunces text-xl text-center">{partner.name}</span>
                  </div>
                )}
                <span className="text-gv-gold text-[10px] font-inter font-semibold uppercase tracking-[0.15em] text-center">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-white/25 text-center font-inter text-xs tracking-widest mt-10 uppercase">
        A curated set of tieups and partners.
      </p>
    </section>
  );
}
