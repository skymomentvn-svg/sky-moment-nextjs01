"use client";

import { useEffect, useState } from "react";
import { services } from "@/data/services";
import RevealOnScroll from "./RevealOnScroll";
import ServiceNav from "./ServiceNav";
import ServiceDetail from "./ServiceDetail";
import YouTubePlayer from "./YouTubePlayer";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const active = services[activeIndex];

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeVideo]);

  return (
    <section id="services" className="bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <p className="meta-label mb-4 text-ink-dim">What We Do</p>
          <h2 className="mb-14 font-display text-display-md font-black uppercase text-ink md:mb-16">
            Services
          </h2>
        </RevealOnScroll>

        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <ServiceNav services={services} activeIndex={activeIndex} onSelect={setActiveIndex} />
          <ServiceDetail service={active} onPlay={setActiveVideo} />
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-10">
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute right-5 top-5 z-10 font-body text-sm text-ink-dim transition-colors hover:text-ink md:right-10 md:top-10"
          >
            Close &#10005;
          </button>
          <div className="aspect-video w-full max-w-5xl">
            <YouTubePlayer url={activeVideo} autoplayOnMount />
          </div>
        </div>
      )}
    </section>
  );
}
