import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal
          as="span"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-voyo-orange"
        >
          <span className="h-px w-6 bg-voyo-orange/60" aria-hidden />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={60}
        className={cn(
          "max-w-3xl text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={120}
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
