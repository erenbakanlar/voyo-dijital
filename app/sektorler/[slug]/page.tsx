import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/cta-link";
import { WhatsappIcon } from "@/components/icons/social";
import { getSectorBySlug, sectorPages } from "@/lib/sector-data";
import { serviceRegions, whatsappWithMessage } from "@/lib/site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return sectorPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Sektör Bulunamadı", robots: { index: false } };
  return {
    title: { absolute: sector.seoTitle },
    description: sector.seoDescription,
    keywords: sector.secondaryKeywords,
    alternates: { canonical: `/sektorler/${slug}` },
    openGraph: {
      title: sector.seoTitle,
      description: sector.seoDescription,
      url: `/sektorler/${slug}`,
    },
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const baseUrl = "https://voyo.com.tr";
  const pageUrl = `${baseUrl}/sektorler/${sector.slug}`;
  const waHref = whatsappWithMessage(
    `Merhaba VOYO, ${sector.name} için dijital pazarlama hakkında bilgi/teklif almak istiyorum.`,
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: sector.primaryKeyword,
    serviceType: `${sector.name} için dijital pazarlama`,
    description: sector.seoDescription,
    url: pageUrl,
    provider: {
      "@type": "ProfessionalService",
      name: "VOYO Dijital",
      url: baseUrl,
    },
    areaServed: ["Antalya", ...serviceRegions].map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Anasayfa", item: baseUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sektörler",
        item: `${baseUrl}/sektorler`,
      },
      { "@type": "ListItem", position: 3, name: sector.name, item: pageUrl },
    ],
  };
  const faqJsonLd =
    sector.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sector.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* ===== Hero ===== */}
        <section className="relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Link
                href="/sektorler"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Tüm Sektörler
              </Link>
            </Reveal>
            <Reveal
              as="span"
              delay={60}
              className="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-voyo-orange-ink"
            >
              {sector.primaryKeyword}
            </Reveal>
            <Reveal
              as="h1"
              delay={100}
              className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {sector.heroHeadline}
            </Reveal>
            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {sector.intro.map((p, i) => (
                <Reveal
                  as="p"
                  key={i}
                  delay={160 + i * 60}
                  className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal delay={320} className="mt-9">
              <CtaLink href={waHref} variant="primary" size="lg" external>
                <WhatsappIcon className="size-4" />
                {sector.name} İçin Teklif Al
              </CtaLink>
            </Reveal>
          </div>
        </section>

        {/* ===== Zorluklar ===== */}
        <section className="relative py-12 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {sector.name} dijitalde nelerle zorlanıyor?
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {sector.challenges.map((c, i) => (
                <Reveal as="div" key={c.title} delay={(i % 2) * 60}>
                  <div className="flex h-full flex-col gap-2 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
                    <h3 className="font-bold leading-snug tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VOYO Yaklaşımı ===== */}
        <section className="relative border-t border-foreground/10 bg-surface-sunken py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                VOYO'nun {sector.name} çözümü
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {sector.approach.map((a, i) => (
                <Reveal as="div" key={a.title} delay={(i % 2) * 60}>
                  <div className="flex h-full items-start gap-4 rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
                    <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-voyo-orange/15 text-voyo-orange">
                      <Check className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-bold leading-snug tracking-tight text-foreground">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SSS ===== */}
        {sector.faqs.length > 0 && (
          <section className="relative py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Sıkça Sorulan Sorular
                </h2>
              </Reveal>
              <div className="mt-8 flex flex-col gap-3">
                {sector.faqs.map((f, i) => (
                  <Reveal as="div" key={f.q} delay={(i % 4) * 50}>
                    <details className="group rounded-xl bg-card ring-1 ring-foreground/10 [&_summary]:list-none">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-foreground">
                        {f.q}
                        <ChevronDown className="size-5 shrink-0 text-voyo-orange transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCta />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
