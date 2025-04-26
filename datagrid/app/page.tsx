/* [Velt] This is the main application page that sets up the Velt provider and collaboration features. */

"use client";

import DatagridApp from "@/components/document";
import Sidebar from "@/components/sidebar";
import SuspenseWrapper from "@/components/SuspenseWrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Toolbar from "@/components/toolbar";
import VeltCollaboration from "@/components/velt/VeltCollaboration";
import { VeltProvider } from "@veltdev/react";

export default function DatagridApp() {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_API_KEY || ""}>
      <VeltCollaboration />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="flex h-screen w-full flex-col overflow-y-hidden">
          <div className="flex h-screen">
            <SuspenseWrapper>
              <Sidebar />
              <div className="flex-1 flex flex-col overflow-hidden min-w-[920px] h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-800 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                <Toolbar />
                <div className="flex-1 overflow-auto">
                  <div className="min-w-[920px] h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-800 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <DatagridApp />
                  </div>
                </div>
              </div>
            </SuspenseWrapper>
          </div>
        </div>
      </ThemeProvider>
    </VeltProvider>
  );
}
