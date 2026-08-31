"use client";

const tieups = [
  { name: "7XWeddings",     file: "7xweddings.png" },
  { name: "ANK",            file: "ank.png" },
  { name: "Catapultt",      file: "catapultt.png" },
  { name: "Events",         file: "events.png" },
  { name: "EventWaahla",    file: "eventwaahla.png" },
  { name: "GoldenVibes",    file: "goldenvibes.png" },
  { name: "Katha",          file: "katha.png" },
  { name: "KraftedKnots",   file: "kraftedknots.png" },
  { name: "Kraftstar",      file: "kraftstar.png" },
  { name: "Meragi",         file: "meragi.png" },
  { name: "Nalesa",         file: "nalesa.png" },
  { name: "Odyssey",        file: "odyssey.png" },
  { name: "Ohana",          file: "ohana.png" },
  { name: "Poonam",         file: "poonam.png" },
  { name: "RE",             file: "re.png" },
  { name: "Reet",           file: "reet.png" },
  { name: "Simplicite",     file: "simplicite.png" },
  { name: "Soundglitz",     file: "soundglitz.png" },
  { name: "SwagSeShaadi",   file: "swagsesha.png" },
  { name: "Taarini",        file: "taarini.png" },
  { name: "TheBull",        file: "thebull.png" },
  { name: "Verve",          file: "verve.png" },
  { name: "WeddingChariot", file: "weddingchariot.png" },
  { name: "WeddingChimes",  file: "weddingchimes.png" },
  { name: "WeddingTales",   file: "weddingtales.png" },
  { name: "Wedlock",        file: "wedlock.png" },
];

const doubled = [...tieups, ...tieups];

export default function TieupMarquee() {
  return (
    <section className="py-20 sm:py-28 section-theme-black" id="tieups">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 reveal">
        {/* Gold line divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gv-gold/30" />
          <h2 className="font-fraunces text-3xl sm:text-4xl text-gradient-gold text-center leading-tight">
            WEDDING &amp; CORPORATE TIE‑UPS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gv-gold/30" />
        </div>
        <p className="text-white/50 text-center font-inter text-sm tracking-wide">
          Trusted partners and tieups across hospitality and events.
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/25 to-transparent mt-8" />
      </div>

      {/* Marquee container */}
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
                <img
                  src={`/images/guestversity/tieups/${partner.file}`}
                  alt={partner.name}
                  loading="lazy"
                  style={{ height: "104px", width: "auto", maxWidth: "140px", objectFit: "contain" }}
                  onError={(e) => {
                    e.currentTarget.src = "/images/guestversity/placeholder-logo.svg";
                  }}
                />
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
