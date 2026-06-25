"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

/**
 * Mobilde kullanılan, müşteri yorumları slider'ıyla aynı davranışta
 * (embla, snap, yana kaydırma) kart carousel'i + ok butonları ve nokta
 * göstergeleri. Masaüstünde gizlenip yerini grid'e bırakması için
 * `className` ile `sm:hidden` gibi sınıflar verilir.
 */
export function CardSlider({
  items,
  className,
  itemClassName,
}: {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className={className}>
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              className={cn("basis-[85%] min-[480px]:basis-[60%]", itemClassName)}
            >
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>

        {count > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <CarouselPrevious className="static inset-y-auto left-auto my-0 size-11 border-foreground/15 bg-foreground/5 text-foreground hover:bg-foreground/10" />
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}. karta git`}
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
          </div>
        )}
      </Carousel>
    </div>
  );
}
