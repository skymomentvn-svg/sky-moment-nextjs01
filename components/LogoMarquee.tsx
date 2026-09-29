"use client";

import { useState } from "react";
import Image from "next/image";
import { collaborations } from "@/data/collaborations";

export default function LogoMarquee({ id }: { id?: string }) {
  const track = [...collaborations, ...collaborations];

  return (
    <section id={id} className="border-y border-line bg-base py-10">
      <p className="meta-label mx-auto mb-8 max-w-content px-6 text-ink-dim md:px-10">
        Selected Collaborations
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 px-6 md:gap-24 md:px-10">
          {track.map((brand, i) =>
            brand.logo ? (
              <LogoImage key={`${brand.name}-${i}`} name={brand.name} logo={brand.logo} />
            ) : (
              <span
                key={`${brand.name}-${i}`}
                className="font-display whitespace-nowrap text-2xl font-bold uppercase text-ink-faint transition-colors duration-300 md:text-3xl"
              >
                {brand.name}
              </span>
            )
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent md:w-32" />
      </div>
    </section>
  );
}

// Renders the logo file; if it 404s (wrong path/filename), falls back
// to the text wordmark instead of showing a broken image forever.
function LogoImage({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-display whitespace-nowrap text-2xl font-bold uppercase text-ink-faint transition-colors duration-300 md:text-3xl">
        {name}
      </span>
    );
  }

  return (
    <div className="relative h-8 w-28 shrink-0 opacity-60 transition-all duration-300 [filter:brightness(0)_invert(1)] hover:opacity-100 hover:[filter:none] md:h-10 md:w-36">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="140px"
        className="object-contain object-left"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
