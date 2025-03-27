"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
  Bell,
  Bold,
  ChevronUp,
  ImageIcon,
  Italic,
  Link,
  Moon,
  Pencil,
  Strikethrough,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Toolbar() {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="border-b flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowRight size={16} />
        </Button>
        <div className="ml-4">
          <span className="font-medium">Planets</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Strikethrough size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignLeft size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignCenter size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignRight size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ImageIcon size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Link size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil size={16} />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="flex items-center gap-1">
            <Avatar
              className="h-8 w-8 cursor-pointer hover:opacity-80"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <AvatarFallback className="bg-pink-500 text-white">B</AvatarFallback>
            </Avatar>
            <ChevronUp
              size={16}
              className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black dark:bg-black bg-white border border-gray-800 rounded-lg shadow-lg py-1 z-50">
              <div className="px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-pink-500 text-white">B</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Bread</span>
                  </div>
                  <button className="text-red-500 text-xs px-2 py-1 rounded hover:bg-red-500/10">
                    LOGOUT
                  </button>
                </div>
              </div>
              <div className="px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 hover:bg-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
                      <AvatarFallback className="bg-pink-500 text-white text-xs">🎮</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-400 dark:text-gray-400 text-gray-600">Felix</span>
                  </div>
                  <button className="text-gray-400 dark:text-gray-400 text-gray-600 text-xs px-2 py-1 rounded hover:bg-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200">
                    LOGIN
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 relative">
          <Bell size={16} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500"></span>
        </Button>
        <div className="flex items-center gap-1 bg-muted rounded-md px-2 py-1">
          <span className="text-sm">19</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </div>
  );
}

