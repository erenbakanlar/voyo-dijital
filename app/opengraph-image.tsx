import { renderOg, ogSize, ogContentType, ogAlt } from "@/lib/og/render";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = ogAlt;

export default function Image() {
  return renderOg({
    title: "Sıfırdan Zirveye, Tek Çatı Altında",
    eyebrow: "Antalya Dijital Ajans",
  });
}
