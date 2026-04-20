import type { Urun } from "@/lib/types";
import { formatNumber, formatTl } from "@/lib/utils";
import { SkorRozeti } from "./skor-rozeti";

export function UrunTablo({
  urunler,
  ortalamaSkor,
}: {
  urunler: Urun[];
  ortalamaSkor: number;
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[var(--background)] text-left text-[11px] uppercase tracking-wider text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">Ürün</th>
              <th className="px-4 py-3 font-medium">Marka</th>
              <th className="px-4 py-3 font-medium">Site</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 text-right font-medium">Fiyat</th>
              <th className="px-4 py-3 text-right font-medium">Puan</th>
              <th className="px-4 py-3 text-right font-medium">Yorum</th>
              <th className="px-4 py-3 text-right font-medium">Skor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {urunler.map((u, i) => (
              <tr key={u.urun_id || i} className="transition hover:bg-[var(--background)]">
                <td className="px-4 py-3 text-[var(--muted)]">{i + 1}</td>
                <td className="px-4 py-3">
                  <a
                    href={u.urun_url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-brand-dark"
                  >
                    {u.gorsel_url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={u.gorsel_url}
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-md object-cover"
                        loading="lazy"
                      />
                    )}
                    <span className="line-clamp-2 max-w-[28rem]">{u.urun_adi}</span>
                  </a>
                </td>
                <td className="px-4 py-3 text-[var(--muted)]">{u.marka}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{u.site}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{u.kategori}</td>
                <td className="px-4 py-3 text-right tabular-nums">
                  {formatTl(u.indirimli_fiyat ?? u.liste_fiyati)}
                </td>
                <td className="px-4 py-3 text-right tabular-nums">{u.puan?.toFixed(1) ?? "-"}</td>
                <td className="px-4 py-3 text-right tabular-nums text-[var(--muted)]">
                  {formatNumber(u.yorum_sayisi)}
                </td>
                <td className="px-4 py-3 text-right">
                  <SkorRozeti skor={u.popularite_skoru} ortalama={ortalamaSkor} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
