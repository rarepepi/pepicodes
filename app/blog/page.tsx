import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes from Pepi Martinez on software, crypto, economics, and building trustworthy systems.",
};

export default async function BlogPage() {
  const posts = (await getBlogPosts()).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <main className="mx-auto w-full max-w-4xl px-5 pb-28 pt-10 sm:px-8 sm:pt-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-4" />
        Home
      </Link>

      <header className="border-b border-border/70 pb-10 pt-12 sm:pb-14 sm:pt-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Writing
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-6xl sm:leading-[1.02]">
          Ideas worth working through.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Notes on software, crypto, economics, and building systems that
          deserve trust.
        </p>
      </header>

      <section aria-label="Articles" className="divide-y divide-border/70">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid gap-3 py-7 transition-colors duration-150 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[7.5rem_minmax(0,1fr)_1.25rem] sm:gap-6 sm:py-9"
          >
            <time
              dateTime={post.metadata.publishedAt}
              className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {formatDate(post.metadata.publishedAt)}
            </time>
            <div>
              <h2 className="text-balance text-xl font-semibold leading-snug tracking-[-0.025em] text-foreground sm:text-2xl">
                {post.metadata.title}
              </h2>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {post.metadata.summary}
              </p>
            </div>
            <ArrowUpRight className="hidden size-5 text-muted-foreground transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
          </Link>
        ))}
      </section>
    </main>
  );
}
