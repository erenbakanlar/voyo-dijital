import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/cta-link";
import { services } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Arka plan katmanları */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-32 lg:pt-36">
        <Reveal
          as="h1"
          delay={80}
          className="max-w-4xl text-balance text-5xl font-extrabold leading-[0.98] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sıfırdan <span className="text-gradient-orange">Zirveye.</span>
          <br />
          Tek Çatıda.
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Sosyal medya, reklam, web tasarımı, profesyonel çekim ve yazılım
          çözümlerini tek bir ekipten alın. VOYO, markanızın dijital dönüşümünü
          hızlandırır.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex w-full max-w-sm flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row"
        >
          <CtaLink
            href="#iletisim"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Hemen Başlayalım
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </CtaLink>
          <CtaLink
            href="#hizmetler"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Hizmetlerimizi Gör
          </CtaLink>
        </Reveal>

        {/* Hizmet etiketleri */}
        <Reveal
          delay={340}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {services.map((service) => (
            <span
              key={service.title}
              className="inline-flex items-center gap-2 text-sm text-foreground/45"
            >
              <service.icon className="size-4 text-voyo-orange/80" />
              {service.title.replace("Meta & Google ", "").replace(
                " & Kurulumu",
                "",
              )}
            </span>
          ))}
        </Reveal>
      </div>

      {/* Aşağı kaydır göstergesi */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="inline-flex animate-bounce items-center gap-2 text-xs uppercase tracking-widest text-foreground/30">
          <ArrowDown className="size-4" />
        </span>
      </div>
    </section>
  );
}
