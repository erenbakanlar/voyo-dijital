import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "VOYO Dijital — Antalya Dijital Ajans";

let cachedFonts: ReturnType<typeof loadFonts> | null = null;

function loadFonts() {
  const dir = join(process.cwd(), "lib", "og");
  return [
    {
      name: "Poppins",
      data: readFileSync(join(dir, "Poppins-Bold.ttf")),
      weight: 700 as const,
      style: "normal" as const,
    },
    {
      name: "Poppins",
      data: readFileSync(join(dir, "Poppins-SemiBold.ttf")),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

/**
 * Markalı OG (sosyal paylaşım) görseli üretir. Tüm opengraph-image.tsx
 * dosyaları bunu çağırır; sayfa başlığını ve üst etiketi geçer.
 */
export async function renderOg(opts: { title: string; eyebrow?: string }) {
  const { title, eyebrow = "Antalya Dijital Ajans" } = opts;
  if (!cachedFonts) cachedFonts = loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b0d16",
          backgroundImage:
            "radial-gradient(1000px 520px at 100% 0%, rgba(245,166,35,0.20), transparent 60%)",
          fontFamily: "Poppins",
        }}
      >
        {/* Üst: marka */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "46px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            VOYO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 600,
              color: "#F5A623",
              textTransform: "uppercase",
              letterSpacing: "4px",
              paddingTop: "10px",
            }}
          >
            Dijital
          </div>
        </div>

        {/* Orta: başlık */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              fontWeight: 600,
              color: "#F5A623",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "56px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-1.5px",
              maxWidth: "1010px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Alt: url + aksan */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 600,
              color: "#c3cad9",
            }}
          >
            voyo.com.tr
          </div>
          <div
            style={{
              display: "flex",
              height: "8px",
              width: "120px",
              backgroundColor: "#F5A623",
              borderRadius: "99px",
            }}
          />
        </div>
      </div>
    ),
    { ...ogSize, fonts: cachedFonts },
  );
}
