import { renderOg, ogSize, ogContentType, ogAlt } from "@/lib/og/render";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = ogAlt;

export default function Image() {
  return renderOg({
    title: "Sektörünüze Özel Dijital Pazarlama",
    eyebrow: "Sektörel Çözümler",
  });
}
