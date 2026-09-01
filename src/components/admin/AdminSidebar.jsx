"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  HiOutlineViewGrid,
  HiOutlinePencilAlt,
  HiOutlinePhotograph,
  HiOutlineBriefcase,
  HiOutlineCollection,
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineLink,
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineAcademicCap,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLogout,
  HiOutlineChevronLeft,
  HiOutlineMenuAlt2,
} from "react-icons/hi";

const NAV = [
  { href: "/admin", label: "Dashboard", Icon: HiOutlineViewGrid },

  { label: "Content", divider: true },
  { href: "/admin/config", label: "Site Text", Icon: HiOutlinePencilAlt },
  { href: "/admin/hero", label: "Hero Slides", Icon: HiOutlinePhotograph },
  { href: "/admin/services", label: "Services", Icon: HiOutlineBriefcase },
  { href: "/admin/portfolio", label: "Portfolio", Icon: HiOutlineCollection },

  { label: "People & Partners", divider: true },
  { href: "/admin/team", label: "Team", Icon: HiOutlineUserGroup },
  { href: "/admin/testimonials", label: "Testimonials", Icon: HiOutlineChatAlt2 },
  { href: "/admin/partners", label: "Partners", Icon: HiOutlineLink },
  { href: "/admin/properties", label: "Properties", Icon: HiOutlineOfficeBuilding },

  { label: "Pages", divider: true },
  { href: "/admin/venues", label: "Venues", Icon: HiOutlineLocationMarker },
  { href: "/admin/stats", label: "Stats & Counters", Icon: HiOutlineChartBar },
  { href: "/admin/milestones", label: "Milestones", Icon: HiOutlineStar },
  { href: "/admin/careers", label: "Careers", Icon: HiOutlineAcademicCap },

  { label: "Inbox", divider: true },
  { href: "/admin/applicants", label: "Applicants", Icon: HiOutlineMail },
  { href: "/admin/enquiries", label: "Enquiries", Icon: HiOutlinePhone },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside
      className={`${collapsed ? "w-[68px]" : "w-60"} min-h-screen bg-white border-r border-gray-200 flex flex-col shrink-0 transition-all duration-300`}
    >
      {/* Brand header */}
      <div className="px-4 py-4 border-b border-gray-100 flex items-center justify-between gap-2">
        {collapsed ? (
          <img
            src="/images/avim-events/logos/logo_a_small.png"
            alt="AVIM Events"
            className="h-8 w-8 object-contain rounded-full shrink-0"
          />
        ) : (
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/images/avim-events/logos/logo_a_small.png"
              alt="AVIM Events"
              className="h-9 w-9 object-contain rounded-full shrink-0"
            />
            <div className="min-w-0">
              <p className="text-gray-900 font-semibold text-sm tracking-wide">AVIM Events</p>
              <p className="text-gray-400 text-[10px] mt-0.5">Admin Panel</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setCollapsed((c) => !c)}
          className="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-100 transition-colors shrink-0"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <HiOutlineMenuAlt2 size={16} /> : <HiOutlineChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 overflow-y-auto admin-scrollbar">
        {NAV.map((item, i) => {
          if (item.divider) {
            if (collapsed) {
              return <div key={i} className="my-3 mx-3 border-t border-gray-100" />;
            }
            return (
              <p key={i} className="px-4 pt-5 pb-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                {item.label}
              </p>
            );
          }
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href + "/"));
          const { Icon } = item;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`flex items-center gap-2.5 mx-2 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 ${
                active
                  ? "bg-gray-900 text-white font-medium shadow-sm"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Icon size={16} className={`shrink-0 ${active ? "text-white" : "text-gray-400"}`} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-gray-100">
        <button
          onClick={logout}
          className={`w-full text-left text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-red-50 ${collapsed ? "justify-center" : ""}`}
          title="Sign out"
        >
          <HiOutlineLogout size={15} />
          {!collapsed && "Sign out"}
        </button>
      </div>

      <style jsx>{`
        .admin-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .admin-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .admin-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.08);
          border-radius: 3px;
        }
        .admin-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0,0,0,0.15);
        }
      `}</style>
    </aside>
  );
}
