"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs",    href: "/blogs" },
  { name: "Contact",  href: "/contact" },
];

export default function Navbar({ config = {} }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/35 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-3.5 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/images/avim-events/logos/logo_a_small.png"
            alt="AVIM Events"
            className="h-12 sm:h-14 w-auto"
            style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.4))" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 font-inter text-[13px]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-0.5 transition-colors duration-200 nav-link-gv ${
                  active ? "text-gv-gold" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-gv-gold" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex gold-btn px-6 py-2.5 text-xs"
        >
          {config.cta_text || "Enquire"}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
        >
          <span className="block h-px w-6 bg-white transition-transform duration-200" />
          <span
            className="block h-px bg-gv-gold transition-transform duration-200"
            style={{ width: "1rem" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="lg:hidden mx-4 mb-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
          style={{ animation: "heroLineReveal 240ms cubic-bezier(.2,.8,.2,1) forwards" }}
        >
          <div className="flex flex-col px-5 py-5 gap-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-inter text-sm py-1 border-l-2 pl-3 transition-colors ${
                    active
                      ? "text-gv-gold border-gv-gold"
                      : "text-white/70 border-transparent hover:text-white hover:border-white/20"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="gold-btn text-center py-3 mt-2 text-xs"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
