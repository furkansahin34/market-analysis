import { cn } from "@/lib/utils";

export function SkorRozeti({
  skor,
  ortalama,
}: {
  skor: number | null | undefined;
  ortalama: number;
}) {
  const bos = skor === null || skor === undefined;
  const deger = bos ? 0 : skor;
  const isBasarili = deger >= ortalama;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold tabular-nums",
        isBasarili
          ? "border-emerald-200 bg-emerald-500/10 text-emerald-600 dark:border-emerald-900 dark:text-emerald-400"
          : "border-red-200 bg-red-500/10 text-red-600 dark:border-red-900 dark:text-red-400"
      )}
      title={`Ortalama: ${ortalama.toFixed(1)}`}
    >
      {bos ? "–" : deger.toFixed(1)}
    </span>
  );
}
