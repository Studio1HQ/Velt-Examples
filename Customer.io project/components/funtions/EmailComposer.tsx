"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Toolbar } from "./Toolbar";
import { EditorArea } from "./EditorArea";
import { cn } from "@/lib/utils";
import { useSetDocument } from "@veltdev/react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export interface EmailData {
  subject: string;
  from: string;
  to: string;
  content: string;
  template: string;
}

export const EmailComposer: React.FC = () => {
  const [emailData, setEmailData] = useState<EmailData>({
    subject: "",
    from: "hello@yourcompany.com",
    to: "",
    content: "",
    template: "blank",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const updateEmailData = (updates: Partial<EmailData>) => {
    setEmailData((prev) => ({ ...prev, ...updates }));
  };
    useSetDocument("sheet-1", { documentName: "customer.io" });
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // lg breakpoint

    const handleResize = () => {
      setIsSidebarOpen(mediaQuery.matches); // true for large screens, false otherwise
    };

    handleResize(); // set initial state
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#25293c]">
      {/* Sidebar */}
      <div
        className={cn(
          "max-h-screen overflow-y-scroll transition-all duration-300 ease-in-out bg-white border-r border-gray-200 no-scrollbar dark:bg-[#25293c]",
          isSidebarOpen ? "w-80" : "w-0 overflow-hidden"
        )}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onInsertBlock={(blockType) => {
            console.log("Insert block:", blockType);
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white dark:bg-[#25293c]">
        {/* Header */}
        <Header
          emailData={emailData}
          updateEmailData={updateEmailData}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* Toolbar */}
        <Toolbar
          onFormatting={(format) => {
            console.log("Apply formatting:", format);
          }}
        />
        <EditorArea
          emailData={emailData}
          updateEmailData={updateEmailData}
        />
      </div>
    </div>
  );
};
