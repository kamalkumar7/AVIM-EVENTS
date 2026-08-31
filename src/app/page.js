import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroAnimation from "@/components/HeroAnimation";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import TeamPreview from "@/components/TeamPreview";
import FAQSection from "@/components/FAQSection";

const services = [
  {
    title: "Royal Weddings",
    desc: "Full-scale wedding management from concept to execution, with meticulous attention to every ceremonial detail.",
  },
  {
    title: "Corporate Events",
    desc: "Conferences, award nights, and product launches executed with operational precision and brand alignment.",
  },
  {
    title: "Milestone Celebrations",
    desc: "Anniversaries, birthdays, and felicitations designed to honour life's most cherished moments.",
  },
  {
    title: "Brand Launches & Galas",
    desc: "High-profile launch events and galas that command attention and create lasting impressions.",
  },
  {
    title: "Destination Events",
    desc: "Seamless event logistics across India's finest venues, from palace hotels to scenic retreats.",
  },
  {
    title: "On-ground Command",
    desc: "Dedicated operational teams ensuring flawless real-time execution at every event.",
  },
];

const partners = [
  "Taj Hotels",
  "Oberoi",
  "Leela Palaces",
  "ITC Hotels",
  "JW Marriott",
  "Four Seasons",
  "Radisson Blu",
  "Shangri-La",
  "Conrad",
  "Rambagh Palace",
  "Taj Hotels",
  "Oberoi",
  "Leela Palaces",
  "ITC Hotels",
  "JW Marriott",
  "Four Seasons",
  "Radisson Blu",
  "Shangri-La",
  "Conrad",
  "Rambagh Palace",
];

const stats = [
  { number: "500+", label: "Events Executed" },
  { number: "15+", label: "Years of Experience" },
  { number: "20+", label: "Cities Covered" },
  { number: "200+", label: "Happy Clients" },
];

const testimonials = [
  {
    quote:
      "AVIM Events brought our vision to life in ways we never imagined. Every detail was handled with precision and elegance — truly a once-in-a-lifetime experience.",
    author: "Priya & Arjun Sharma",
    event: "Royal Wedding, Jaipur",
  },
  {
    quote:
      "The team's professionalism and creative execution made our annual gala the most talked-about event of the year. We couldn't have asked for more.",
    author: "Ravi Mehta, CFO",
    event: "Corporate Gala, Mumbai",
  },
];

