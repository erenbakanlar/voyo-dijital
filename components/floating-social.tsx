import { site } from "@/lib/site-data";
import { WhatsappIcon, InstagramIcon } from "@/components/icons/social";

const tooltip =
  "pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 lg:block";

/**
 * Tüm sayfalarda sağ altta sabit duran WhatsApp + Instagram butonları.
 * Layout içinde global olarak render edilir.
 */
export function FloatingSocial() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      {/* WhatsApp */}
      <a
        href={site.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan yazın"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-110 sm:size-14"
      >
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:hidden" />
        <span className={tooltip}>WhatsApp&apos;tan Yaz</span>
        <WhatsappIcon className="relative size-7" />
      </a>

      {/* Instagram */}
      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram profilimiz"
        className="group relative flex size-12 items-center justify-center rounded-full text-white shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-110 sm:size-14"
        style={{
          background:
            "linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
        }}
      >
        <span className={tooltip}>Instagram</span>
        <InstagramIcon className="relative size-6" />
      </a>
    </div>
  );
}
