import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Venues | AVIM Events",
  description:
    "Discover our curated collection of palatial estates and elite venue partners, handpicked for royal celebrations and premium events.",
};

const DEFAULT_PALATIAL = [
  { id: 1, name: "Taj Palace", location: "New Delhi, India", tag: "Featured", imageUrl: null },
  { id: 2, name: "The Oberoi Udaivilas", location: "Udaipur, India", tag: null, imageUrl: null },
];

const DEFAULT_ELITE = [
  { id: 3, name: "Marriott International", location: "Jaipur, India", tag: null, imageUrl: null },
  { id: 4, name: "ITC Rajputana", location: "Jaipur, India", tag: null, imageUrl: null },
  { id: 5, name: "Hyatt Regency", location: "Mumbai, India", tag: null, imageUrl: null },
];

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function VenuesPage() {
  const [palatialVenues, eliteVenues, venueConfigs, navbarConfigs, footerConfigs, contactConfigs] = await Promise.all([
    prisma.venueCard.findMany({ where: { active: true, tier: "palatial" }, orderBy: { order: "asc" } }),
    prisma.venueCard.findMany({ where: { active: true, tier: "elite" }, orderBy: { order: "asc" } }),
    prisma.siteConfig.findMany({ where: { section: "venues_page" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
    prisma.siteConfig.findMany({ where: { section: "contact_info" } }),
  ]);

  const venueConfig = cfgMap(venueConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);
  const contact = cfgMap(contactConfigs);

  const waUrl = navbar.whatsapp_url || "https://wa.me/message/X4JENWAUTFKWA1?src=qr";

  const displayPalatial = palatialVenues.length > 0 ? palatialVenues : DEFAULT_PALATIAL;
  const displayElite = eliteVenues.length > 0 ? eliteVenues : DEFAULT_ELITE;

  return (
    <div
      className="antialiased relative min-h-screen"
      style={{ backgroundColor: "#050505", color: "#f0ebe0" }}
    >
      <ScrollAnimation />
      <Navbar config={navbar} />

      <main>
        {/* ── HERO ── */}
        <section
          className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(212,175,55,0.1) 0%, transparent 55%), linear-gradient(to bottom, #060606, #050505)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
              {venueConfig.label || "VENUES"}
            </p>
            <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6">
              {venueConfig.heading || "Exquisite Settings"}
            </h1>
            <p className="font-inter text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {venueConfig.subtext || "Discover our curated collection of palatial estates and elite venue partners, handpicked to serve as the perfect canvas for your royal celebration."}
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── PALATIAL VENUES ── */}
        <section className="py-20 sm:py-28 section-theme-black">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 reveal">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
                {venueConfig.palatial_label || "PALATIAL 5-STAR PARTNERS"}
              </p>
              <h2 className="font-fraunces text-2xl sm:text-3xl text-white">
                {venueConfig.palatial_heading || "Unparalleled luxury and heritage."}
              </h2>
              <div className="mt-4 h-px w-24" style={{ background: "linear-gradient(to right, rgba(212,175,55,0.6), transparent)" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayPalatial.map((venue) => (
                <article
                  key={venue.id}
                  className="glass-card-gv overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:border-gv-gold/40 reveal"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={venue.imageUrl || "/images/avim-events/placeholder-portfolio.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = "/images/avim-events/placeholder-portfolio.svg"; }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)" }}
                    />
                    {venue.tag && (
                      <span
                        className="absolute top-4 right-4 font-inter text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(212,175,55,0.15)",
                          border: "1px solid rgba(212,175,55,0.5)",
                          color: "#D4AF37",
                        }}
                      >
                        {venue.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-fraunces text-xl text-white mb-1 group-hover:text-gv-gold transition-colors">
                      {venue.name}
                    </h3>
                    <p className="font-inter text-xs text-white/45 mb-5">{venue.location}</p>
                    <Link
                      href="/contact"
                      className="font-inter text-[11px] text-gv-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Enquire about this venue →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── ELITE VENUES ── */}
        <section className="py-20 sm:py-28 section-theme-charcoal">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 reveal">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-3">
                {venueConfig.elite_label || "ELITE COLLECTIONS"}
              </p>
              <h2 className="font-fraunces text-2xl sm:text-3xl text-white">
                {venueConfig.elite_heading || "Contemporary elegance and refined service."}
              </h2>
              <div className="mt-4 h-px w-24" style={{ background: "linear-gradient(to right, rgba(212,175,55,0.6), transparent)" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayElite.map((venue) => (
                <article
                  key={venue.id}
                  className="glass-card-gv overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:border-gv-gold/40 reveal"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={venue.imageUrl || "/images/avim-events/placeholder-portfolio.svg"}
                      alt={venue.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.src = "/images/avim-events/placeholder-portfolio.svg"; }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)" }}
                    />
                    {venue.tag && (
                      <span
                        className="absolute top-4 right-4 font-inter text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(212,175,55,0.15)",
                          border: "1px solid rgba(212,175,55,0.5)",
                          color: "#D4AF37",
                        }}
                      >
                        {venue.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-fraunces text-lg text-white mb-1 group-hover:text-gv-gold transition-colors">
                      {venue.name}
                    </h3>
                    <p className="font-inter text-xs text-white/45 mb-4">{venue.location}</p>
                    <Link
                      href="/contact"
                      className="font-inter text-[11px] text-gv-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Enquire →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer config={footer} />
      <WhatsAppWidget url={waUrl} />
      <ScrollToTopBtn />
    </div>
  );
}
