import BackgroundMagic from "@/components/BackgroundMagic";
import BlurFade from "../components/magicui/blur-fade";
import BlurFadeText from "../components/magicui/blur-fade-text";
import { ProjectCard } from "../components/project-card";
import { ResumeCard } from "../components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { DATA } from "../data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
// import OrbitingCircles from "@/components/magicui/orbiting-circles";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Publication</h2>
          </BlurFade>
          {DATA.publication.map((publication, id) => (
            <BlurFade
              key={publication.title}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={publication.title}
                href={publication.href}
                logoUrl={publication.logoUrl}
                altText={publication.title}
                title={publication.title}
                subtitle={publication.topics}
                period={publication.date}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill: { name: string; icon: any }, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={skill.name}>{skill.name}</Badge>
              </BlurFade>
            ))}
          </div>
          {/* <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            {DATA.skills
              .filter((skill) => skill.icon)
              .map((skill, i) => (
                <OrbitingCircles
                  className={`size-[${
                    i % 3 === 0 ? "30" : "50"
                  }px] border-none bg-transparent`}
                  duration={20}
                  delay={i * 3 + 1}
                  radius={i % 3 === 0 ? 50 : 120}
                  reverse={i % 3 === 0 ? true : false}
                >
                  {skill.icon}
                </OrbitingCircles>
              ))}
          </div> */}
        </div>
      </section>
      <section id="blogs">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Blog</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.blog.map((blog, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                key={blog.slug}
              >
                <Link
                  className="flex flex-col space-y-1"
                  href={`/blog/${blog.slug}`}
                >
                  <div className="w-full flex flex-col">
                    <p className="font-semibold text-lg">{blog.publishedAt}</p>
                    <p className="tracking-tight text-lg">{blog.title}</p>
                    <p className="py-2 text-sm text-muted-foreground">
                      {blog.summary}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI tools to blockchain solutions, I&apos;ve worked on
                  everything from simple sites to advanced full-stack apps,
                  APIs, and even an iOS app. Here are a few I&apos;m proud of.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s connect
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Got a question? Feel free to DM me on{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-400 hover:underline"
                  aria-label="X Profile Link"
                >
                  X
                </Link>{" "}
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="source">
        <div className="grid items-center justify-center h-40 gap-4 text-center md:px-6 px-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-3">
              <p className="flex mx-auto gap-2 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <Link
                  href={`https://github.com/rarepepi/pepicodes`}
                  className="text-blue-400 hover:underline"
                  aria-label="Source Code for this Site Link"
                  target="_blank"
                >
                  Source code
                </Link>{" "}
                for this portfolio.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* BACKGROUND */}
      <BackgroundMagic />
    </main>
  );
}
