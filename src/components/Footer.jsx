import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-primary/20 bg-surface-container-low">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-16 py-16 max-w-[1280px] mx-auto">

          {/* Brand */}
          <div>
            <h2 className="font-display-lg text-2xl text-primary mb-4 font-bold">
              AVIM Events
            </h2>
            <p className="font-body-rt text-sm text-on-surface-variant mb-5 max-w-xs leading-relaxed">
              Crafted for Royalty. Elevating life&apos;s most precious moments
              with unparalleled luxury and precision.
            </p>
            <p className="font-label-caps text-[10px] text-on-surface-variant/50 tracking-[0.2em] uppercase">
              Based Across India &nbsp;·&nbsp; Built for Scale
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-label-caps text-[10px] text-primary tracking-[0.25em] uppercase mb-6">
              Pages
            </h3>
            <ul className="space-y-3 font-body-rt text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Venues", "/venues"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-label-caps text-[10px] text-primary tracking-[0.25em] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3 font-body-rt text-sm">
              {[
                "Royal Weddings",
                "Corporate Events",
                "Milestone Celebrations",
                "Brand Launches & Galas",
                "Destination Events",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-label-caps text-[10px] text-primary tracking-[0.25em] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-5 font-body-rt text-sm">
              <li>
                <span className="font-label-caps text-[9px] text-primary/50 uppercase tracking-[0.2em] block mb-1">
                  Address
                </span>
                <span className="text-on-surface-variant">
                  India — Pan-India Operations
                </span>
              </li>
              <li>
                <span className="font-label-caps text-[9px] text-primary/50 uppercase tracking-[0.2em] block mb-1">
                  Email
                </span>
                <a
                  href="mailto:hello@avimevents.com"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  hello@avimevents.com
                </a>
              </li>
              <li>
                <span className="font-label-caps text-[9px] text-primary/50 uppercase tracking-[0.2em] block mb-2">
                  Connect
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 px-6 md:px-16 py-6 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-body-rt text-xs text-on-surface-variant/50">
            © {new Date().getFullYear()} AVIM Events. All rights reserved.
          </p>
          <p className="font-label-caps text-[9px] text-on-surface-variant/30 tracking-[0.2em] uppercase">
            Crafted for Royalty.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Concierge on WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}
