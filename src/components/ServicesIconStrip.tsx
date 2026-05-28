import {
  IconAquatic,
  IconAthletic,
  IconCranio,
  IconNeedling,
  IconLymph,
  IconSports,
  IconVestibular,
  IconTMJ,
} from "./Icons";

type ServiceItem = { label: string; Icon: typeof IconAquatic };

const services: ServiceItem[] = [
  { label: "Aquatic Therapy", Icon: IconAquatic },
  { label: "Athletic Training", Icon: IconAthletic },
  { label: "Craniosacral Therapy", Icon: IconCranio },
  { label: "Dry Needling", Icon: IconNeedling },
  { label: "Lymphedema", Icon: IconLymph },
  { label: "Sports Medicine", Icon: IconSports },
  { label: "Vestibular Rehab", Icon: IconVestibular },
  { label: "TMJ Rehabilitation", Icon: IconTMJ },
];

// Duplicate the list so the marquee can loop seamlessly (-50% of doubled list = 100% of single)
const looped = [...services, ...services];

function Pill({ label, Icon }: ServiceItem) {
  return (
    <a
      href="#services"
      className="group shrink-0 inline-flex items-center gap-3 pl-2 pr-5 py-2 transition-all hover:bg-paper"
      style={{
        border: "1px solid var(--pt-rule)",
        borderRadius: 50,
        background: "transparent",
        height: 52,
      }}
    >
      <span
        className="inline-flex items-center justify-center rounded-full transition-colors"
        style={{
          width: 36,
          height: 36,
          background: "var(--pt-accent-tint)",
          color: "var(--pt-accent)",
        }}
      >
        <Icon size={18} />
      </span>
      <span className="text-[14.5px] font-medium whitespace-nowrap text-ink">
        {label}
      </span>
    </a>
  );
}

export default function ServicesIconStrip() {
  return (
    <section
      aria-label="All specialties"
      className="pt-section-tight pb-12 md:pb-20"
    >
      <div className="pt-marquee-wrap pt-marquee-fade overflow-hidden">
        <div className="pt-marquee-track flex gap-3 w-max">
          {looped.map((s, i) => (
            <Pill key={`${s.label}-${i}`} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
