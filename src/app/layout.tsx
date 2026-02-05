import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const cormorantGaramond = Cormorant_Garamond({
  // ... (rest of font config)
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "St. Martin's Diocesan School",
  description: "Light Begets Light - A prestigious educational institution founded in 1960.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
