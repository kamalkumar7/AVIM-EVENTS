import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/avim-events/HeroSection";
import TieupMarquee from "@/components/avim-events/TieupMarquee";
import PropertiesSection from "@/components/avim-events/PropertiesSection";
import CareersSection from "@/components/avim-events/CareersSection";
import CountersSection from "@/components/avim-events/CountersSection";
import TestimonialsCarousel from "@/components/avim-events/TestimonialsCarousel";
import PortfolioGallery from "@/components/avim-events/PortfolioGallery";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import Link from "next/link";
import prisma from "@/lib/prisma";

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const [
    heroSlides, tieupPartners, properties, testimonials,
    portfolioItems, homeStats, careersConfigs,
    heroConfigs, tieupConfigs, propertiesConfigs,
    countersConfigs, testimonialsConfigs, portfolioConfigs,
    homeAboutConfigs, homeServicesConfigs, homeCtaConfigs, homeFeatureConfigs,
    navbarConfigs, footerConfigs, contactConfigs,
    homeServices,
  ] = await Promise.all([
    prisma.heroSlide.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.tieupPartner.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.propertyLogo.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.testimonial.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.portfolioItem.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.counterStat.findMany({ where: { active: true, section: "home" }, orderBy: { order: "asc" } }),
    prisma.siteConfig.findMany({ where: { section: "careers_section" } }),
    prisma.siteConfig.findMany({ where: { section: "hero_section" } }),
    prisma.siteConfig.findMany({ where: { section: "tieup_section" } }),
    prisma.siteConfig.findMany({ where: { section: "properties_section" } }),
    prisma.siteConfig.findMany({ where: { section: "counters_section" } }),
    prisma.siteConfig.findMany({ where: { section: "testimonials_section" } }),
    prisma.siteConfig.findMany({ where: { section: "portfolio_section" } }),
    prisma.siteConfig.findMany({ where: { section: "home_about" } }),
    prisma.siteConfig.findMany({ where: { section: "home_services" } }),
    prisma.siteConfig.findMany({ where: { section: "home_cta" } }),
    prisma.siteConfig.findMany({ where: { section: "home_features" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
    prisma.siteConfig.findMany({ where: { section: "contact_info" } }),
    prisma.serviceCard.findMany({ where: { active: true, section: "home" }, orderBy: { order: "asc" } }),
  ]);

  const about = cfgMap(homeAboutConfigs);
  const servicesHeader = cfgMap(homeServicesConfigs);
  const cta = cfgMap(homeCtaConfigs);
  const features = cfgMap(homeFeatureConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);
  const contact = cfgMap(contactConfigs);

  const featureTiles = [
    { icon: features.tile1_icon || "◆", title: features.tile1_title || "Guest Handling", desc: features.tile1_desc || "Airport-to-venue transitions, VIP protocols, concierge-grade care." },
    { icon: features.tile2_icon || "◇", title: features.tile2_title || "Operational Clarity", desc: features.tile2_desc || "Coordinated teams, timelines, vendor sync, and contingency planning." },
    { icon: features.tile3_icon || "⬒", title: features.tile3_title || "Premium Execution", desc: features.tile3_desc || "A five-star finish — elegant, composed, and unforgettable." },
  ];

  const services = homeServices.length > 0
    ? homeServices.map((s) => ({ title: s.title, desc: s.description }))
    : [
        { title: "Guest Hospitality Management", desc: "Concierge-Style Guest Handling, Hospitality Staffing, and On-Ground Protocols." },
        { title: "Logistics & Transportation", desc: "Fleet Coordination, Routing, Airport Transfers, and Seamless Movement Operations." },
        { title: "Wedding Management", desc: "Royal Wedding Logistics, Guest Journeys, Hospitality Lounge Setup & Coordination." },
        { title: "Corporate Events", desc: "Professional, Brand-aligned Experiences for Conferences, Retreats, and Launches." },
        { title: "Tours & Travel", desc: "Premium Vehicles, Group Movement Handling, and Curated Experiences." },
        { title: "On-ground Command Center", desc: "Control-room Style Operations for Live Tracking, Timing, and Vendor Sync." },
      ];

  const waPhone = navbar.whatsapp_number || contact.whatsapp_number || "918268625482";

  return (
    <div className="antialiased relative min-h-screen" style={{ backgroundColor: "#050505", color: "#f0ebe0" }}>
      <ScrollAnimation />
      <Navbar config={navbar} />

      <main>
        <HeroSection slides={heroSlides} config={cfgMap(heroConfigs)} />

        {/* ── ABOUT PREVIEW ── */}
        <section className="py-20 sm:py-28 section-theme-black" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal-left">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                {about.label || "ABOUT"}
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight">
                {about.heading || "Luxury Hospitality meets Disciplined Logistics."}
              </h2>
            </div>
            <div className="lg:col-span-7 reveal-right">
              <div className="glass-card-gv p-7 sm:p-10">
                <p className="font-inter text-white/65 text-base leading-relaxed mb-8">
                  {about.body || "AVIM Events is a detail-oriented organisation that implements operations and management for guest management, travel, designing, production, and wedding coordination across weddings and corporate events."}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/about" className="ghost-btn px-6 py-2.5 text-xs">{about.btn_secondary || "Learn more"}</Link>
                  <Link href="/contact" className="gold-btn px-6 py-2.5 text-xs">{about.btn_primary || "Talk to us"}</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10 mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {featureTiles.map((f, i) => (
              <div key={f.id ?? i} className="glass-card-gv p-7 hover:border-gv-gold/40 transition-all duration-500 reveal" style={{ transform: "translateY(0)" }}>
                <span className="text-gv-gold text-xl block mb-4">{f.icon}</span>
                <h3 className="font-fraunces text-lg text-white mb-3">{f.title}</h3>
                <p className="font-inter text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── SERVICES HIGHLIGHTS ── */}
        <section className="py-20 sm:py-28 section-theme-charcoal" id="services">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 reveal">
              <div>
                <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
                  {servicesHeader.label || "SERVICES"}
                </p>
                <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight max-w-xl">
                  {servicesHeader.heading || "High-end experiences. High-performance logistics."}
                </h2>
              </div>
              <Link href="/services" className="text-gv-gold font-inter text-sm hover:text-white transition-colors shrink-0 whitespace-nowrap">
                {servicesHeader.view_all_link || "View all services →"}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <div key={s.id ?? i} className="glass-card-gv p-7 hover:border-gv-gold/40 transition-all duration-500 group reveal" style={{ transform: "translateY(0)" }}>
                  <h3 className="font-fraunces text-lg text-white mb-3 group-hover:text-gv-gold transition-colors">{s.title}</h3>
                  <p className="font-inter text-sm text-white/55 leading-relaxed mb-6">{s.desc}</p>
                  <Link href="/contact" className="font-inter text-[11px] text-gv-gold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Enquire now →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <TieupMarquee partners={tieupPartners} config={cfgMap(tieupConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <PropertiesSection properties={properties} config={cfgMap(propertiesConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <CareersSection config={cfgMap(careersConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <CountersSection stats={homeStats} config={cfgMap(countersConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <TestimonialsCarousel testimonials={testimonials} config={cfgMap(testimonialsConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <PortfolioGallery items={portfolioItems} config={cfgMap(portfolioConfigs)} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── CTA FOOTER BAND ── */}
        <section className="py-20 sm:py-28 section-theme-navy" id="cta">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="glass-card-gv p-10 sm:p-16" style={{ border: "1px solid rgba(212,175,55,0.25)", boxShadow: "0 0 60px rgba(212,175,55,0.08), 0 20px 50px rgba(0,0,0,0.5)" }}>
              <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight mb-6 reveal">
                {cta.heading || "Ready to deliver a royal experience?"}
              </h2>
              <p className="font-inter text-white/60 text-base sm:text-lg mb-10 leading-relaxed reveal reveal-delay">
                {cta.body || "Let's build a flawless guest journey — elegant on the surface, powerful behind the scenes."}
              </p>
              <Link href="/contact" className="gold-btn glow-pulse inline-block px-12 py-4 text-sm reveal reveal-delay2">
                {cta.btn_text || "Contact Us"}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer config={footer} />
      <WhatsAppWidget phone={waPhone} />
      <ScrollToTopBtn />
    </div>
  );
}
