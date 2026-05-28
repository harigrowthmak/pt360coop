import { Reveal } from "./Reveal";

export default function CallToAction() {
  return (
    <section id="appointment" className="pt-section-tight pt-12 pb-24">
      <div className="pt-shell">
        <div
          className="relative overflow-hidden pt-card text-center px-6 py-16 md:py-24"
          style={{
            background: "var(--pt-dark)",
          }}
        >
          {/* Decorative arcs (PT360 360° brand mark expressed as concentric rings) */}
          <svg
            aria-hidden
            viewBox="0 0 800 400"
            className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1000px] opacity-30 pointer-events-none"
          >
            <circle cx="400" cy="400" r="220" stroke="#27a9e1" strokeWidth="1.2" fill="none" />
            <circle cx="400" cy="400" r="300" stroke="#27a9e1" strokeWidth="1.2" fill="none" />
            <circle cx="400" cy="400" r="380" stroke="#27a9e1" strokeWidth="1.2" fill="none" />
          </svg>

          <div className="relative">
            <Reveal>
              <span className="pt-eyebrow pt-eyebrow--dark">Make an Appointment</span>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <h2
                className="pt-display"
                style={{
                  color: "#fff",
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.08,
                }}
              >
                Come visit PT360 and feel the cooperative difference.
              </h2>
            </Reveal>
            <Reveal delay={200} className="mt-5">
              <p className="text-white/75 max-w-xl mx-auto text-[16px] leading-relaxed">
                Two Vermont locations. Williston salt-water pool. 360 degrees of care.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#book" className="pt-pill pt-pill--accent">Make an Appointment</a>
                <a href="#insurance" className="pt-pill pt-pill--ghost-light">Insurance &amp; Referrals</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
