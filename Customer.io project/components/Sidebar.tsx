"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  Type,
  Image,
  Square,
  Layout,
  Smile,
  Calendar,
  Star,
  ChevronDown,
  ChevronRight,
  Plus,
  LayoutPanelLeft,
  Database,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertBlock: (blockType: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onInsertBlock,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "content",
    "layout",
  ]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((s) => s !== sectionName)
        : [...prev, sectionName]
    );
  };

  const DateIntegration = ["Data Index", "Integrations", "Imports", "Exports"];

  const Content = [
    "Assets",
    "Email Layouts",
    "Snippets",
    "Collections (Premium)",
  ];

  const menuItems = [
    { name: "Dashboard", icon: "⏱️" },
    { name: "Analysis", icon: "📊" },
    { name: "Campaigns", icon: "📣" },
    { name: "Broadcasts", icon: "📢" },
    { name: "Transactional", icon: "📋" },
    { name: "Deliveries & Drafts", icon: "📬" },
    { name: "People", icon: "👤" },
    { name: "Accounts", icon: "🧾" },
    { name: "Webinars", icon: "🗓️" },
    { name: "Segments", icon: "🧩" },
    { name: "Activity Logs", icon: "📈" },
  ];

  const renderSection = (
    title: string,
    items: any[],
    sectionKey: string,
    icon: React.ReactNode
  ) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-lg"
      >
        <div className="space-x-2 flex items-center justify-start">
          <span className="text-gray-600 group-hover:text-blue-600">
            {icon}
          </span>

          <span className="font-medium text-sm text-gray-900">{title}</span>
        </div>

        {expandedSections.includes(sectionKey) ? (
          <ChevronDown size={16} />
        ) : (
          <ChevronRight size={16} />
        )}
      </button>

      {expandedSections.includes(sectionKey) && (
        <div className="mt-2 space-y-1">
          {items.map((item) => (
            <div
              key={item}
              onClick={() => onInsertBlock(item.toLowerCase())}
              className="flex items-center space-x-3 w-full p-2 text-left hover:bg-blue-50 rounded-lg group"
            >
              <div className="flex-1 min-w-0">
                <p className="ps-10 text-sm text-gray-900/70">{item}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="h-full bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Content</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {/* Templates */}
          <div>
            <h3 className="font-medium text-sm text-gray-900 mb-3">
              Templates
            </h3>
            <div className="mt-2 space-y-1">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <button
                    onClick={() => onInsertBlock(item.name.toLowerCase())}
                    className="flex items-center space-x-3 w-full p-2 text-left hover:bg-blue-50 rounded-lg group"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100">
                      <span className="text-gray-600 group-hover:text-blue-600">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      {/* <p className="text-xs text-gray-500 truncate">{item.description}</p> */}
                    </div>
                  </button>
                  {(index + 1) % 3 === 0 && <Separator />}{" "}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Separator />

          {/* Content Blocks */}
          {renderSection(
            "Data & Integrations",
            DateIntegration,
            "content",
            <Database size={19} />
          )}

          <Separator />

          {/* Layout Blocks */}
          {renderSection(
            "Content",
            Content,
            "layout",
            <LayoutPanelLeft size={19} />
          )}

          <Separator />
        </div>
      </ScrollArea>
    </div>
  );
};
