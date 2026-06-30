import { renderOg, ogSize, ogContentType, ogAlt } from "@/lib/og/render";
import { getServiceBySlug, serviceSeo } from "@/lib/site-data";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = ogAlt;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seo = serviceSeo[slug];
  const service = getServiceBySlug(slug);
  return renderOg({
    title: seo?.primary ?? service?.title ?? "Hizmetlerimiz",
    eyebrow: "VOYO Hizmetleri",
  });
}
