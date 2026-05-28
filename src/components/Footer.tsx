import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone } from "./Icons";

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/PT360COOP" },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/pt360coop" },
  { Icon: Linkedin, label: "Linkedin", href: "#" },
];

const pages = [
  { label: "Home", href: "#top" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#appointment" },
];

const services = [
  "Aquatic Therapy",
  "Sports Medicine",
  "Vestibular Rehabilitation",
  "Dry Needling",
  "Lymphedema",
  "TMJ Rehabilitation",
];

const locations = [
  {
    city: "Williston",
    addr: "426 Industrial Ave, Suite 190",
    cityLine: "Williston, VT 05495",
    phone: "(802) 860-4360",
  },
  {
    city: "Burlington",
    addr: "80 Colchester Ave",
    cityLine: "Burlington, VT 05401",
    phone: "(802) 657-7990",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10"
      style={{ background: "#1a1a1a", color: "#fff" }}
    >
      <div className="pt-shell">
        {/* Founders dedication band */}
        <div className="max-w-3xl">
          <div className="text-[12px] uppercase tracking-[0.22em] text-white/55 font-medium">
            From our founders
          </div>
          <p className="mt-4 text-[16px] leading-[1.65] text-white/85 italic">
            &ldquo;PT360 was the collaborative genius of our legal team
            consisting of Steve McGowen and Mark Scribner; our financial team of
            one, George Beato; and the love, trust, and support of 12 members,
            families, and friends.&rdquo;
          </p>
        </div>

        <div className="mt-12" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />

        {/* 2-col body: About+social pills | Pages+Services+Locations */}
        <div className="mt-12 grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT: About company */}
          <div className="col-span-12 lg:col-span-5">
            <div className="text-white/55 text-[14px]">About company</div>
            <p className="mt-6 text-[15.5px] leading-[1.65] text-white/85 max-w-md">
              PT360 is an employee-owned Vermont physical therapy cooperative
              that recognizes there are many paths to wellness &mdash; and
              provides 360&deg; of care.
            </p>

            {/* Social pills */}
            <div className="mt-8 flex flex-wrap gap-2.5 max-w-md">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 px-3.5 py-2 transition-colors hover:bg-white/10"
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 50,
                    color: "#fff",
                  }}
                >
                  <span style={{ color: "var(--pt-accent)" }}>
                    <Icon size={14} />
                  </span>
                  <span className="text-[13.5px]">{label}</span>
                </a>
              ))}
              <a
                href="tel:+18028604360"
                className="inline-flex items-center gap-2 px-3.5 py-2 transition-colors hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 50,
                  color: "#fff",
                }}
              >
                <span style={{ color: "var(--pt-accent)" }}>
                  <Phone size={13} />
                </span>
                <span className="text-[13.5px]">Call</span>
              </a>
            </div>
          </div>

          {/* RIGHT: 3-col nav */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Pages */}
            <div>
              <div className="text-white/55 text-[14px]">Pages</div>
              <ul className="mt-6 space-y-3">
                {pages.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      className="text-[15px] text-white/90 hover:text-[var(--pt-accent)] transition-colors"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <div className="text-white/55 text-[14px]">Services</div>
              <ul className="mt-6 space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-[15px] text-white/90 hover:text-[var(--pt-accent)] transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="col-span-2 md:col-span-1">
              <div className="text-white/55 text-[14px]">Locations</div>
              <div className="mt-6 space-y-5">
                {locations.map((l) => (
                  <div key={l.city}>
                    <div className="text-[15px] font-semibold text-white">{l.city}</div>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-white/65">
                      {l.addr}
                      <br />
                      {l.cityLine}
                    </p>
                    <a
                      href={`tel:${l.phone.replace(/[^0-9]/g, "")}`}
                      className="block mt-2 text-[13.5px]"
                      style={{ color: "var(--pt-accent)" }}
                    >
                      {l.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/pt360/logo.png"
              alt="PT360 Coop · Better Together"
              width={130}
              height={78}
              className="h-9 w-auto invert opacity-90"
            />
            <span className="text-[12.5px] text-white/55">PT360 &copy; 2026 · All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12.5px] text-white/55">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Consent</a>
            <a href="#" className="hover:text-white">Notice of Privacy Practices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
