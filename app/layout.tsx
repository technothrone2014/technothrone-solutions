import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}