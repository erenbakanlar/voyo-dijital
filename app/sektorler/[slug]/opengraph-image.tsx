import { renderOg, ogSize, ogContentType, ogAlt } from "@/lib/og/render";
import { getSectorBySlug } from "@/lib/sector-data";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = ogAlt;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  return renderOg({
    title: sector?.name ?? "Sektörel Çözümler",
    eyebrow: "Sektörel Dijital Pazarlama",
  });
}
