import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CareersSection from "@/components/avim-events/CareersSection";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import prisma from "@/lib/prisma";

export const revalidate = 60;

export const metadata = {
  title: "Careers | AVIM Events",
  description:
    "Join the AVIM Events team — a premium hospitality and logistics company executing royal weddings, corporate events, and five-star guest experiences across India.",
};

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function CareersPage() {
  const [careersConfigs, navbarConfigs, footerConfigs] = await Promise.all([
    prisma.siteConfig.findMany({ where: { section: "careers_section" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
  ]);

  const careersConfig = cfgMap(careersConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);
  const waUrl = navbar.whatsapp_url || "https://wa.me/message/X4JENWAUTFKWA1?src=qr";

  return (
    <div className="antialiased relative min-h-screen" style={{ backgroundColor: "#050505", color: "#f0ebe0" }}>
      <ScrollAnimation />
      <Navbar config={navbar} />

      <main>
        {/* ── PAGE HERO ── */}
        <section
          className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(212,175,55,0.12) 0%, transparent 55%), linear-gradient(to bottom, #060606, #050505)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
            <p className="text-gv-gold font-inter text-[10px] tracking-[0.3em] uppercase font-semibold mb-5">
              {careersConfig.label || "CAREERS"}
            </p>
            <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6 max-w-3xl mx-auto">
              {careersConfig.heading || "Join the Legacy. Build the Future."}
            </h1>
            <p className="font-inter text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {careersConfig.body_1 || "Work alongside teams that execute royal weddings, high-profile corporate events, and large-scale guest movement with composure, precision, and class."}
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        <CareersSection config={careersConfig} />
      </main>

      <Footer config={footer} />
      <WhatsAppWidget url={waUrl} />
      <ScrollToTopBtn />
    </div>
  );
}
