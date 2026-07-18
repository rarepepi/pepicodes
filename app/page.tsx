import { ProjectCard } from "@/components/project-card";
import { GitHubContributions } from "@/components/github-contributions";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-28 pt-8 sm:px-8 sm:pt-14">
      <section
        id="hero"
        className="grid min-h-[24rem] grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-6 border-b border-border/70 pb-12 sm:grid-cols-[minmax(0,1fr)_9rem] sm:gap-10 sm:pb-16"
      >
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
            {DATA.location}
          </p>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl sm:leading-[1.02]">
              Hi, I&apos;m {DATA.name.split(" ")[0]}.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
              {DATA.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className={buttonVariants()}>
              Explore projects
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
        <div className="relative self-start pt-14 sm:self-center sm:pt-0">
          <div className="absolute -inset-3 rounded-full bg-primary/15 blur-2xl" />
          <Avatar className="relative size-[5.5rem] border border-white/10 ring-4 ring-background sm:size-36">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              className="object-cover"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-16 space-y-6 border-b border-border/70 py-12 sm:py-16"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          About
        </h2>
        <div className="space-y-6">
          <Markdown className="prose max-w-none text-pretty font-sans leading-7 text-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
          <div id="skills" className="scroll-mt-20 space-y-3">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Favorite technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="gap-1.5 border-primary/35 bg-primary/10 px-2.5 py-1 text-xs font-medium text-foreground [&_svg]:size-4 [&_svg]:text-primary"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <details className="experience-details">
              <summary className="w-fit cursor-pointer text-sm font-medium text-muted-foreground marker:text-primary transition-colors duration-150 hover:text-foreground">
                Broader experience
              </summary>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {DATA.skillGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {group.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="gap-1.5 border-border/70 bg-card/40 px-2.5 py-1 text-xs font-medium text-muted-foreground [&_svg]:size-4"
                        >
                          {skill.icon}
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-16 space-y-6 border-b border-border/70 py-12 sm:py-16"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Experience
        </h2>
        <div className="space-y-2">
          {DATA.work.map((work) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} — ${work.end ?? "Present"}`}
              description={work.description}
            />
          ))}
        </div>

        <div className="grid gap-8 pt-5 sm:grid-cols-2">
          <div id="education" className="scroll-mt-20 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Education
            </h3>
            {DATA.education.map((education) => (
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} — ${education.end}`}
              />
            ))}
          </div>
          <div id="publication" className="scroll-mt-20 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Publication
            </h3>
            {DATA.publication.map((publication) => (
              <ResumeCard
                key={publication.title}
                href={publication.href}
                logoUrl={publication.logoUrl}
                altText={publication.title}
                title={publication.title}
                subtitle={publication.topics}
                period={publication.date}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="activity"
        className="scroll-mt-16 space-y-6 border-b border-border/70 py-12 sm:py-16"
      >
        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            GitHub
          </h2>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            A public record of commits, pull requests, issues, and reviews.
          </p>
        </div>
        <GitHubContributions />
      </section>

      <section
        id="projects"
        className="scroll-mt-16 space-y-6 border-b border-border/70 py-12 sm:py-16"
      >
        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
            A mix of side projects, experiments, and open-source contributions
            across AI, crypto, and infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.slice(0, 6).map((project) => (
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className={buttonVariants({ variant: "outline" })}
          >
            Browse the archive
            <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>

      <section
        id="blogs"
        className="scroll-mt-16 space-y-6 border-b border-border/70 py-12 sm:py-16"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Writing
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {DATA.blog.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              data-actionable="true"
              className="fine-lift group flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] motion-reduce:transform-none"
            >
              <time className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                {blog.publishedAt}
              </time>
              <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight">
                {blog.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {blog.summary}
              </p>
              <span className="mt-auto flex items-center pt-4 text-sm font-medium">
                Read article
                <ArrowUpRight className="fine-lift-arrow ml-1.5 size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-16 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/80 px-6 py-10 text-center shadow-2xl shadow-black/10 sm:px-12 sm:py-12">
          <div className="absolute left-1/2 top-0 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Have an idea?
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Let&apos;s build something good.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-7 text-muted-foreground sm:text-base">
            Questions, collaborations, or just want to compare notes? My inbox
            is open.
          </p>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Say hello
            <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>

      <footer
        id="source"
        className="flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-8 text-sm text-muted-foreground sm:flex-row"
      >
        <p>© {new Date().getFullYear()} {DATA.name}</p>
        <Link
          href="https://github.com/rarepepi/pepicodes"
          target="_blank"
          className="transition-colors duration-150 hover:text-foreground"
        >
          Source code ↗
        </Link>
      </footer>
    </main>
  );
}
