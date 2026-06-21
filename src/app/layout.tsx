import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Creative Agency",
  description: "A premium creative agency delivering outstanding design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased selection:bg-accent selection:text-white`}>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
