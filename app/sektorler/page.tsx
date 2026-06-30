import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/reveal";
import { sectorPages } from "@/lib/sector-data";

export const metadata: Metadata = {
  title: {
    absolute: "Sektörel Dijital Pazarlama Çözümleri | VOYO Dijital",
  },
  description:
    "Güzellik merkezleri, diş klinikleri, estetik ve dermatoloji klinikleri için Antalya'da sektöre özel, dönüşüm odaklı dijital pazarlama çözümleri.",
  alternates: { canonical: "/sektorler" },
  openGraph: {
    title: "Sektörel Dijital Pazarlama Çözümleri | VOYO",
    description:
      "Antalya'da sektörünüze özel dijital pazarlama: güzellik, diş ve estetik klinikleri.",
    url: "/sektorler",
  },
};

export default function SectorsIndexPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* ===== Hero ===== */}
        <section className="relative isolate overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
          <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
            <Reveal
              as="span"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-voyo-orange-ink"
            >
              Sektörel Çözümler
            </Reveal>
            <Reveal
              as="h1"
              delay={60}
              className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            >
              Sektörünüze Özel Dijital Pazarlama
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Her sektörün dinamiği farklı. Antalya'da işletmenizin diline ve
              müşterisine özel kurguladığımız çözümlerle randevu ve satışa
              odaklanıyoruz.
            </Reveal>
          </div>
        </section>

        {/* ===== Sektör listesi ===== */}
        <section className="pb-16 sm:pb-24 lg:pb-28">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {sectorPages.map((sector, i) => (
                <Reveal key={sector.slug} delay={(i % 2) * 60}>
                  <Link
                    href={`/sektorler/${sector.slug}`}
                    className="block h-full"
                  >
                    <article className="group flex h-full flex-col gap-4 rounded-2xl bg-card p-7 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:ring-voyo-orange/40">
                      <h2 className="text-xl font-bold leading-snug tracking-tight text-foreground">
                        {sector.name}
                      </h2>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {sector.seoDescription}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink">
                        Çözümleri İncele
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
    </>
  );
}
