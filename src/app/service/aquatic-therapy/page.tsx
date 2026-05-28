import Image from "next/image";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, CheckCircle, Quote, Star, IconAquatic, IconLymph, IconVestibular } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Aquatic Therapy · PT360 Coop",
  description:
    "Salt-water pool aquatic physical therapy at PT360's Williston clinic. 92–93°F warmth, buoyancy, and hydrostatic pressure relieve pain and rebuild strength.",
};

const steps = [
  {
    n: "01",
    title: "Initial assessment",
    body:
      "Your therapist meets you on land first — full evaluation of your goals, history, range of motion and the conditions we'll work on in the water.",
  },
  {
    n: "02",
    title: "Tailored pool programme",
    body:
      "We build a session around buoyancy (less joint load), hydrostatic pressure (gentle resistance + feedback) and heat (relaxes tight tissue and improves flexibility).",
  },
  {
    n: "03",
    title: "Progress to land",
    body:
      "When you're ready, aquatic work transitions into a land-based plan so your gains carry into everyday life — gait, balance, strength and confidence.",
  },
];

const benefits = [
  "Salt-water pool at 92–93°F — close to body temperature",
  "Stairs and a poolside lift for accessible entry",
  "Bars along both sides for safe balance work",
  "Therapist may enter the water for hands-on support",
];

const related = [
  {
    title: "Post-Concussion Syndrome",
    body: "The only comprehensive PCS program in Chittenden County.",
    image: "/pt360/post-concussion.jpg",
    href: "/service/post-concussion-syndrome",
    Icon: IconVestibular,
  },
  {
    title: "Lymphedema",
    body: "Manual lymph drainage, exercise and education for lifelong management.",
    image: "/pt360/feature-sept.jpg",
    href: "/service/lymphedema",
    Icon: IconLymph,
  },
  {
    title: "Sports Medicine",
    body: "Sport-specific rehab from recreational to elite — school-age to 80s.",
    image: "/pt360/williston-gym.jpg",
    href: "/service/sports-medicine",
    Icon: IconAquatic,
  },
];

export default function AquaticTherapyPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--pt-bg)" }}>
      <NavBar />

      {/* SERVICE HERO */}
      <section className="pt-section-hero">
        <div className="pt-shell">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <span className="pt-eyebrow">Service</span>
              </Reveal>
              <Reveal delay={100} className="mt-6">
                <h1 className="pt-display pt-h1">
                  Aquatic{" "}
                  <span style={{ color: "var(--pt-accent)" }} className="italic">
                    therapy
                  </span>
                  .
                </h1>
              </Reveal>
              <Reveal as="p" delay={200} className="pt-body-lg mt-7 max-w-md">
                Move, restore and rebuild in 92–93&deg;F salt water at our
                Williston clinic. Buoyancy reduces joint pressure, hydrostatic
                pressure gives you feedback, and warmth relaxes tight tissue.
              </Reveal>
              <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
                <a href="#book" className="pt-pill pt-pill--accent">Book Appointment</a>
                <a href="#how" className="pt-pill pt-pill--dark pt-pill--no-slashes">
                  How it works <ArrowRight size={15} />
                </a>
              </Reveal>
            </div>

            <Reveal delay={200} className="col-span-12 lg:col-span-6">
              <div className="pt-card relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/pt360/wellness.jpg"
                  alt="Aquatic therapy session at PT360's Williston salt-water pool"
                  fill
                  priority
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE INTRO */}
      <section className="pt-section">
        <div className="pt-shell">
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <span className="pt-eyebrow">Service intro</span>
              </Reveal>
              <Reveal delay={100} className="mt-6">
                <h2 className="pt-display pt-h2">
                  Why aquatic therapy?
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7 space-y-5">
              <Reveal delay={100}>
                <p className="pt-body-lg">
                  Exercise and movement in water offers a unique approach to
                  rehabilitation. There are unseen forces here that support your
                  body and let you perform movements that may not yet be safe on
                  land.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="pt-body">
                  Improvements in flexibility, strength and stamina come naturally
                  — and aquatic therapy is unmatched at addressing balance
                  holistically. Once you've built confidence in the water, you
                  carry it back to land, to work, to sport, to your day-to-day.
                </p>
              </Reveal>

              {/* Benefits checklist */}
              <Reveal delay={300}>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5">
                        <CheckCircle size={22} />
                      </span>
                      <span className="text-[14.5px] text-ink leading-[1.55]">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section id="how" className="pt-section" style={{ background: "var(--pt-tint)" }}>
        <div className="pt-shell">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="pt-eyebrow">How it works?</span>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <h2 className="pt-display pt-h2">A simple three-step path.</h2>
            </Reveal>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => {
              const delay = ((i + 1) * 100) as 100 | 200 | 300;
              return (
                <Reveal key={s.n} delay={delay} spring>
                  <div className="pt-card pt-card-hover p-7 md:p-8 h-full">
                    <div
                      className="font-bold leading-none"
                      style={{
                        fontFamily: '"Open Sauce One", Inter, sans-serif',
                        color: "var(--pt-accent)",
                        fontSize: "44px",
                      }}
                    >
                      {s.n}
                    </div>
                    <h3 className="mt-5 text-[20px] font-bold text-ink leading-tight">
                      Step {Number(s.n)} &mdash; {s.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL — dark band */}
      <section className="pt-section" style={{ background: "var(--pt-dark)" }}>
        <div className="pt-shell">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white mx-auto" style={{ background: "var(--pt-accent)" }}>
                <Quote size={18} />
              </div>
            </Reveal>
            <Reveal delay={100} className="mt-8">
              <p
                className="text-white"
                style={{
                  fontFamily: '"Open Sauce One", Inter, sans-serif',
                  fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)",
                  lineHeight: 1.3,
                  fontWeight: 500,
                }}
              >
                &ldquo;It&rsquo;s the only way I can manage my sciatica.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-10 inline-flex items-center gap-3">
              <div className="text-left">
                <div className="text-white font-semibold text-[15px]">Making Waves participant</div>
                <div className="text-white/65 text-[13px] inline-flex items-center gap-1.5 mt-0.5">
                  <span className="inline-flex gap-0.5" style={{ color: "var(--pt-accent)" }}>
                    <Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} /><Star size={12} />
                  </span>
                  <span>Williston salt-water pool</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="pt-section">
        <div className="pt-shell">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Reveal>
                <span className="pt-eyebrow">Other Specialties</span>
              </Reveal>
              <Reveal delay={100} className="mt-6">
                <h2 className="pt-display pt-h2">Explore related programmes.</h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="hidden md:block">
              <a href="/" className="pt-pill pt-pill--dark">All Services</a>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r, i) => {
              const delay = ((i + 1) * 100) as 100 | 200 | 300;
              return (
                <Reveal key={r.title} delay={delay} spring>
                  <a
                    href={r.href}
                    className="group block pt-card pt-card-hover overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden pt-card-zoom">
                      <Image src={r.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex items-center justify-center rounded-full"
                          style={{ width: 32, height: 32, background: "var(--pt-accent-tint)", color: "var(--pt-accent)" }}
                        >
                          <r.Icon size={16} />
                        </span>
                        <h3 className="text-[18px] font-bold text-ink">{r.title}</h3>
                      </div>
                      <p className="mt-3 text-[14px] leading-[1.55] text-ink-soft">{r.body}</p>
                      <span
                        className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all"
                        style={{ color: "var(--pt-accent)" }}
                      >
                        Learn more <ArrowRight size={13} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
