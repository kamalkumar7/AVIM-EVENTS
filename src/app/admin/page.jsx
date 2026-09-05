import Link from "next/link";
import prisma from "@/lib/prisma";
import {
  HiOutlinePhotograph,
  HiOutlineBriefcase,
  HiOutlineCollection,
  HiOutlineUserGroup,
  HiOutlineLink,
  HiOutlineChatAlt2,
  HiOutlineLocationMarker,
  HiOutlineStar,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlinePencilAlt,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
} from "react-icons/hi";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [heroCount, partnerCount, testimonialCount, portfolioCount, teamCount, serviceCount, milestoneCount, venueCount, applicantCount, enquiryCount] = await Promise.all([
    prisma.heroSlide.count(),
    prisma.tieupPartner.count(),
    prisma.testimonial.count(),
    prisma.portfolioItem.count(),
    prisma.teamMember.count(),
    prisma.serviceCard.count(),
    prisma.milestone.count(),
    prisma.venueCard.count(),
    prisma.applicant.count({ where: { read: false } }),
    prisma.enquiry.count({ where: { read: false } }),
  ]);

  const contentTiles = [
    { label: "Hero Slides", value: heroCount, href: "/admin/hero", Icon: HiOutlinePhotograph },
    { label: "Services", value: serviceCount, href: "/admin/services", Icon: HiOutlineBriefcase },
    { label: "Portfolio", value: portfolioCount, href: "/admin/portfolio", Icon: HiOutlineCollection },
  ];

  const peopleTiles = [
    { label: "Team Members", value: teamCount, href: "/admin/team", Icon: HiOutlineUserGroup },
    { label: "Partners", value: partnerCount, href: "/admin/partners", Icon: HiOutlineLink },
    { label: "Testimonials", value: testimonialCount, href: "/admin/testimonials", Icon: HiOutlineChatAlt2 },
    { label: "Venues", value: venueCount, href: "/admin/venues", Icon: HiOutlineLocationMarker },
    { label: "Milestones", value: milestoneCount, href: "/admin/milestones", Icon: HiOutlineStar },
  ];

  const inboxTiles = [
    { label: "Unread Applicants", value: applicantCount, href: "/admin/applicants", Icon: HiOutlineMail, urgent: applicantCount > 0 },
    { label: "Unread Enquiries", value: enquiryCount, href: "/admin/enquiries", Icon: HiOutlinePhone, urgent: enquiryCount > 0 },
  ];

  const quickLinks = [
    { label: "Edit Site Text", href: "/admin/config", desc: "Headings, body copy, CTAs — organized by page", Icon: HiOutlinePencilAlt },
    { label: "Manage Services", href: "/admin/services", desc: "Home + services page cards", Icon: HiOutlineBriefcase },
    { label: "Stats & Counters", href: "/admin/stats", desc: "Animated number counters", Icon: HiOutlineChartBar },
    { label: "Careers", href: "/admin/careers", desc: "Careers page text & job roles", Icon: HiOutlineAcademicCap },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-100 font-display-lg">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome to the AVIM Events content management panel.</p>
      </div>

      {/* Inbox — show prominently if there are unread items */}
      {(applicantCount > 0 || enquiryCount > 0) && (
        <TileGroup title="Needs Attention" tiles={inboxTiles} />
      )}

      {/* Content stats */}
      <TileGroup title="Content" tiles={contentTiles} />

      {/* People & partners */}
      <TileGroup title="People & Partners" tiles={peopleTiles} />

      {/* Inbox (if no unread, show calmly at end) */}
      {applicantCount === 0 && enquiryCount === 0 && (
        <TileGroup title="Inbox" tiles={inboxTiles} />
      )}

      {/* Quick access */}
      <div>
        <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((l) => {
            const { Icon } = l;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="bg-[#0a0a0a] border border-gray-800/60 rounded-xl p-5 hover:border-amber-500/40 hover:bg-white/5 hover:shadow-[0_4px_20px_rgba(201,162,39,0.05)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-colors mb-4">
                  <Icon size={16} className="text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-200 font-medium">{l.label}</p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{l.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TileGroup({ title, tiles }) {
  return (
    <div className="mb-10">
      <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tiles.map((t) => {
          const { Icon } = t;
          return (
            <Link
              key={t.href + t.label}
              href={t.href}
              className={`bg-[#0a0a0a] border rounded-xl p-5 hover:bg-white/5 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(201,162,39,0.05)] transition-all duration-300 group relative ${
                t.urgent ? "border-amber-500/40 hover:border-amber-500/60 shadow-[0_0_15px_rgba(201,162,39,0.05)]" : "border-gray-800/60 hover:border-amber-500/30"
              }`}
            >
              {t.urgent && (
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              )}
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-colors">
                  <Icon size={16} className="text-gray-400 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
              <p className="text-3xl font-light text-gray-100">{t.value}</p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider font-medium mt-1">{t.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
