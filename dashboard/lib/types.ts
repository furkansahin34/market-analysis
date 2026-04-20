export type Urun = {
  urun_id: string;
  site: string;
  kategori: string;
  marka: string;
  urun_adi: string;
  liste_fiyati: number | null;
  indirimli_fiyat: number | null;
  indirim_orani: number | null;
  puan: number | null;
  yorum_sayisi: number | null;
  favori_sayisi: number | null;
  popularite_skoru: number | null;
  gorsel_url: string;
  urun_url: string;
};

export type TrendIstatistik = {
  toplam_urun: number;
  site_sayisi: number;
  ortalama_skor: number;
  medyan_skor: number;
  min_skor: number;
  maks_skor: number;
};

export type Trend = {
  tarih: string;
  olusturma_zamani: string;
  istatistikler: TrendIstatistik;
  urunler: Urun[];
};
