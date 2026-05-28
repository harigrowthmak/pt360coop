# Global Design Tokens — Hinge Health

## Brand color palette (extracted via getComputedStyle)

| Name | Hex | RGB | Usage |
|---|---|---|---|
| **Brand Green** | `#007B34` | rgb(0, 123, 52) | Primary CTAs, "Am I eligible?" buttons, "Learn more" links, logo |
| **Forest Green** | `#00491F` | rgb(0, 73, 31) | TopBar background, dark sections (Section 8), large headings on light sections |
| **Ink Charcoal** | `#373938` | rgb(55, 57, 56) | Body text, secondary text |
| **True Black** | `#000000` | — | Headings on white sections |
| **White** | `#FFFFFF` | — | Body background, dark-section text |
| **Soft Charcoal** | `#2C2C2C` | rgb(44, 44, 44) | Sub-body text |
| **Slate** | `#27455C` | rgb(39, 69, 92) | Accent / minor UI |
| **Pale Green** | `#D7EBC0` *(approx)* | — | Announcement banner background |
| **Card tint — green** | `#E7F4EC` *(approx)* | — | Specialized Care card 1 |
| **Card tint — cream** | `#FBF3E8` *(approx)* | — | Specialized Care card 2 |
| **Yellow Accent** | `#F5D068` *(approx)* | — | Arc decoration in CTA section |

> Approximate tints are eyeballed from screenshots — re-extract via `getComputedStyle` once each section's container element is in scope.

## Typography

### Primary font
**Brown LL** (`BrownLLWeb, sans-serif`) — Hinge Health's brand font.
- Source: Lineto.com (paid commercial license, ~$200+/weight)
- Variants loaded: 6 font faces (likely Light, Regular, Medium, Bold, Italic + 1)

### Free clone replacement
**Plus Jakarta Sans** (Google Fonts) — closest free geometric sans with similar warmth and roundness.
- Weights to load: 300, 400, 500, 600, 700, 800
- Alternative: **Manrope** (also geometric, slightly more condensed)

### H1 spec (observed)
- font-size: `56px` (clamp suggested: `clamp(2rem, 5vw, 3.5rem)`)
- font-weight: `700`
- line-height: `61.6px` (~1.1)
- letter-spacing: `normal`
- color: depends on section (white on photo hero, dark green on light sections)

## Font face count
6 faces loaded total — likely Brown LL Light/Regular/Medium/Bold + 2 italics.

## Smooth scroll
- **None detected** — page uses native browser scroll
- No Lenis, no Locomotive Scroll, no scroll-snap

## Spacing / layout
- Max content width: ~1280–1440px with side gutters
- Section vertical padding: appears to be ~96–128px (py-24 to py-32 in Tailwind)
- CTA pill border-radius: ~40px (fully rounded pill)
- Card border-radius: ~20–24px (rounded-2xl/3xl)

## CSS variables on `:root`
None significant — Hinge Health appears to use Tailwind-compiled atomic classes rather than CSS custom properties.
