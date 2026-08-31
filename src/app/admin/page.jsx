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
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome to the AVIM Events content management panel.</p>
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
        <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">Quick Access</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {quickLinks.map((l) => {
            const { Icon } = l;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group"
              >
                <Icon size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                <p className="text-sm text-gray-800 font-medium mt-2.5">{l.label}</p>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{l.desc}</p>
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
    <div className="mb-8">
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {tiles.map((t) => {
          const { Icon } = t;
          return (
            <Link
              key={t.href + t.label}
              href={t.href}
              className={`bg-white border rounded-xl p-4 hover:shadow-sm transition-all duration-200 group relative ${
                t.urgent ? "border-orange-200 hover:border-orange-300" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {t.urgent && (
                <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              )}
              <Icon size={18} className="text-gray-300 group-hover:text-gray-500 mb-3 transition-colors" />
              <p className="text-2xl font-semibold text-gray-900">{t.value}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{t.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
