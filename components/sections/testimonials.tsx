"use client";

import * as React from "react";
import { Quote, Star, Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [scrollable, setScrollable] = React.useState(false);
  const paused = React.useRef(false);
  const [userPaused, setUserPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
      // Tüm kartlar görünüyorsa kaydırılacak bir şey yok → kontrolleri gizle
      setScrollable(api.canScrollNext() || api.canScrollPrev());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  // Otomatik oynatma (hover'da duraklar, reduced-motion'da kapalı)
  React.useEffect(() => {
    if (!api) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      if (!paused.current && !userPaused && !document.hidden) api.scrollNext();
    }, 5000);
    return () => clearInterval(id);
  }, [api, userPaused]);

  return (
    <section className="relative border-t border-foreground/10 bg-surface-sunken py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Müşterilerimiz Anlatıyor"
          subtitle="Birlikte büyüdüğümüz işletmelerin deneyimleri."
        />

        <Reveal className="mt-16">
          <Carousel
            opts={{ loop: true, align: "start" }}
            setApi={setApi}
            className="w-full"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            onFocusCapture={() => (paused.current = true)}
            onBlurCapture={() => (paused.current = false)}
          >
            <CarouselContent className="-ml-5">
              {testimonials.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="pl-5 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="flex h-full flex-col gap-6 rounded-2xl bg-card p-8 ring-1 ring-foreground/10">
                    <Quote className="size-9 text-voyo-orange/30" />
                    <div className="flex gap-0.5" aria-hidden>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="size-4 fill-voyo-orange text-voyo-orange"
                        />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-foreground/90">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="flex items-center gap-3 border-t border-foreground/10 pt-5">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-voyo-orange/15 text-sm font-bold text-voyo-orange">
                        {t.author
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                      <span className="flex flex-col">
                        <span className="font-semibold text-foreground">
                          {t.author}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {t.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Kontroller — yalnızca kaydırılacak içerik varsa göster */}
            {scrollable && (
              <div className="mt-10 flex items-center justify-center gap-5">
                <CarouselPrevious className="static inset-y-auto left-auto my-0 size-11 border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10" />
                <div className="flex items-center gap-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`${i + 1}. yoruma git`}
                      onClick={() => api?.scrollTo(i)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        i === selected
                          ? "w-7 bg-voyo-orange"
                          : "w-2 bg-foreground/20 hover:bg-foreground/40",
                      )}
                    />
                  ))}
                </div>
                <CarouselNext className="static inset-y-auto right-auto my-0 size-11 border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10" />
                <button
                  type="button"
                  onClick={() => setUserPaused((v) => !v)}
                  aria-label={
                    userPaused
                      ? "Otomatik geçişi başlat"
                      : "Otomatik geçişi duraklat"
                  }
                  className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 bg-foreground/5 text-foreground transition-colors hover:bg-foreground/10"
                >
                  {userPaused ? (
                    <Play className="size-4" />
                  ) : (
                    <Pause className="size-4" />
                  )}
                </button>
              </div>
            )}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
