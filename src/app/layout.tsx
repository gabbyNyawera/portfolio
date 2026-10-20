import type { Metadata } from "next";
import { Inter, Newsreader, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { GlobalCursor } from "@/components/global-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Gabrielle Nyawera — Product Designer",
  description: "Personal site of Gabrielle Nyawera, a product designer crafting calm, considered digital experiences.",
  openGraph: {
    title: "Gabrielle Nyawera — Product Designer",
    description: "Calm, considered digital experiences with a focus on clarity, usability, and the details that make complex things feel obvious.",
    type: "website",
    siteName: "Gabrielle Nyawera",
    images: [{ url: "/images/hero/gabe-illustration.png", alt: "Gabrielle Nyawera — Product Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabrielle Nyawera — Product Designer",
    description: "Calm, considered digital experiences with a focus on clarity, usability, and the details that make complex things feel obvious.",
    images: ["/images/hero/gabe-illustration.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
