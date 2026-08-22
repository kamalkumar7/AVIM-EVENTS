import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="w-full mt-24 border-t border-tertiary-container/30 bg-surface-container-highest">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16 py-16 max-w-[1280px] mx-auto">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display-lg text-2xl md:text-3xl text-primary mb-4 font-bold">
              AVIM Events
            </h2>
            <p className="font-body-rt text-base text-on-surface-variant mb-6 max-w-md">
              Crafted for Royalty. Elevating life's most precious moments with
              unparalleled luxury and precision.
            </p>
            <p className="font-body-rt text-sm text-on-surface-variant">
              © {new Date().getFullYear()} AVIM Events. Crafted for Royalty.
            </p>
          </div>

          <div>
            <h3 className="font-label-caps text-xs text-primary tracking-widest uppercase mb-4 font-semibold">
              Explore
            </h3>
            <ul className="space-y-3 font-body-rt text-sm">
              <li>
                <Link
                  href="/"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/venues"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-label-caps text-xs text-primary tracking-widest uppercase mb-4 font-semibold">
              Connect
            </h3>
            <ul className="space-y-3 font-body-rt text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp / Concierge Contact Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Concierge on WhatsApp"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 hover-lift"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </>
  );
}
