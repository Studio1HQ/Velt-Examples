"use client";

import { useState } from "react";
import { EmailComposer } from "@/components/funtions/EmailComposer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useTheme from "@/components/funtions/useTheme";
import { VeltComments } from "@veltdev/react";

const queryClient = new QueryClient();

export default function Home() {
    const theme=useTheme()

  return (
    <QueryClientProvider client={queryClient}>
   
        <div className="min-h-screen bg-gray-50 dark:bg-[#25293c]">
          <EmailComposer />
        </div>
        <VeltComments
          textMode={false}
          shadowDom={false}
          textCommentToolShadowDom={false}
          darkMode={theme.theme === "dark"}
        />
    </QueryClientProvider>
  );
}
