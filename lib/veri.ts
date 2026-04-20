import fs from "node:fs";
import path from "node:path";
import type { Trend } from "./types";

const VERI_DIZIN = path.join(process.cwd(), "public", "veri");

export function trendOku(): Trend | null {
  const yol = path.join(VERI_DIZIN, "trend.json");
  if (!fs.existsSync(yol)) return null;
  return JSON.parse(fs.readFileSync(yol, "utf-8")) as Trend;
}
