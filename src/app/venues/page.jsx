import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "Premier Venues | AVIM Events",
  description:
    "Discover our curated collection of palatial estates and elite 5-star & 4-star venue partners across India.",
};

const palatialVenues = [
  {
    id: 1,
    name: "Taj Palace",
    location: "New Delhi, India",
    tag: "Featured",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvr0gLdUTZGrSGlC5vGBFkGkp_6Fr6j9b_mlZIMWgnNTMnzQL2U0ypzUj4tFBPYq4bTluYvA4YhpCBli1r0eHAhxbSJvsl9JxBDoARacJOMQt3pKxAuye1DWh7SO6KCgR-HKJTZ6Basj6o76iI6Dx3wc1dCrRpsa9q_6kuFDgVhkG4_qLGgAfbvvsREJeX5N7P-UoU1vtaxHbnAVPczBEVyuF81GPpakFEewcwJqjgGMybVnx9bHh3VA",
  },
  {
    id: 2,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, India",
    tag: null,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTGr9Um_tJVmn5fsmLDktHUo1OBZanbCxGScrsDAOS36MQbij368D19XY5o87WCxVIpWB1Ftrbd05L9DhbimxZcz5s7hPvjVhLlZYkhw94LT6P4qU8nm6s8r6bIZYnxdbBkgOWO-59olvdKaWERKTWy7KHSz0RKRmANTdJoWTdZwqJQ6RXpq2D0cxNC7N4fG9MAER1kEyeFG7608BuddSnzMQ30I_igWNhfEHkiDU_gWZy4sq12rXn0w",
  },
];

const eliteCollections = [
  {
    id: 3,
    name: "Marriott International",
    location: "Jaipur, India",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDP5pNbw7l655d6gGj1I-giisddJvDIYzQJXzwArBTJcvHgDcsym4vsXYRjA9_AXBRiuxQdUVCpgiEj_D9ZC4ABLLqpMA6-95aHOcp_GfsrHI_1wyyqRl5KgwypQpIjSrJtmnflS22HYLuiT04RoeaMgVfZbGH7gy9rr3MmIVojFVWBWLJXywvjvaTVtsEhem-LAIFjJV8UmqMglalPO-BwQ1ZDZAtajmM_IZIejZOzbI51zmm6wVKgpQ",
  },
  {
    id: 4,
    name: "ITC Rajputana",
    location: "Jaipur, India",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfYfS99OJkPwaEGpoqjfkgLhYHI-11cysogZRdo2uD7hrMNWnejvQHrN4mZbovLj3_0HlV2hC8c-jssr25DtyrwRoAWTaRBiqH02PURNdG6Iz0lPlX299MX804xzIlWKzg7K2GFfTnWN8dhFYB5gOPxJML26za7NTdNDBzqm1YQajzcB3SgxhPEzk8sNUXZz2BcliYBn7dW8mesotNpV3ZGDL1rQ1d0vKqq8mRookEVlDzNF6XIAvzAw",
  },
  {
    id: 5,
    name: "Hyatt Regency",
    location: "Mumbai, India",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfR6h7F7dNkM3wKGSUA_VrZ3t_qejcWDJ1V3rPR1Un4HQlDjbatZUBYeeF7p_7u4bY12gqXg19J4sSEJFkeaLTPIZ1yAPlCGhr-dxOpfOkUIiR4T5yqJQs9wMmVTYLiPzuGKwWxzRglbc1Pva7lxd7BnjSVnA8cjwtlb_LWi-xA3bwu97kZmNjfg9iMLhtbu8aYbRwo-g6oYSVS6-RnCbu1DrOTWGYCZdP7MgVriqRA1GTJFDnot3gNQ",
  },
];

export default function VenuesPage() {
  return (
    <div className="bg-background text-on-background font-body-rt antialiased min-h-screen flex flex-col relative">
      <ScrollAnimation />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-24">
        {/* Header */}
        <header className="pt-8 pb-16 px-6 md:px-16 max-w-[1280px] mx-auto text-center scroll-reveal">
          <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 font-bold">
            Exquisite Settings
          </h1>
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
            Discover our curated collection of palatial estates and elite venue
            partners, handpicked to serve as the perfect canvas for your royal
            celebration.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-[1px] bg-tertiary-container" />
            <span className="material-symbols-outlined text-tertiary-container">
              star
            </span>
            <div className="w-16 h-[1px] bg-tertiary-container" />
          </div>
        </header>

        {/* Section 1: Palatial 5-Star Partners */}
        <section className="mb-24 px-6 md:px-16 max-w-[1280px] mx-auto scroll-reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-tertiary-container/30 pb-4">
            <div>
              <h2 className="font-headline-md text-3xl text-primary mb-2 font-bold">
                Palatial 5-Star Partners
              </h2>
              <p className="font-subheading-sm text-lg text-on-surface-variant">
                Unparalleled luxury and heritage.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {palatialVenues.map((venue) => (
              <article
                key={venue.id}
                className="bg-surface border border-gold shadow-ambient-gold flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-500 rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-80 jharokha-arch overflow-hidden p-4">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-[50%]"
                    alt={venue.name}
                    src={venue.image}
                  />
                  {venue.tag && (
                    <div className="absolute top-6 right-6 bg-primary-container text-tertiary-fixed font-label-caps text-xs px-3 py-1 rounded font-bold uppercase">
                      {venue.tag}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-md text-2xl text-primary mb-2 font-bold">
                    {venue.name}
                  </h3>
                  <p className="font-subheading-sm text-base text-on-surface-variant mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-container text-sm">
                      location_on
                    </span>
                    {venue.location}
                  </p>
                  <div className="mt-auto pt-6 border-t border-tertiary-container/30 flex justify-between items-center">
                    <Link
                      href="/contact"
                      className="font-label-caps text-xs text-tertiary-container uppercase tracking-widest font-semibold group-hover:text-primary transition-colors"
                    >
                      Inquire Venue Details
                    </Link>
                    <span className="material-symbols-outlined text-tertiary-container group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Elite 4-Star Collections */}
        <section className="mb-24 px-6 md:px-16 max-w-[1280px] mx-auto scroll-reveal">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-tertiary-container/30 pb-4">
            <div>
              <h2 className="font-headline-md text-3xl text-primary mb-2 font-bold">
                Elite Collections
              </h2>
              <p className="font-subheading-sm text-lg text-on-surface-variant">
                Contemporary elegance and refined service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eliteCollections.map((venue) => (
              <article
                key={venue.id}
                className="bg-surface border border-tertiary-container/30 group cursor-pointer p-4 hover:-translate-y-2 transition-all duration-500 rounded-lg shadow-md"
              >
                <div className="w-full h-64 overflow-hidden mb-6 relative rounded">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={venue.name}
                    src={venue.image}
                  />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-2">
                  {venue.name}
                </h3>
                <p className="font-subheading-sm text-sm text-on-surface-variant mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-sm">
                    location_on
                  </span>
                  {venue.location}
                </p>
                <div className="flex justify-between items-center border-t border-tertiary-container/20 pt-4">
                  <Link
                    href="/contact"
                    className="font-label-caps text-xs text-tertiary-container uppercase tracking-widest font-semibold group-hover:text-primary transition-colors"
                  >
                    Inquire Venue Details
                  </Link>
                  <span className="material-symbols-outlined text-tertiary-container text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
