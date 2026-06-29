import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CardSlider } from "@/components/card-slider";
import { advantages, type Advantage } from "@/lib/site-data";

function AdvantageInner({ adv }: { adv: Advantage }) {
  return (
    <>
      <span className="absolute right-7 top-6 text-5xl font-extrabold tracking-tight text-foreground/[0.05] transition-colors duration-300 group-hover:text-voyo-orange/20">
        {adv.no}
      </span>
      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-voyo-orange/10 text-voyo-orange ring-1 ring-voyo-orange/20">
        <adv.icon className="size-6" />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-foreground">
        {adv.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {adv.description}
      </p>
    </>
  );
}

export function WhyVoyo() {
  return (
    <section className="relative border-t border-foreground/10 bg-surface-sunken py-16 sm:py-24 lg:py-32">
      {/* arka plan ışıma */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(245,166,35,0.08),transparent_70%)]" />

      <div
        id="hakkimizda"
        className="mx-auto w-full max-w-7xl scroll-mt-24 px-5 sm:px-8 lg:scroll-mt-28"
      >
        <SectionHeading
          eyebrow="Neden VOYO?"
          title="Onlarca Ajansı Değil, Tek Bir Ekibi Yönetin"
          subtitle="VOYO ile tüm dijital süreçleriniz bir arada, koordineli ve hızlı yürür. Tek çatı altında, baştan sona."
        />

        {/* Mobil: yana kaydırılabilir kartlar */}
        <CardSlider
          className="mt-12 sm:hidden"
          items={advantages.map((adv) => (
            <div
              key={adv.no}
              className="group relative flex h-full flex-col gap-4 rounded-2xl bg-background p-7 ring-1 ring-foreground/10"
            >
              <AdvantageInner adv={adv} />
            </div>
          ))}
        />

        {/* sm ve üzeri: ince ayraçlı grid */}
        <div className="mt-16 hidden overflow-hidden rounded-3xl bg-foreground/10 sm:grid sm:grid-cols-2 sm:gap-px lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={adv.no} delay={(i % 3) * 80}>
              <div className="group relative flex h-full flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-muted">
                <AdvantageInner adv={adv} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
