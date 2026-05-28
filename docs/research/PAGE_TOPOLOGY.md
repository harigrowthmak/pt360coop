# Page Topology — Hinge Health UK Homepage

Source: https://www.hingehealth.com/gb/en/
Captured: 2026-05-27
Viewport: 1440×900 (desktop), document height 4573px

## Z-layers / Fixed overlays
- **Top bar** (dark green strip) — non-sticky, scrolls away with page
- **Announcement banner** (pale green) — non-sticky
- **Primary nav bar** (white, with logo + items + green CTA) — non-sticky in default view but appears to stay at top until announcement bar scrolls off; verify scroll-stuck behavior in QA pass
- **Cookie/consent overlay** — not visible after first dismiss

## Sections (top → bottom)

| # | Name | Type | Layout | Approx height | Interaction model |
|---|---|---|---|---|---|
| 1 | TopBar (dark green) | bar | full-width, right-aligned links + lang | 40px | static + dropdown (lang selector) |
| 2 | AnnouncementBanner | bar | full-width, centered text + dismiss × | 50px | dismissible (close button) |
| 3 | NavBar | sticky-on-scroll | logo left + nav center + green pill CTA right | 88px | static + dropdown nav menus |
| 4 | Hero | full-bleed | photo background, text overlaid bottom-left | ~750px viewport | static — but possibly a looping video, verify |
| 5 | LessPainMoreLiving | centered | 2-col below heading: feature list left, app mockup carousel right | ~700px | carousel cycles through app mockup states (3 dots visible) |
| 6 | SpecializedCareCarousel | horizontal cards | row of 3 visible color-tinted cards, prev/next arrows + dots | ~600px | click-driven carousel (arrows) — verify scroll behavior |
| 7 | CarePeopleBusiness | split | image-card left (with 2.4x stat overlay) + checklist right + green CTA | ~700px | static |
| 8 | TrustedCareOutcomes | dark green section | 3 large animated counters (XX%), descriptive labels | ~500px | scroll-triggered count-up animation (0 → final value) |
| 9 | CallToAction | centered | huge heading + 2 CTAs (filled + outlined) over yellow arc decoration | ~500px | static |
| 10 | References | small text | numbered citations | ~150px | static |
| 11 | Footer | dark text on white | 5-column nav + logo + member support contact, then social icons + legal links bottom | ~600px | static + hover underline on links |

## Color regions

- **Hero & section 4**: full-bleed warm photography (no brand color overlay)
- **Sections 2, 5, 6 (some cards), 9**: white/cream background
- **Section 6 cards**: light green tint (#E7F4EC-ish), light peach/cream tint (#FBF3E8-ish), other tints — multiple variants
- **Section 8 ("Trusted care...")**: dark forest green (#00491F-ish) with white text and yellow/lime accents
- **Footer**: white background with dark green ink text
- **TopBar**: very dark green (~#00491F)

## Critical observations / gotchas

- **Hero background may be a looping VIDEO**, not a static photo — needs verification (check for `<video autoplay loop>` in DOM)
- **"Less pain, more living" right column** is a phone-screen mockup carousel — the gray placeholder seen during scroll suggests lazy-loaded image; the actual mockup is overlaid app UI cards (Side lunges / Woodpecker / Mini split squat) on a man-exercising photo
- **Animated counters in section 8** use scroll-triggered count-up — observed 0→68%, 0→58%, 0→67% during scroll
- **Yellow arc decoration** in section 9 is a positioned SVG/PNG behind the CTAs
- **Footer column 1 ("For individuals")** appears empty / just a header — verify whether it has sub-links

## Page-level layout
- Single scrollable container, no scroll-snap detected
- No Lenis or Locomotive Scroll detected — native browser scroll
- Max content width appears to be ~1280–1440px with side gutters
