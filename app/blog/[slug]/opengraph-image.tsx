import { renderOg, ogSize, ogContentType, ogAlt } from "@/lib/og/render";
import { getPostBySlug } from "@/lib/blog-data";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = ogAlt;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return renderOg({
    title: post?.title ?? "VOYO Blog",
    eyebrow: post?.category ?? "VOYO Blog",
  });
}
