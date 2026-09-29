"use client";

import { useMemo, useState } from "react";
import { projects, filterCategories, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import RevealOnScroll from "./RevealOnScroll";

export default function SelectedWork() {
  const [filter, setFilter] = useState<(typeof filterCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter as ProjectCategory));
  }, [filter]);

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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-body text-ink-dim">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
