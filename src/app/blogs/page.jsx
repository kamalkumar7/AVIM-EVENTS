import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | AVIM Events",
  description: "Insights, stories, and expertise from the world of luxury hospitality and events.",
};

function cfgMap(configs) {
  const m = {};
  configs.forEach((c) => { m[c.key] = c.value; });
  return m;
}

export default async function BlogsPage() {
  const [blogConfigs, navbarConfigs, footerConfigs] = await Promise.all([
    prisma.siteConfig.findMany({ where: { section: "blog_page" } }),
    prisma.siteConfig.findMany({ where: { section: "navbar" } }),
    prisma.siteConfig.findMany({ where: { section: "footer" } }),
  ]);

  const blog = cfgMap(blogConfigs);
  const navbar = cfgMap(navbarConfigs);
  const footer = cfgMap(footerConfigs);

  const heading = blog.heading || "Our Blog";
  const subheading = blog.subheading || "Insights, stories, and expertise from the world of luxury hospitality and events.";
  const comingSoonLabel = blog.coming_soon_label || "Coming Soon";

  return (
    <div className="antialiased relative min-h-screen" style={{ backgroundColor: "#050505", color: "#f0ebe0" }}>
      <Navbar config={navbar} />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24">
        <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gv-gold font-semibold mb-5">
          {comingSoonLabel}
        </p>
        <h1 className="font-fraunces text-4xl sm:text-5xl text-white mb-5">{heading}</h1>
        <p className="font-inter text-white/50 text-sm max-w-md leading-relaxed">{subheading}</p>
        <div
          className="mt-8"
          style={{
            height: "1px",
            width: "120px",
            background: "linear-gradient(to right, transparent, rgba(212,175,55,.6), transparent)",
          }}
        />
      </main>

      <Footer config={footer} />
    </div>
  );
}
