import Link from "next/link";
import { contactInfo } from "@/data/contact";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [contactInfo.instagram, contactInfo.facebook, contactInfo.tiktok];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base px-6 py-16 md:px-10">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold uppercase text-ink">
              Sky Moment
            </p>
            <p className="mt-3 font-body text-ink-dim">
              Every flight tells a story.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="meta-label text-ink-faint">Navigate</p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-ink-dim transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="meta-label text-ink-faint">Follow</p>
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-body text-ink-dim transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="meta-label text-ink-faint">Contact</p>
            <a
              href={contactInfo.phone.href}
              className="font-body text-ink-dim transition-colors hover:text-ink"
            >
              {contactInfo.phone.label}
            </a>
            <a
              href={contactInfo.email.href}
              className="font-body text-ink-dim transition-colors hover:text-ink"
            >
              {contactInfo.email.label}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Sky Moment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
