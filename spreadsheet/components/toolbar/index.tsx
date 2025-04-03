"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  VeltCommentsSidebar,
  VeltNotificationsTool,
  VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronUp,
  Circle,
  CircleDot,
  ImageIcon,
  Italic,
  Link,
  Moon,
  Pencil,
  Strikethrough,
  Sun,
  Underline,
  Undo2,
} from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
// [VELT] Initialize user
import { useVeltUser } from "../velt/VeltInitializeUser";
import { Separator } from "../ui/separator";
import { useSearchParams } from "next/navigation";
const toolbar_css = "h-8 w-8 rounded-full hover:dark:bg-[#ffffff14]";
export default function Toolbar() {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { currentUser, switchUser, users } = useVeltUser();
  const searchParams = useSearchParams();
  const focused = (searchParams.get("focused") || "true") === "true";
  console.log(focused);
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSwitchUser = (user: typeof currentUser) => {
    switchUser(user);
    setIsDropdownOpen(false);
  };

  const getUserColor = (userId: string) => {
    return userId === "user-bread"
      ? "var(--bread-color)"
      : "var(--felix-color)";
  };
  const toolbarIcons = [
    Bold,
    Italic,
    Underline,
    Strikethrough,
    "separator",
    AlignLeft,
    AlignCenter,
    AlignRight,
    "separator",
    ImageIcon,
    Link,
    Pencil,
  ];
  const [title, setTitle] = useState("Planets");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <div className="p-4 border-b flex items-center justify-between border-[#f5f5f5] dark:border-[#ffffff14]">
      <div className="flex items-center gap-2">
        <div className="pl-9 flex items-center gap-2">
          {focused && (
            <>
              <Button variant="ghost" size="icon" className={`${toolbar_css}`}>
                <Undo2 size={18} className="mt-0.5 stroke-[#7f7f7f]" />
              </Button>
              <Button variant="ghost" size="icon" className={`${toolbar_css}`}>
                <Undo2
                  size={18}
                  className="mt-0.5 stroke-[#7f7f7f] scale-x-[-1]"
                />
              </Button>
              <Separator
                orientation="vertical"
                className="h-[25px] dark:bg-bg-[#ffffff14]"
              />
            </>
          )}

          <div className="ml-1">
            <input
              value={title}
              placeholder="Enter Name"
              maxLength={12}
              onChange={onChangeHandler}
              className="p-2 rounded-md border border-transparent focus:!border-[#FFCD2E] focus:ring-1 focus:!ring-[#FFCD2E] focus:outline-none"
            />
          </div>
        </div>
        {focused && (
          <div className="items-center gap-5 hidden lg:flex">
            {toolbarIcons.map((Icon, index) =>
              Icon === "separator" ? (
                <Separator
                  key={index}
                  orientation="vertical"
                  className="h-[25px] dark:bg-bg-[#ffffff14]"
                />
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={toolbar_css}
                >
                  <Icon size={18} color="#7f7f7f" />
                </Button>
              )
            )}
          </div>
        )}
      </div>

      <div className="flex items-center">
        <div className="relative">
          <div className="flex items-center gap-3">
            <div data-user-id={currentUser.userId}>
              {/* [VELT] Presence for cursor */}
              <VeltPresence
                // @ts-ignore
                userAvatars={{
                  [currentUser.userId]: currentUser.profileUrl,
                }}
              />
            </div>

            <div className="relative flex items-center gap-1 bg-black/10 dark:bg-white/10 rounded-full p-1 pr-2">
              <Avatar
                className="h-8 w-8 cursor-pointer hover:opacity-80"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <AvatarFallback
                  style={{
                    backgroundImage: `url(${currentUser.profileUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="text-white"
                />
              </Avatar>

              <ChevronUp
                size={18}
                className={`text-gray-600 dark:text-gray-300 transition-transform duration-200 cursor-pointer ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>

            {/* [VELT] Sidebar Button */}
            {mounted && <VeltSidebarButton darkMode={theme === "dark"} />}
            {/* [VELT] Comments Sidebar */}
            {mounted && <VeltCommentsSidebar darkMode={theme === "dark"} />}
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 dark:bg-black/90 bg-white/90 backdrop-blur-sm border rounded-lg shadow-lg py-1 z-50 border-[#f5f5f5] dark:border-[#ffffff14]">
              {users.map((user) => (
                <div
                  key={user.userId}
                  className="px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback
                            style={{
                              backgroundImage: `url(${user.profileUrl})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="text-white"
                          />
                        </Avatar>
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border-2 border-[#f5f5f5] dark:border-[#ffffff14] z-10" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {user.name}
                      </span>
                    </div>
                    <div
                      onClick={() => handleSwitchUser(user)}
                      className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer ${
                        currentUser.userId === user.userId
                          ? "text-green-500"
                          : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      }`}
                    >
                      {currentUser.userId === user.userId ? (
                        <CircleDot size={18} />
                      ) : (
                        <Circle size={18} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-8 w-8 flex items-center justify-center">
          {/* [VELT] Notifications Tool */}
          {mounted && <VeltNotificationsTool darkMode={theme === "dark"} />}
        </div>
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className={`${toolbar_css}`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        )}
      </div>
    </div>
  );
}
