"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { label: "─ Content", divider: true },
  { href: "/admin/config", label: "Site Text", icon: "✎" },
  { href: "/admin/hero", label: "Hero Slides", icon: "◧" },
  { href: "/admin/services", label: "Services", icon: "◈" },
  { href: "/admin/team", label: "Team", icon: "◉" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "❝" },
  { href: "/admin/portfolio", label: "Portfolio", icon: "▣" },
  { href: "/admin/gallery", label: "Gallery", icon: "◫" },
  { href: "/admin/venues", label: "Venues", icon: "⬡" },
  { href: "/admin/stats", label: "Stats & Counters", icon: "◎" },
  { href: "/admin/milestones", label: "Milestones", icon: "★" },
  { href: "/admin/partners", label: "Partners (Marquee)", icon: "⬟" },
  { href: "/admin/properties", label: "Properties", icon: "⬠" },
  { href: "/admin/careers", label: "Careers", icon: "◌" },
  { label: "─ Inbox", divider: true },
  { href: "/admin/applicants", label: "Applicants", icon: "✉" },
  { href: "/admin/enquiries", label: "Enquiries", icon: "✆" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside className="w-60 min-h-screen bg-gray-950 border-r border-gray-800 flex flex-col shrink-0">
      <div className="px-5 py-5 border-b border-gray-800">
        <p className="text-amber-400 font-bold text-sm tracking-widest uppercase">AVIM Admin</p>
        <p className="text-gray-600 text-[10px] mt-0.5">Content Management</p>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {NAV.map((item, i) => {
          if (item.divider) {
            return <p key={i} className="px-5 pt-5 pb-1 text-[10px] text-gray-600 uppercase tracking-widest font-semibold">{item.label.replace("─ ", "")}</p>;
          }
          const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${active ? "bg-amber-500/10 text-amber-400 border-r-2 border-amber-400" : "text-gray-400 hover:text-white hover:bg-gray-800/50"}`}
            >
              <span className="text-xs w-4 text-center">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-gray-800">
        <button onClick={logout} className="w-full text-left text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center gap-2">
          <span>⏻</span> Sign out
        </button>
      </div>
    </aside>
  );
}
