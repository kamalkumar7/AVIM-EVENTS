---
name: Imperial Heritage
colors:
  surface: '#fff8ef'
  surface-dim: '#e0d9ce'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e7'
  surface-container: '#f4ede1'
  surface-container-high: '#eee7dc'
  surface-container-highest: '#e8e2d6'
  on-surface: '#1e1b14'
  on-surface-variant: '#564243'
  inverse-surface: '#333028'
  inverse-on-surface: '#f7f0e4'
  outline: '#897173'
  outline-variant: '#ddc0c1'
  surface-tint: '#a4384a'
  primary: '#4b0014'
  on-primary: '#ffffff'
  primary-container: '#6e0d25'
  on-primary-container: '#f77788'
  inverse-primary: '#ffb2b9'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fed255'
  on-secondary-container: '#735a00'
  tertiary: '#735c10'
  on-tertiary: '#ffffff'
  tertiary-container: '#c5a857'
  on-tertiary-container: '#4f3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#400010'
  on-primary-fixed-variant: '#852034'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#ecc246'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#ffe08c'
  tertiary-fixed-dim: '#e2c46f'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#fff8ef'
  on-background: '#1e1b14'
  surface-variant: '#e8e2d6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  subheading-sm:
    fontFamily: EB Garamond
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-rt:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies the essence of "Royal Indian" luxury, blending the grandeur of Rajputana and Mughal aesthetics with the sleekness of modern 5-star hospitality. The brand personality is authoritative, sophisticated, and deeply rooted in tradition, yet executed with contemporary precision. 

The visual style is **Tactile Minimalism**. It utilizes heavy whitespace to create a sense of exclusivity, punctuated by high-contrast elements and intricate traditional motifs. Key stylistic drivers include:
- **Jharokha Architecture:** Using the iconic arched silhouettes for image masking and container shapes.
- **Jaali Patterns:** Subtle, low-opacity geometric lattices used as background textures to provide depth without clutter.
- **Filigree Details:** Ultra-thin (0.5pt - 1pt) gold lines used as separators or decorative accents to evoke hand-crafted jewelry and royal invitations.

## Colors
The palette is inspired by heritage textiles and precious gems.
- **Primary (Deep Maroon):** Used for primary actions, navigation headers, and high-impact brand moments.
- **Secondary & Highlight (Gold/Antique Gold):** Reserved for borders, icons, and subtle gradients that simulate metallic foil. Use the Highlight #E7C873 sparingly for interactive hover states or shimmering accents.
- **Background (Warm Ivory):** The canvas for all layouts. It provides a softer, more premium feel than pure white, mimicking aged parchment or marble.
- **Accent (Emerald):** Used exclusively for "Success" states or as a rare focal point in lifestyle photography to signify growth and prosperity.
- **Text (Espresso):** Replaces black for all typography to maintain a warm, high-contrast legibility that feels softer on the ivory background.

## Typography
The typographic hierarchy creates a rhythm between regal history and modern clarity.
- **Headlines:** Use Playfair Display for all major headings. For a truly "Royal" feel, use specific instances of high-contrast serif with increased tracking on uppercase subheaders.
- **Body:** Be Vietnam Pro is used for its clean, contemporary proportions which balance the decorative nature of the serifs.
- **Accents:** Use EB Garamond in Italic for pull-quotes or "Fine Script" moments. This provides a literary, academic, and high-end editorial feel without the legibility issues of a true cursive script.
- **Spacing:** Maintain generous line heights (1.6x for body) to ensure the layout feels "airy" and expensive.

## Layout & Spacing
This design system utilizes a **Fixed Centered Grid** for desktop to mimic the composition of a formal royal scroll or invitation. 
- **The Golden Gap:** Use a 120px vertical gap between major sections to emphasize the luxury of space.
- **Composition:** Utilize asymmetrical layouts where text blocks are balanced by large, "Jharokha-masked" imagery. 
- **Mobile Adaptivity:** On mobile, margins shrink to 20px, but the vertical breathing room (section-gap) should remain at a minimum of 64px to maintain the premium feel.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Gold Linework** rather than heavy shadows.
- **Surface Strategy:** The primary background is Ivory (#FAF3E7). Elevated cards or modals use the same Ivory but are defined by a 1px Antique Gold (#C9A227) border or a very soft, "Ambient Gold" shadow (4% opacity Maroon tint).
- **Shadows:** Avoid standard grey shadows. If elevation is required for a floating button, use a multi-layered shadow with a #6E0D25 (Maroon) tint at 5% opacity to maintain color harmony.
- **Dividers:** Use thin gold filigree or a 0.5px #C9A227 line. For major breaks, a subtle Jaali pattern (transparent Maroon at 2%) can be used as a full-width background strip.

## Shapes
The shape language is a mix of architectural rigidity and organic curves.
- **Standard UI Elements:** Buttons and input fields use "Soft" (0.25rem) corners to feel approachable but professional.
- **The Jharokha Arch:** Use a custom SVG mask for featured images and primary call-to-action cards. This arch should have a sharp base and a multi-lobed or pointed top, characteristic of Rajasthani architecture.
- **Buttons:** Primary buttons are rectangular with a minimal 4px radius, emphasizing stability and tradition.

## Components
- **Buttons:** Primary buttons are solid Deep Maroon (#6E0D25) with Antique Gold (#C9A227) text. Secondary buttons are Ivory with an Antique Gold border and Espresso text.
- **Input Fields:** Use "Floating Label" style with only a bottom border in Gold. This mimics the elegance of high-end hotel check-in forms.
- **Cards:** Cards should feature a 1px Gold border. For "Featured" events, the card header should use the Jharokha arch shape to crop the event imagery.
- **Chips/Badges:** Use a Maroon background with Gold text, using the "Label-Caps" typography style for a prestigious, "Gold-Stamped" look.
- **Lists:** Instead of standard bullets, use a small Gold "Lotus" or "Geometric Star" icon to denote list items.
- **The Signature Motif:** Every page should feature one "Signature" gold filigree element—either a thin border around the main hero image or a centered floral divider at the end of the page.