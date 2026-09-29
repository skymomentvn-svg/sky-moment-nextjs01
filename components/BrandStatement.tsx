import RevealOnScroll from "./RevealOnScroll";

export default function BrandStatement() {
  return (
    <section id="about" className="bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-2 md:gap-20">
        <RevealOnScroll>
          <p className="meta-label mb-6 text-ink-dim">About Sky Moment</p>
          <h2 className="font-display text-display-md font-black uppercase leading-[0.98] text-ink">
            More than a camera in the sky.
          </h2>
          <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-ink-dim">
            We create perspectives that move, connect and stay. From
            cinematic FPV flights to aerial films, photography and immersive
            360&deg; experiences, Sky Moment transforms movement, light and
            space into visual stories.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface">
            <video
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="none"
              poster="/images/hero/brand-statement-poster.jpg"
            >
              <source src="/videos/projects/brand-statement.mp4" type="video/mp4" />
            </video>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
