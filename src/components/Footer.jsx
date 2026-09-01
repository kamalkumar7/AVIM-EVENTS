import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer({ config = {} }) {
  const socials = [
    { name: "Instagram", href: config.instagram_url || "https://www.instagram.com/avim-eventsgroup/" },
    { name: "LinkedIn", href: config.linkedin_url || "https://www.linkedin.com/company/avim-events-group/" },
    { name: "Facebook", href: config.facebook_url || "https://www.facebook.com/AVIM Eventsgroup" },
  ];

  const phone1 = config.phone_1 || "+91 82686 25482";
  const phone2 = config.phone_2 || "+91 73535 31961";
  const email = config.email || "theavimevents@gmail.com";
  const address = config.address || "ITI Layout, Hosapalaya, HSR Layout, Bengaluru, Karnataka 560068";
  const tagline = config.tagline || "Luxury hospitality and logistics execution for weddings, corporate events, tours & travel — with premium standards and precise operations.";
  const copyright = config.copyright || `© ${year} AVIM Events. All rights reserved.`;

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src="/images/avim-events/logos/main-logo.png"
            alt="AVIM Events"
            className="h-14 w-auto mb-3"
            style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.3))" }}
          />
          <p className="font-inter text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
            {tagline}
          </p>
          <div className="flex gap-4 text-sm font-inter">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-gv-gold transition-colors">
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">PAGES</h3>
          <ul className="space-y-3 font-inter text-sm">
            {[["About", "/about"], ["Services", "/services"], ["Blogs", "/blogs"], ["Contact", "/contact"], ["Terms of Service", "/terms"], ["Privacy Policy", "/privacy"]].map(([name, href]) => (
              <li key={name}>
                <Link href={href} className="group relative inline-block text-white/50 hover:text-gv-gold transition-colors pb-0.5">
                  {name}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gv-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">SERVICES</h3>
          <ul className="space-y-3 font-inter text-sm">
            {[["Hospitality", "/services"], ["Logistics", "/services"], ["Weddings", "/services"]].map(([name, href]) => (
              <li key={name}>
                <Link href={href} className="group relative inline-block text-white/50 hover:text-gv-gold transition-colors pb-0.5">
                  {name}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gv-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-inter text-[10px] text-gv-gold tracking-[0.25em] uppercase font-semibold mb-5">CONTACT</h3>
          <ul className="space-y-4 font-inter text-sm">
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Address</span>
              <span className="text-white/50 leading-relaxed text-xs">{address}</span>
            </li>
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Email</span>
              <a href={`mailto:${email}`} className="group relative inline-block text-white/50 hover:text-gv-gold transition-colors pb-0.5">
                {email}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gv-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            </li>
            <li>
              <span className="text-white/25 text-[9px] uppercase tracking-[0.2em] block mb-1">Phone</span>
              <div className="space-y-1 text-white/50 text-xs">
                <a href={`tel:${phone1.replace(/\s/g, "")}`} className="group relative inline-block hover:text-gv-gold transition-colors pb-0.5">
                  {phone1}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-gv-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
                {phone2 && (
                  <a href={`tel:${phone2.replace(/\s/g, "")}`} className="group relative inline-block hover:text-gv-gold transition-colors pb-0.5 mt-1">
                    {phone2}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gv-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </a>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] px-6 md:px-10 py-5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-inter text-xs text-white/30">{copyright}</p>
        {/* <p className="font-inter text-[10px] text-white/20 tracking-wide">Website designed, built and managed by Masriq NextTech Solutions</p> */}
      </div>
    </footer>
  );
}
