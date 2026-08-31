const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database…");

  // ── HERO SLIDES ────────────────────────────────────────────────
  await prisma.heroSlide.createMany({
    data: [
      { imageUrl: "/images/guestversity/hero-1.jpg", order: 1, active: true },
      { imageUrl: "/images/guestversity/hero-2.jpg", order: 2, active: true },
      { imageUrl: "/images/guestversity/hero-3.jpg", order: 3, active: true },
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
      where: { id: i + 1 },
      update: {},
      create: { name: partners[i], order: i + 1, active: true },
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
      where: { id: i + 1 },
      update: {},
      create: { name: properties[i], order: i + 1, active: true },
    });
  }

  // ── TESTIMONIALS ───────────────────────────────────────────────
  await prisma.testimonial.createMany({
    data: [
      {
        author: "Arjun Mehta",
        quote: "Guestversity handled our entire wedding guest logistics — 800 guests across 3 days. Every movement was silent, precise, and stress-free.",
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
      {
        author: "Rohit Bansal",
        quote: "Corporate event with 400 delegates. Guestversity's command-center approach meant zero confusion, zero delays. Exceptional.",
        timeAgo: "1 month ago",
        order: 3,
        active: true,
      },
      {
        author: "Nadia Hussain",
        quote: "The team handled VIP guests for our product launch with such class — each person felt personally attended to. Remarkable service.",
        timeAgo: "5 months ago",
        order: 4,
        active: true,
      },
      {
        author: "Vikram Tata",
        quote: "High-profile political event with tight security requirements. Guestversity coordinated seamlessly with our security team. Outstanding.",
        timeAgo: "4 months ago",
        order: 5,
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
      { category: "SOCIAL", title: "Anniversary Celebration – Goa", order: 3, active: true },
      { category: "WEDDING", title: "Palace Wedding – Mysore", order: 4, active: true },
      { category: "CORPORATE", title: "Brand Launch – Mumbai", order: 5, active: true },
      { category: "WEDDING", title: "Destination Wedding – Dubai", order: 6, active: true },
    ],
    skipDuplicates: true,
  });

  // ── TEAM MEMBERS ───────────────────────────────────────────────
  const team = [
    { name: "Saqueeb Ahmed", role: "Branch Head", location: "Bangalore", description: "Leads Premium Hospitality Teams and On-Ground Guest Experience Operations with composed Coordination and Luxury-First Standards.", initials: "SA", order: 1 },
    { name: "Syed Azhar", role: "Branch Head", location: "Hyderabad", description: "Coordinates High-Volume Transfers with calm, Five-Star Guest Handling and Time-Bound Execution across Venues and Routes.", initials: "SZ", order: 2 },
    { name: "Raj Gowda", role: "Branch Head", location: "Goa", description: "Driving flawless Guest Experiences through Smart Hospitality Planning, seamless Logistics, and hands-on On-Ground Coordination.", initials: "RG", order: 3 },
    { name: "Mohammad Thoufiq", role: "Branch Head", location: "Mysore", description: "Delivers Royal Hospitality Execution aligned with Palace-Style Venues, Guest Routing Plans, and Live Command-Center Coordination.", initials: "MT", order: 4 },
    { name: "Anil S R", role: "Managing Partner", location: "Travel", description: "Leads Premium Travel Execution for Events, Coordinating Movement Logistics with Precision Scheduling and Guest-First Service.", initials: "AS", order: 5 },
    { name: "Armaan Shariff", role: "Project Incharge", location: "Production", description: "Drives Production Timelines, Vendor Coordination, and Execution Flow to deliver Premium Stagecraft and Seamless Show Operations.", initials: "AR", order: 6 },
    { name: "Sabiq Ahmed Khan", role: "Operations Incharge", location: "Hospitality", description: "Manages Hospitality Operations and Team Deployment with Disciplined Checklists, Guest Assistance Protocols, and Service Quality Control.", initials: "SK", order: 7 },
    { name: "Manish Singh", role: "Operations Incharge", location: "Hospitality", description: "Hospitality & Logistics Manager with 4+ years of Experience and over 50 successfully managed Events.", initials: "MS", order: 8 },
    { name: "Khalid Khan", role: "Operations Incharge", location: "Hospitality", description: "Oversees Hospitality Execution and Live Issue Resolution, ensuring Five-Star Guest Standards across Touchpoints and Venue Teams.", initials: "KK", order: 9 },
    { name: "Asiya Arzoo", role: "Marketing Executive", location: "", description: "Leads Brand Presence and Communication with Premium Positioning, ensuring every Touchpoint reflects Guestversity's Luxury Standards.", initials: "AA", order: 10 },
  ];
  await prisma.teamMember.createMany({ data: team.map((m) => ({ ...m, active: true })), skipDuplicates: true });

  // ── COUNTER STATS ──────────────────────────────────────────────
  await prisma.counterStat.createMany({
    data: [
      { section: "home", value: "1500", suffix: "+", label: "Total Events Managed", order: 1, active: true },
      { section: "home", value: "12", suffix: "+", label: "Years of Experience", order: 2, active: true },
      { section: "home", value: "27", suffix: "+", label: "Cities Pan India & Internationally", order: 3, active: true },
      { section: "home", value: "500", suffix: "+", label: "Luxury Weddings Managed", order: 4, active: true },
      { section: "about", value: "1500", suffix: "+", label: "Total Events Managed", order: 1, active: true },
      { section: "about", value: "12", suffix: "+", label: "Years of Experience", order: 2, active: true },
      { section: "about", value: "27", suffix: "+", label: "Cities Covered Pan India & Internationally", order: 3, active: true },
      { section: "about", value: "500", suffix: "+", label: "Luxury Weddings Managed", order: 4, active: true },
      { section: "about", value: "60", suffix: "+", label: "Corporate Collaborations", order: 5, active: true },
      { section: "about", value: "24", suffix: "/7", label: "Command-center Support", order: 6, active: true },
    ],
    skipDuplicates: true,
  });

  // ── MILESTONES ─────────────────────────────────────────────────
  await prisma.milestone.createMany({
    data: [
      { title: "Narendra Modi Event – GKVK", badge: "India", description: "A National-Level Milestone Engagement executed with High-Security coordination, Precision Guest movement, and Uncompromising On-Ground Discipline.", featured: true, order: 1, active: true },
      { title: "Dubai Work – Palazzo Versace", badge: "Dubai", description: "High-Profile International Engagement delivered with Luxury-Grade Hospitality Standards, Discreet VIP Handling, and Composed Execution.", featured: false, order: 2, active: true },
      { title: "Oman Engagement", badge: "Oman", description: "Cross-Border Guest Operations, Airport-to-Venue Routing, and On-Ground Hospitality Choreography aligned to International Expectations.", featured: false, order: 3, active: true },
      { title: "Sri Lanka High-Level Event", badge: "Sri Lanka", description: "A High-Level Platform managed with Disciplined Timelines, Stakeholder Protocol, and Premium Guest Experience Control.", featured: false, order: 4, active: true },
      { title: "EX CM Engagement", badge: "India", description: "Protocol-Sensitive Engagement delivered with Quiet Reliability, Coordinated Movement Planning, and Zero Disruption Operations.", featured: false, order: 5, active: true },
      { title: "Indian National Congress Event", badge: "India", description: "Large-Audience Guest and Logistics Operations delivered with Sharp Coordination, Controlled Access, and a Premium On-Ground Finish.", featured: false, order: 6, active: true },
      { title: "EventMate-AI Official Launch & Collaboration", badge: "India", description: "A Flagship Innovation Milestone bringing Technology and On-Ground Hospitality Execution together – designed for scale and Authority.", featured: false, order: 7, active: true },
    ],
    skipDuplicates: true,
  });

  // ── SERVICE CARDS ──────────────────────────────────────────────
  const guestHospBullets = JSON.stringify([
    "RSVP support including e-invites, telecalling, follow-ups, and ticket/ID collection",
    "Flight and surface travel bookings coordinated for guests and families",
    "Airport, railway, and bus station reception with welcome hampers and assisted transfers",
    "Coordination with travel agencies and cab drivers for smooth arrivals and departures",
    "Registration desks, helpdesks, and guidance at the venue throughout the event",
    "Gift and hamper packing, luggage assistance, and venue-to-venue shuttling for guests",
  ]);
  const logisticsBullets = JSON.stringify([
    "Airport transfers with buffer planning",
    "City movement and venue shuttles",
    "Driver briefing, control-room updates",
    "Contingencies for delays and reroutes",
  ]);
  await prisma.serviceCard.createMany({
    data: [
      { section: "home", title: "Guest Hospitality Management", description: "Concierge-Style Guest Handling, Hospitality Staffing, and On-Ground Protocols.", order: 1, active: true },
      { section: "home", title: "Logistics & Transportation", description: "Fleet Coordination, Routing, Airport Transfers, and Seamless Movement Operations.", order: 2, active: true },
      { section: "home", title: "Wedding Management", description: "Royal Wedding Logistics, Guest Journeys, Hospitality Lounge Setup & Coordination.", order: 3, active: true },
      { section: "home", title: "Corporate Events", description: "Professional, Brand-aligned Experiences for Conferences, Retreats, and Launches.", order: 4, active: true },
      { section: "home", title: "Tours & Travel", description: "Premium Vehicles, Group Movement Handling, and Curated Experiences.", order: 5, active: true },
      { section: "home", title: "On-ground Command Center", description: "Control-room Style Operations for Live Tracking, Timing, and Vendor Sync.", order: 6, active: true },
      { section: "services_main", badge: "✦ GUEST HOSPITALITY", title: "Guest Hospitality Management", description: "VIP handling, on-ground hospitality teams, concierge-style coordination, help desks, welcome rituals, and a five-star guest experience.", bullets: guestHospBullets, order: 1, active: true },
      { section: "services_main", badge: "⬚ LOGISTICS", title: "Logistics & Transportation", description: "Fleet management, routing, live coordination, VIP movement, and high-volume guest transfers — delivered with calm precision.", bullets: logisticsBullets, order: 2, active: true },
      { section: "services_more", badge: "◆", title: "Logistics & Hospitality", description: "RSVP management, welcome hampers, arrivals and departures, venue registration, helpdesks, and on-ground Production Execution Team support for smooth coordination of events.", order: 1, active: true },
      { section: "services_more", badge: "◇", title: "Tours N Travels", description: "Vehicles for wedding and corporate requirements, curated fleets, trained chauffeurs, and routing for guest, family, and VIP movements.", order: 2, active: true },
      { section: "services_more", badge: "⬒", title: "Designing N Printing", description: "Invites, event branding, signages, collaterals, and creative prints — where creativity starts and is finished with the best possible result.", order: 3, active: true },
    ],
    skipDuplicates: true,
  });

  // ── VENUE CARDS ────────────────────────────────────────────────
  await prisma.venueCard.createMany({
    data: [
      { name: "Taj Palace", location: "New Delhi, India", tag: "Featured", tier: "palatial", order: 1, active: true },
      { name: "The Oberoi Udaivilas", location: "Udaipur, India", tier: "palatial", order: 2, active: true },
      { name: "Marriott International", location: "Jaipur, India", tier: "elite", order: 1, active: true },
      { name: "ITC Rajputana", location: "Jaipur, India", tier: "elite", order: 2, active: true },
      { name: "Hyatt Regency", location: "Mumbai, India", tier: "elite", order: 3, active: true },
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
    { section: "hero_section", key: "headline_1", value: "Royal Guest" },
    { section: "hero_section", key: "headline_2", value: "Journeys." },
    { section: "hero_section", key: "subtext", value: "Guestversity Group — where precision meets elegance in every guest touchpoint." },
    { section: "hero_section", key: "cta_primary", value: "Plan your event" },
    { section: "hero_section", key: "cta_secondary", value: "Our services" },
    { section: "hero_section", key: "card_title", value: "Premium hospitality for royal experiences" },
    { section: "hero_section", key: "card_body", value: "Weddings · Corporate Events · Guest Management · Logistics" },

    // Tieup section
    { section: "tieup_section", key: "heading", value: "Trusted by India's Premium Hotel Partners" },

    // Properties section
    { section: "properties_section", key: "heading", value: "Premium Properties We Work With" },
    { section: "properties_section", key: "label", value: "OUR NETWORK" },

    // Counters section
    { section: "counters_section", key: "label", value: "TRACK RECORD" },
    { section: "counters_section", key: "heading", value: "Numbers that speak for themselves." },

    // Testimonials section
    { section: "testimonials_section", key: "label", value: "TESTIMONIALS" },
    { section: "testimonials_section", key: "heading", value: "What our clients say." },

    // Portfolio section
    { section: "portfolio_section", key: "label", value: "PORTFOLIO" },
    { section: "portfolio_section", key: "heading", value: "A selection of our finest work." },

    // Home about
    { section: "home_about", key: "label", value: "ABOUT" },
    { section: "home_about", key: "heading", value: "Luxury Hospitality meets Disciplined Logistics." },
    { section: "home_about", key: "body", value: "Guestversity Group is a detail-oriented organisation that implements operations and management for guest management, travel, designing, production, and wedding coordination across weddings and corporate events." },
    { section: "home_about", key: "btn_primary", value: "Talk to us" },
    { section: "home_about", key: "btn_secondary", value: "Learn more" },
    { section: "home_about", key: "tile1_icon", value: "◆" },
    { section: "home_about", key: "tile1_title", value: "Guest Handling" },
    { section: "home_about", key: "tile1_desc", value: "Airport-to-venue transitions, VIP protocols, concierge-grade care." },
    { section: "home_about", key: "tile2_icon", value: "◇" },
    { section: "home_about", key: "tile2_title", value: "Operational Clarity" },
    { section: "home_about", key: "tile2_desc", value: "Coordinated teams, timelines, vendor sync, and contingency planning." },
    { section: "home_about", key: "tile3_icon", value: "⬒" },
    { section: "home_about", key: "tile3_title", value: "Premium Execution" },
    { section: "home_about", key: "tile3_desc", value: "A five-star finish — elegant, composed, and unforgettable." },

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

    // About hero
    { section: "about_hero", key: "label", value: "ABOUT GUESTVERSITY" },
    { section: "about_hero", key: "subtext", value: "We are a Detailed Hospitality & Logistics Organisation that implements Operations and Management for Guest Management, Travel, Designing, Production, and Wedding Coordination for Weddings and Corporate Events — where Comfort, Timing, and Discretion define the experience." },

    // About leadership
    { section: "about_leadership", key: "label", value: "LEADERSHIP" },
    { section: "about_leadership", key: "name", value: "Mohammed Tabraiz Saheb" },
    { section: "about_leadership", key: "role", value: "Founder & Managing Director" },
    { section: "about_leadership", key: "desc", value: "Mohammed Tabraiz Saheb leads Guestversity Group with a Clear Vision to deliver Best Guest Management service in Logistics and Hospitality. Under his direction, the company has Built a Reputation for Planning, Coordination, Execution at large scale." },
    { section: "about_leadership", key: "vision", value: "To Care for Every Guest, once they arrive and leave with unforgettable Happy Memories." },

    // About team
    { section: "about_team", key: "label", value: "TEAM" },
    { section: "about_team", key: "heading", value: "Leadership & Execution Team" },
    { section: "about_team", key: "subtext", value: "Luxury standards. Operational precision. Regional strength." },

    // About stats
    { section: "about_stats", key: "label", value: "ACHIEVEMENTS" },
    { section: "about_stats", key: "heading", value: "Built for luxury. Proven at scale." },

    // Services hero
    { section: "services_hero", key: "label", value: "SERVICES" },
    { section: "services_hero", key: "subtext", value: "Our services are designed to feel effortless for guests — powered by four specialised sectors: Logistics & Hospitality, Tours N Travels, Production Execution Team, and Designing N Printing, all running on precise logistics discipline." },

    // Services parallax
    { section: "services_parallax", key: "label", value: "COMMAND-CENTER APPROACH" },
    { section: "services_parallax", key: "subtext", value: "A calm luxury surface — backed by a command-center approach underneath." },
    { section: "services_parallax", key: "btn_primary", value: "Build a plan" },
    { section: "services_parallax", key: "btn_secondary", value: "Read insights" },

    // Services more
    { section: "services_more", key: "label", value: "MORE SERVICES" },
    { section: "services_more", key: "heading", value: "Full-spectrum execution, every time." },

    // Services CTA
    { section: "services_cta", key: "label", value: "PROPOSAL" },
    { section: "services_cta", key: "heading", value: "Need an end-to-end plan?" },
    { section: "services_cta", key: "subtext", value: "Tell us your city, dates, and guest volume — we'll respond with a polished execution blueprint." },
    { section: "services_cta", key: "btn_text", value: "Enquire" },

    // Careers section
    { section: "careers_section", key: "label", value: "CAREERS" },
    { section: "careers_section", key: "heading", value: "Join the Legacy. Build the Future." },
    { section: "careers_section", key: "body_1", value: "Guestversity Group is where Luxury Hospitality meets Operational Excellence. If you're driven by detail, calm under Pressure, and obsessed with Premium Experiences — your next chapter starts here." },
    { section: "careers_section", key: "body_2", value: "Work Alongside teams that execute Royal Weddings, High-Profile Corporate Events, and large-scale Guest movement with Composure, Precision, and Class." },
    { section: "careers_section", key: "quote", value: "Where Hospitality Meets Opportunity." },
    { section: "careers_section", key: "careers_email", value: "careers@guestversitygroup.com" },
    { section: "careers_section", key: "job_roles", value: "Hospitality Executive\nGuest Coordination Lead\nLogistics Operations\nWedding / Events Executive\nField Supervisor\nGuest Relations / Concierge\nOperations Coordinator\nEvent Logistics Coordinator\nOther" },

    // Contact info
    { section: "contact_info", key: "address", value: "11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032" },
    { section: "contact_info", key: "phone_1", value: "+91 89510 97078" },
    { section: "contact_info", key: "phone_2", value: "+91 89517 97078" },
    { section: "contact_info", key: "email", value: "info@guestversity.com" },
    { section: "contact_info", key: "whatsapp_number", value: "918951097078" },

    // Gallery page
    { section: "gallery_page", key: "label", value: "GALLERY" },
    { section: "gallery_page", key: "heading", value: "A Tapestry of Celebrations" },
    { section: "gallery_page", key: "subtext", value: "Explore a curated collection of our most breathtaking events. Every frame captures the essence of impeccable hospitality." },

    // Venues page
    { section: "venues_page", key: "label", value: "VENUES" },
    { section: "venues_page", key: "heading", value: "Exquisite Settings" },
    { section: "venues_page", key: "subtext", value: "Discover our curated collection of palatial estates and elite venue partners, handpicked to serve as the perfect canvas for your royal celebration." },
    { section: "venues_page", key: "palatial_label", value: "PALATIAL 5-STAR PARTNERS" },
    { section: "venues_page", key: "palatial_heading", value: "Unparalleled luxury and heritage." },
    { section: "venues_page", key: "elite_label", value: "ELITE COLLECTIONS" },
    { section: "venues_page", key: "elite_heading", value: "Contemporary elegance and refined service." },

    // Footer
    { section: "footer", key: "tagline", value: "Luxury hospitality and logistics execution for weddings, corporate events, tours & travel — with premium standards and precise operations." },
    { section: "footer", key: "instagram_url", value: "https://www.instagram.com/guestversitygroup/" },
    { section: "footer", key: "linkedin_url", value: "https://www.linkedin.com/company/guestversity-group/" },
    { section: "footer", key: "facebook_url", value: "https://www.facebook.com/Guestversitygroup" },
    { section: "footer", key: "phone_1", value: "+91 89510 97078" },
    { section: "footer", key: "phone_2", value: "+91 89517 97078" },
    { section: "footer", key: "email", value: "info@guestversity.com" },
    { section: "footer", key: "address", value: "11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032" },

    // Site meta
    { section: "site_meta", key: "title", value: "Guestversity Group" },
    { section: "site_meta", key: "description", value: "Luxury Hospitality & Logistics for Weddings and Corporate Events" },
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
