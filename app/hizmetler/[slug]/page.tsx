import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/cta-link";
import { ContactLink, ObfuscatedCtaButton } from "@/components/contact-link";
import { WhatsappIcon } from "@/components/icons/social";
import { encodeContact } from "@/lib/contact";
import {
  getServiceBySlug,
  getTeamBySlug,
  serviceFaqs,
  serviceRegions,
  serviceSeo,
  services,
  site,
  whatsappForService,
} from "@/lib/site-data";

// Yalnızca tanımlı slug'lar geçerli; diğerleri 404
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service)
    return { title: "Hizmet Bulunamadı", robots: { index: false } };
  const seo = serviceSeo[slug];
  const description = seo?.description ?? service.detail.intro[0];
  return {
    title: seo ? { absolute: seo.title } : service.title,
    description,
    keywords: seo?.secondary,
    alternates: { canonical: `/hizmetler/${slug}` },
    openGraph: {
      title: seo?.title ?? `${service.title} | VOYO`,
      description,
      url: `/hizmetler/${slug}`,
    },
  };
}

const providerGradients = [
  "from-[#F5A623]/30 to-[#6C47FF]/20",
  "from-[#4F8CFF]/30 to-[#F5A623]/20",
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const { detail } = service;
  const Icon = service.icon;
  const providers = service.providedBy
    .map((s) => getTeamBySlug(s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const seo = serviceSeo[service.slug];
  const baseUrl = "https://voyo.com.tr";
  const pageUrl = `${baseUrl}/hizmetler/${service.slug}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo?.primary ?? service.title,
    serviceType: service.title,
    description: seo?.description ?? service.detail.intro[0],
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
        name: "Hizmetler",
        item: `${baseUrl}/#hizmetler`,
      },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };
  const faqs = serviceFaqs[service.slug] ?? [];
  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
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
        {/* ===== Üst bölüm / Hero ===== */}
        <section className="relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />

          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Link
                href="/#hizmetler"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4" />
                Tüm Hizmetler
              </Link>
            </Reveal>

            <Reveal
              as="div"
              delay={60}
              className="mt-8 inline-flex size-16 items-center justify-center rounded-2xl bg-voyo-orange/10 text-voyo-orange ring-1 ring-voyo-orange/20"
            >
              <Icon className="size-8" />
            </Reveal>

            <Reveal
              as="span"
              delay={100}
              className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-voyo-orange-ink"
            >
              {seo?.primary ?? service.title}
            </Reveal>

            <Reveal
              as="h1"
              delay={140}
              className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
            >
              {detail.headline}
            </Reveal>

            <div className="mt-6 flex max-w-2xl flex-col gap-4">
              {detail.intro.map((p, i) => (
                <Reveal
                  as="p"
                  key={i}
                  delay={180 + i * 60}
                  className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {p}
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={320}
              className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
            >
              <CtaLink
                href={whatsappForService(service.title)}
                variant="primary"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                <WhatsappIcon className="size-4" />
                Bu Hizmet İçin Teklif Al
              </CtaLink>
              <ObfuscatedCtaButton
                encodedHref={encodeContact(site.phoneHref)}
                encodedLabel={encodeContact(site.phone)}
                variant="secondary"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                <Phone className="size-4" />
              </ObfuscatedCtaButton>
            </Reveal>
          </div>
        </section>

        {/* ===== İçerik + Sağ panel ===== */}
        <section className="relative py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:gap-12">
            {/* Ana sütun */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Neler Sunuyoruz?
                </h2>
              </Reveal>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {detail.features.map((f, i) => (
                  <Reveal as="li" key={f} delay={(i % 2) * 60}>
                    <div className="flex h-full items-start gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-voyo-orange/15 text-voyo-orange">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">
                        {f}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              {/* Süreç */}
              {detail.process && (
                <div className="mt-12">
                  <Reveal>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      Süreç Nasıl İşler?
                    </h2>
                  </Reveal>
                  <ol className="mt-6 space-y-3">
                    {detail.process.map((step, i) => (
                      <Reveal as="li" key={step.title} delay={i * 50}>
                        <div className="flex items-start gap-4 rounded-xl bg-card p-5 ring-1 ring-foreground/10">
                          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-voyo-orange font-bold text-voyo-dark">
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {step.title}
                            </h3>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              )}

              {/* Etiketler (platform / teknoloji / çekim türü) */}
              <div className="mt-12">
                <Reveal>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {detail.highlightsLabel}
                  </h2>
                </Reveal>
                <Reveal delay={60} className="mt-5 flex flex-wrap gap-2.5">
                  {detail.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                    >
                      {h}
                    </span>
                  ))}
                </Reveal>
                {detail.note && (
                  <Reveal
                    as="p"
                    delay={120}
                    className="mt-5 text-sm italic text-muted-foreground"
                  >
                    {detail.note}
                  </Reveal>
                )}
              </div>
            </div>

            {/* Sağ panel: Bu hizmeti kim veriyor? */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <div className="rounded-2xl bg-card p-6 ring-1 ring-foreground/10">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Bu Hizmeti Kim Veriyor?
                    </h2>
                    <div className="mt-5 flex flex-col gap-5">
                      {providers.map((member, i) => (
                        <div key={member.slug} className="flex items-start gap-4">
                          <div
                            className={`flex size-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${providerGradients[i % providerGradients.length]} text-lg font-extrabold text-foreground`}
                          >
                            {member.initials}
                          </div>
                          <div>
                            <h3 className="font-bold leading-tight text-foreground">
                              {member.name}
                            </h3>
                            <p className="text-sm font-medium text-voyo-orange-ink">
                              {member.role}
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {member.bio}
                            </p>
                            <div className="mt-3 flex flex-col gap-1.5">
                              <ContactLink
                                encodedHref={encodeContact(member.phoneHref)}
                                encodedLabel={encodeContact(member.phone)}
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-voyo-orange"
                              >
                                <Phone className="size-3.5 shrink-0 text-voyo-orange" />
                              </ContactLink>
                              <ContactLink
                                encodedHref={encodeContact(`mailto:${member.email}`)}
                                encodedLabel={encodeContact(member.email)}
                                placeholder="••••••@••••••"
                                className="inline-flex items-center gap-2 break-all text-sm text-muted-foreground transition-colors hover:text-voyo-orange"
                              >
                                <Mail className="size-3.5 shrink-0 text-voyo-orange" />
                              </ContactLink>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/#ekip"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink transition-colors hover:text-voyo-orange-300"
                    >
                      Tüm ekibi tanı
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </section>

        {/* ===== SSS ===== */}
        {faqs.length > 0 && (
          <section className="border-t border-foreground/10 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Sıkça Sorulan Sorular
                </h2>
              </Reveal>
              <div className="mt-8 flex flex-col gap-3">
                {faqs.map((f, i) => (
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

        {/* ===== Hizmet Bölgeleri (yerel SEO) ===== */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Hizmet Bölgelerimiz
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
                {seo?.primary ?? service.title} hizmetimizi Antalya merkez ve
                tüm ilçelerinde sunuyoruz.
              </p>
            </Reveal>
            <Reveal delay={60} className="mt-5 flex flex-wrap gap-2.5">
              {["Antalya", ...serviceRegions].map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {r}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===== Diğer Hizmetler ===== */}
        <section className="border-t border-foreground/10 bg-surface-sunken py-16 lg:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Diğer Hizmetler
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((other, i) => {
                const OtherIcon = other.icon;
                return (
                  <Reveal key={other.slug} delay={i * 60}>
                    <Link href={other.href} className="block h-full">
                      <div className="group flex h-full flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:ring-voyo-orange/40">
                        <div className="inline-flex size-11 items-center justify-center rounded-xl bg-voyo-orange/10 text-voyo-orange transition-colors group-hover:bg-voyo-orange group-hover:text-voyo-dark">
                          <OtherIcon className="size-5" />
                        </div>
                        <h3 className="font-bold leading-snug tracking-tight text-foreground">
                          {other.title}
                        </h3>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink">
                          Detaylı İncele
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

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
