/**
 * İletişim bilgisi (telefon / e-posta) gizleme yardımcıları.
 *
 * E-posta ve telefon hasat eden botlar genellikle JavaScript çalıştırmaz;
 * sunucudan gelen HTML'i tarayıp `mailto:`, `tel:` ve e-posta/telefon
 * kalıplarını regex'le toplar. Bu yüzden değerleri base64 olarak taşırız —
 * HTML kaynağında düz metin görünmez — ve yalnızca tarayıcıda çözeriz.
 *
 * Not: Değerler ASCII (telefon rakamları / e-posta) olduğundan atob/btoa
 * yeterlidir; sunucuda Buffer ile UTF-8 güvenli kodlama yapılır.
 */

export function encodeContact(value: string): string {
  return typeof Buffer !== "undefined"
    ? Buffer.from(value, "utf8").toString("base64")
    : btoa(value);
}

export function decodeContact(encoded: string): string {
  if (typeof window === "undefined") return "";
  try {
    return window.atob(encoded);
  } catch {
    return "";
  }
}
