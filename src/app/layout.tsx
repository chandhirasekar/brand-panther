import type { Metadata } from "next";
import { Outfit, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const gothic = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "Brand Panther | AI-Powered Growth Partner",
  description: "From first click to final sale. Brand Panther combines AI, creativity and performance marketing to help businesses attract qualified leads.",
  keywords: ["AI Marketing", "Growth Partner", "Performance Marketing", "Meta Ads", "Google Ads", "Digital Agency"],
  authors: [{ name: "Brand Panther" }],
  openGraph: {
    title: "Brand Panther | AI-Powered Growth Partner",
    description: "From first click to final sale. Brand Panther combines AI, creativity and performance marketing to help businesses attract qualified leads.",
    url: "https://brandpanther.ai",
    siteName: "Brand Panther",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${gothic.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
