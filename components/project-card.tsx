import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { LinkPreview } from "./ui/link-preview";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  priority?: boolean;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  priority = false,
  links,
  className,
}: Props) {
  const media = (
    <>
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="fine-lift-media pointer-events-none aspect-video w-full object-cover object-top"
        />
      )}
      {image && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          loading={priority ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
          className="fine-lift-media aspect-video h-auto w-full object-cover object-top"
        />
      )}
    </>
  );

  return (
    <Card
      data-actionable={Boolean(href || links?.length)}
      className="fine-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60"
    >
      {href ? (
        <Link
          href={href}
          aria-label={title}
          className={cn(
            "block cursor-pointer overflow-hidden border-b border-border/70 transition-transform duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring active:scale-[0.99] motion-reduce:transform-none",
            className
          )}
        >
          {media}
        </Link>
      ) : (
        <div className={cn("overflow-hidden border-b border-border/70", className)}>
          {media}
        </div>
      )}
      <CardHeader className="p-4 pb-0">
        <div className="space-y-1.5">
          <CardTitle className="text-base">
            {href ? (
              <Link
                href={href}
                className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </CardTitle>
          <time className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs leading-5 text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="border-border/70 bg-transparent px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                variant="outline"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-4">
        {links && links.length > 0 ? (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <LinkPreview url={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2.5 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </LinkPreview>
            ))}
          </div>
        ) : !href ? (
          <Badge variant="outline" className="px-2.5 py-1 text-[10px] text-muted-foreground">
            Private
          </Badge>
        ) : null}
      </CardFooter>
    </Card>
  );
}
