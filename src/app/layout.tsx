import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/header/MainNav";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Playfair_Display, Inter } from "next/font/google";

// Serif for headings (editorial), Sans for body
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Kim",
  description: "Maison Kim — Floral Design Portfolio & Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll />
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
