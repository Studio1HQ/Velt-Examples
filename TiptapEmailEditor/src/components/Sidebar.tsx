import React from "react";
import { PenSquare, X } from "lucide-react";
import { bottomMenuItems, menuItems } from "../utils/constant";
import MenuItemForNavbar from "./MenuItemForNavbar";
import { VeltSidebarButton } from "@veltdev/react";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="w-[280px] sm:w-64 bg-[#25293c] h-screen flex flex-col border-r border-[#373B59]/50">
      {/* Close Button - Mobile Only */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-2 text-[#F8F7FA]/80 hover:text-[#F8F7FA]"
      >
        <X size={24} />
      </button>

      {/* Profile Section */}
      <div className="p-6 border-b border-[#373B59]/50 mt-14 lg:mt-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">JD</span>
          </div>
          <div>
            <h3 className="text-[#F8F7FA] font-medium">John Doe</h3>
            <p className="text-[#F8F7FA]/60 text-sm">john@example.com</p>
          </div>
        </div>
      </div>

      {/* Compose Button */}
      <div className="p-4">
        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-3 flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25">
          <PenSquare size={18} />
          <span>Compose</span>
        </button>
      </div>
      <div className="p-4">
        <VeltSidebarButton />
      </div>
      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-3">
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <MenuItemForNavbar
              key={index}
              icon={item.icon}
              label={item.label}
              count={item.count}
            />
          ))}
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-3 border-t border-[#373B59]/50">
        {bottomMenuItems.map((item, index) => (
          <MenuItemForNavbar key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
