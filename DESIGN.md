# Design Brief — Plethora: Air Pura

**Aesthetic:** Luxury tech + futuristic showcase. Pure black background with electric neon cyan/blue accents, glassmorphic cards, smooth animations. Tesla/Vercel design language: confident typography, premium whitespace, command presence.

**Differentiation:** Glowing neon accents paired with minimal, spacious layout create premium futuristic feel. Glassmorphism cards with subtle particle animations elevate pitch-deck aesthetic.

## Color Palette

| Token | OKLCH | Purpose |
| --- | --- | --- |
| background | `0.08 0 0` | Pure black, dominant background |
| foreground | `0.95 0 0` | Near-white for text/contrast |
| primary | `0.7 0.25 200` | Neon cyan — hero CTAs, highlights |
| secondary | `0.65 0.22 270` | Electric blue — alternate accents |
| accent | `0.75 0.30 200` | Bright cyan — glow effects, hover states |
| card | `0.18 0 0` | Dark semi-transparent, glassmorphic base |
| muted | `0.25 0 0` | Subtle grey for secondary UI |
| border | `0.22 0 0` | Minimal dark border, low contrast |
| destructive | `0.65 0.25 15` | Red accent for alerts |

## Typography

| Layer | Font | Usage |
| --- | --- | --- |
| Display | General Sans | Headlines, hero section, 32–64px |
| Body | DM Sans | Body copy, descriptions, 14–18px |
| Mono | JetBrains Mono | Stats, tech details, 12–14px |

**Hierarchy:** 60px bold display for hero headline, 24px medium display for section headers, 16px regular body for descriptions.

## Elevation & Depth

- **Base:** Pure black `#000000`
- **Layer 1 (Cards):** `0.18 0 0` with glassmorphism: `backdrop-filter: blur(12px); background: rgba(28,28,28,0.4)`
- **Layer 2 (Popover):** `0.22 0 0` with increased opacity
- **Glow:** Cyan/blue box-shadow at `0.4–0.5` opacity for hover/active states

## Structural Zones

| Zone | Treatment | Purpose |
| --- | --- | --- |
| Header | Minimal black background, cyan logo glow, subtle border-bottom | Navigation, branding |
| Hero | Pure black background, animated particle backdrop, centered content | Breakthrough visual impact |
| Content Sections | Alternating bg-background/bg-muted, card-based layout | Problem/solution/USP storytelling |
| Cards | Glassmorphism, glowing borders (cyan/blue), hover glow effect | Feature highlights, impact statements |
| CTA | Cyan/blue background, glowing shadow, smooth 300ms transition | Call-to-action buttons |
| Footer | Black background, subtle border-top, muted text | Project info, closing statement |

## Spacing & Rhythm

- **Container:** 2rem padding, max-width 1400px
- **Section gap:** 4–5rem vertical spacing between sections
- **Card grid:** 1–3 columns responsive (sm: 1, md: 2, lg: 3)
- **Whitespace:** Generous 3–6rem margins for premium feel

## Component Patterns

- **Buttons:** Cyan (`primary`) for hero CTA, blue (`secondary`) for secondary actions. Always include glowing shadow on hover.
- **Cards:** `.glassmorphism` + `.glowing-border-cyan` or `.glowing-border-blue` for feature cards
- **Text Accents:** Cyan for keywords, blue for stats/numbers
- **Transitions:** 300–400ms smooth cubic-bezier(0.4, 0, 0.2, 1)

## Motion & Animation

- **Entrance:** Fade-in + slide-up 600ms ease-out on page load
- **Hover:** Glow intensity increase 200ms, scale 1.02 on cards
- **Particles:** Subtle floating particles in hero, opacity 0.1–0.3, 4–6s infinite loop
- **Pulsing:** Accent glow pulse 2s infinite for emphasis elements

## Constraints

- No gradients on text; use solid cyan/blue for accents
- No bouncy or playful animations; keep motion premium and subtle
- Minimum 0.5rem border-radius (not sharp corners)
- All interactive elements must have clear hover state (glow effect)
- Card opacity never exceeds 0.5; maintain dark theme legibility
- Glow shadows max 20px blur; avoid excessive blur

## Signature Detail

**Glowing neon accents paired with ultra-minimal black background create futuristic luxury.** Every interactive element glows on hover—cyan for primary, blue for secondary. Glassmorphic cards with inset glow suggest depth without visual clutter. Particle animations in hero suggest air/movement. Result: pitch-deck confidence meets sci-fi premium.
