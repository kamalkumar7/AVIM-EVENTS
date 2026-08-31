import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import WhatsAppWidget from "@/components/avim-events/WhatsAppWidget";
import ScrollToTopBtn from "@/components/avim-events/ScrollToTopBtn";
import ContactSection from "@/components/avim-events/ContactSection";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact | AVIM Events",
  description:
    "Get in touch with AVIM Events for weddings, corporate events, guest management, and luxury hospitality services.",
};

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function ContactPage() {
  const [contactConfigs, navbarConfigs, footerConfigs] = await Promise.all([
    prisma.siteConfig.findMany({ where: { section: "contact_info" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
  ]);

  const contact = cfgMap(contactConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);

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
              CONTACT
            </p>
            <h1 className="font-fraunces text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Begin your journey with us.
            </h1>
            <p className="font-inter text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Connect with our team to discuss your event — weddings, corporate engagements, or any luxury hospitality need.
            </p>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-gv-gold/20 to-transparent" />

        {/* ── CONTACT FORM + DETAILS ── */}
        <section className="py-20 sm:py-28 section-theme-black">
          <ContactSection config={contact} />
        </section>
      </main>

      <Footer config={footer} />
      <WhatsAppWidget phone={waPhone} />
      <ScrollToTopBtn />
    </div>
  );
}
