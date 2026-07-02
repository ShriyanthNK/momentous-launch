import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Momentous: Did you improve, or stay the same?",
  description:
    "One honest question a day. Take the 2-minute self-check and see exactly where you stand before Momentous launches.",
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
      </body>
    </html>
  );
}
