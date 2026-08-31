import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import GalleryGrid from "@/components/avim-events/GalleryGrid";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Gallery | AVIM Events",
  description:
    "Explore a curated collection of our most breathtaking events — from majestic royal weddings to sophisticated corporate galas.",
};

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function GalleryPage() {
  const [galleryItems, galleryConfigs, navbarConfigs, footerConfigs, contactConfigs] = await Promise.all([
    prisma.galleryItem.findMany({ where: { active: true }, orderBy: { order: "asc" } }),
    prisma.siteConfig.findMany({ where: { section: "gallery_page" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
    prisma.siteConfig.findMany({ where: { section: "contact_info" } }),
  ]);

  const galleryConfig = cfgMap(galleryConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);
  const contact = cfgMap(contactConfigs);

  const waPhone = navbar.whatsapp_number || contact.whatsapp_number || "918951097078";

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
              {galleryConfig.label || "GALLERY"}
            </p>
            <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6">
              {galleryConfig.heading || "A Tapestry of Celebrations"}
            </h1>
            <p className="font-inter text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {galleryConfig.subtext || "Explore a curated collection of our most breathtaking events. From majestic royal weddings to sophisticated corporate galas, every frame captures the essence of impeccable hospitality."}
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── GALLERY GRID ── */}
        <section className="py-20 sm:py-28 section-theme-black">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <GalleryGrid items={galleryItems} />
          </div>
        </section>
      </main>

      <Footer config={footer} />
      <WhatsAppWidget phone={waPhone} />
      <ScrollToTopBtn />
    </div>
  );
}
