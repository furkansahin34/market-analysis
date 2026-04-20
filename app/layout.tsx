import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tesettür Piyasa Analizi",
  description: "Türkiye tesettür moda pazarı trend ve keşif panosu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
