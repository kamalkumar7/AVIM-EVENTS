# Guestversity Group — About Page Content & Layout Reference

> [!NOTE]
> Source: [https://www.guestversity.com/about](https://www.guestversity.com/about)
> This document captures the text content, layout structure, design system, and specific animation effects for the Guestversity About page.

---

## 🎨 Design System

*(Inherits the core design system from the homepage)*

- **Colors**: `--gold` (`#D4AF37`), `--ink` (`#050505`), etc.
- **Typography**: `Fraunces` (Serif / Display), `Inter` (Sans / Body)
- **Styling**: Tailwind CSS with custom `style.css`
- **Global Backgrounds**: Premium grid (`bg-premium-grid`), vignette (`bg-vignette`), radial gradients.

---

## 📐 Page Structure (Section by Section)

---

### 1. NAVBAR (Sticky Header)

- Identical to Homepage.
- **Active state**: N/A explicitly highlighted in classes, but conceptually "About" is the active page.

---

### 2. HERO SECTION

**Background Layers**:
- Deep ink background with `hero-aurora opacity-60`.
- Linear gradient overlay fading to dark at bottom: `rgba(5,5,5,.3)` to `rgba(5,5,5,.9)`.

#### Left Column (7/12 grid)
- **Kicker**: `ABOUT GUESTVERSITY`
- **Headline**: "Crafting royal guest journeys with **precision**." (The word "precision" uses the `.text-gradient-gold` class).
- **Subtext**: *"We are a Detailed Hospitality & Logistics Organisation that implements Operations and Management for Guest Management, Travel, Designing, Production, and Wedding Coordination for Weddings and Corporate Events — where Comfort, Timing, and Discretion define the experience."*

#### Right Column (5/12 grid)
- **Image**: Large Guestversity Logo Mark (`./assets/GG_1.png`).
- Opacity `90%`, aligned to the right.

---

### 3. LEADERSHIP (Managing Director)

**Layout**: 12-column grid, alternating flow (Mobile: Text first, Image second. Desktop: Image left, Text right).
**Background**: Subtle white tint `bg-white/[0.02]`.

#### Left Column - Image (5/12 grid)
- Glassmorphism container: `rounded-[2rem] border-gold-500/25` with radial gold gradient background and `shadow-gold`.
- Inner image aspect ratio `4/5`, rounded corners.
- **Image**: Mohammed Tabraiz Saheb (`./assets/TABRAIZ1.png`).
- Subtle vignette and gold radial gradients over the image for blending.

#### Right Column - Copy (7/12 grid)
- **Kicker**: `LEADERSHIP`
- **Heading**: "**Mohammed Tabraiz Saheb** — *FOUNDER & MANAGING DIRECTOR*" (Name in bold, title in white/60 italic).
- **Body**: *"Mohammed Tabraiz Saheb leads Guestversity Group with a Clear Vision to deliver Best Guest Management service in Logistics and Hospitality. Under his direction, the company has Built a Reputation for Planning, Co ordination, Execution at large scale."*
- **Vision Statement Box**:
  - Glass card: `border-white/10 bg-white/5`
  - Label: `VISION STATEMENT` (gold, tracked out)
  - Quote: *"To Care for Every Guest, once they arrive and leave with unforgettable Happy Memories."* (Serif font).

---

### 4. TEAM SHOWCASE (Leadership & Execution Team)

**Background Ambience**:
- Complex radial gradients (gold and white spotlights) and linear gradient.
- Dot pattern overlay `bg-[radial-gradient(circle_at_1px_1px...)]`.
- Large center gold spotlight `opacity-70`.

#### Header
- **Kicker**: `TEAM`
- **Heading**: "Leadership & Execution Team"
- **Subtext**: "Luxury standards. Operational precision. Regional strength."
- **Animated Underline**: Centered line that expands from the middle via `.team-underline` (gold gradient).

#### Team Grid (3-column on desktop, 2 on tablet, 1 on mobile)
- Premium glassmorphism executive cards.

| Name | Role | Description |
|------|------|-------------|
| **Saqueeb Ahmed** | Branch Head • Bangalore | Leads Premium Hospitality Teams and On-Ground Guest Experience Operations • with composed Coordination and Luxury-First Standards. |
| **Syed Azhar** | Branch Head • Hyderabad | Coordinates High-Volume Transfers with calm, Five-Star Guest Handling and Time-Bound Execution across Venues and Routes. |
| **Raj Gowda** | Branch Head • Goa | Driving flawless Guest Experiences through Smart Hospitality Planning, seamless Logistics, and hands-on On-Ground Coordination. |
| **Mohammad Thoufiq** | Branch Head • Mysore | Delivers Royal Hospitality Execution aligned with Palace-Style Venues, Guest Routing Plans, and Live Command-Center Coordination. |
| **Anil S R** | Managing Partner • Travel | Leads Premium Travel Execution for Events • Coordinating Movement Logistics with Precision Scheduling and Guest-First Service. |
| **Armaan Shariff** | Project Incharge • Production | Drives Production Timelines, Vendor Coordination, and Execution Flow to deliver Premium Stagecraft and Seamless Show Operations. |
| **Sabiq Ahmed Khan** | Operations Incharge • Hospitality | Manages Hospitality Operations and Team Deployment with Disciplined Checklists, Guest Assistance Protocols, and Service Quality Control. |
| **Manish Singh** | Operations Incharge • Hospitality | Hospitality & Logistics Manager at Guestversity Group with 4+ years of Experience and over 50 successfully managed Events. |
| **Khalid Khan** | Operations Incharge • Hospitality | Oversees Hospitality Execution and Live Issue Resolution, ensuring Five-Star Guest Standards across Touchpoints and Venue Teams. |
| **Asiya Arzoo** | Marketing Executive | Leads Brand Presence and Communication with Premium Positioning, ensuring every Touchpoint reflects Guestversity’s Luxury Standards. |

**Card Design**:
- Top border line `linear-gradient(to right, transparent, rgba(212,175,55,.65), transparent)`.
- Circular avatar (`border-gold/30`) that slightly scales up on hover.
- Desktop Hover: Card lifts, shadow intensifies, description text slides up into view (opacity 0 -> 1).

---

### 5. ACHIEVEMENTS & STATS

#### Stat Grid
- **Kicker**: `ACHIEVEMENTS`
- **Heading**: "Built for luxury. Proven at scale."

| Value | Suffix | Label |
|-------|--------|-------|
| 1500 | + | Total Events Managed |
| 12 | + | Years of Experience |
| 27 | + | Cities Covered Pan India & Internationally |
| 500 | + | Luxury Weddings Managed |
| 60 | + | Corporate Collaborations |
| 24 | /7 | Command-center Support |

#### Global Milestones (Alternating Timeline)
- **Kicker**: `GLOBAL ACHIEVEMENTS`
- **Heading**: "Global Milestones & Prestigious Engagements"
- **Subtext**: "Trusted across nations, institutions, and high-profile platforms."
- Animated center gold underline.

**Timeline Entries** (Alternating Image Left / Copy Right layout):

1. **Narendra Modi Event – GKVK** (Dominant styling)
   - Badge: `India`
   - Desc: A National-Level Milestone Engagement executed with High-Security coordination, Precision Guest movement, and Uncompromising On-Ground Discipline.
2. **Dubai Work – Palazzo Versace**
   - Badge: `Dubai`
   - Desc: High-Profile International Engagement delivered with Luxury-Grade Hospitality Standards, Discreet VIP Handling, and Composed Execution.
3. **Oman Engagement**
   - Badge: `Oman`
   - Desc: Cross-Border Guest Operations, Airport-to-Venue Routing, and On-Ground Hospitality Choreography aligned to International Expectations.
4. **Sri Lanka High-Level Event**
   - Badge: `Sri Lanka`
   - Desc: A High-Level Platform managed with Disciplined Timelines, Stakeholder Protocol, and Premium Guest Experience Control.
5. **EX CM Engagement**
   - Badge: `India`
   - Desc: Protocol-Sensitive Engagement delivered with Quiet Reliability, Coordinated Movement Planning, and Zero Disruption Operations.
6. **Indian National Congress Event**
   - Badge: `India`
   - Desc: Large-Audience Guest and Logistics Operations delivered with Sharp Coordination, Controlled Access, and a Premium On-Ground Finish.
7. **EventMate‑AI Official Launch & Collaboration**
   - Badge: `India`
   - Desc: A Flagship Innovation Milestone bringing Technology and On-Ground Hospitality Execution together – designed for scale and Authority.

---

### 6. NEXT STEP CTA

- **Layout**: Large Glassmorphism Card spanning max-width. `border-gold-500/25` with `shadow-gold`.
- **Content Left**:
  - Label: `NEXT STEP` (gold)
  - Heading: "Let’s design a flawless guest journey."
  - Text: "We’ll align on timelines, VIP handling, transport, staffing, and service standards."
- **Content Right**: "Enquire Now" gold button (`/contact`).

---

### 7. FOOTER

- Identical to Homepage.

---

## ✨ Animation Effects Catalog (Specific to About Page)

### 1. Animated Underline (Team & Achievements)
```css
.team-underline, .gold-underline {
  background: linear-gradient(to right, transparent, rgba(212,175,55,.75), transparent);
  transform: scaleX(.22);
  transition: transform 900ms cubic-bezier(.2,.8,.2,1);
}
.reveal.is-visible .team-underline { transform: scaleX(1); }
```

### 2. Executive Card Hover Effects
- **Resting state**: `translateY(40px)`, opacity 0.
- **Scroll Reveal**: Elements stagger in (`is-in` class applied via IntersectionObserver).
- **Hover**: 
  - Card: `translateY(-8px)`, increased shadow.
  - Avatar: `scale(1.05)`, border color shifts.
  - Description: Opacity fades in, `translateY(20px) -> translateY(0)`.

### 3. Timeline / Milestone Animations
- **Dominant Item**: First item has larger padding, radial gold background, glowing border.
- **Scroll Parallax**: Very light parallax effect applied via Javascript `requestAnimationFrame` on timeline images (offset -10px to +10px based on scroll progress).
- **Hover**: Images slightly zoom (`scale(1.02) -> scale(1.06)`), container shadow and border intensify.

### 4. Counter Animation
- Uses the same JS logic from the homepage to increment numbers on scroll (`data-counter="1500"`). 
