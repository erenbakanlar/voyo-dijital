import fs from "node:fs";
import path from "node:path";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { references } from "@/lib/site-data";

/**
 * Logo dosyasını public/ altında çözer (uzantıdan bağımsız). Verilen yol yoksa
 * aynı adın .png/.svg/.webp/.jpg sürümünü dener. Hiçbiri yoksa null döner —
 * böylece kırık görsel oluşmaz, firma adına düşülür.
 */
function resolveLogo(logo?: string): string | null {
  if (!logo) return null;
  const publicDir = path.join(process.cwd(), "public");
  const base = logo.replace(/\.[^.]+$/, "");
  const candidates = [
    logo,
    ...[".png", ".svg", ".webp", ".jpg", ".jpeg"].map((ext) => base + ext),
  ];
  for (const candidate of candidates) {
    try {
      if (fs.existsSync(path.join(publicDir, candidate))) return candidate;
    } catch {
      // yoksay
    }
  }
  return null;
}

/**
 * "Referanslarımız" — birlikte çalışılan markaların logo duvarı.
 * Tüm logolar tek tip koyu kart zemini üzerinde durur (standart arka plan).
 * Logo dosyası yoksa firma adı gösterilir; dosya public/references/ altına
 * eklendiğinde otomatik olarak logoya döner.
 */
export function References() {
  return (
    <section
      id="referanslar"
      className="relative scroll-mt-24 py-16 sm:py-24 lg:scroll-mt-28 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Referanslarımız"
          title="Bize Güvenen Markalar"
          subtitle="Birlikte çalıştığımız markalar — sıfırdan zirveye, tek çatı altında."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {references.map((ref, i) => {
            const logo = resolveLogo(ref.logo);
            const logoSize =
              ref.size === "xl"
                ? "max-h-24 max-w-full sm:max-h-32"
                : ref.size === "lg"
                  ? "max-h-16 max-w-full sm:max-h-24 sm:max-w-[230px]"
                  : ref.size === "sm"
                    ? "max-h-11 max-w-full sm:max-h-14 sm:max-w-[150px]"
                    : ref.size === "xs"
                      ? "max-h-9 max-w-full sm:max-h-12 sm:max-w-[120px]"
                      : "max-h-14 max-w-full sm:max-h-20 sm:max-w-[210px]";
            return (
              <Reveal key={ref.name} delay={(i % 4) * 60}>
                <div className="group relative flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-[#0f1117] px-4 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-voyo-orange/40 sm:h-40">
                  {logo ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo}
                        alt={ref.name}
                        className={`${logoSize} w-auto object-contain transition duration-300 [@media(hover:hover)]:brightness-0 [@media(hover:hover)]:invert group-hover:-translate-y-3 group-hover:brightness-100 group-hover:invert-0`}
                      />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/90 to-transparent px-3 pb-3.5 pt-7 text-center text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {ref.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-center text-sm font-semibold text-white/85">
                      {ref.name}
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
