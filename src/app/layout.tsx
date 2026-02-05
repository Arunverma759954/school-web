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
  title: "St. Joseph's Convent School, Jharsuguda",
  description: "Established, run and managed by the Kloster St. Trudpert society. Moulding the future with truth and justice.",
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
