import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { GoogleLogo } from "@/components/icons/google";

/**
 * Anasayfaya iliştirilen NFC ürün tanıtım bandı (teaser). Ajans bölümlerinden
 * ayrışsın diye mavi aksanlı, tema-duyarlı bir bant; tıklayınca /nfc-yorum
 * sayfasına gider. Amaç: siteye gireni NFC ürünlerinden mutlaka haberdar etmek.
 */
export function NfcTeaser() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#eaf1ff] px-6 py-10 ring-1 ring-voyo-blue/15 sm:px-10 lg:px-14 dark:bg-[#0a0e1c] dark:ring-white/10">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_85%_at_85%_50%,rgba(79,140,255,0.14),transparent_70%)] dark:bg-[radial-gradient(60%_85%_at_85%_50%,rgba(79,140,255,0.22),transparent_70%)]" />

            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-10 md:text-left">
              <div className="flex flex-col items-center gap-3 md:items-start">
                <div className="flex items-center gap-3">
                  <GoogleLogo className="h-6 w-auto" />
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label="5 üzerinden 5 yıldız"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-[#fbbc05] text-[#fbbc05]"
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>
                <h2 className="max-w-xl text-balance text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
                  Tek dokunuşla{" "}
                  <span className="text-voyo-blue-ink">Google yorumlarınızı</span>{" "}
                  artırın
                </h2>
                <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  NFC stand, kart ve yapıştırmalı kare — müşteriniz telefonunu
                  dokundursun, doğrudan Google yorum sayfanız açılsın.
                </p>
              </div>

              <Link
                href="/nfc-yorum"
                className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-voyo-blue-600 px-7 text-sm font-semibold text-white shadow-[0_12px_36px_-12px_rgba(79,140,255,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-12px_rgba(79,140,255,0.8)]"
              >
                Ürünleri inceleyin
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
