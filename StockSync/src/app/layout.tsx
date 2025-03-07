import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VeltProviderWrapper from './VeltProviderWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In line comment Demo with Velt SDK",
  description: "This is a demo of the Velt SDK in action. It is a simple inventory management system that allows you to add, edit, and delete items in the inventory.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VeltProviderWrapper>
          {children}
        </VeltProviderWrapper>
      </body>
    </html>
  );
}
