import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CardSlider } from "@/components/card-slider";
import { services, type Service } from "@/lib/site-data";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full justify-between gap-6 rounded-2xl border-0 bg-card p-7 ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-muted hover:ring-voyo-orange/40 hover:shadow-[0_20px_50px_-20px_rgba(245,166,35,0.35)]">
      <div className="flex flex-col gap-5">
        <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-voyo-orange/10 text-voyo-orange transition-colors duration-300 group-hover/card:bg-voyo-orange group-hover/card:text-voyo-dark">
          <service.icon className="size-7" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
      <Link
        href={service.href}
        aria-label={`${service.title} hizmetini detaylı incele`}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-orange-ink transition-colors hover:text-voyo-orange-300"
      >
        Detaylı İncele
        <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-1" />
      </Link>
    </Card>
  );
}

function ServiceCtaCard() {
  return (
    <Link href="#iletisim" className="block h-full">
      <Card className="h-full justify-between gap-6 rounded-2xl border-0 bg-gradient-to-br from-voyo-orange to-voyo-orange-600 p-7 text-voyo-dark ring-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(245,166,35,0.7)]">
        <div className="flex flex-col gap-5">
          <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-voyo-dark/15 text-voyo-dark">
            <ArrowUpRight className="size-7" />
          </div>
          <h3 className="text-xl font-bold tracking-tight">
            Aradığınız hizmet bu mu?
          </h3>
          <p className="text-[0.95rem] font-medium leading-relaxed text-voyo-dark/80">
            Projenizi konuşalım. Size özel bir yol haritası çıkaralım ve en doğru
            çözümü birlikte belirleyelim.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold">
          Ücretsiz Teklif Al
          <ArrowRight className="size-4" />
        </span>
      </Card>
    </Link>
  );
}

export function Services() {
  const cards = [
    ...services.map((service) => (
      <ServiceCard key={service.slug} service={service} />
    )),
    <ServiceCtaCard key="cta" />,
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div
        id="hizmetler"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 sm:px-8 lg:scroll-mt-28"
      >
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title={
            <>
              Her İhtiyacınız İçin
              <br className="hidden sm:block" /> Bir Çözümümüz Var
            </>
          }
          subtitle="Dijitalde büyümek için ihtiyacınız olan tüm hizmetler tek bir ekipten. Strateji kurarız, içerik üretiriz, yayınlarız, ölçümleriz."
        />

        {/* Mobil: yana kaydırılabilir kartlar */}
        <CardSlider items={cards} className="mt-12 sm:hidden" />

        {/* sm ve üzeri: grid */}
        <div className="mt-16 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={i} delay={(i % 3) * 70}>
              {card}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
