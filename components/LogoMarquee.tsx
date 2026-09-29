import { collaborations } from "@/data/collaborations";

export default function LogoMarquee({ id }: { id?: string }) {
  const track = [...collaborations, ...collaborations];

  return (
    <section id={id} className="border-y border-line bg-base py-10">
      <p className="meta-label mx-auto mb-8 max-w-content px-6 text-ink-dim md:px-10">
        Selected Collaborations
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max gap-16 px-6 md:gap-24 md:px-10">
          {track.map((brand, i) => (
            <span
              key={`${brand.name}-${i}`}
              className="font-display whitespace-nowrap text-2xl font-bold uppercase text-ink-faint transition-colors duration-300 md:text-3xl"
            >
              {brand.name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-base to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-base to-transparent md:w-32" />
      </div>
    </section>
  );
}
