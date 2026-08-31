# Guestversity Group — Homepage Content & Animation Reference

> [!NOTE]
> Source: [https://www.guestversity.com](https://www.guestversity.com)
> This document captures **all text content, layout structure, design system, and animation effects** from the Guestversity homepage for replication.

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#D4AF37` | Primary accent, gradients, CTAs |
| `--gold-soft` | `#D8BC5A` | Light gold variant |
| `gold-400` | `#D8BC5A` | — |
| `gold-500` | `#D4AF37` | Primary gold |
| `gold-600` | `#B9922B` | Dark gold |
| `--ink` | `#050505` | Page background |
| `ink-950` | `#050505` | Deepest black |
| `ink-900` | `#0A0A0C` | — |
| `ink-850` | `#0F1014` | — |
| `--navy` | `#0C1F3F` | Complementary accent (royal navy) |

### Gold Gradient Text
```css
.text-gradient-gold {
  background: linear-gradient(92deg, #FFF6CF 0%, #D4AF37 28%, #FFE9A6 55%, #B9922B 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### Typography
- **Serif (Display)**: `Fraunces` (optical size 9–144, weights 300/400/600)
- **Sans (Body)**: `Inter` (weights 300/400/500/600)
- **Google Fonts Import**: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300,400,600&family=Inter:wght@300;400;500;600&display=swap`

### Styling Framework
- **Tailwind CSS (CDN)** with custom config extending colors, fonts, and box-shadows
- **Custom CSS** via `style.css`

---

## 📐 Page Structure (Section by Section)

---

### 1. NAVBAR (Sticky Header)

**Layout**: Sticky top, glassmorphism blur, `max-w-7xl` container
**Background**: `bg-black/35 backdrop-blur-xl border-b border-white/10`

#### Logo
- Image: `./assets/GG NEW.png` (height: `h-12 sm:h-14`, with gold drop-shadow)
- Text: **"Guestversity Group"** (serif, 15px)
- Tagline: **"HOSPITALITY • LOGISTICS"** (tracking-[0.24em], text-white/60)

#### Navigation Links (Desktop)
| Link | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| EventMate‑AI | `/eventmate` |
| Services | `/services` |
| Blogs | `/blogs` |
| Contact | `/contact` |

#### CTA Button
- **"Enquire"** → `/contact` (gold button, hidden on mobile)

#### Mobile Menu
- Hamburger toggle (2-line burger, second line gold-colored, shorter)
- Dropdown with glassmorphism: `rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl`
- Same links as desktop + full-width "Enquire Now" CTA

---

### 2. HERO SECTION

**Min-height**: `92vh`
**Theme**: `section-theme-black texture-noise diagonal-divider`

#### Background Layers (bottom to top)
1. **Cinematic Image Film** — Auto cross-fading background images (6 images cycle every 6.5s)
   - Images: `1.jpg`, `3.png`, `4.webp`, `5.jpg`, `6.jpg`, `7.png` (from `./assets/`)
   - Cross-fade: `transition: opacity 2400ms cubic-bezier(.2,.8,.2,1)`
   - Active image: `opacity: 0.16` + Ken Burns zoom: `scale(1.00) → scale(1.05)` over 8s
2. **Dark overlay** for readability (linear + radial gradients + `backdrop-filter: blur(2px)`)
3. **Aurora gradient** — animated shifting background (`auroraShift` keyframes, 12s infinite)
4. **Drifting blurred blobs** — gold + navy, `blobDrift` animation (18s infinite)
5. **Thin animated lines** — gold gradient lines, `lineFloat` animation (12.5s infinite)

#### Left Column (7/12 grid)
- **Badge pill**: `HOSPITALITY • LOGISTICS • EVENTS` (rounded-full, border-gold, bg-white/5)
- **Headline** (staggered line reveal):
  - Line 1: **"Redefining Hospitality"** (gold gradient text)
  - Line 2: **"& Logistics Excellence"** (white)
  - Font: `font-serif text-4xl sm:text-6xl`
- **Subtext**: *"Guestversity Group delivers Five-Star Guest Experiences, Precision Logistics, and Royal Wedding & Corporate Event Execution — bringing Guest Management, Travel, Designing, and Production under one Disciplined, 24/7 Hospitality Team."*
- **CTA Buttons**:
  - **"Explore Services"** → `/services` (gold button with glow pulse)
  - **"Our Story"** → `/about` (ghost button)
- **Tags**: `• Wedding Management` `• Corporate-grade` (with gold dots)

#### Right Column (5/12 grid) — Glassmorphism Card
- **Title**: "Signature Execution"
- **Badge**: `PREMIUM` (gold, tracking-[0.22em])
- **Description**: *"A polished operating system for luxury events — from arrival to farewell, every touchpoint is choreographed."*
- **Stat Grid** (2×2):
  | Stat | Label |
  |------|-------|
  | White-glove | Guest Experience |
  | Precision | Logistics |
  | Royal | Weddings |
  | Composed | Corporate |
- **Footer**: "Based across India • Built for scale" + "View impact →"
- **Watermark**: Logo background image at `opacity: 0.14`

#### Scroll Indicator
- Animated dot inside pill: `scrollDot` animation (1.65s infinite)
- Label: **"SCROLL"** (tracking-[0.34em])

---

### 3. ABOUT PREVIEW

**Theme**: `section-theme-black diagonal-divider`
**Padding**: `py-18 sm:py-24`

#### Left Column (5/12)
- **Kicker**: `ABOUT`
- **Heading**: "Luxury Hospitality meets Disciplined Logistics."

#### Right Column (7/12) — Glass Card
- **Body**: *"Guestversity Group is a detail-oriented organisation that implements operations and management for guest management, travel, designing, production, and wedding coordination across weddings and corporate events. With over 12+ years of experience, we manage guests, movement, and moments seamlessly while preserving a calm, royal experience."*
- **CTAs**: "Learn more" (ghost) + "Talk to us" (gold)

#### Feature Tiles (3-column grid)

| Icon | Title | Description |
|------|-------|-------------|
| ◆ | Guest Handling | Airport-to-venue transitions, VIP protocols, concierge-grade care. |
| ◇ | Operational Clarity | Coordinated teams, timelines, vendor sync, and contingency planning. |
| ⬒ | Premium Execution | A five-star finish — elegant, composed, and unforgettable. |

---

### 4. SERVICES HIGHLIGHTS

**Theme**: `section-theme-charcoal texture-noise diagonal-divider`

#### Header
- **Kicker**: `SERVICES`
- **Heading**: "High-end experiences. High-performance logistics."
- **CTA**: "View all services" → `/services`

#### Service Cards (3-column grid)

| # | Title | Description |
|---|-------|-------------|
| 1 | Guest Hospitality Management | Concierge-Style Guest Handling, Hospitality Staffing, and On-Ground Protocols. |
| 2 | Logistics & Transportation | Fleet Coordination, Routing, Airport Transfers, and Seamless Movement Operations. |
| 3 | Wedding Management | Royal Wedding Logistics, Guest Journeys, Hospitality Lounge Setup & Coordination. |
| 4 | Corporate Events | Professional, Brand-aligned Experiences for Conferences, Retreats, and Launches. |
| 5 | Tours & Travel | Premium Vehicles, Group Movement Handling, and Curated Experiences. |
| 6 | On-ground Command Center | Control-room Style Operations for Live Tracking, Timing, and Vendor Sync. |

Each card has: "Enquire now" link → `/contact`

---

### 5. WEDDING & CORPORATE TIE-UPS

**Theme**: `section-theme-black diagonal-divider`
**Ambient**: Gold radial glows + dot pattern overlay

#### Header
- **Heading**: "WEDDING & CORPORATE TIE-UPS" (gold gradient text, serif, 4xl/5xl)
- **Subtext**: "Trusted partners and tieups across hospitality and events."
- Gold line divider

#### Marquee (Infinite Scroll)
- Container: `rounded-[1rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl`
- Duration: **90 seconds** per loop (slower than default 46s)
- **Pauses on hover/focus**
- Edge fade gradients on both sides

#### Partner Logo Cards (in marquee)
Named partners: 7XWeddings, ANK, Catapultt, Events, EventWaahla, GoldenVibes, Katha, KraftedKnots, Kraftstar, Meragi, Nalesa, Odyssey, Ohana, Poonam, RE, Reet, Simplicite, Soundglitz, SwagSeShaadi, Taarini, TheBull, Verve, WeddingChariot, WeddingChimes, WeddingTales, Wedlock, + additional unnamed partners

- **Card style**: `border border-gold/20`, `bg-black/40`, `backdrop-blur`, `min-height: 170px`
- Logo images: height `104px`, original colors (no grayscale filter)
- Name below in gold, uppercase, tracked

**Footer text**: "A curated set of tieups and partners."

---

### 6. PROPERTIES WE HAVE WORKED AT

**Theme**: `section-theme-black diagonal-divider`

#### Header
- **Heading**: "Properties We Have Worked At" (gold gradient text)
- **Subtext**: "Trusted by some of the most prestigious hospitality brands."

#### Text Marquee (Properties)
- Duration: **46 seconds**
- Items (pill-shaped): JW Marriott, Taj, Four Seasons, Radisson, ITC Hotels, The Leela, Shangri-La, The Oberoi, Conrad, Renaissance

#### Logo Grid (5-column on desktop)
- Background: champagne/cream surface (light) for logo contrast
- **Hotels**: JW Marriott, Radisson, Four Seasons, Taj, ITC Hotels, The Leela, The Oberoi, Conrad, Shangri-La, Renaissance, Ritz Carlton
- Logos: grayscale by default → full color on hover
- Hover: `translateY(-3px) scale(1.05)` + gold border glow

---

### 7. CAREERS

**Theme**: `section-theme-navy texture-noise diagonal-divider`

#### Left Column — Editorial Copy
- **Kicker**: `CAREERS`
- **Heading**: "Join the **Legacy**. Build the Future." (Legacy in gold gradient)
- **Body paragraphs**:
  - *"Guestversity Group is where Luxury Hospitality meets Operational Excellence. If you're driven by detail, calm under Pressure, and obsessed with Premium Experiences — your next chapter starts here."*
  - *"Work Alongside teams that execute Royal Weddings, High-Profile Corporate Events, and large-scale Guest movement with Composure, Precision, and Class."*
- **Quote**: *"Where Hospitality Meets Opportunity."* (serif, gold gradient)

#### Benefits List
- Growth Opportunities with Real Responsibility and Mentorship.
- Leadership Exposure on Premium, High-Pressure Projects.
- Luxury Event Industry Experience that elevates your Profile.
- Pan‑India Operations across Cities, Venues, and Destination Events.

(Each with glowing gold dot bullet)

#### Right Column — Creative Visual Block
- Glassmorphism card with ambient glow
- Badge: `CAREERS AT GUESTVERSITY` + `PREMIUM TEAM`
- Inner card: "SIGNATURE CULTURE" / "Shape Experiences. **Elevate Standards.**"
- Description: *"A calm Luxury Surface — Powered by Sharp Systems, Disciplined Teams, and High-Touch Hospitality."*
- Stat boxes: LEARN (On ground — Real events. Real scale.) / GROW (Fast — Luxury-level standards.)
- Career image: `./assets/images/career_1.jpg`
- Floating decorative shapes (gold-bordered square + circle)

#### Hiring note
*"We hire for Hospitality, Logistics Ops, Guest Coordination, Event Execution, and Field Leadership."*

#### Mini Application Form
- **Title**: "Apply in 60 seconds"
- **Description**: "A minimal application — premium, private, and fast."
- **Email fallback**: careers@guestversitygroup.com
- **Fields**: Full Name, Email, Phone, Job Role (dropdown), Specify Role (if "Other")
- **Job roles**: Hospitality Executive, Guest Coordination Lead, Logistics Operations, Wedding / Events Executive, Field Supervisor, Guest Relations / Concierge, Operations Coordinator, Event Logistics Coordinator, Other
- **Submit**: "Submit Application" (gold button)
- **Consent**: "By applying, you consent to be contacted for recruitment purposes."
- **Footer**: "Premium hiring • High standards • Calm execution" / "GUESTVERSITY GROUP"

#### Open Roles Modal
- Triggered by button (not visible in current markup on homepage)
- Cards for each role with brief descriptions

---

### 8. COUNTERS (Impact Section)

**Theme**: `section-theme-charcoal diagonal-divider`

#### Container: Glassmorphism card with gold border + shadow

- **Kicker**: `IMPACT`
- **Heading**: "Measured excellence, delivered quietly."

#### Counter Stats

| Value | Label |
|-------|-------|
| 1500+ | Events Executed |
| 12+ | Years of Experience |
| 27+ | Cities Covered Pan India & Internationally |
| 1000+ | Happy Clients |

- Animation: easeOutCubic counting from 0, 1100ms duration
- Triggered on scroll (IntersectionObserver, threshold: 0.4)

**Footer**: "Guestversity Group • Hospitality & Logistics" + "Request a proposal →"

---

### 9. TESTIMONIALS (Carousel)

**Theme**: `section-theme-black texture-noise diagonal-divider`

#### Header
- **Kicker**: `TESTIMONIALS`
- **Heading**: "CLIENT REVIEWS — *Here's what our clients has to say about us*"
- **Nav**: Prev / Next buttons

#### Carousel Setup
- Slide transition: `transform 500ms cubic-bezier(.2,.8,.2,1)`
- Auto-advance: every **6 seconds** (pauses on hover)
- Swipe support (pointer events)
- Dot pagination (12 dots)

#### Testimonials

| # | Client | Time | Quote (summary) |
|---|--------|------|-----------------|
| 1 | Prashobh Jayachandran | 2 months ago | Outstanding work by Thoufiq... professionalism, attention to detail |
| 2 | Khorshed Bulsara | 2 months ago | Flawless planning and execution... attention to every minute detail |
| 3 | Sant V | 3 months ago | Standing with us at all times... stress-free events |
| 4 | Suresh Nair | 2 months ago | Wonderful experience... constantly updating information |
| 5 | Manoj Gupta | 8 months ago | Gold Standard in Event Car Logistics... flawless logistics |
| 6 | Srijith Rajeev | 1 year ago | Couldn't have asked for a better hospitality team |
| 7 | Mukund Korapati | 1 year ago | Incredible experience... seamless handling |
| 8 | Monna Rizvi | 1 year ago | Brilliant at getting us places on time |
| 9 | Kotnath Venugopal | 1 year ago | Exceptionally professional, proactive, prompt |
| 10 | Suthirth Vaidya | 1 year ago | Organised all vehicle requirements... very professional |
| 11 | Jayasree Balasubramanian | 2 months ago | Superb management by the hospitality team |
| 12 | CMA Shankar Iyer | 1 year ago | Excellent transport arrangements |

---

### 10. PORTFOLIO / GALLERY

**Theme**: Cinematic layered background with gold + white radial gradients

#### Header
- **Kicker**: `PORTFOLIO`
- **Heading**: "Moments We've Crafted" (gold gradient, serif, 5xl/6xl)
- **Subtext**: "From Luxury Weddings to High-Profile Corporate Events."

#### Gallery Grid — Asymmetric Masonry Layout
`grid-cols-12`, `auto-rows-[10rem] sm:auto-rows-[12rem]`

| Category | Title | Subtitle | Span |
|----------|-------|----------|------|
| AWARDS | Best Hospitality Service Award | The Grand Indian Wedding Race • National recognition | col-7, row-2 |
| CORPORATE | CXO Cocktails & Conversations | Run-of-show • VIP protocols • Stage-managed moments | col-5, row-1 |
| HOSPITALITY | White‑Glove Check‑Ins | Concierge welcome • Escorting • Guest-first touchpoints | col-3, row-1 |
| OPS | On‑Ground Command | Shift briefings • Queue control • Last‑mile decisions | col-2, row-1 |
| DESTINATION | Sunset Destination Mandap | Beachside layouts • Guest routing • Wind‑proof detailing | col-7, row-1 |
| CEREMONY | Moonlit Varmala | Low‑light ambience • Couple reveal • Aisle management | col-5, row-2 (float) |
| LOGISTICS | Airport & Fleet Logistics | Guest pickups • Routing grids • Chauffeur briefings | col-4, row-1 |
| OPS | Leela Ops Briefing | Housekeeping sync • Banquet huddles • F&B routing | col-2, row-1 |
| VENUE | Palatial Ballroom Welcome | Pre‑function hospitality • Checkpoint zoning | col-5, row-1 |
| LUXURY WEDDING | Sangeet & Dance Night | Couple entries • Performance blocking • Crowd energy | col-7, row-2 |
| CORPORATE | Brand Showcase Gala | Lighting design • Stage reveal • Guest journey | col-5, row-1 |
| HOSPITALITY | High‑Touch Guest Care | Rooming lists • Late check‑ins • VIP follow‑through | col-3, row-1 |
| OPS | Ops Floor Walkthrough | Back‑of‑house checks • Team call‑outs | col-2, row-1 |
| DESTINATION | Terrace Mehendi Brunch | Daylight layouts • Weather‑ready plans | col-7, row-1 |
| CEREMONY | Starry Vows | Varmala timing • Family aisle blocking | col-5, row-2 (float) |
| LOGISTICS | In‑City Shuttle Planning | Hotel loops • Drop‑off windows • Driver co‑ordination | col-4, row-1 |
| DETAIL | Bridal Detail Edit | Jewellery • Couture • Vanity vignette | col-3, row-1 |
| VENUE | Resort Arrival Lobby | Floral welcome • Trousseau display • Check‑in flow | col-5, row-1 |
| LUXURY WEDDING | Reception & Couple Entry | Spotlight coordination • Cue‑to‑cue staging | col-7, row-2 |
| VENUE | The Leela Palace Facade | Iconic architecture • Arrival moodboard | col-5, row-1 |
| DETAIL | Best Hospitality Service Award Night | National awards gala • Guestversity recognised | col-3, row-1 |
| CEREMONY | Leela Courtyard Pheras | Fire safety • Priest timing • Family seating maps | col-5, row-2 (float) |

**Note**: "Click any frame to experience the showcase in full-screen."

#### Lightbox Modal
- Fullscreen image viewer with prev/next navigation
- Keyboard support: Escape (close), ArrowLeft/Right (navigate)
- Transition: `translateY(14px) scale(.985) → translateY(0) scale(1)` over 320ms

---

### 11. CTA FOOTER BAND

**Theme**: `section-theme-navy`

- **Heading**: "Ready to deliver a royal experience?"
- **Subtext**: "Let's build a flawless guest journey — elegant on the surface, powerful behind the scenes."
- **CTA**: "Contact Us" → `/contact` (gold button)
- Card: gold gradient glow, gold border, `shadow-gold`

---

### 12. FOOTER

**Background**: `border-t border-white/10 bg-black/30`

#### Brand
- **"Guestversity Group"** (serif)
- *"Luxury hospitality and logistics execution for weddings, corporate events, tours & travel — with premium standards and precise operations."*

#### Link Columns

**PAGES**: About, Services, Blogs, Contact, Terms of Service, Privacy Policy
**SERVICES**: Hospitality, Logistics, Weddings, EventMate-Ai (external link)
**CONTACT**:
- Address: 11-B, 2nd Cross, Shampura Main Rd, RT Nagar Post, Kaval Bairasandra, Bengaluru, Karnataka 560032
- Email: info@guestversity.com
- Phone: +91 89510 97078, +91 89517 97078

#### Social Links (in dynamic footer)
- Instagram: `https://www.instagram.com/guestversitygroup/`
- LinkedIn: `https://www.linkedin.com/company/guestversity-group/`
- Facebook: `https://www.facebook.com/Guestversitygroup`

#### Credit
*"Website designed, built and managed by Masriq NextTech Solutions"*

#### Copyright
"© [year] Guestversity Group. All rights reserved."

---

### 13. FLOATING WIDGETS

#### WhatsApp Chat Widget (Bottom-right)
- Gold FAB button: WhatsApp icon + "WhatsApp" text
- Mini chat panel: glassmorphism, textarea + Send button
- Sends message via `wa.me` deep link to `+91 89510 97078`
- Default message placeholder: "Hi Guestversity Group…"

#### Scroll-to-Top Button
- Appears after scrolling 400px
- Icon: ↑ (arrow up)
- Glass button: `border border-white/12, bg-white/5, backdrop-blur`
- Positioned above WhatsApp button

---

## ✨ Animation Effects Catalog

### 1. Scroll-Triggered Reveals (IntersectionObserver)

| Class | Effect | Duration | Easing |
|-------|--------|----------|--------|
| `.reveal` | Fade up (opacity 0→1, translateY 18px→0, blur 6px→0) | 800ms | `cubic-bezier(.2,.8,.2,1)` |
| `.reveal-left` | Slide in from left (translateX -18px, translateY 10px, blur) | 900ms | `cubic-bezier(.2,.8,.2,1)` |
| `.reveal-right` | Slide in from right (translateX 18px, translateY 10px, blur) | 900ms | `cubic-bezier(.2,.8,.2,1)` |
| `.reveal-delay` | 120ms delay | — | — |
| `.reveal-delay2` | 220ms delay | — | — |

**Trigger**: `threshold: 0.12`, `rootMargin: '0px 0px -10% 0px'`
**Behavior**: One-shot (unobserve after visible)

### 2. Hero Headline Stagger
- Each `.hero-headline-line` starts hidden (opacity 0, translateY 10px, blur 6px)
- Staggered reveal: 600ms delay between each line
- Transition: 900ms `cubic-bezier(.2,.8,.2,1)`

### 3. Hero Background Film (Cross-fade Slideshow)
- 6 images cycle every **6500ms**
- Cross-fade: `opacity 0 → 0.16` over **2400ms**
- Ken Burns zoom: `scale(1.00) → scale(1.05)` over **8s** (`heroFilmZoom`)
- Progressive loading (only first image loaded eagerly)

### 4. Aurora Background Shift
```css
@keyframes auroraShift {
  0%, 100% { transform: translate3d(0,0,0) scale(1); }
  50% { transform: translate3d(0,-14px,0) scale(1.02); }
}
/* Duration: 12s, ease-in-out, infinite */
```

### 5. Drifting Blobs
```css
@keyframes blobDrift {
  0%, 100% { transform: translate3d(0,0,0) scale(1); }
  50% { transform: translate3d(0,-18px,0) scale(1.03); }
}
/* Duration: 18s, cubic-bezier(.2,.8,.2,1), infinite */
```

### 6. Floating Lines
```css
@keyframes lineFloat {
  0%, 100% { transform: translate3d(0,0,0); opacity: .55; }
  50% { transform: translate3d(0,-10px,0); opacity: .95; }
}
/* Duration: 12.5s, ease-in-out, infinite */
```

### 7. Scroll Dot Indicator
```css
@keyframes scrollDot {
  0%, 100% { transform: translateY(-10px); opacity: .25; }
  50% { transform: translateY(10px); opacity: 1; }
}
/* Duration: 1.65s, ease-in-out, infinite */
```

### 8. Button Shine Effect
```css
@keyframes btnShine {
  from { transform: translateX(-120%) skewX(-18deg); }
  to { transform: translateX(120%) skewX(-18deg); }
}
/* Triggered on hover, 900ms */
```

### 9. Button Glow Pulse
```css
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 0 1px rgba(212,175,55,.25), 0 12px 30px rgba(212,175,55,.12); }
  50% { box-shadow: 0 0 0 1px rgba(212,175,55,.35), 0 18px 44px rgba(212,175,55,.18); }
}
/* Duration: 3.8s, ease-in-out, infinite */
```

### 10. Counter Animation
- **Trigger**: IntersectionObserver (threshold: 0.4)
- **Animation**: easeOutCubic counting from 0 → target value
- **Duration**: 1100ms
- **Formula**: `value = Math.round(end * (1 - Math.pow(1 - t, 3)))`

### 11. Marquee Scroll (Logos & Properties)
```css
@keyframes marqueeScroll {
  from { transform: translate3d(0,0,0); }
  to { transform: translate3d(-50%,0,0); }
}
/* Properties: 46s linear infinite */
/* Tieups (logos): 90s linear infinite */
/* Pauses on hover/focus (tieups only) */
```

### 12. Parallax Effects
- **Hero background**: Moves slower than content on scroll (26px max offset)
- **Generic parallax layers**: ±18px offset based on scroll position
- Uses `requestAnimationFrame` for performance

### 13. Testimonial Carousel
- CSS: `transform: translate3d(${-index * 100}%, 0, 0)`
- Transition: `500ms cubic-bezier(.2,.8,.2,1)`
- Auto-advance: 6000ms interval
- Swipe gesture support (40px threshold)
- Pauses on mouseenter, resumes on mouseleave

### 14. Portfolio Gallery Card Hover
- **Card**: `translateY(-6px) scale(1.01)` + gold border glow (700ms)
- **Image**: `scale(1.03) → scale(1.10)` + saturation/contrast boost (900ms)
- **Float animation** (featured cards): `translateY(0) → translateY(-10px)` (7.5s infinite)

### 15. Lightbox/Modal Open Animation
```css
.portfolio-modal {
  transform: translateY(14px) scale(.985);
  opacity: 0;
  transition: transform 320ms cubic-bezier(.2,.8,.2,1), opacity 320ms ease;
}
.portfolio-modal.is-open {
  transform: translateY(0) scale(1);
  opacity: 1;
}
```

### 16. Navigation Link Underline
- `::after` pseudo-element: gold gradient line
- `scaleX(0) → scaleX(1)` on hover (350ms, transform-origin: left)

### 17. Mobile Menu Transition
- Enter: `translateY(-8px) opacity 0 → translateY(0) opacity 1` (240ms)
- Leave: reverse (240ms)

### 18. Service Card Hover
- `translateY(-4px)` + gold border glow + extended link underline

### 19. Logo Tile Hover
- `translateY(-3px) scale(1.05)` + gold border + grayscale → full color

### 20. Diagonal Section Dividers
```css
.diagonal-divider::after {
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
  background: linear-gradient(135deg, rgba(212,175,55,.10), rgba(12,31,63,.12));
  opacity: .55;
  height: 38px;
}
```

### 21. Section Theme Backgrounds

| Theme | Gradient |
|-------|----------|
| `section-theme-black` | Gold radial at 18%/18% + white radial at 82%/32% + dark linear |
| `section-theme-navy` | Navy radial at 20%/20% + gold radial at 80%/70% + dark linear |
| `section-theme-charcoal` | White radial at 18%/10% + gold radial at 80%/80% + charcoal linear |

### 22. Texture Noise Overlay
- Dot grid pattern at 5% opacity with `mix-blend-mode: overlay`
- Masked with radial gradient (fades at edges)

---

## 🛡️ Accessibility & Performance Notes

- `prefers-reduced-motion: reduce` — All animations disabled, elements shown immediately
- Skip-to-content link (sr-only, visible on focus)
- All images have `alt` attributes, `loading="lazy"` (except hero logo)
- `aria-label` on interactive elements
- Keyboard navigation for carousel (arrow keys), lightbox (Escape/arrows), modals
- `will-change: transform` on performance-critical animated elements
- Progressive image loading for hero film (eager first, lazy rest)

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `max-width: 360px` | Logo text hidden |
| `max-width: 420px` | WhatsApp text hidden (icon only) |
| `max-width: 640px` (sm) | Navbar text truncated, hero min-height auto, hero lines hidden |
| `max-width: 768px` (md) | Parallax attachment disabled, portfolio float disabled |
| `min-width: 1024px` (lg) | Desktop nav visible, mobile menu auto-closes |

---

> [!TIP]
> When rebuilding this for your website, the key visual ingredients are:
> 1. **Dark luxury theme** with gold accent color (#D4AF37)
> 2. **Glassmorphism cards** (backdrop-blur + white/5 bg + white/10 border)
> 3. **Scroll-triggered reveals** (IntersectionObserver with blur+translate)
> 4. **Cinematic hero** with cross-fading background images + aurora gradients
> 5. **Marquee logos** with pause-on-hover
> 6. **Counter animations** on scroll
> 7. **Fraunces + Inter** font pairing
