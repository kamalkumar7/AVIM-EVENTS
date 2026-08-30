import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "Bespoke Services | AVIM Events",
  description:
    "Explore AVIM Events' luxury services: Royal Weddings, Milestone Birthdays, Brand Launches, and Exclusive Anniversaries.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background font-body-rt antialiased relative min-h-screen flex flex-col">
      <ScrollAnimation />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 text-center relative scroll-reveal">
          <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 pt-8 md:pt-16 font-bold">
            Bespoke Event Services
          </h1>
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Crafting unparalleled experiences steeped in royal grandeur and
            executed with flawless modern precision.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="h-px w-16 bg-tertiary-container" />
            <span className="material-symbols-outlined text-tertiary-container">
              flare
            </span>
            <div className="h-px w-16 bg-tertiary-container" />
          </div>
        </section>

        {/* Service 1: Royal Weddings */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative p-4">
              <div className="absolute inset-0 border border-tertiary-container/30 translate-x-4 translate-y-4 rounded-t-full" />
              <img
                className="w-full aspect-[4/5] object-cover jharokha-arch shadow-2xl relative z-10 rounded-t-full"
                alt="Royal Weddings"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2v1T09JTO08bm468VaR_8Vq1kBs1-f6a9IQ8ZB6TgK1YjbdZr1p3CGAmDknPwSbYcoF_KNuZuvTQeRq9wVKcnTQ5q4kGWLGCuXrIiVioCoPuiITVVS4SPnYSmEoYCdX-zYAsy8jqFXvX3ytIuOsEwiOYAPnY8G7n9_7MpJbWaQulXe6iYdqzlLcy6u4XX_RRVDrBRZZIXoRAsoijq3WbzTI6Pbtz6og7I5uU-_caJm2A3vQiKkgkHSw"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 md:pl-12">
              <div className="font-label-caps text-xs text-tertiary-container tracking-widest uppercase font-semibold">
                The Pinnacle of Grandeur
              </div>
              <h2 className="font-headline-md text-3xl md:text-4xl text-primary font-bold">
                Royal Weddings
              </h2>
              <p className="font-body-rt text-base text-on-surface-variant leading-relaxed">
                Experience a union celebrated with the opulence of royalty. From
                securing heritage palaces to curating menus fit for kings, our
                wedding services blend timeless traditions with contemporary
                luxury. Every detail is meticulously planned to create an
                unforgettable tapestry of love and celebration.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    Heritage Venue Sourcing & Management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    Bespoke Floral & Architectural Decor
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-primary transition-colors shimmer-btn font-semibold"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Signature Motif Divider */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex justify-center mb-24 opacity-50 scroll-reveal">
          <div className="w-full max-w-md h-[1px] bg-gold relative flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary-container bg-background px-4 absolute">
              local_florist
            </span>
          </div>
        </div>

        {/* Service 2: Milestone Birthdays */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 space-y-6 md:pr-12">
              <div className="font-label-caps text-xs text-tertiary-container tracking-widest uppercase font-semibold">
                Elegance in Every Epoch
              </div>
              <h2 className="font-headline-md text-3xl md:text-4xl text-primary font-bold">
                Milestone Celebrations
              </h2>
              <p className="font-body-rt text-base text-on-surface-variant leading-relaxed">
                Celebrate life&apos;s pivotal chapters with sophisticated flair.
                Whether it&apos;s an intimate gathering in a private courtyard or a
                lavish gala, we design environments that reflect the unique
                journey of the individual, ensuring the occasion is as monumental
                as the milestone itself.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    Curated Entertainment & Performances
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    Custom Culinary Experiences
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-primary transition-colors shimmer-btn font-semibold"
              >
                Request Consultation
              </Link>
            </div>
            <div className="order-2 relative p-4">
              <div className="absolute inset-0 border border-tertiary-container/30 -translate-x-4 translate-y-4 rounded-t-full" />
              <img
                className="w-full aspect-[4/5] object-cover jharokha-arch shadow-2xl relative z-10 rounded-t-full"
                alt="Milestone Celebrations"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmkVkPuCIBag_B_BVGhdwvJJia6quAD5sXd9MdnlCtIbVDLOpatKxxSt0VlksJ_FPK_mHNkeG4tGpFocdgNRe82kKKa8rrhDVVHkSs-W2hg-Zz5seghLS2eTuNeGYZHhMNfvKvRXiwjSy9dDSnY0MqOuTeKY_UFbe5SzW8AeKDzcRSXSoaw5C2tXpMTZgtpfOd7gAoDQchRHHvlpBm66lMD3gYbWBBkxFVO3fX5MZ4eCQ0JAkIET3eYg"
              />
            </div>
          </div>
        </section>

        {/* Service 3: Corporate Galas & Brand Launches */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative p-4">
              <div className="absolute inset-0 border border-tertiary-container/30 translate-x-4 translate-y-4 rounded-t-full" />
              <img
                className="w-full aspect-[4/5] object-cover jharokha-arch shadow-2xl relative z-10 rounded-t-full"
                alt="Brand Launches"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1qMKFzUJkWlGievMPDCcZMJ-AHc864sYXqzN4bjWCOHmQPwoio5AE8yiCqzrLe8Y9o7J_AbblsDQLM9RKRpnq0DgT2wT2VHrjlj60LYaS932OWS650i4n-PnjLuxQ4wl7hzaG7ZyBgIv49Iu6aRhuzreNG144HIfGpWeuO1fKns2oiVrFDwCgzkSOrtqbr2ynFQcr0rwfREy0s63RR-XiibNUqA69jnjlralkFu5X3iGclkwfaie4Og"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 md:pl-12">
              <div className="font-label-caps text-xs text-tertiary-container tracking-widest uppercase font-semibold">
                High-Impact Prestige
              </div>
              <h2 className="font-headline-md text-3xl md:text-4xl text-primary font-bold">
                Brand Launches & Galas
              </h2>
              <p className="font-body-rt text-base text-on-surface-variant leading-relaxed">
                Elevate your brand with dramatic stagecraft, bespoke luxury lighting,
                and high-profile guest hospitality. We transform corporate gatherings
                into memorable brand milestones that command prestige and reverence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    State-of-the-Art Stagecraft & Production
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary-container text-sm mt-1">
                    stars
                  </span>
                  <span className="font-subheading-sm text-lg">
                    VIP & Luxury Hospitality Management
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-primary transition-colors shimmer-btn font-semibold"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
