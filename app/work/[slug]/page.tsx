import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getAdjacentProject,
} from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Sky Moment`,
      description: project.tagline,
      images: [{ url: project.cover.poster }],
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getAdjacentProject(project.slug);

  return (
    <main>
      <section className="relative flex h-[85svh] min-h-[520px] w-full items-end overflow-hidden bg-base">
        <div className="absolute inset-0">
          {project.cover.type === "video" ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={project.cover.poster}
            >
              <source src={project.cover.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.cover.src}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-10 md:pb-20">
          <div className="mx-auto max-w-content">
            <p className="meta-label mb-4 text-ink-dim">
              {project.categories.join(" / ")} &middot; {project.year}
            </p>
            <h1 className="max-w-3xl font-display text-display-lg font-black uppercase leading-[0.96] text-ink">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-ink-dim">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-content gap-14 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="meta-label mb-4 text-ink-dim">Overview</p>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-dim">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <p className="meta-label mb-4 text-ink-dim">Services</p>
              <ul className="flex flex-col gap-2">
                {project.services.map((s) => (
                  <li
                    key={s}
                    className="font-display text-lg font-bold uppercase text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="meta-label mb-4 text-ink-dim">Credits</p>
              <ul className="flex flex-col gap-2 font-body text-ink-dim">
                {project.credits.map((c) => (
                  <li key={c.role}>
                    <span className="text-ink-faint">{c.role}:</span>{" "}
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-content">
          <p className="meta-label mb-6 text-ink-dim">Gallery</p>
          <ProjectGallery items={project.gallery} />
        </div>
      </section>

      <section className="border-t border-line px-6 py-16 md:px-10">
        <Link
          href={`/work/${next.slug}`}
          className="group mx-auto flex max-w-content items-center justify-between gap-6"
        >
          <div>
            <p className="meta-label mb-3 text-ink-dim">Next Project</p>
            <p className="font-display text-3xl font-extrabold uppercase text-ink transition-transform duration-500 ease-cinematic group-hover:translate-x-2 md:text-5xl">
              {next.title}
            </p>
          </div>
          <span
            aria-hidden
            className="text-2xl text-ink-dim transition-transform duration-500 ease-cinematic group-hover:translate-x-2 group-hover:text-accent"
          >
            &#8594;
          </span>
        </Link>
      </section>
    </main>
  );
}
