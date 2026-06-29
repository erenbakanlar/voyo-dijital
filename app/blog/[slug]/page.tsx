import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/reveal";
import {
  blogPosts,
  getPostBySlug,
  getSortedPosts,
  type PostBlock,
} from "@/lib/blog-data";

// Yalnızca tanımlı slug'lar geçerli; diğerleri 404
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı", robots: { index: false } };
  return {
    title: { absolute: post.title },
    description: post.description,
    keywords: [post.targetKeyword],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 flex flex-col gap-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-voyo-orange" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-voyo-orange/20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty font-medium text-foreground">{block.text}</p>
          <Link
            href={block.href}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-voyo-orange px-6 py-3 text-sm font-semibold text-voyo-dark transition-transform hover:-translate-y-0.5"
          >
            {block.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const baseUrl = "https://voyo.com.tr";
  const url = `${baseUrl}/blog/${post.slug}`;
  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: "VOYO Dijital", url: baseUrl },
    publisher: {
      "@type": "Organization",
      name: "VOYO Dijital",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/web-app-manifest-512x512.png`,
      },
    },
    mainEntityOfPage: url,
    url,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        <article>
          {/* ===== Üst bölüm ===== */}
          <section className="relative isolate overflow-hidden pt-28 pb-8 sm:pt-32 lg:pt-40">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
            <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
              <Reveal>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="size-4" />
                  Tüm Yazılar
                </Link>
              </Reveal>
              <Reveal
                as="span"
                delay={60}
                className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-voyo-orange-ink"
              >
                {post.category}
              </Reveal>
              <Reveal
                as="h1"
                delay={100}
                className="mt-3 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                {post.title}
              </Reveal>
              <Reveal
                delay={160}
                className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
              >
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readingMinutes} dk okuma
                </span>
              </Reveal>
            </div>
          </section>

          {/* ===== İçerik ===== */}
          <section className="pb-12 sm:pb-16">
            <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
              {post.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>

          {/* ===== İlgili yazılar ===== */}
          {related.length > 0 && (
            <section className="border-t border-foreground/10 bg-surface-sunken py-14 lg:py-20">
              <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  İlgili Yazılar
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block">
                      <div className="group flex h-full flex-col gap-3 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:ring-voyo-orange/40">
                        <span className="text-xs font-semibold uppercase tracking-wider text-voyo-orange-ink">
                          {p.category}
                        </span>
                        <h3 className="font-bold leading-snug tracking-tight text-foreground">
                          {p.title}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink">
                          Devamını oku
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>

        <ContactCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
