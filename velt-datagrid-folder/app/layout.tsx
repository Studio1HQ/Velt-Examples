import "./globals.css";

import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Datagrid application",
  description: "A Datagrid application for sales data",
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
