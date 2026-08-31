import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="font-fraunces text-xl text-white mb-3">Guestversity Group</h2>
          <p className="font-inter text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
            Luxury hospitality and logistics execution for weddings, corporate
            events, tours &amp; travel — with premium standards and precise
            operations.
          </p>
          {/* Social */}
          <div className="flex gap-4 text-sm font-inter">
            {[
              { name: "Instagram", href: "https://www.instagram.com/guestversitygroup/" },
              { name: "LinkedIn",  href: "https://www.linkedin.com/company/guestversity-group/" },
              { name: "Facebook",  href: "https://www.facebook.com/Guestversitygroup" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 hover:text-gv-gold transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">
            PAGES
          </h3>
          <ul className="space-y-3 font-inter text-sm">
            {[
              ["About",            "/about"],
              ["Services",         "/services"],
              ["Blogs",            "/blogs"],
              ["Contact",          "/contact"],
              ["Terms of Service", "/terms"],
              ["Privacy Policy",   "/privacy"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-white/50 hover:text-gv-gold transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">
            SERVICES
          </h3>
          <ul className="space-y-3 font-inter text-sm">
            {[
              ["Hospitality",   "/services"],
              ["Logistics",     "/services"],
              ["Weddings",      "/services"],
              ["EventMate‑AI",  "/eventmate"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="text-white/50 hover:text-gv-gold transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">
            CONTACT
          </h3>
          <ul className="space-y-4 font-inter text-sm">
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Address</span>
              <span className="text-white/50 leading-relaxed text-xs">
                11‑B, 2nd Cross, Shampura Main Rd, RT Nagar Post,
                Kaval Bairasandra, Bengaluru, Karnataka 560032
              </span>
            </li>
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Email</span>
              <a
                href="mailto:info@guestversity.com"
                className="text-white/50 hover:text-gv-gold transition-colors"
              >
                info@guestversity.com
              </a>
            </li>
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Phone</span>
              <div className="space-y-1 text-white/50 text-xs">
                <a href="tel:+918951097078" className="block hover:text-gv-gold transition-colors">
                  +91 89510 97078
                </a>
                <a href="tel:+918951797078" className="block hover:text-gv-gold transition-colors">
                  +91 89517 97078
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] px-6 md:px-10 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-inter text-xs text-white/30">
          © {year} Guestversity Group. All rights reserved.
        </p>
        <p className="font-inter text-[10px] text-white/20 tracking-wide">
          Website designed, built and managed by Masriq NextTech Solutions
        </p>
      </div>
    </footer>
  );
}
