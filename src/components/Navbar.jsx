"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Venues", href: "/venues" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-tertiary-container/30">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link
          href="/"
          className="font-display-lg text-2xl md:text-3xl text-primary tracking-tighter cursor-pointer font-bold"
        >
          AVIM Events
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-label-caps text-xs tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-secondary pb-1 transition-all"
                    : "text-on-surface-variant hover:text-primary transition-colors pb-1"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase px-6 py-3 rounded scale-95 active:scale-90 transition-transform shimmer-btn font-semibold"
        >
          Plan Your Event
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-tertiary-container/30 px-6 py-4 flex flex-col gap-4 font-label-caps text-xs tracking-widest uppercase shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={
                  isActive
                    ? "text-primary font-bold border-l-4 border-secondary pl-3 py-1"
                    : "text-on-surface-variant hover:text-primary pl-3 py-1 transition-colors"
                }
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase px-6 py-3 rounded shimmer-btn font-semibold"
          >
            Plan Your Event
          </Link>
        </div>
      )}
    </nav>
  );
}
