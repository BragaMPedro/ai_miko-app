import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "(A)Yae Miko | Roleplay Chat",
  description: "Miko Miko Miii",
  creator:"Pedro Braga Magalhães",
  keywords: ["genshin", "genshin-impact", "gemini-pro", "yae-miko", "inazuma", "next", "react", "tailwind"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "text-white"}>{children}</body>
    </html>
  );
}
