import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { GlobalCursor } from "@/components/global-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GlobalCursor />
        {children}
      </body>
    </html>
  );
}
