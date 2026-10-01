"use client";

import type { Service } from "@/data/services";

export default function ServiceNav({
  services,
  activeIndex,
  onSelect,
}: {
  services: Service[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <>
      {/* Desktop: vertical list with a sliding active indicator */}
      <div className="relative hidden md:block">
        <div
          aria-hidden
          className="absolute left-0 top-0 w-0.5 bg-accent transition-transform duration-500 ease-cinematic"
          style={{ height: `${100 / services.length}%`, transform: `translateY(${activeIndex * 100}%)` }}
        />
        <ul className="border-l border-line">
          {services.map((service, i) => {
            const active = i === activeIndex;
            return (
              <li key={service.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className={`group flex w-full items-baseline gap-4 py-4 pl-6 pr-4 text-left transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-dim hover:text-ink"
                  }`}
                >
                  <span className={`meta-label ${active ? "text-accent" : "text-ink-faint"}`}>
                    {service.index}
                  </span>
                  <span
                    className={`font-display text-lg font-extrabold uppercase transition-transform duration-500 ease-cinematic ${
                      active ? "translate-x-1.5" : "group-hover:translate-x-1.5"
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile: horizontal scrollable chips */}
      <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 md:hidden">
        {services.map((service, i) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => onSelect(i)}
            className={`meta-label shrink-0 rounded-full border px-4 py-2 transition-colors duration-300 ${
              i === activeIndex ? "border-accent text-accent" : "border-line text-ink-dim"
            }`}
          >
            {service.index} {service.title}
          </button>
        ))}
      </div>
    </>
  );
}
