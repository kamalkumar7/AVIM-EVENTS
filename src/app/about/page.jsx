import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import AboutStatsSection from "@/components/avim-events/AboutStatsSection";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "About | AVIM Events",
  description:
    "AVIM Events is a Detailed Hospitality & Logistics Organisation delivering Guest Management, Travel, Production, and Wedding Coordination across India and internationally.",
};

const DEFAULT_TEAM = [
  { name: "Saqueeb Ahmed", role: "Branch Head", location: "Bangalore", description: "Leads Premium Hospitality Teams and On-Ground Guest Experience Operations with composed Coordination and Luxury-First Standards.", initials: "SA" },
  { name: "Syed Azhar", role: "Branch Head", location: "Hyderabad", description: "Coordinates High-Volume Transfers with calm, Five-Star Guest Handling and Time-Bound Execution across Venues and Routes.", initials: "SZ" },
  { name: "Raj Gowda", role: "Branch Head", location: "Goa", description: "Driving flawless Guest Experiences through Smart Hospitality Planning, seamless Logistics, and hands-on On-Ground Coordination.", initials: "RG" },
  { name: "Mohammad Thoufiq", role: "Branch Head", location: "Mysore", description: "Delivers Royal Hospitality Execution aligned with Palace-Style Venues, Guest Routing Plans, and Live Command-Center Coordination.", initials: "MT" },
  { name: "Anil S R", role: "Managing Partner", location: "Travel", description: "Leads Premium Travel Execution for Events, Coordinating Movement Logistics with Precision Scheduling and Guest-First Service.", initials: "AS" },
  { name: "Armaan Shariff", role: "Project Incharge", location: "Production", description: "Drives Production Timelines, Vendor Coordination, and Execution Flow to deliver Premium Stagecraft and Seamless Show Operations.", initials: "AR" },
  { name: "Sabiq Ahmed Khan", role: "Operations Incharge", location: "Hospitality", description: "Manages Hospitality Operations and Team Deployment with Disciplined Checklists, Guest Assistance Protocols, and Service Quality Control.", initials: "SK" },
  { name: "Manish Singh", role: "Operations Incharge", location: "Hospitality", description: "Hospitality & Logistics Manager with 4+ years of Experience and over 50 successfully managed Events.", initials: "MS" },
  { name: "Khalid Khan", role: "Operations Incharge", location: "Hospitality", description: "Oversees Hospitality Execution and Live Issue Resolution, ensuring Five-Star Guest Standards across Touchpoints and Venue Teams.", initials: "KK" },
  { name: "Asiya Arzoo", role: "Marketing Executive", location: "", description: "Leads Brand Presence and Communication with Premium Positioning, ensuring every Touchpoint reflects AVIM Events's Luxury Standards.", initials: "AA" },
];

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function AboutPage() {
  const [
    teamMembers,
    aboutHeroConfigs,
    aboutLeadershipConfigs,
    aboutTeamConfigs,
    aboutStatsConfigs,
    aboutStats,
    milestones,
    navbarConfigs,
    footerConfigs,
    contactConfigs,
  ] = await Promise.all([
    prisma.teamMember.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.siteConfig.findMany({ where: { section: "about_hero" } }),
    prisma.siteConfig.findMany({ where: { section: "about_leadership" } }),
    prisma.siteConfig.findMany({ where: { section: "about_team" } }),
    prisma.siteConfig.findMany({ where: { section: "about_stats" } }),
    prisma.counterStat.findMany({ where: { active: true, section: "about" }, orderBy: { order: "asc" } }),
    prisma.milestone.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
    prisma.siteConfig.findMany({ where: { section: "contact_info" } }),
  ]);

  const heroConfig = cfgMap(aboutHeroConfigs);
  const leadershipConfig = cfgMap(aboutLeadershipConfigs);
  const teamConfig = cfgMap(aboutTeamConfigs);
  const statsConfig = cfgMap(aboutStatsConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);
  const contact = cfgMap(contactConfigs);

  const displayTeam = teamMembers.length > 0 ? teamMembers : DEFAULT_TEAM;
  const waUrl = navbar.whatsapp_url || "https://wa.me/message/X4JENWAUTFKWA1?src=qr";

  return (
    <div className="antialiased relative min-h-screen" style={{ backgroundColor: "#050505", color: "#f0ebe0" }}>
      <ScrollAnimation />
      <Navbar config={navbar} />

      <main>

        {/* ── HERO ── */}
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
              background: "radial-gradient(ellipse at 65% 55%, rgba(212,175,55,0.08) 0%, transparent 50%)",
              opacity: 0.6,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-6">
                {heroConfig.label || "ABOUT AVIM EVENTS"}
              </p>
              <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-8">
                {heroConfig.heading ? (
                  heroConfig.heading
                ) : (
                  <>Crafting royal guest journeys with <span className="text-gradient-gold">precision.</span></>
                )}
              </h1>
              <p className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
                {heroConfig.subtext || "We are a Detailed Hospitality & Logistics Organisation that implements Operations and Management for Guest Management, Travel, Designing, Production, and Wedding Coordination for Weddings and Corporate Events — where Comfort, Timing, and Discretion define the experience."}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-56 h-56 sm:w-72 sm:h-72 relative opacity-90 flex items-center justify-center">
                <Image
                  src="/images/avim-events/logos/main-logo.png"
                  alt="AVIM Events"
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

        {/* ── LEADERSHIP ── */}
        <section className="py-20 sm:py-28 section-theme-black" id="leadership">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-left">
              <div
                className="glass-card-gv relative overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
                style={{
                  border: "1px solid rgba(212,175,55,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(212,175,55,0.08)",
                  background:
                    "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.12) 0%, transparent 55%), rgba(255,255,255,0.03)",
                }}
              >
                <Image
                  src={leadershipConfig.photo_url || "/images/avim-events/placeholder-hero.svg"}
                  alt={leadershipConfig.name || "Mohammed Tabraiz Saheb"}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 50%)" }}
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 reveal-right">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
                {leadershipConfig.label || "LEADERSHIP"}
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-2 leading-snug">
                {leadershipConfig.name || "Mohammed Tabraiz Saheb"}
              </h2>
              <p className="font-inter text-sm text-white/50 italic mb-6 tracking-wide">
                {leadershipConfig.role || "Founder & Managing Director"}
              </p>
              <p className="font-inter text-white/65 text-base leading-relaxed mb-8">
                {leadershipConfig.desc || "Mohammed Tabraiz Saheb leads AVIM Events with a Clear Vision to deliver Best Guest Management service in Logistics and Hospitality. Under his direction, the company has Built a Reputation for Planning, Coordination, Execution at large scale."}
              </p>
              <div className="glass-card-gv p-6" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-gv-gold font-inter text-[9px] tracking-[0.3em] uppercase font-semibold mb-3">
                  VISION STATEMENT
                </p>
                <blockquote className="font-fraunces text-white/85 text-lg leading-relaxed">
                  &ldquo;{leadershipConfig.vision || "To Care for Every Guest, once they arrive and leave with unforgettable Happy Memories."}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── TEAM ── */}
        <section className="py-20 sm:py-28 section-theme-charcoal" id="team">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-14 reveal">
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4">
                {teamConfig.label || "TEAM"}
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl text-white mb-3">
                {teamConfig.heading || "Leadership & Execution Team"}
              </h2>
              <p className="font-inter text-white/45 text-sm">
                {teamConfig.subtext || "Luxury standards. Operational precision. Regional strength."}
              </p>
              <div
                className="mx-auto mt-5"
                style={{
                  height: "1px",
                  width: "140px",
                  background: "linear-gradient(to right, transparent, rgba(212,175,55,.65), transparent)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayTeam.map((member, i) => (
                <div
                  key={member.id ?? i}
                  className="glass-card-gv p-6 group hover:border-gv-gold/40 hover:-translate-y-2 transition-all duration-500 reveal flex flex-col items-center text-center"
                  style={{ borderTop: "1px solid transparent" }}
                >
                  <div
                    className="w-full h-px mb-5 -mt-6 rounded-t-[1.25rem]"
                    style={{
                      background: "linear-gradient(to right, transparent, rgba(212,175,55,0.65), transparent)",
                    }}
                  />
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 font-fraunces text-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 100%)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      color: "#D4AF37",
                    }}
                  >
                    {member.initials || member.name?.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="font-fraunces text-base text-white mb-1">{member.name}</h3>
                  <p className="font-inter text-[11px] text-gv-gold tracking-wide mb-1">{member.role}</p>
                  {member.location && (
                    <p className="font-inter text-[10px] text-white/35 tracking-widest uppercase mb-3">
                      {member.location}
                    </p>
                  )}
                  <p className="font-inter text-xs text-white/50 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {member.description || member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <AboutStatsSection stats={aboutStats} milestones={milestones} config={statsConfig} />

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── CTA ── */}
        <section className="py-20 sm:py-28 section-theme-navy" id="cta">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="glass-card-gv p-10 sm:p-16"
              style={{
                border: "1px solid rgba(212,175,55,0.25)",
                boxShadow: "0 0 60px rgba(212,175,55,0.08), 0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-4 reveal">
                NEXT STEP
              </p>
              <h2 className="font-fraunces text-3xl sm:text-4xl xl:text-5xl text-white leading-tight mb-6 reveal">
                Let&apos;s design a flawless guest journey.
              </h2>
              <p className="font-inter text-white/55 text-base sm:text-lg mb-10 leading-relaxed reveal reveal-delay">
                We&apos;ll align on timelines, VIP handling, transport, staffing, and service standards.
              </p>
              <Link
                href="/contact"
                className="gold-btn glow-pulse inline-block px-12 py-4 text-sm reveal reveal-delay2"
              >
                Enquire Now
              </Link>
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
