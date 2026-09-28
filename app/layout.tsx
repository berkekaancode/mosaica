import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "./ui/app-shell";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });
const cormorantGaramond = Cormorant_Garamond({ variable: "--font-cormorant-garamond", subsets: ["latin", "latin-ext"], display: "swap" });
const bodoniModa = Bodoni_Moda({ variable: "--font-bodoni-moda", subsets: ["latin", "latin-ext"], display: "swap" });

export const metadata: Metadata = {
  title: "Mosaica",
  description: "Kişisel kültür arşivinizi oluşturun, düzenleyin ve keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${cormorantGaramond.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
