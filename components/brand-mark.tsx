import { cn } from "@/lib/utils";

/**
 * VOYO yatay logo işareti — tema-duyarlı.
 * V ve Y harfleri `currentColor` (tema metni: açık temada koyu, koyu temada
 * beyaz), O'lar turuncu yuvarlak kare, "DİJİTAL" gri. Yani açık temada koyu
 * harfli, koyu temada beyaz harfli logo tek SVG'den çıkar; tema değişince
 * harf renkleri yumuşak geçişle değişir. Boyut className ile verilen
 * yükseklikten (`h-*`) ölçeklenir; genişlik otomatik (viewBox oranı).
 *
 * `showTagline=false` ile alttaki "DİJİTAL" yazısı gizlenebilir.
 */
export function BrandMark({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 490 190"
      className={cn(
        "h-8 w-auto text-foreground [&_*]:transition-colors [&_*]:duration-500 [&_*]:ease-out motion-reduce:[&_*]:transition-none",
        className,
      )}
      role="img"
      aria-label="VOYO Dijital"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* V */}
      <path
        d="M18 14 L60 118 L102 14"
        stroke="currentColor"
        strokeWidth={20}
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      {/* O (turuncu) */}
      <rect
        x={128}
        y={14}
        width={104}
        height={104}
        rx={28}
        className="stroke-voyo-orange"
        strokeWidth={20}
      />
      {/* Y */}
      <path
        d="M258 14 L300 66 L300 118 M342 14 L300 66"
        stroke="currentColor"
        strokeWidth={20}
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      {/* O (turuncu) */}
      <rect
        x={368}
        y={14}
        width={104}
        height={104}
        rx={28}
        className="stroke-voyo-orange"
        strokeWidth={20}
      />
      {/* DİJİTAL */}
      {showTagline && (
        <text
          x={246}
          y={178}
          textAnchor="middle"
          className="fill-muted-foreground"
          style={{ fontSize: "38px", letterSpacing: "16px", fontWeight: 500 }}
        >
          DİJİTAL
        </text>
      )}
    </svg>
  );
}
