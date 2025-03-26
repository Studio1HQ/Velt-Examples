import { HomeIcon, LayoutGrid, Settings } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        w-[240px] lg:w-[200px] border-r bg-background flex flex-col h-screen
        ${isSidebarOpen ? 'shadow-lg lg:shadow-none' : ''}
      `}>
        <div className="flex items-center p-3 border-b">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${!isSidebarOpen ? 'rotate-180' : 'rotate-0'
                }`}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center p-3 border-b">
          <div className="h-8 w-8 rounded-full flex items-center justify-center text-amber-800 text-xs font-bold overflow-hidden">
            <Image
              src="https://velt-spreadsheet-app-demo.vercel.app/assets/bread_icon.png"
              alt="Bread Icon"
              width={24}
              height={24}
            />
          </div>
          <span className="ml-2 text-sm font-medium">Bread's Workspace</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <SidebarItem icon={<HomeIcon size={18} />} label="Home" />
          <SidebarItem icon={<LayoutGrid size={18} />} label="Sheets" active />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </div>
        <div className="p-4 mt-auto border-t">
          <span className="text-xs text-gray-500 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
              <path d="M8 0L14.9282 4V12L8 16L1.07179 12V4L8 0Z" fill="currentColor" />
            </svg>
            <span className="whitespace-nowrap">MADE WITH VELT.DEV</span>
          </span>
        </div>
      </div>

      {/* Mobile Toggle Button - Only visible when sidebar is closed on mobile */}
      <button
        onClick={toggleSidebar}
        className={`fixed lg:hidden top-4 left-4 z-50 p-2 rounded-lg hover:bg-gray-800 transition-all duration-200 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-gray-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean; }) {
  return (
    <div
      className={`flex items-center px-4 h-10 w-full ${active ? "bg-muted font-medium" : "text-muted-foreground hover:bg-muted/50"
        }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm whitespace-nowrap">{label}</span>
    </div>
  );
}

