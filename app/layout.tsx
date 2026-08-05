import type { Metadata } from "next";
import "./globals.css";
import { PrimaryNavigation } from "./primary-navigation";

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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col"><PrimaryNavigation />{children}</body>
    </html>
  );
}
