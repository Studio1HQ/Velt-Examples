"use client";

import { VeltProvider } from "@veltdev/react";
import { VeltComments } from "@veltdev/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_ID || ""}>
      {children}
      <VeltComments textMode={false} />
    </VeltProvider>
  );
}
