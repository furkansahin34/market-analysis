import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trendyol Tesettür Giyim Analizi",
  description: "Trendyol tesettür giyim ürünlerinin popülerlik skoruna göre sıralandığı eğitim amaçlı analiz sitesi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
