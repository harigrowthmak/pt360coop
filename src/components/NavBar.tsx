"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, Close } from "./Icons";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full pt-hatched transition-shadow",
          scrolled ? "shadow-[0_4px_24px_-12px_rgba(13,59,134,0.18)]" : "",
        ].join(" ")}
        style={{
          backgroundColor: scrolled
            ? "rgba(242, 242, 242, 0.92)"
            : "rgba(242, 242, 242, 0.65)",
          backdropFilter: "blur(8px)",
        }}
      >
      <div className="pt-shell flex items-center justify-between gap-4 py-3 md:py-3.5">
        {/* Logo */}
        <Link href="/" aria-label="PT360 Coop — Home" className="shrink-0">
          <Image
            src="/pt360/logo.png"
            alt="PT360 Coop"
            width={130}
            height={78}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Center nav — desktop only */}
        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right cluster — desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Desktop / tablet CTA — wrap in a div so `hidden` wins over `.pt-pill` display */}
          <div className="hidden sm:block shrink-0">
            <a
              href="#appointment"
              className="pt-pill pt-pill--dark pt-pill--no-slashes"
            >
              <Phone size={15} />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/40"
            style={{
              width: 44,
              height: 44,
              border: "1px solid var(--pt-rule)",
              color: "var(--pt-ink)",
            }}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer — rendered as sibling of <header> so that the header's
          backdrop-filter doesn't create a containing block trapping fixed inset-0. */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Scrim */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0"
          style={{ background: "rgba(13, 59, 134, 0.55)", backdropFilter: "blur(4px)" }}
          tabIndex={open ? 0 : -1}
        />

        {/* Panel — slides in from right */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-[360px] flex flex-col",
            "transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)]",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          style={{ background: "var(--pt-bg)" }}
        >
          {/* Header row inside panel */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: "1px solid var(--pt-rule)" }}
          >
            <Image
              src="/pt360/logo.png"
              alt="PT360 Coop"
              width={110}
              height={66}
              className="h-9 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full transition-colors hover:bg-white/60"
              style={{
                width: 40,
                height: 40,
                border: "1px solid var(--pt-rule)",
                color: "var(--pt-ink)",
              }}
            >
              <Close size={18} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-[20px] font-medium text-ink transition-colors hover:text-accent"
                    style={{ borderBottom: "1px solid var(--pt-rule)" }}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: "var(--pt-accent)" }} aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA footer */}
          <div
            className="px-5 py-5"
            style={{ borderTop: "1px solid var(--pt-rule)" }}
          >
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="pt-pill pt-pill--accent pt-pill--no-slashes w-full justify-center"
            >
              <Phone size={15} />
              <span>Book Appointment</span>
            </a>
            <div className="mt-4 text-center">
              <a
                href="tel:+18028604360"
                className="text-[13px] font-medium"
                style={{ color: "var(--pt-ink-soft)" }}
              >
                Williston · (802) 860-4360
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
