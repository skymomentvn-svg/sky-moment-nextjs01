import RevealOnScroll from "./RevealOnScroll";

export default function SkyMomentWay() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-32 md:px-10 md:py-44">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-30"
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero/way-poster.jpg"
        >
          <source src="/videos/projects/the-sky-moment-way.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/70 to-surface" />
      </div>

      <div className="relative mx-auto max-w-content">
        <RevealOnScroll>
          <p className="meta-label mb-6 text-ink-dim">The Sky Moment Way</p>
          <p className="max-w-2xl font-display text-display-md font-black uppercase leading-[1.02] text-ink">
            Not just movement across the sky.
          </p>
          <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-ink-dim">
            With Sky Moment, every take-off is a search for a different
            angle &mdash; where the familiar becomes new again, and every
            movement, moment and beam of light adds to a story of its own.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
