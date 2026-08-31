import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppWidget from "@/components/guestversity/WhatsAppWidget";
import ScrollToTopBtn from "@/components/guestversity/ScrollToTopBtn";

export const metadata = {
  title: "Services | Guestversity Group",
  description:
    "Luxury moments powered by operational mastery — Guest Hospitality, Logistics & Transportation, Tours N Travels, Production, and Designing N Printing.",
};

const guestHospitalityBullets = [
  "RSVP support including e-invites, telecalling, follow-ups, and ticket/ID collection",
  "Flight and surface travel bookings coordinated for guests and families",
  "Airport, railway, and bus station reception with welcome hampers and assisted transfers",
  "Coordination with travel agencies and cab drivers for smooth arrivals and departures",
  "Registration desks, helpdesks, and guidance at the venue throughout the event",
  "Gift and hamper packing, luggage assistance, and venue-to-venue shuttling for guests",
];

const logisticsBullets = [
  "Airport transfers with buffer planning",
  "City movement and venue shuttles",
  "Driver briefing, control-room updates",
  "Contingencies for delays and reroutes",
];

const moreServices = [
  {
    badge: "◆",
    title: "Logistics & Hospitality",
    desc: "RSVP management, welcome hampers, arrivals and departures, venue registration, helpdesks, and on-ground Production Execution Team support for smooth coordination of events.",
  },
  {
    badge: "◇",
    title: "Tours N Travels",
    desc: "Vehicles for wedding and corporate requirements, curated fleets, trained chauffeurs, and routing for guest, family, and VIP movements.",
  },
  {
    badge: "⬒",
    title: "Designing N Printing",
    desc: "Invites, event branding, signages, collaterals, and creative prints — where creativity starts and is finished with the best possible result.",
  },
];

