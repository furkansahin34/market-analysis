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
            Tesettür Piyasa
          </h1>
          <p className="mt-2 flex items-center gap-3 text-sm text-[var(--muted)]">
            <span>
              Toplam Ürün: <strong className="font-semibold text-[var(--foreground)]">{ist.toplam_urun}</strong>
            </span>
            <span>•</span>
            <span>
              Site: <strong className="font-semibold text-[var(--foreground)]">{ist.site_sayisi}</strong>
            </span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium">{trend.tarih}</div>
          <div className="text-xs text-[var(--muted)]">Güncelleme: {tarih}</div>
        </div>
      </header>

      <UrunTablo urunler={trend.urunler} ortalamaSkor={ist.ortalama_skor} />

      <footer className="pt-6 text-center text-xs text-[var(--muted)]">
        Tesettür Piyasa Analizi · {trend.tarih}
      </footer>
    </main>
  );
}
