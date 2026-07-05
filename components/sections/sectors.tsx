import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { sectorPages } from "@/lib/sector-data";

/**
 * Anasayfa "Sektörler" bölümü — 20 sektörel landing sayfasını en yetkili
 * sayfadan (anasayfa) linkler. Hem UX (sektöre özel uzmanlık algısı) hem SEO
 * (iç link + Google sitelink gücü) için.
 */
export function Sectors() {
  return (
    <section
      id="sektorler"
      className="relative scroll-mt-24 py-16 sm:py-24 lg:scroll-mt-28 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sektörel Çözümler"
          title="Sektörünüze Özel Dijital Pazarlama"
          subtitle="Her sektörün dinamiği farklı. İşletmenizin diline ve müşterisine özel kurgularız — güzellikten sağlık turizmine, emlaktan restorana."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {sectorPages.map((s) => (
            <Link
              key={s.slug}
              href={`/sektorler/${s.slug}`}
              className="rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-voyo-orange/40 hover:bg-voyo-orange/10 hover:text-voyo-orange"
            >
              {s.name}
            </Link>
          ))}
        </Reveal>

        <Reveal delay={80} className="mt-9 flex justify-center">
          <Link
            href="/sektorler"
            className="group inline-flex items-center gap-2 rounded-full bg-voyo-orange px-7 py-3 text-sm font-semibold text-voyo-dark transition-transform hover:-translate-y-0.5"
          >
            Tüm Sektörel Çözümleri İncele
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
