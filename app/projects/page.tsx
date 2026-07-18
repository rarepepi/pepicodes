import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of side projects, open-source contributions, and experiments.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-28 pt-10 sm:px-8 sm:pt-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-4" />
        Home
      </Link>

      <header className="border-b border-border/70 pb-10 pt-12 sm:pb-14 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Archive
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl sm:leading-[1.02]">
          Projects
        </h1>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Side projects, experiments, and open-source contributions across
            AI, crypto, infrastructure, and consumer products.
          </p>
          <p className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {DATA.projects.length}{" "}projects &amp; contributions
          </p>
        </div>
      </header>

      <section
        aria-label="All projects"
        className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 sm:py-14 lg:grid-cols-3"
      >
        {DATA.projects.map((project, index) => (
          <ProjectCard
            href={project.href}
            key={project.title}
            title={project.title}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            priority={index === 0}
            links={project.links}
          />
        ))}
      </section>
    </main>
  );
}
