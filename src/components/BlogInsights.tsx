import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";

// Real PT360 blog posts
const posts = [
  {
    category: "Advocacy",
    title: "Taking action with APTA Vermont.",
    body:
      "A note from PT360 owner & APTA Vermont board member Amy Sheridan on three years of advocacy for physical therapy across the state.",
    date: "Sep 25, 2024",
    author: "Amy Sheridan, PT",
    image: "/pt360/team-2023.jpg",
  },
  {
    category: "Outdoor Health",
    title: "Continuing the fight against ticks — Lyme disease rehabilitation.",
    body:
      "Summer in Vermont means gardening, hiking and ticks. Beca Meryman on Vermont's only Lyme rehab program and lifelong management.",
    date: "Jun 12, 2024",
    author: "Beca Meryman, PT, DPT",
    image: "/pt360/feature-sept.jpg",
  },
  {
    category: "Winter Wellness",
    title: "Hip tips for the winter months.",
    body:
      "Becky Street, PT, DPT, OCS on keeping hips happy through a Vermont winter — what to watch for and how to move through the cold.",
    date: "Feb 16, 2024",
    author: "Becky Street, PT, DPT, OCS",
    image: "/pt360/wellness.jpg",
  },
];

export default function BlogInsights() {
  return (
    <section id="blog" className="pt-section">
      <div className="pt-shell">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="pt-eyebrow">From the Blog</span>
          </Reveal>
          <Reveal delay={100} className="mt-6">
            <h2 className="pt-display pt-h2">
              Notes from the cooperative.
            </h2>
          </Reveal>
        </div>

        {/* List */}
        <div className="mt-14 md:mt-20">
          {posts.map((p, i) => {
            const delay = ((i + 1) * 100) as 100 | 200 | 300;
            return (
              <Reveal key={p.title} delay={delay}>
                <article
                  className="grid grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-10"
                  style={{ borderTop: i === 0 ? "1px solid var(--pt-rule)" : "none", borderBottom: "1px solid var(--pt-rule)" }}
                >
                  {/* Category pill */}
                  <div className="col-span-12 md:col-span-2">
                    <span
                      className="inline-flex px-3.5 py-1.5 rounded-full text-[12.5px] font-medium text-white"
                      style={{ background: "var(--pt-accent)" }}
                    >
                      {p.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display pt-display text-[20px] md:text-[26px] font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-ink-soft leading-[1.55] max-w-2xl">
                      {p.body}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-soft">
                      <span className="whitespace-nowrap">{p.date}</span>
                      <span style={{ background: "var(--pt-rule)" }} className="hidden sm:inline-block w-1 h-1 rounded-full" />
                      <span className="whitespace-nowrap">{p.author}</span>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 font-semibold sm:ml-auto group whitespace-nowrap"
                        style={{ color: "var(--pt-accent)" }}
                      >
                        <ArrowUpRight size={14} />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>

                  {/* Thumb */}
                  <div className="col-span-12 md:col-span-3">
                    <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: 10 }}>
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 280px, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
