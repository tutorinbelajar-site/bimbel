import TrafficTracker from "@/components/TrafficTracker";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tutorin — Belajar Lebih Terarah",
  description: "Tutorin membantu proses belajar lebih terarah melalui Bimbel Privat, Kelas, Ebook, Tryout, dan Blog.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><TrafficTracker /><Header /><main>{children}</main><Footer /></body></html>;
}
