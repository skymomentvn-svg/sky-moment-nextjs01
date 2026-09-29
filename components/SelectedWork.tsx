"use client";

import { useEffect, useMemo, useState } from "react";
import { projects, filterCategories, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";
import YouTubePlayer from "./YouTubePlayer";

export default function SelectedWork() {
  const [filter, setFilter] = useState<(typeof filterCategories)[number]>("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter as ProjectCategory));
  }, [filter]);

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
    <section id="work" className="bg-base px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
            <h2 className="font-display text-display-md font-black uppercase text-ink">
              Selected Work
            </h2>

            <div className="no-scrollbar -mx-6 flex gap-3 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`meta-label shrink-0 rounded-full border px-4 py-2 transition-colors duration-300 ${
                    filter === cat
                      ? "border-accent text-accent"
                      : "border-line text-ink-dim hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} onPlay={setActiveVideo} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-body text-ink-dim">
            No projects in this category yet.
          </p>
        )}
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
