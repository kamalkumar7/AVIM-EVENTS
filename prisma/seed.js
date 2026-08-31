const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database…");

  // ── HERO SLIDES ────────────────────────────────────────────────
  await prisma.heroSlide.createMany({
    data: [
      { imageUrl: "/images/avim-events/hero-1.jpg", order: 1, active: true },
      { imageUrl: "/images/avim-events/hero-2.jpg", order: 2, active: true },
      { imageUrl: "/images/avim-events/hero-3.jpg", order: 3, active: true },
    ],
    skipDuplicates: true,
  });

  // ── TIEUP PARTNERS ─────────────────────────────────────────────
  const partners = [
    "Lemon Tree Hotels", "OYO Rooms", "Treebo Hotels", "FabHotels",
    "Keys Hotels", "The Chancery Pavilion", "Royal Orchid Hotels",
    "Radisson Blu", "Novotel", "Vivanta by Taj",
  ];
  for (let i = 0; i < partners.length; i++) {
    await prisma.tieupPartner.upsert({
      where: { id: String(i + 1) },
      update: {},
      create: { id: String(i + 1), name: partners[i], order: i + 1, active: true },
    });
  }

  // ── PROPERTY LOGOS ─────────────────────────────────────────────
  const properties = [
    "Leonia Holistic Destination", "Taj Falaknuma Palace", "ITC Windsor",
    "The Lalit Ashok", "Sheraton Grand Bengaluru", "JW Marriott Bengaluru",
    "The Ritz-Carlton Bengaluru", "Shangri-La Bengaluru",
  ];
  for (let i = 0; i < properties.length; i++) {
    await prisma.propertyLogo.upsert({
      where: { id: String(i + 1) },
      update: {},
      create: { id: String(i + 1), name: properties[i], order: i + 1, active: true },
    });
  }

  // ── TESTIMONIALS ───────────────────────────────────────────────
  await prisma.testimonial.createMany({
    data: [
      {
        author: "Arjun Mehta",
        quote: "AVIM Events handled our entire wedding guest logistics — 800 guests across 3 days. Every movement was silent, precise, and stress-free.",
        timeAgo: "2 months ago",
        order: 1,
        active: true,
      },
      {
        author: "Priya Krishnamurthy",
        quote: "From airport pickups to farewell drops — every touchpoint was five-star. Our guests kept asking who organised the hospitality.",
        timeAgo: "3 months ago",
        order: 2,
        active: true,
      },
    ],
    skipDuplicates: true,
  });

  // ── PORTFOLIO ITEMS ────────────────────────────────────────────
  await prisma.portfolioItem.createMany({
    data: [
      { category: "WEDDING", title: "Royal Wedding – Bengaluru", order: 1, active: true },
      { category: "CORPORATE", title: "Corporate Gala – Hyderabad", order: 2, active: true },
    ],
    skipDuplicates: true,
  });

  // ── TEAM MEMBERS ───────────────────────────────────────────────
  const team = [
    { name: "Saqueeb Ahmed", role: "Branch Head", location: "Bangalore", description: "Leads Premium Hospitality Teams and On-Ground Guest Experience Operations.", initials: "SA", order: 1 },
    { name: "Syed Azhar", role: "Branch Head", location: "Hyderabad", description: "Coordinates High-Volume Transfers with calm, Five-Star Guest Handling.", initials: "SZ", order: 2 },
  ];
  await prisma.teamMember.createMany({ data: team.map((m) => ({ ...m, active: true })), skipDuplicates: true });

  // ── COUNTER STATS ──────────────────────────────────────────────
  await prisma.counterStat.createMany({
    data: [
      { section: "home", value: 1500, suffix: "+", label: "Total Events Managed", order: 1, active: true },
      { section: "home", value: 12, suffix: "+", label: "Years of Experience", order: 2, active: true },
      { section: "about", value: 1500, suffix: "+", label: "Total Events Managed", order: 1, active: true },
      { section: "about", value: 12, suffix: "+", label: "Years of Experience", order: 2, active: true },
    ],
    skipDuplicates: true,
  });

  // ── MILESTONES ─────────────────────────────────────────────────
  await prisma.milestone.createMany({
    data: [
      { title: "Narendra Modi Event – GKVK", badge: "India", description: "A National-Level Milestone Engagement executed with High-Security coordination.", featured: true, order: 1, active: true },
    ],
    skipDuplicates: true,
  });

  // ── SERVICE CARDS ──────────────────────────────────────────────
  await prisma.serviceCard.createMany({
    data: [
      { section: "home", title: "Guest Hospitality Management", description: "Concierge-Style Guest Handling, Hospitality Staffing, and On-Ground Protocols.", order: 1, active: true },
      { section: "home", title: "Logistics & Transportation", description: "Fleet Coordination, Routing, Airport Transfers, and Seamless Movement Operations.", order: 2, active: true },
    ],
    skipDuplicates: true,
  });

  // ── VENUE CARDS ────────────────────────────────────────────────
  await prisma.venueCard.createMany({
    data: [
      { name: "Taj Palace", location: "New Delhi, India", tag: "Featured", tier: "palatial", order: 1, active: true },
      { name: "Marriott International", location: "Jaipur, India", tier: "elite", order: 1, active: true },
    ],
    skipDuplicates: true,
  });

  // ── SITE CONFIG ────────────────────────────────────────────────
  const configs = [
    // Navbar
    { section: "navbar", key: "logo_tagline", value: "HOSPITALITY  •  LOGISTICS" },
    { section: "navbar", key: "cta_text", value: "Enquire" },
    { section: "navbar", key: "whatsapp_number", value: "918951097078" },

    // Hero section
    { section: "hero_section", key: "badge", value: "LUXURY HOSPITALITY & LOGISTICS" },
    { section: "hero_section", key: "headline_1", value: "Redefining Hospitality" },
    { section: "hero_section", key: "headline_2", value: "& Logistics Excellence" },
    { section: "hero_section", key: "subtext", value: "AVIM Events delivers Five-Star Guest Experiences, Precision Logistics, and Royal Wedding & Corporate Event Execution — bringing Guest Management, Travel, Designing, and Production under one Disciplined, 24/7 Hospitality Team." },
    { section: "hero_section", key: "cta_primary", value: "Explore Services" },
    { section: "hero_section", key: "cta_secondary", value: "Our Story" },
    { section: "hero_section", key: "card_title", value: "Signature Execution" },
    { section: "hero_section", key: "card_body", value: "A polished operating system for luxury events — from arrival to farewell, every touchpoint is choreographed." },

    // Home about
    { section: "home_about", key: "label", value: "ABOUT" },
    { section: "home_about", key: "heading", value: "Luxury Hospitality meets Disciplined Logistics." },
    { section: "home_about", key: "body", value: "AVIM Events is a detail-oriented organisation that implements operations and management for guest management, travel, designing, production, and wedding coordination across weddings and corporate events." },
    { section: "home_about", key: "btn_primary", value: "Talk to us" },
    { section: "home_about", key: "btn_secondary", value: "Learn more" },

    // Home features
    { section: "home_features", key: "tile1_icon", value: "◆" },
    { section: "home_features", key: "tile1_title", value: "Guest Handling" },
    { section: "home_features", key: "tile1_desc", value: "Airport-to-venue transitions, VIP protocols, concierge-grade care." },
    { section: "home_features", key: "tile2_icon", value: "◇" },
    { section: "home_features", key: "tile2_title", value: "Operational Clarity" },
    { section: "home_features", key: "tile2_desc", value: "Coordinated teams, timelines, vendor sync, and contingency planning." },
    { section: "home_features", key: "tile3_icon", value: "⬒" },
    { section: "home_features", key: "tile3_title", value: "Premium Execution" },
    { section: "home_features", key: "tile3_desc", value: "A five-star finish — elegant, composed, and unforgettable." },

    // Home services
    { section: "home_services", key: "label", value: "SERVICES" },
    { section: "home_services", key: "heading", value: "High-end experiences. High-performance logistics." },
    { section: "home_services", key: "view_all_link", value: "View all services →" },

    // Home CTA
    { section: "home_cta", key: "heading", value: "Ready to deliver a royal experience?" },
    { section: "home_cta", key: "body", value: "Let's build a flawless guest journey — elegant on the surface, powerful behind the scenes." },
    { section: "home_cta", key: "btn_text", value: "Contact Us" },

    // Tieup section
    { section: "tieup_section", key: "heading", value: "Trusted by India's Premium Hotel Partners" },
    { section: "tieup_section", key: "subtitle", value: "A curated set of tieups and partners." },

    // Properties section
    { section: "properties_section", key: "heading", value: "Premium Properties We Work With" },
    { section: "properties_section", key: "subtitle", value: "Trusted by some of the most prestigious hospitality brands." },

    // Counters section
    { section: "counters_section", key: "label", value: "TRACK RECORD" },
    { section: "counters_section", key: "heading", value: "Numbers that speak for themselves." },

    // Testimonials section
    { section: "testimonials_section", key: "label", value: "TESTIMONIALS" },
    { section: "testimonials_section", key: "heading", value: "What our clients say." },

    // Portfolio section
    { section: "portfolio_section", key: "label", value: "PORTFOLIO" },
    { section: "portfolio_section", key: "heading", value: "A selection of our finest work." },
    { section: "portfolio_section", key: "subtitle", value: "Moments We've Crafted." },

    // About hero
    { section: "about_hero", key: "label", value: "ABOUT AVIM EVENTS" },
    { section: "about_hero", key: "heading", value: "We are a Detailed Hospitality & Logistics Organisation" },
    { section: "about_hero", key: "body", value: "We are a Detailed Hospitality & Logistics Organisation that implements Operations and Management for Guest Management, Travel, Designing, Production, and Wedding Coordination for Weddings and Corporate Events — where Comfort, Timing, and Discretion define the experience." },

    // About leadership
    { section: "about_leadership", key: "label", value: "LEADERSHIP" },
    { section: "about_leadership", key: "name", value: "Mohammed Tabraiz Saheb" },
    { section: "about_leadership", key: "title", value: "Founder & Managing Director" },
    { section: "about_leadership", key: "body", value: "Mohammed Tabraiz Saheb leads AVIM Events with a Clear Vision to deliver Best Guest Management service in Logistics and Hospitality. Under his direction, the company has Built a Reputation for Planning, Coordination, Execution at large scale." },
    { section: "about_leadership", key: "vision_label", value: "Our Vision" },
    { section: "about_leadership", key: "vision_quote", value: "To Care for Every Guest, once they arrive and leave with unforgettable Happy Memories." },
    { section: "about_leadership", key: "photo_url", value: "/images/leadership.jpg" },

    // About team
    { section: "about_team", key: "label", value: "TEAM" },
    { section: "about_team", key: "heading", value: "Leadership & Execution Team" },
    { section: "about_team", key: "subtitle", value: "Luxury standards. Operational precision. Regional strength." },

    // About stats
    { section: "about_stats", key: "label", value: "ACHIEVEMENTS" },
    { section: "about_stats", key: "heading", value: "Built for luxury. Proven at scale." },
    { section: "about_stats", key: "milestones_label", value: "MILESTONES" },
    { section: "about_stats", key: "milestones_heading", value: "Our Key Achievements" },
    { section: "about_stats", key: "milestones_subtitle", value: "Significant events we have managed." },

    // Services hero
    { section: "services_hero", key: "label", value: "SERVICES" },
    { section: "services_hero", key: "heading", value: "Our Expertise" },
    { section: "services_hero", key: "body", value: "Our services are designed to feel effortless for guests — powered by four specialised sectors: Logistics & Hospitality, Tours N Travels, Production Execution Team, and Designing N Printing, all running on precise logistics discipline." },

    // Services parallax
    { section: "services_parallax", key: "label", value: "COMMAND-CENTER APPROACH" },
    { section: "services_parallax", key: "heading", value: "Command Center operations" },
    { section: "services_parallax", key: "body", value: "A calm luxury surface — backed by a command-center approach underneath." },
    { section: "services_parallax", key: "btn_primary", value: "Build a plan" },
    { section: "services_parallax", key: "btn_secondary", value: "Read insights" },

    // Services more
    { section: "services_more", key: "label", value: "MORE SERVICES" },
    { section: "services_more", key: "heading", value: "Full-spectrum execution, every time." },

    // Services CTA
    { section: "services_cta", key: "label", value: "PROPOSAL" },
    { section: "services_cta", key: "heading", value: "Need an end-to-end plan?" },
    { section: "services_cta", key: "body", value: "Tell us your city, dates, and guest volume — we'll respond with a polished execution blueprint." },
    { section: "services_cta", key: "btn_text", value: "Enquire" },

    // Careers section
    { section: "careers_section", key: "label", value: "CAREERS" },
    { section: "careers_section", key: "heading", value: "Join the Legacy. Build the Future." },
    { section: "careers_section", key: "body_1", value: "AVIM Events is where Luxury Hospitality meets Operational Excellence. If you're driven by detail, calm under Pressure, and obsessed with Premium Experiences — your next chapter starts here." },
    { section: "careers_section", key: "body_2", value: "Work Alongside teams that execute Royal Weddings, High-Profile Corporate Events, and large-scale Guest movement with Composure, Precision, and Class." },
    { section: "careers_section", key: "quote", value: "Where Hospitality Meets Opportunity." },
    { section: "careers_section", key: "careers_email", value: "careers@avim-eventsgroup.com" },
    { section: "careers_section", key: "job_roles", value: "Hospitality Executive\nGuest Coordination Lead\nLogistics Operations\nWedding / Events Executive\nField Supervisor\nGuest Relations / Concierge\nOperations Coordinator\nEvent Logistics Coordinator\nOther" },
    { section: "careers_section", key: "photo_url", value: "/images/career_1.jpg" },

    // Contact info
    { section: "contact_info", key: "heading", value: "Contact Us" },
    { section: "contact_info", key: "subheading", value: "We are here to help." },
    { section: "contact_info", key: "address", value: "11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032" },
    { section: "contact_info", key: "phone_1", value: "+91 89510 97078" },
    { section: "contact_info", key: "phone_2", value: "+91 89517 97078" },
    { section: "contact_info", key: "email", value: "info@avim-events.com" },
    { section: "contact_info", key: "hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
    { section: "contact_info", key: "whatsapp_number", value: "918951097078" },

    // Gallery page
    { section: "gallery_page", key: "heading", value: "A Tapestry of Celebrations" },
    { section: "gallery_page", key: "body", value: "Explore a curated collection of our most breathtaking events. Every frame captures the essence of impeccable hospitality." },

    // Venues page
    { section: "venues_page", key: "heading", value: "Exquisite Settings" },
    { section: "venues_page", key: "body", value: "Discover our curated collection of palatial estates and elite venue partners, handpicked to serve as the perfect canvas for your royal celebration." },
    { section: "venues_page", key: "palatial_heading", value: "Unparalleled luxury and heritage." },
    { section: "venues_page", key: "palatial_subtitle", value: "Palatial partners" },
    { section: "venues_page", key: "elite_heading", value: "Contemporary elegance and refined service." },
    { section: "venues_page", key: "elite_subtitle", value: "Elite partners" },

    // Footer
    { section: "footer", key: "tagline", value: "Luxury hospitality and logistics execution for weddings, corporate events, tours & travel — with premium standards and precise operations." },
    { section: "footer", key: "address", value: "11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032" },
    { section: "footer", key: "email", value: "info@avim-events.com" },
    { section: "footer", key: "phone_1", value: "+91 89510 97078" },
    { section: "footer", key: "phone_2", value: "+91 89517 97078" },
    { section: "footer", key: "instagram_url", value: "https://www.instagram.com/avim-eventsgroup/" },
    { section: "footer", key: "linkedin_url", value: "https://www.linkedin.com/company/avim-events-group/" },
    { section: "footer", key: "facebook_url", value: "https://www.facebook.com/AVIM Eventsgroup" },
    { section: "footer", key: "copyright", value: "© 2026 AVIM Events. All rights reserved." },

    // Site meta
    { section: "site_meta", key: "site_title", value: "AVIM Events" },
    { section: "site_meta", key: "meta_description", value: "Luxury Hospitality & Logistics for Weddings and Corporate Events" },
  ];

  for (const cfg of configs) {
    await prisma.siteConfig.upsert({
      where: { section_key: { section: cfg.section, key: cfg.key } },
      update: { value: cfg.value },
      create: cfg,
    });
  }

  console.log("✓ Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
