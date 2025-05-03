import "./globals.css";

import type { Metadata } from "next";
import type React from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataGridContextProvider } from "@/components/providers/datagrid-context-provider";

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Datagrid application",
  description: "A Datagrid application for sales data",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Datagrid application",
    description: "A Datagrid application for sales data",
    url: "https://your-site-url.com",
    siteName: "DatagridApp",
    images: [
      {
        url: "https://your-site-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Datagrid App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datagrid application",
    description: "A Datagrid application for sales data",
    images: ["https://your-site-url.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased text-sm">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <DataGridContextProvider>
              {children}
            </DataGridContextProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
