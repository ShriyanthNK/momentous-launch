import type { Metadata, Viewport } from "next";
import { Lora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const serifDisplay = Lora({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sansBody = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const SITE_URL = "https://momentous-launch.vercel.app";
const TITLE = "Momentous: Did you improve, or stay the same?";
const DESCRIPTION =
  "One honest question a day. Take the 2-minute self-check and see exactly where you stand before Momentous launches.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Momentous",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Momentous",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#16213e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifDisplay.variable} ${sansBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-cream">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
