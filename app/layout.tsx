import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Font configurations
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Technothrone Solutions | Full-Stack Development & Data Analytics",
  description: "Government-grade software engineering. From KRA debt automation to AI-powered platforms.",
  keywords: "full-stack developer, data analytics, KRA, migration, SQL, TypeScript, Python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}