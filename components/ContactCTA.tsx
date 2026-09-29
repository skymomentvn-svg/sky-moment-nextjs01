import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import { contactChannelList } from "@/data/contact";

// Alternate headline, if you'd rather swap it in:
// "Let's create something worth remembering."
export default function ContactCTA() {
  return (
    <section className="border-t border-line bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[1.3fr_1fr] md:items-end">
        <RevealOnScroll>
          <h2 className="font-display text-display-lg font-black uppercase leading-[0.96] text-ink">
            Have a story
            <br />
            to tell?
          </h2>
          <p className="mt-6 max-w-md font-body text-lg text-ink-dim">
            Let&rsquo;s create a different perspective.
          </p>
          <Link
            href="#contact-form"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 font-body text-sm font-semibold text-base transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a Project &#8594;
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <p className="meta-label mb-5 text-ink-faint">Reach us directly</p>
          <ul className="flex flex-col gap-3 border-t border-line pt-5">
            {contactChannelList.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className="flex items-center justify-between gap-4 border-b border-line py-3 font-body text-ink-dim transition-colors duration-300 hover:text-ink"
                >
                  <span className="meta-label text-ink-faint">{channel.label}</span>
                  <span>{channel.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
