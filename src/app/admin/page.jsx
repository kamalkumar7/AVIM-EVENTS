import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [heroCount, partnerCount, testimonialCount, portfolioCount, teamCount, applicantCount, enquiryCount] = await Promise.all([
    prisma.heroSlide.count(),
    prisma.tieupPartner.count(),
    prisma.testimonial.count(),
    prisma.portfolioItem.count(),
    prisma.teamMember.count(),
    prisma.applicant.count({ where: { read: false } }),
    prisma.enquiry.count({ where: { read: false } }),
  ]);

  const tiles = [
    { label: "Hero Slides", value: heroCount, href: "/admin/hero", color: "amber" },
    { label: "Partners", value: partnerCount, href: "/admin/partners", color: "blue" },
    { label: "Testimonials", value: testimonialCount, href: "/admin/testimonials", color: "purple" },
    { label: "Portfolio Items", value: portfolioCount, href: "/admin/portfolio", color: "green" },
    { label: "Team Members", value: teamCount, href: "/admin/team", color: "pink" },
    { label: "Unread Applicants", value: applicantCount, href: "/admin/applicants", color: "orange" },
    { label: "Unread Enquiries", value: enquiryCount, href: "/admin/enquiries", color: "red" },
  ];

  const quickLinks = [
    { label: "Edit Site Text", href: "/admin/config", desc: "Headings, body copy, CTAs" },
    { label: "Manage Services", href: "/admin/services", desc: "Home + services page cards" },
    { label: "Milestones", href: "/admin/milestones", desc: "Global achievements section" },
    { label: "Stats & Counters", href: "/admin/stats", desc: "Animated number counters" },
    { label: "Gallery", href: "/admin/gallery", desc: "Gallery page images" },
    { label: "Venues", href: "/admin/venues", desc: "Venue partner cards" },
    { label: "Careers Section", href: "/admin/careers", desc: "Careers page text & job roles" },
    { label: "Properties", href: "/admin/properties", desc: "Hotel property logos" },
  ];

  return (
    <div className="p-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome to the AVIM Events content management panel.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-amber-500/50 transition-colors group">
            <p className="text-3xl font-bold text-white group-hover:text-amber-400 transition-colors">{t.value}</p>
            <p className="text-xs text-gray-400 mt-1">{t.label}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-base font-semibold text-gray-300 mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {quickLinks.map((l) => (
          <Link key={l.href} href={l.href} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 hover:border-amber-500/40 hover:bg-gray-800 transition-colors">
            <p className="text-sm text-white font-medium">{l.label}</p>
            <p className="text-xs text-gray-500 mt-1">{l.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
