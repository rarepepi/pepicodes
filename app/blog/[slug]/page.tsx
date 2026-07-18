import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = await getPost(slug);

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      id="blog"
      className="mx-auto w-full max-w-4xl px-5 pb-28 pt-10 sm:px-8 sm:pt-16"
    >
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-4" />
        All writing
      </Link>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <header className="border-b border-border/70 pb-10 pt-12 sm:pb-12 sm:pt-16">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
          <span className="text-primary">Writing</span>
          <span className="size-1 rounded-full bg-border" />
          <time
            dateTime={post.metadata.publishedAt}
            className="text-muted-foreground"
          >
            {formatDate(post.metadata.publishedAt)}
          </time>
        </div>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl sm:leading-[1.03]">
          {post.metadata.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {post.metadata.summary}
        </p>
      </header>

      <article
        className="prose prose-lg mx-auto max-w-3xl py-10 text-foreground dark:prose-invert sm:py-14 prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-h1:hidden prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8 prose-p:text-pretty prose-p:leading-8 prose-p:text-foreground/85 prose-a:font-medium prose-a:text-primary prose-a:decoration-primary/40 prose-a:underline-offset-4 hover:prose-a:decoration-primary prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:font-medium prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:border-border/70 prose-pre:bg-card/80"
        dangerouslySetInnerHTML={{ __html: post.source }}
      />

      <footer className="border-t border-border/70 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="size-4" />
          Back to all writing
        </Link>
      </footer>
    </main>
  );
}
