import Script from "next/script";

// GA4 Ölçüm Kimliği — istemci tarafında zaten görünür olduğu için sabit tutuldu.
const GA_MEASUREMENT_ID = "G-82BESPY6E9";

/**
 * Google Analytics 4 etiketi.
 * Yalnızca production'da yüklenir; geliştirme/localhost ziyaretleri analitiği
 * kirletmesin diye dev ortamında render edilmez.
 */
export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
