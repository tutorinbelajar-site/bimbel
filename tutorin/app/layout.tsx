import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tutorin — Belajar Lebih Terarah",
  description: "Platform belajar Tutorin: Privat, Kelas, Ebook, Tryout, dan Blog.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header /><main>{children}</main><Footer /></body></html>;
}
