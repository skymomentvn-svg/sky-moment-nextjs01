"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FpvDrone from "./FpvDrone";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [fly, setFly] = useState({ x: 0, w: 0, tilt: 0, on: false });
  const lastX = useRef<number | null>(null);
  const tiltTimer = useRef<number>();

  // FPV hover: drone flies to the hovered link, banking in the travel direction.
  const flyTo = (el: HTMLElement) => {
    const x = el.offsetLeft;
    const dir = lastX.current === null ? 0 : Math.sign(x - lastX.current);
    lastX.current = x;
    window.clearTimeout(tiltTimer.current);
    setFly({ x, w: el.offsetWidth, tilt: dir * 28, on: true });
    tiltTimer.current = window.setTimeout(() => setFly((f) => ({ ...f, tilt: 0 })), 320);
  };
  const landOff = () => {
    lastX.current = null;
    setFly((f) => ({ ...f, on: false, tilt: 0 }));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image
            src="/images/logo/sky-moment-logo.png"
            alt="Sky Moment"
            width={846}
            height={475}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="relative hidden items-center gap-10 md:flex" onMouseLeave={landOff}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={(e) => flyTo(e.currentTarget)}
              onFocus={(e) => flyTo(e.currentTarget)}
              onBlur={landOff}
              className="meta-label text-ink-dim transition-colors duration-300 hover:text-ink focus-visible:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-4 left-0 h-px bg-accent"
            style={{
              width: fly.w,
              transform: `translateX(${fly.x}px)`,
              opacity: fly.on ? 1 : 0,
              transition: "transform .5s cubic-bezier(.16,1,.3,1), width .5s cubic-bezier(.16,1,.3,1), opacity .25s",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-7 left-0"
            style={{
              transform: `translateX(${fly.x + fly.w / 2 - 12}px)`,
              opacity: fly.on ? 1 : 0,
              transition: "transform .5s cubic-bezier(.16,1,.3,1), opacity .25s",
            }}
          >
            <FpvDrone
              size={24}
              style={{ transform: `rotate(${fly.tilt}deg)`, transition: "transform .25s ease-out" }}
            />
          </span>
        </nav>

        <Link
          href="/#contact"
          className="hidden meta-label items-center gap-2 rounded-full border border-line px-5 py-2.5 text-ink transition-colors duration-300 hover:border-accent hover:text-accent md:inline-flex"
        >
          Start a Project
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="meta-label flex items-center gap-2 text-ink md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 flex flex-col justify-between bg-base px-6 pb-10 pt-10 md:hidden">
          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-extrabold text-ink"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="meta-label inline-flex items-center justify-center rounded-full border border-line px-5 py-4 text-ink"
          >
            Start a Project
          </Link>
        </div>
      )}
    </header>
  );
}
