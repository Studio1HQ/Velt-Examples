import "@/styles/globals.css";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Sales data Spreadsheet",
  description: "A spreadsheet application for sales data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased text-sm ">{children}</body>
    </html>
  );
}

import "./globals.css";
