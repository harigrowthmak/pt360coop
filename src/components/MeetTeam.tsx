import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./Icons";

// 4 PT360 employee-owners with their real bio photos
const team = [
  {
    name: "Amy Sheridan",
    role: "PT, DPT, SCS, CSCS · Owner",
    image: "/pt360/team/amy.jpg",
  },
  {
    name: "Andrew Eames",
    role: "PT, DPT, SCS, ATC · Owner",
    image: "/pt360/team/andrew.jpg",
  },
  {
    name: "Nina Dinan",
    role: "PT, DPT · Executive Director",
    image: "/pt360/team/nina.jpg",
  },
  {
    name: "Kristi Johnson",
    role: "PT, MSPT, CLT · Owner",
    image: "/pt360/team/kristi.jpg",
  },
];

export default function MeetTeam() {
  return (
    <section id="team" className="pt-section">
      <div className="pt-shell">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <span className="pt-eyebrow">Meet The Team</span>
            </Reveal>
            <Reveal delay={100} className="mt-6">
              <h2 className="pt-display pt-h2">
                Meet a few of our employee-owners.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a href="#all-team" className="pt-pill pt-pill--dark">
              Meet The Team
            </a>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((m, i) => {
            const delay = ((i + 1) * 100) as 100 | 200 | 300 | 400;
            return (
              <Reveal key={m.name} delay={delay}>
                <article
                  className="pt-card pt-card-hover overflow-hidden group"
                  style={{ background: "var(--pt-tint)" }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden pt-card-zoom">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 22vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h3 className="text-[15px] md:text-[18px] font-bold text-ink leading-tight">
                      {m.name}
                    </h3>
                    <div aria-hidden className="my-3 h-px" style={{ background: "var(--pt-rule)" }} />
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11.5px] text-ink-soft leading-snug min-w-0">
                        <span style={{ color: "var(--pt-accent)" }} className="font-bold mr-1">
                          //
                        </span>
                        {m.role}
                      </p>
                      <a
                        href="#all-team"
                        aria-label={`Read ${m.name}'s full bio`}
                        className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors hover:bg-paper"
                        style={{ border: "1px solid var(--pt-rule)", color: "var(--pt-ink)" }}
                      >
                        <ArrowUpRight size={13} />
                      </a>
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
