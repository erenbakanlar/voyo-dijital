import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/cta-link";
import { ContactLink } from "@/components/contact-link";
import { WhatsappIcon } from "@/components/icons/social";
import { site, whatsappWithMessage } from "@/lib/site-data";
import { encodeContact } from "@/lib/contact";

export function ContactCta() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
      <Reveal id="iletisim" className="mx-auto w-full max-w-6xl scroll-mt-24 lg:scroll-mt-28">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-b from-card to-surface-sunken px-6 py-16 text-center ring-1 ring-foreground/10 sm:px-12 lg:py-24">
          {/* ışıma katmanları */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(245,166,35,0.18),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />

          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            İletişime Geç
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Markanızı Büyütmeye{" "}
            <span className="text-gradient-orange">Hazır mısınız?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ücretsiz bir keşif görüşmesi için bize ulaşın. Sizi dinleyelim,
            birlikte bir yol haritası çıkaralım.
          </p>

          <div className="mx-auto mt-10 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <CtaLink
              href={whatsappWithMessage(
                "Merhaba, paketleriniz hakkında bilgi alabilir miyim?",
              )}
              variant="primary"
              size="lg"
              external
              className="w-full sm:w-auto"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </CtaLink>
            <CtaLink
              href={site.whatsappHref}
              variant="secondary"
              size="lg"
              external
              className="w-full sm:w-auto"
            >
              <WhatsappIcon className="size-4" />
              WhatsApp&apos;tan Yaz
            </CtaLink>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-x-10 gap-y-3 text-sm text-foreground/70 sm:flex-row">
            <ContactLink
              encodedHref={encodeContact(site.phoneHref)}
              encodedLabel={encodeContact(site.phone)}
              className="inline-flex items-center gap-2.5 transition-colors hover:text-foreground"
            >
              <Phone className="size-4 text-voyo-orange" />
            </ContactLink>
            <span className="inline-flex items-center gap-2.5">
              <MapPin className="size-4 text-voyo-orange" />
              {site.location}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
