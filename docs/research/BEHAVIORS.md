# Behavior Bible — Hinge Health UK Homepage

## Scroll behaviors

### Native scroll (no smooth-scroll library)
- No `.lenis`, no `[data-scroll-container]`, no `scroll-snap-type` on body/html
- Uses native browser scroll throughout

### Section 8 — Animated counters (scroll-triggered count-up)
- **Trigger:** counters enter viewport (likely IntersectionObserver, threshold ~0.3)
- **State A (before in view):** displays `0%` with a downward triangle / arrow icon
- **State B (in view):** counter animates from `0` to final value over ~1.5–2s
- **Final values observed:** 68% / 58% / 67% (verify exact copy in extraction pass)
- **Implementation approach:** IntersectionObserver + requestAnimationFrame loop OR a counter lib (CountUp.js)
- **Easing:** likely ease-out — fast start, gentle finish

### Announcement banner dismiss
- **Trigger:** click on × icon
- **Effect:** entire banner collapses/removes
- **Likely sets a cookie/localStorage flag so it stays dismissed across sessions

## Click behaviors

### Section 6 — Specialized Care carousel
- **Prev/next circular arrow buttons:** click to advance/recede cards
- **Pagination dots:** click to jump
- **Implementation approach:** scroll-snap on horizontal container OR JS translate-X transform

### Nav menu items
- **"For individuals" / "Benefits leaders and health plans" / "Our approach" / "Learning Centre" / "About"** — likely dropdown menus on hover/click (multi-level navigation per WebFetch analysis)
- **Need to test:** hover vs click trigger, dropdown layout

### Language selector
- **Globe icon + "English (United Kingdom)" + ▾ caret** — opens dropdown of locale options

## Hover behaviors (to verify)
- **Green CTA pills:** likely darker green on hover, possibly slight scale or shadow
- **Outline CTAs ("Request a business demo"):** likely fill on hover
- **"Learn more →" links:** likely arrow shifts right on hover
- **Footer links:** likely underline on hover

## Form / input behaviors
- None on homepage — the only input-like CTA is "Am I eligible?" which routes to an external eligibility flow

## Responsive behavior (to verify in mobile pass)
- **Hero:** photo crop changes; copy stacks; CTAs likely stack vertically
- **Nav:** collapses to hamburger menu
- **Carousels:** likely become horizontal scroll snap with one card visible
- **Footer:** columns stack
- **Counter section:** counters stack vertically

## NOT observed (clarify in QA)
- No parallax detected on initial scroll-through
- No video backgrounds confirmed yet
- No sticky sidebar / scroll-driven tab switching
- No dark/light theme transitions between sections (the dark green section 8 is just a background color, no transition)

## Animation duration / easing patterns (to extract precisely in component specs)
- Carousel slides: ~400–600ms with ease-out
- Hover transitions: ~150–250ms with ease
- Counter animation: ~1500–2000ms with ease-out

## Page-load behavior
- No splash screen / loading animation observed
- Hero photo appears immediately (no fade-in observed)
- App mockup carousel image lazy-loads (gray placeholder visible mid-scroll)
