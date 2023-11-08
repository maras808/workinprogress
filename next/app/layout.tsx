import { rubik } from "@/fonts/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strona w budowie",
  description: "Strona w budowie. Niedługo zaczynamy!",
  authors: {
    name: "Marek Ławniczak",
    url: "https://www.mivon.pl/",
  },
  creator: "Marek Ławniczak",
  publisher: "Marek Ławniczak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