const floatingTags = [
  { text: "Wedding Management", pos: "top-[18%] left-[7%]", rotate: "-rotate-6" },
  { text: "WHITE-GLOVE", pos: "top-[22%] right-[9%]", rotate: "rotate-3" },
  { text: "PREMIUM", pos: "top-[42%] left-[4%]", rotate: "-rotate-3" },
  { text: "Precision", pos: "top-[45%] right-[6%]", rotate: "rotate-6" },
  { text: "Royal", pos: "top-[64%] left-[9%]", rotate: "rotate-3" },
  { text: "Pan-India", pos: "top-[62%] right-[8%]", rotate: "-rotate-3" },
];

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-rt antialiased relative min-h-screen">
      <ScrollAnimation />
      <Navbar />

      <main>
        {/* ── Hero with Animation ────────────────────────────── */}
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          id="home"
        >
          <HeroAnimation />

          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center parallax-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519167758481-83f19106c7a3?w=1920&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/90" />
          </div>

          {/* Floating decorative tags */}
          {floatingTags.map((tag) => (
            <span
              key={tag.text}
              className={`absolute ${tag.pos} ${tag.rotate} hidden lg:block font-label-caps text-[10px] tracking-[0.25em] text-on-surface-variant/40 border border-primary/15 px-3 py-1.5 animate-float-slow`}
            >
              {tag.text}
            </span>
          ))}

          {/* Hero content */}
          <div className="relative z-10 text-center px-6 md:px-16 mx-auto max-w-4xl flex flex-col items-center scroll-reveal">
            <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-6 animate-fade-in">
              Hospitality &nbsp;·&nbsp; Events &nbsp;·&nbsp; India
            </p>
            <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl text-on-background font-bold leading-tight mb-6 animate-slide-up">
              Crafting Regal Celebrations Across India
            </h1>
            <p className="font-subheading-sm text-xl md:text-2xl text-on-surface-variant mb-10 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
              Luxury event management for weddings, milestones, and brand
              launches — where every detail reflects the prestige of our
              clientele.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <Link
                href="/contact"
                className="bg-primary text-on-primary font-label-caps text-xs uppercase tracking-widest px-10 py-4 shimmer-btn font-semibold hover:opacity-90 transition-opacity"
              >
                Plan Your Event
              </Link>
              <Link
                href="/about"
                className="border border-primary text-primary font-label-caps text-xs uppercase tracking-widest px-10 py-4 hover:bg-primary/10 transition-colors font-semibold"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
            <span className="font-label-caps text-[9px] tracking-[0.3em] text-on-surface-variant/40 uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-primary/40 to-transparent" />
          </div>
        </section>

        {/* ── About Preview ─────────────────────────────────── */}
        <section
          className="py-28 px-6 md:px-16 max-w-[1280px] mx-auto scroll-reveal"
          id="about"
        >
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
            About
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold max-w-xl leading-tight">
              {"India's Premier Luxury Event House"}
            </h2>
            <div className="flex gap-6 shrink-0">
              <Link
                href="/about"
                className="font-label-caps text-xs tracking-widest text-primary uppercase border-b border-primary/40 pb-0.5 hover:border-primary transition-colors whitespace-nowrap"
              >
                Learn More →
              </Link>
              <Link
                href="/contact"
                className="font-label-caps text-xs tracking-widest text-on-surface-variant uppercase border-b border-transparent pb-0.5 hover:text-primary hover:border-primary/40 transition-colors whitespace-nowrap"
              >
                Talk to Us →
              </Link>
            </div>
          </div>
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mb-16 leading-relaxed">
            Rooted in the timeless grandeur of Indian heritage and elevated by
            modern hospitality standards, AVIM Events curates bespoke
            experiences that transform visions into breathtaking realities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◆",
                title: "Bespoke Curation",
                desc: "Every event is designed from scratch — no templates, no compromises. Just a singular vision brought to life.",
              },
              {
                icon: "◇",
                title: "Operational Clarity",
                desc: "Our command teams operate with military precision, ensuring every timeline, vendor, and detail is flawlessly coordinated.",
              },
              {
                icon: "⬒",
                title: "Premium Execution",
                desc: "From the first planning call to the final curtain, our standard is nothing short of exceptional.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="border border-primary/20 p-8 hover:border-primary/50 transition-colors hover-lift"
              >
                <span className="text-primary text-xl block mb-4">{f.icon}</span>
                <h3 className="font-headline-md text-xl text-on-background font-bold mb-3">
                  {f.title}
                </h3>
                <p className="font-body-rt text-sm text-on-surface-variant leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Services ──────────────────────────────────────── */}
        <section
          className="py-28 px-6 md:px-16 scroll-reveal"
          id="services"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-16 scroll-reveal">
              <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
                Services
              </p>
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold max-w-lg leading-tight">
                What We Do Best
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="border border-primary/20 p-8 hover:border-primary/55 transition-all duration-500 hover-lift bg-surface-container-low group"
                >
                  <h3 className="font-headline-md text-xl text-on-background font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body-rt text-sm text-on-surface-variant leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <Link
                    href="/services"
                    className="font-label-caps text-[10px] tracking-widest text-primary uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Enquire now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Partner Marquee ────────────────────────────────── */}
        <section className="py-20 overflow-hidden scroll-reveal">
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase text-center mb-10">
            Trusted Hotel Partners
          </p>
          <div className="relative overflow-hidden">
            <div className="marquee-track">
              {partners.map((name, i) => (
                <div key={i} className="flex items-center px-8">
                  <span className="font-display-lg text-lg text-on-surface-variant/35 whitespace-nowrap tracking-wide">
                    {name}
                  </span>
                  <span className="text-primary/25 text-sm ml-8">✦</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Impact Counters ────────────────────────────────── */}
        <section
          className="py-28 px-6 md:px-16 scroll-reveal"
          id="impact"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase text-center mb-16">
              Impact
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center border border-primary/15 py-12 px-6 hover:border-primary/40 transition-colors"
                >
                  <span className="font-display-lg text-4xl md:text-5xl text-primary font-bold block mb-3">
                    {s.number}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Testimonials ──────────────────────────────────── */}
        <section className="py-28 px-6 md:px-16 scroll-reveal">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase text-center mb-16">
              Testimonials
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="border border-primary/20 p-10 hover:border-primary/40 transition-colors"
                >
                  <span className="font-display-lg text-5xl text-primary/25 leading-none block mb-4">
                    &ldquo;
                  </span>
                  <p className="font-subheading-sm text-xl text-on-surface italic leading-relaxed mb-8">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-label-caps text-sm text-on-background font-semibold">
                      {t.author}
                    </p>
                    <p className="font-label-caps text-[10px] text-primary uppercase tracking-widest mt-1">
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Portfolio Showcase ────────────────────────────── */}
        <PortfolioShowcase />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Process Timeline ──────────────────────────────── */}
        <ProcessTimeline />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── Team Preview ──────────────────────────────────– */}
        <TeamPreview />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── FAQ Section ───────────────────────────────────── */}
        <FAQSection />

        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6 md:mx-16 max-w-[1280px] md:mx-auto" />

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section className="py-28 px-6 md:px-16 text-center bg-surface-container-low scroll-reveal">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold mb-6 leading-tight">
              Ready to Deliver a Royal Experience?
            </h2>
            <p className="font-subheading-sm text-xl text-on-surface-variant mb-10 max-w-xl mx-auto">
              Allow our master concierges to craft an unparalleled experience
              for your upcoming celebration.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-label-caps text-xs uppercase tracking-widest px-12 py-5 shimmer-btn font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
