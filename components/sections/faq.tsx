import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div
        id="sss"
        className="mx-auto w-full max-w-3xl scroll-mt-24 px-5 sm:px-8 lg:scroll-mt-28"
      >
        <SectionHeading
          eyebrow="SSS"
          title="Sıkça Sorulan Sorular"
          subtitle="Aklınızdaki soruların yanıtı burada; gerisini ücretsiz keşif görüşmesinde netleştirelim."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 60}>
              <details className="group rounded-2xl border border-foreground/10 bg-card px-6 transition-colors open:border-voyo-orange/30 hover:border-foreground/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    className="size-5 shrink-0 text-voyo-orange transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