export default function ServicesPage() {
  return (
    <div
      className="antialiased relative min-h-screen"
      style={{ backgroundColor: "#050505", color: "#f0ebe0" }}
    >
      <ScrollAnimation />
      <Navbar />

      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(212,175,55,0.12) 0%, transparent 55%), linear-gradient(to bottom, #060606, #050505)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 65% 55%, rgba(212,175,55,0.08) 0%, transparent 50%)",
              opacity: 0.6,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left — copy */}
            <div className="lg:col-span-7">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
                SERVICES
              </p>
              <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-8">
                Luxury moments, powered by{" "}
                <span className="text-gradient-gold">operational mastery.</span>
              </h1>
              <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
                Our services are designed to feel effortless for guests —
                powered by four specialised sectors: Logistics &amp;
                Hospitality, Tours N Travels, Production Execution Team, and
                Designing N Printing, all running on precise logistics
                discipline.
              </p>
            </div>

            {/* Right — logo mark */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-56 h-56 sm:w-72 sm:h-72 relative opacity-90 flex items-center justify-center">
                <Image
                  src="/images/guestversity/logo.svg"
                  alt="Guestversity Group"
                  width={288}
                  height={288}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── SERVICE BLOCK 1: GUEST HOSPITALITY (copy left, image right) ── */}
        <section className="py-20 sm:py-28 section-theme-black" id="guest-hospitality">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Copy */}
            <div className="lg:col-span-6 reveal-left">
              <span
                className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full mb-6"
                style={{
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "rgba(212,175,55,0.9)",
                  background: "rgba(212,175,55,0.05)",
                }}
              >
                ✦ GUEST HOSPITALITY
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-5 leading-snug">
                Guest Hospitality Management
              </h2>
              <p className="font-inter text-white/60 text-base leading-relaxed mb-7">
                VIP handling, on-ground hospitality teams, concierge-style
                coordination, help desks, welcome rituals, and a five-star
                guest experience.
              </p>
              <ul className="space-y-3 mb-8">
                {guestHospitalityBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: "#D4AF37" }}
                    />
                    <span className="font-inter text-sm text-white/55 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="gold-btn px-7 py-3 text-xs">
                  Enquire Now
                </Link>
                <Link href="/about" className="ghost-btn px-7 py-3 text-xs">
                  Why Guestversity
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6 reveal-right">
              <div
                className="glass-card-gv relative overflow-hidden aspect-[4/3] w-full"
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                  background:
                    "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.1) 0%, transparent 55%), rgba(255,255,255,0.03)",
                }}
              >
                <Image
                  src="/images/guestversity/placeholder-portfolio.svg"
                  alt="Guest Hospitality Management"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(5,5,5,0.3) 0%, transparent 60%), linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── SERVICE BLOCK 2: LOGISTICS (image left, copy right) ── */}
        <section className="py-20 sm:py-28 section-theme-charcoal" id="logistics">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 reveal-left">
              <div
                className="glass-card-gv relative overflow-hidden aspect-[4/3] w-full"
                style={{
                  border: "1px solid rgba(212,175,55,0.2)",
                  background:
                    "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.1) 0%, transparent 55%), rgba(255,255,255,0.03)",
                }}
              >
                <Image
                  src="/images/guestversity/placeholder-hero.svg"
                  alt="Logistics & Transportation"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 reveal-right">
              <span
                className="inline-flex items-center gap-2 font-inter text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full mb-6"
                style={{
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "rgba(212,175,55,0.9)",
                  background: "rgba(212,175,55,0.05)",
                }}
              >
                ⬚ LOGISTICS
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-5 leading-snug">
                Logistics &amp; Transportation
              </h2>
              <p className="font-inter text-white/60 text-base leading-relaxed mb-7">
                Fleet management, routing, live coordination, VIP movement,
                and high-volume guest transfers — delivered with calm precision.
              </p>
              <ul className="space-y-3 mb-8">
                {logisticsBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: "#D4AF37" }}
                    />
                    <span className="font-inter text-sm text-white/55 leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="gold-btn px-7 py-3 text-xs">
                Enquire Now
              </Link>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── PARALLAX BANNER ──────────────────────────────── */}
        <section
          className="py-24 sm:py-32 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(12,31,63,0.6) 0%, transparent 50%), linear-gradient(to right, #060606, #070d1c, #060606)",
          }}
        >
          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-3xl">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-6 reveal">
                COMMAND-CENTER APPROACH
              </p>
              <h2 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6 reveal">
                When timelines tighten,{" "}
                <br className="hidden sm:block" />
                we get{" "}
                <span className="text-gradient-gold">sharper.</span>
              </h2>
              <p className="font-inter text-white/55 text-base sm:text-lg leading-relaxed mb-10 reveal reveal-delay">
                A calm luxury surface — backed by a command-center approach
                underneath.
              </p>
              <div className="flex gap-4 flex-wrap reveal reveal-delay2">
                <Link href="/contact" className="gold-btn glow-pulse px-8 py-3.5 text-xs">
                  Build a plan
                </Link>
                <Link href="/about" className="ghost-btn px-8 py-3.5 text-xs">
                  Read insights
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── MORE SERVICES GRID ───────────────────────────── */}
        <section className="py-20 sm:py-28 section-theme-black" id="more-services">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14 reveal">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
                MORE SERVICES
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl text-white">
                Full-spectrum execution, every time.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {moreServices.map((s, i) => (
                <div
                  key={s.title}
                  className={`glass-card-gv p-8 hover:border-gv-gold/40 hover:-translate-y-2 transition-all duration-500 group reveal${i === 1 ? " reveal-delay" : i === 2 ? " reveal-delay2" : ""}`}
                >
                  <span className="text-gv-gold text-xl block mb-5">
                    {s.badge}
                  </span>
                  <h3 className="font-fraunces text-xl text-white mb-3 group-hover:text-gv-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="font-inter text-sm text-white/55 leading-relaxed mb-7">
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="font-inter text-[11px] text-gv-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Enquire now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── PROPOSAL CTA ─────────────────────────────────── */}
        <section className="py-20 sm:py-28 section-theme-navy" id="proposal">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div
              className="glass-card-gv p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                boxShadow:
                  "0 0 60px rgba(212,175,55,0.08), 0 20px 50px rgba(0,0,0,0.5)",
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              }}
            >
              <div className="reveal">
                <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
                  PROPOSAL
                </p>
                <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-4 leading-snug max-w-lg">
                  Need an end-to-end plan?
                </h2>
                <p className="font-inter text-white/55 text-base leading-relaxed max-w-md">
                  Tell us your city, dates, and guest volume — we&apos;ll
                  respond with a polished execution blueprint.
                </p>
              </div>
              <div className="shrink-0 reveal reveal-delay">
                <Link
                  href="/contact"
                  className="gold-btn glow-pulse inline-block px-12 py-4 text-sm"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <WhatsAppWidget />
      <ScrollToTopBtn />
    </div>
  );
}
