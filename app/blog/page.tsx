import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/reveal";
import { getSortedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: { absolute: "Blog | VOYO Dijital — Dijital Pazarlama & NFC Rehberleri" },
  description:
    "Sosyal medya, reklam, web tasarım, yazılım ve NFC Google yorum üzerine pratik rehberler ve fiyat bilgileri. VOYO Dijital blogu.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "VOYO Dijital Blog",
    description:
      "Dijital pazarlama ve NFC Google yorum üzerine pratik rehberler.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedPosts();
  const baseUrl = "https://voyo.com.tr";
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "VOYO Dijital Blog",
    url: `${baseUrl}/blog`,
    inLanguage: "tr-TR",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${baseUrl}/blog/${p.slug}`,
      datePublished: p.date,
      description: p.description,
    })),
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* ===== Üst bölüm ===== */}
        <section className="relative isolate overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <Reveal
              as="span"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-voyo-orange-ink"
            >
              Blog
            </Reveal>
            <Reveal
              as="h1"
              delay={60}
              className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Dijital Pazarlama & NFC Rehberleri
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Sosyal medya, reklam, web, yazılım ve Google yorum üzerine
              işletmenize değer katacak pratik rehberler.
            </Reveal>
          </div>
        </section>

        {/* ===== Yazı listesi ===== */}
        <section className="pb-16 sm:pb-24 lg:pb-28">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 60}>
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <article className="group flex h-full flex-col gap-4 rounded-2xl bg-card p-7 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:ring-voyo-orange/40">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-voyo-orange-ink">
                        {post.category}
                        <span className="inline-flex items-center gap-1 font-medium normal-case tracking-normal text-muted-foreground">
                          <Clock className="size-3.5" />
                          {post.readingMinutes} dk
                        </span>
                      </div>
                      <h2 className="text-balance text-xl font-bold leading-snug tracking-tight text-foreground">
                        {post.title}
                      </h2>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink">
                        Devamını oku
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </>
  );
}
