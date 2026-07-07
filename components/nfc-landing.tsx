import { ArrowUpRight, MessageSquareText, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WhatsappIcon } from "@/components/icons/social";
import { nfcProducts, whatsappWithMessage } from "@/lib/site-data";

const steps = [
  {
    no: "01",
    title: "Ürünü yerleştirin",
    text: "Standı masaya/kasaya koyun ya da kartı/kareyi uygun yere bırakın.",
  },
  {
    no: "02",
    title: "Müşteri dokundursun",
    text: "Telefonunu NFC alanına yaklaştırsın — uygulama veya QR aramak yok.",
  },
  {
    no: "03",
    title: "Yorum bıraksın",
    text: "Doğrudan Google yorum sayfanız açılır, puan ve yorumunu bırakır.",
  },
];

/**
 * NFC Google yorum ürünleri için ayrı sayfanın içeriği. Ajans hizmetlerinden
 * bağımsız bir ürün hattı; mavi (#4f8cff) aksanlı, tema-duyarlı bir bant
 * olarak durur: koyu temada koyu-lacivert, açık temada açık-mavi yüzey.
 * Fiyat gösterilmez — iletişim WhatsApp üzerinden.
 */
export function NfcLanding() {
  const wa = whatsappWithMessage(
    "Merhaba, NFC Google yorum ürünleri hakkında bilgi ve fiyat almak istiyorum.",
  );

  return (
    <section className="px-5 pb-16 pt-28 sm:px-8 lg:pb-24 lg:pt-36">
      <div className="relative isolate mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#eaf1ff] px-6 py-14 ring-1 ring-voyo-blue/15 sm:px-10 lg:px-14 lg:py-20 dark:bg-[#0a0e1c] dark:ring-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(79,140,255,0.14),transparent_70%)] dark:bg-[radial-gradient(55%_45%_at_50%_0%,rgba(79,140,255,0.22),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.05]" />

        {/* Hero */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <MessageSquareText className="size-11 text-voyo-blue sm:size-12" />
          <div
            className="mt-3 flex items-center gap-0.5"
            role="img"
            aria-label="Google'da 5 üzerinden 5 yıldız"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-[#fbbc05] text-[#fbbc05]"
                aria-hidden
              />
            ))}
          </div>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Tek dokunuşla{" "}
            <span className="text-voyo-blue-ink">Google yorumlarınızı</span>{" "}
            artırın
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            NFC standı, kartı ya da yapıştırmalı karesini işletmenize koyun;
            müşteriniz telefonunu dokundursun, doğrudan Google yorum sayfanız
            açılsın. Tüm ürünler pleksi malzemeden üretilir.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            VOYO Dijital&apos;in bağımsız bir ürünüdür; Google LLC ile iş
            ortaklığı veya onay ilişkisi bulunmamaktadır.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex h-14 items-center gap-2.5 rounded-full bg-voyo-blue-600 px-8 text-[0.95rem] font-semibold text-white shadow-[0_14px_44px_-12px_rgba(79,140,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_52px_-12px_rgba(79,140,255,0.8)]"
          >
            <WhatsappIcon className="size-5" />
            WhatsApp&apos;tan fiyat alın
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Nasıl çalışır */}
        <h2 className="mt-16 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Nasıl çalışır?
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <Reveal
              key={s.no}
              className="flex flex-col gap-2 rounded-2xl bg-white p-5 ring-1 ring-foreground/10 dark:bg-white/[0.03] dark:ring-white/10"
            >
              <span className="text-sm font-bold text-voyo-blue-ink">
                {s.no}
              </span>
              <p className="text-base font-bold text-foreground">{s.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Ürünler */}
        <h2 className="mt-16 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Ürünlerimiz
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
          Tüm ürünler pleksi malzemeden üretilir; kart kredi kartı inceliğinde,
          diğerleri 4 mm kalınlığındadır.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nfcProducts.map((p, i) => {
            const ask = whatsappWithMessage(
              `Merhaba, "${p.name}" (${p.size}) hakkında bilgi ve fiyat almak istiyorum.`,
            );
            return (
              <Reveal key={p.name} delay={i * 70}>
                <div
                  className={`relative flex h-full flex-col gap-4 rounded-2xl bg-white p-6 ring-1 transition-colors duration-300 hover:bg-[#f5f8ff] dark:bg-white/[0.04] dark:hover:bg-white/[0.07] ${
                    p.badge
                      ? "ring-voyo-blue/50"
                      : "ring-foreground/10 hover:ring-voyo-blue/40 dark:ring-white/10"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-voyo-blue-600 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                      {p.badge}
                    </span>
                  )}
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-voyo-blue/15 text-voyo-blue-ink">
                    <p.icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <dl className="mt-auto flex flex-col gap-2 border-t border-foreground/10 pt-4 text-sm dark:border-white/10">
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Boyut</dt>
                      <dd className="font-semibold text-foreground">{p.size}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Malzeme</dt>
                      <dd className="font-semibold text-foreground">
                        {p.material}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <dt className="text-muted-foreground">Kalınlık</dt>
                      <dd className="text-right font-semibold text-foreground">
                        {p.thickness}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={ask}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-voyo-blue-ink transition-colors hover:text-foreground"
                  >
                    Fiyat sor
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-md text-center text-sm text-muted-foreground">
          Fiyatlar ürün, adet ve özelleştirmeye göre değişir — net fiyat ve
          sipariş için bize WhatsApp&apos;tan yazın.
        </p>
      </div>
    </section>
  );
}
