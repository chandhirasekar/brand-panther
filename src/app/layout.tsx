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
  metadataBase: new URL("https://brandpanther.org"),
  title: "Brand Panther | AI-Powered Growth Partner",
  description: "From first click to final sale. Brand Panther combines AI, creativity and performance marketing to help businesses attract qualified leads.",
  keywords: ["AI Marketing", "Growth Partner", "Performance Marketing", "Meta Ads", "Google Ads", "Digital Agency"],
  authors: [{ name: "Brand Panther" }],
  openGraph: {
    title: "Brand Panther | AI-Powered Digital Growth Partner",
    description: "From first click to final sale. Brand Panther combines AI, creativity and performance marketing to help businesses attract qualified leads and scale revenue.",
    url: "https://brandpanther.org",
    siteName: "Brand Panther",
    images: [
      {
        url: "/brand-panther.png",
        width: 1200,
        height: 630,
        alt: "Brand Panther - AI-Powered Digital Growth Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Panther | AI-Powered Digital Growth Partner",
    description: "From first click to final sale. Brand Panther combines AI, creativity and performance marketing to help businesses attract qualified leads and scale revenue.",
    images: ["/brand-panther.png"],
  },
  icons: {
    icon: "/logo-mark.png",
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
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
