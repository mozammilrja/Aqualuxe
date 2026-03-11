import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export const metadata: Metadata = {
  title: "Aqualuxe | Premium Water Delivery Gurgaon",
  description:
    "Premium packaged drinking water with 10-stage purification. BIS certified, safe, and refreshing hydration delivered to your doorstep in Gurgaon.",
  keywords: [
    "water delivery",
    "packaged drinking water",
    "mineral water",
    "water jar delivery",
    "Gurgaon water delivery",
    "Aqualuxe",
    "BIS certified water",
  ],
  authors: [{ name: "Aqualuxe" }],
  metadataBase: new URL("https://aqualuxe.com"),
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Aqualuxe | Premium Water Delivery Gurgaon",
    description: "Premium packaged drinking water with 10-stage purification. BIS certified water delivered to your doorstep.",
    url: "https://aqualuxe.com",
    siteName: "Aqualuxe",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqualuxe | Premium Water Delivery Gurgaon",
    description: "Premium packaged drinking water with 10-stage purification. BIS certified water delivered to your doorstep.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
