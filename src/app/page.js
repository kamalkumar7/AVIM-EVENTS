import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/guestversity/HeroSection";
import TieupMarquee from "@/components/guestversity/TieupMarquee";
import PropertiesSection from "@/components/guestversity/PropertiesSection";
import CareersSection from "@/components/guestversity/CareersSection";
import CountersSection from "@/components/guestversity/CountersSection";
import TestimonialsCarousel from "@/components/guestversity/TestimonialsCarousel";
import PortfolioGallery from "@/components/guestversity/PortfolioGallery";
import WhatsAppWidget from "@/components/guestversity/WhatsAppWidget";
import ScrollToTopBtn from "@/components/guestversity/ScrollToTopBtn";

const services = [
  {
    title: "Guest Hospitality Management",
    desc: "Concierge-Style Guest Handling, Hospitality Staffing, and On-Ground Protocols.",
  },
  {
    title: "Logistics & Transportation",
    desc: "Fleet Coordination, Routing, Airport Transfers, and Seamless Movement Operations.",
  },
  {
    title: "Wedding Management",
    desc: "Royal Wedding Logistics, Guest Journeys, Hospitality Lounge Setup & Coordination.",
  },
  {
    title: "Corporate Events",
    desc: "Professional, Brand-aligned Experiences for Conferences, Retreats, and Launches.",
  },
  {
    title: "Tours & Travel",
    desc: "Premium Vehicles, Group Movement Handling, and Curated Experiences.",
  },
  {
    title: "On-ground Command Center",
    desc: "Control-room Style Operations for Live Tracking, Timing, and Vendor Sync.",
  },
];

export default function Home() {
  return (
    <div className="antialiased relative min-h-screen" style={{ backgroundColor: "#050505", color: "#f0ebe0" }}>
      <ScrollAnimation />
      <Navbar />

      <main>

        {/* ── 2. HERO ───────────────────────────────────────── */}
        <HeroSection />

        {/* ── 3. ABOUT PREVIEW ─────────────────────────────── */}
        <section className="py-20 sm:py-28 section-theme-black" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left */}
            <div className="lg:col-span-5 reveal-left">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                ABOUT
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight">
                Luxury Hospitality meets Disciplined Logistics.
              </h2>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 reveal-right">
              <div className="glass-card-gv p-7 sm:p-10">
                <p className="font-inter text-white/65 text-base leading-relaxed mb-8">
                  Guestversity Group is a detail-oriented organisation that implements
                  operations and management for guest management, travel, designing,
                  production, and wedding coordination across weddings and corporate
                  events. With over 12+ years of experience, we manage guests,
                  movement, and moments seamlessly while preserving a calm, royal
                  experience.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/about" className="ghost-btn px-6 py-2.5 text-xs">
                    Learn more
                  </Link>
                  <Link href="/contact" className="gold-btn px-6 py-2.5 text-xs">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Feature tiles */}
          <div className="max-w-7xl mx-auto px-6 md:px-10 mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "◆",
                title: "Guest Handling",
                desc: "Airport-to-venue transitions, VIP protocols, concierge-grade care.",
              },
              {
                icon: "◇",
                title: "Operational Clarity",
                desc: "Coordinated teams, timelines, vendor sync, and contingency planning.",
              },
              {
                icon: "⬒",
                title: "Premium Execution",
                desc: "A five-star finish — elegant, composed, and unforgettable.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="glass-card-gv p-7 hover:border-gv-gold/40 transition-all duration-500 reveal"
                style={{ transform: "translateY(0)" }}
              >
                <span className="text-gv-gold text-xl block mb-4">{f.icon}</span>
                <h3 className="font-fraunces text-lg text-white mb-3">{f.title}</h3>
                <p className="font-inter text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 4. SERVICES HIGHLIGHTS ────────────────────────── */}
        <section className="py-20 sm:py-28 section-theme-charcoal" id="services">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 reveal">
              <div>
                <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
                  SERVICES
                </p>
                <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight max-w-xl">
                  High-end experiences. High-performance logistics.
                </h2>
              </div>
              <Link
                href="/services"
                className="text-gv-gold font-inter text-sm hover:text-white transition-colors shrink-0 whitespace-nowrap"
              >
                View all services →
              </Link>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="glass-card-gv p-7 hover:border-gv-gold/40 transition-all duration-500 group reveal"
                  style={{ transform: "translateY(0)" }}
                >
                  <h3 className="font-fraunces text-lg text-white mb-3 group-hover:text-gv-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-inter text-sm text-white/55 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="font-inter text-[11px] text-gv-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Enquire now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 5. WEDDING & CORPORATE TIE-UPS ───────────────── */}
        <TieupMarquee />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 6. PROPERTIES WE HAVE WORKED AT ──────────────── */}
        <PropertiesSection />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 7. CAREERS ────────────────────────────────────── */}
        <CareersSection />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 8. COUNTERS ───────────────────────────────────── */}
        <CountersSection />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 9. TESTIMONIALS ───────────────────────────────── */}
        <TestimonialsCarousel />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 10. PORTFOLIO / GALLERY ───────────────────────── */}
        <PortfolioGallery />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── 11. CTA FOOTER BAND ───────────────────────────── */}
        <section className="py-20 sm:py-28 section-theme-navy" id="cta">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="glass-card-gv p-10 sm:p-16"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                boxShadow: "0 0 60px rgba(212,175,55,0.08), 0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight mb-6 reveal">
                Ready to deliver a royal experience?
              </h2>
              <p className="font-inter text-white/60 text-base sm:text-lg mb-10 leading-relaxed reveal reveal-delay">
                Let&apos;s build a flawless guest journey — elegant on the surface,
                powerful behind the scenes.
              </p>
              <Link
                href="/contact"
                className="gold-btn glow-pulse inline-block px-12 py-4 text-sm reveal reveal-delay2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── 12. FOOTER ────────────────────────────────────── */}
      <Footer />

      {/* ── 13. FLOATING WIDGETS ──────────────────────────── */}
      <WhatsAppWidget />
      <ScrollToTopBtn />
    </div>
  );
}
