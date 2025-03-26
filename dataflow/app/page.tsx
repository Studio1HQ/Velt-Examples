"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Toolbar from "@/components/toolbar"
import Sidebar from "@/components/sidebar"
import Document from "@/components/document"

interface MissionData {
  id: number
  mission: string
  destination: string
  missionType: "Manned" | "Unmanned"
}

export default function SpreadsheetApp() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex h-screen w-full flex-col">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Toolbar />
            <Document />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
        active ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}

