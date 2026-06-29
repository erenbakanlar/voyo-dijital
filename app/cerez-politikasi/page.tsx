import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "VOYO Dijital web sitesinde kullanılan çerezler ve yerel depolama hakkında bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPolitikasiPage() {
  return (
    <LegalLayout title="Çerez Politikası" updated="26 Haziran 2026">
      <p>
        Bu politika, VOYO Dijital web sitesinde çerezlerin ve benzeri yerel
        depolama teknolojilerinin nasıl kullanıldığını açıklar.
      </p>

      <h2>1. Çerez ve Yerel Depolama Nedir?</h2>
      <p>
        Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen
        küçük metin dosyalarıdır. &quot;Yerel depolama&quot; (localStorage) ise
        benzer şekilde tarayıcınızda bilgi saklayan, ancak sunucuya
        gönderilmeyen bir teknolojidir.
      </p>

      <h2>2. Kullandığımız Teknolojiler</h2>
      <ul>
        <li>
          <strong>Zorunlu / işlevsel:</strong> Açık-koyu tema tercihiniz,
          tarayıcınızın yerel depolamasında (localStorage) saklanır. Bu bilgi
          yalnızca cihazınızda kalır, sunucularımıza aktarılmaz ve sizi
          tanımlamak için kullanılmaz.
        </li>
        <li>
          <strong>Analitik / pazarlama:</strong> Sitemizde şu an herhangi bir
          analitik, reklam veya üçüncü taraf takip çerezi{" "}
          <strong>bulunmamaktadır</strong>.
        </li>
      </ul>

      <h2>3. Üçüncü Taraf Bağlantılar</h2>
      <p>
        Sitemizdeki WhatsApp ve Instagram bağlantılarına tıkladığınızda, ilgili
        platformların kendi çerez ve gizlilik politikaları geçerli olur. Bu
        platformlar üzerindeki veri işleme faaliyetlerinden VOYO sorumlu
        değildir.
      </p>

      <h2>4. Çerezleri Yönetme</h2>
      <p>
        Tarayıcınızın ayarları üzerinden çerezleri ve yerel depolamayı
        silebilir veya engelleyebilirsiniz. Tema tercihini saklayan yerel
        depolamayı temizlerseniz site varsayılan temayla açılır; başka bir
        işlevsellik etkilenmez.
      </p>

      <h2>5. Güncellemeler</h2>
      <p>
        İleride analitik veya pazarlama çerezleri eklenmesi hâlinde, yürürlükteki
        mevzuat gereği açık rızanızı almak üzere bir çerez onay bildirimi devreye
        alınacak ve bu politika güncellenecektir. Kişisel verilerinizin
        işlenmesine ilişkin ayrıntılar için{" "}
        <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link> sayfamızı
        inceleyebilirsiniz.
      </p>
    </LegalLayout>
  );
}
