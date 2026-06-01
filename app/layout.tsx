import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/layout/Header";
import CartDrawer from "@/components/layout/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "280 BLANKS — Heavyweight Dog Garments",
  description:
    "Heavyweight garments engineered for daily walks. 280 GSM combed organic cotton for dogs. Made in Portugal.",
  openGraph: {
    title: "280 BLANKS",
    description: "Heavyweight Garments Engineered for Daily Walks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#F5F5F5] text-[#111111] font-[family-name:var(--font-inter)] antialiased min-h-screen">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
