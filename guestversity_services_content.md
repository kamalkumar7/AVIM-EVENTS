# Guestversity Group — Services Page Content & Layout Reference

> [!NOTE]
> Source: [https://www.guestversity.com/services](https://www.guestversity.com/services)
> This document captures the text content, layout structure, design system, and specific animation effects for the Guestversity Services page.

---

## 🎨 Design System

*(Inherits the core design system from the homepage)*

- **Colors**: `--gold` (`#D4AF37`), `--ink` (`#050505`), etc.
- **Typography**: `Fraunces` (Serif / Display), `Inter` (Sans / Body)
- **Styling**: Tailwind CSS with custom `style.css`
- **Global Backgrounds**: Premium grid (`bg-premium-grid`), vignette (`bg-vignette`).

---

## 📐 Page Structure (Section by Section)

---

### 1. NAVBAR (Sticky Header)

- Identical to Homepage.
- **Active state**: N/A explicitly highlighted in classes, but conceptually "Services" is the active page.

---

### 2. HERO SECTION

**Background Layers**:
- Deep ink background with `hero-aurora opacity-60`.
- Linear gradient overlay fading to dark at bottom: `rgba(5,5,5,.3)` to `rgba(5,5,5,.92)`.

#### Left Column (7/12 grid)
- **Kicker**: `SERVICES`
- **Headline**: "Luxury moments, powered by **operational mastery**." (The words "operational mastery" use the `.text-gradient-gold` class).
- **Subtext**: *"Our services are designed to feel effortless for guests — powered by four specialised sectors: Logistics & Hospitality, Tours N Travels, Production Execution Team, and Designing N Printing, all running on precise logistics discipline."*

#### Right Column (5/12 grid)
- **Image**: Large Guestversity Logo Mark (`./assets/GG_1.png`).
- Opacity `90%`, aligned to the right.

---

### 3. DETAILED SERVICE BLOCKS

**Layout**: Alternating 12-column grid rows with premium glassmorphism card containers (`border-white/10 bg-white/5 backdrop-blur-xl`).

#### Block 1: Guest Hospitality (Text Left, Image Right)
- **Badge**: `✦ GUEST HOSPITALITY` (Inside a pill with gold border & black background)
- **Heading**: "Guest Hospitality Management"
- **Body**: *"VIP handling, on-ground hospitality teams, concierge-style coordination, help desks, welcome rituals, and a five-star guest experience."*
- **Bullet Points**:
  - RSVP support including e‑invites, telecalling, follow‑ups, and ticket/ID collection
  - Flight and surface travel bookings coordinated for guests and families
  - Airport, railway, and bus station reception with welcome hampers and assisted transfers
  - Coordination with travel agencies and cab drivers for smooth arrivals and departures
  - Registration desks, helpdesks, and guidance at the venue throughout the event
  - Gift and hamper packing, luggage assistance, and venue‑to‑venue shuttling for guests
- **CTAs**: "Enquire Now" (gold button) + "Why Guestversity" (ghost button)
- **Image**: `./assets/1.jpg` with a dark overlay and radial gold gradient.

#### Block 2: Logistics (Image Left, Text Right)
- **Badge**: `⬚ LOGISTICS`
- **Heading**: "Logistics & Transportation"
- **Body**: *"Fleet management, routing, live coordination, VIP movement, and high-volume guest transfers — delivered with calm precision."*
- **Bullet Points**:
  - Airport transfers with buffer planning
  - City movement and venue shuttles
  - Driver briefing, control-room updates
  - Contingencies for delays and reroutes
- **CTA**: "Enquire Now" (gold button)
- **Image**: `./assets/2.jpeg` with a dark overlay and radial gold gradient.

---

### 4. PARALLAX BANNER

**Layout**: Full-width banner with background parallax effect.
- **Background**: `.parallax-layer` behind a `.bg-black/65` overlay.
- **Content** (Max-w-3xl, left-aligned):
  - **Kicker**: `PARALLAX`
  - **Heading**: "When timelines tighten, we get **sharper**." ("sharper" is gold gradient)
  - **Subtext**: *"A calm luxury surface — backed by a command-center approach underneath."*
  - **CTAs**: "Build a plan" (gold button) + "Read insights" (ghost button)

---

### 5. MORE SERVICES GRID

**Layout**: 3-column grid (`md:grid-cols-2 xl:grid-cols-3`) of `.service-card` elements.

| Title | Description | Link |
|-------|-------------|------|
| **Logistics & Hospitality** | RSVP management, welcome hampers, arrivals and departures, venue registration, helpdesks, and on-ground Production Execution Team support for smooth coordination of events. | Enquire Now |
| **Tours N Travels** | Vehicles for wedding and corporate requirements, curated fleets, trained chauffeurs, and routing for guest, family, and VIP movements. | Enquire Now |
| **Designing N Printing** | Invites, event branding, signages, collaterals, and creative prints — where creativity starts and is finished with the best possible result. | Enquire Now |

---

### 6. PROPOSAL CTA BLOCK

- **Layout**: Large Glassmorphism Card spanning max-width. `border-gold-500/25` with `shadow-gold` and a 135-degree linear gradient background.
- **Content Left**:
  - Label: `PROPOSAL` (gold)
  - Heading: "Need an end-to-end plan?"
  - Text: *"Tell us your city, dates, and guest volume — we’ll respond with a polished execution blueprint."*
- **Content Right**: "Enquire" gold button (`/contact`).

---

### 7. FOOTER

- Identical to Homepage.

---

## ✨ Animation Effects Catalog (Specific to Services Page)

### 1. Service Card Reveal
- Grid items (the 3 "More Services") use the `.reveal`, `.reveal-delay`, and `.reveal-delay2` classes to stagger their entrance as they scroll into view.

### 2. Parallax Banner
- The section uses `.parallax-banner` and `.parallax-layer` which, paired with the javascript, shifts the background image vertically based on the scroll position, giving a sense of depth behind the text.

### 3. Glassmorphism Block Overlays
- The image containers in the detailed service blocks use layered `div` elements with radial gradients to create a "spotlight" blend effect connecting the image to the dark UI.
