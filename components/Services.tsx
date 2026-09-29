"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import RevealOnScroll from "./RevealOnScroll";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? services[activeIndex] : null;

  return (
    <section id="services" className="relative bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <p className="meta-label mb-4 text-ink-dim">What We Do</p>
          <h2 className="mb-14 font-display text-display-md font-black uppercase text-ink md:mb-20">
            Services
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <ul
            className="divide-y divide-line border-t border-line"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {services.map((service, i) => (
              <li key={service.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left transition-colors duration-300 md:grid-cols-[64px_1fr_1fr_32px] md:gap-8 md:py-9"
                >
                  <span className="meta-label text-ink-faint">
                    {service.index}
                  </span>

                  <span className="font-display text-2xl font-extrabold uppercase text-ink transition-transform duration-500 ease-cinematic group-hover:translate-x-2 md:text-4xl">
                    {service.title}
                  </span>

                  <span className="hidden font-body text-sm text-ink-dim md:block">
                    {service.summary}
                    <span className="block text-ink-faint">{service.detail}</span>
                  </span>

                  <span
                    aria-hidden
                    className="justify-self-end text-2xl text-ink-dim transition-transform duration-500 ease-cinematic group-hover:translate-x-1 group-hover:text-accent"
                  >
                    &#8599;
                  </span>
                </button>
                <p className="pb-6 font-body text-sm text-ink-dim md:hidden">
                  {service.summary} <span className="text-ink-faint">{service.detail}</span>
                </p>
              </li>
            ))}
          </ul>

          {/* Floating hover-reveal media panel, desktop only */}
          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-[340px] w-[280px] overflow-hidden rounded-sm bg-surface transition-opacity duration-500 md:block"
            style={{ opacity: active ? 1 : 0 }}
            aria-hidden
          >
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeIndex === i ? 1 : 0 }}
              >
                {service.media.type === "video" ? (
                  <video
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={service.media.poster}
                  >
                    <source src={service.media.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={service.media.src}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
