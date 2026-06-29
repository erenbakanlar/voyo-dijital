export default function Loading() {
  return (
    <div
      className="flex min-h-[60svh] items-center justify-center"
      role="status"
      aria-label="Yükleniyor"
    >
      <div className="size-10 animate-spin rounded-full border-2 border-foreground/15 border-t-voyo-orange motion-reduce:animate-none" />
      <span className="sr-only">Yükleniyor…</span>
    </div>
  );
}
