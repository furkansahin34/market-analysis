import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <div className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
            Trendyol Tesettür Giyim Analizi
          </h1>
          <p className="text-base text-[var(--muted)] lg:text-lg">
            Trendyol&apos;daki tesettür giyim ürünlerini popülerlik skoruna göre sıralayan açık bir analiz vitrini.
          </p>
        </header>

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 text-sm leading-relaxed text-[var(--muted)]">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
            Proje Hakkında
          </div>
          <p>
            Ürünler Trendyol&apos;un halka açık listelerinden toplanır; favori, yorum, puan, indirim ve renk çeşitliliği
            metriklerinden Bayesian düzeltmeli bir popülerlik skoru üretilir ve tek bir tabloda skora göre sıralanır.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-500/40 bg-amber-500/5 px-6 py-5 text-sm leading-relaxed text-[var(--foreground)]">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Önemli Not
          </div>
          <p>
            Bu proje <strong className="font-semibold">kar amacı gütmez</strong> ve yalnızca{" "}
            <strong className="font-semibold">eğitim amacıyla</strong> geliştirilmiştir. Veriler Trendyol&apos;un halka
            açık ürün sayfalarından akademik/analitik örnek oluşturmak için alınmıştır; ticari bir amaçla kullanılmaz ve
            herhangi bir kurumu temsil etmez.
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/analiz"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
          >
            Analizi Görüntüle
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
