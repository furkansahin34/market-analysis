import { trendOku } from "@/lib/veri";
import { UrunTablo } from "@/components/urun-tablo";

export default function Home() {
  const trend = trendOku();

  if (!trend) {
    return (
      <main className="mx-auto max-w-4xl p-10">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h1 className="text-xl font-semibold">Veri yok</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            <code>public/veri/trend.json</code> bulunamadı. Önce <code>trend_agent</code> çalıştırılmalı.
          </p>
        </div>
      </main>
    );
  }

  const ist = trend.istatistikler;
  const tarih = new Date(trend.olusturma_zamani).toLocaleString("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
  });

  return (
    <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-10 lg:px-10">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
            Trendyol Tesettür Giyim Analizi
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Toplam Ürün: <strong className="font-semibold text-[var(--foreground)]">{ist.toplam_urun}</strong>
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{trend.tarih}</div>
          <div className="text-xs text-[var(--muted)]">Güncelleme: {tarih}</div>
        </div>
      </header>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-sm text-[var(--muted)]">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
          Skor Formülü
        </div>
        <p>
          <strong className="font-medium text-[var(--foreground)]">Popülerlik Skoru</strong> ={" "}
          (Favori × <strong className="font-medium text-[var(--foreground)]">%35</strong>) +{" "}
          (Yorum × <strong className="font-medium text-[var(--foreground)]">%25</strong>) +{" "}
          (Puan × <strong className="font-medium text-[var(--foreground)]">%20</strong>) +{" "}
          (İndirim × <strong className="font-medium text-[var(--foreground)]">%10</strong>) +{" "}
          (Renk Çeşitliliği × <strong className="font-medium text-[var(--foreground)]">%10</strong>)
        </p>
        <p className="mt-1 text-xs">
          Tüm metrikler log-normalize edilir (0-100). Yorum sayısı 500&apos;ün altındaki ürünlere Bayesian düzeltme ile ceza uygulanır.
        </p>
      </section>

      <UrunTablo urunler={trend.urunler} ortalamaSkor={ist.ortalama_skor} />

      <footer className="pt-6 text-center text-xs text-[var(--muted)]">
        Tesettür Piyasa Analizi · {trend.tarih}
      </footer>
    </main>
  );
}
