"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  VeltCommentsSidebar,
  VeltNotificationsTool, VeltPresence,
  VeltSidebarButton,
} from "@veltdev/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  ArrowRight,
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
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useVeltUser } from "../velt/VeltInitializeUser";

export default function Toolbar() {
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { currentUser, switchUser, users } = useVeltUser();

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
    return userId === 'user-bread' ? 'var(--bread-color)' : 'var(--felix-color)';
  };

  return (
    <div className="border-b flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <div className="pl-9 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft size={16} className="mt-0.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowRight size={16} className="mt-0.5" />
          </Button>
          <div className="ml-1">
            <span className="font-medium">Planets</span>
          </div>
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
            <div data-user-id={currentUser.userId}>
              <VeltPresence
                // @ts-ignore
                userAvatars={{
                  [currentUser.userId]: currentUser.profileUrl
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  className="text-white"
                />
              </Avatar>

              <ChevronUp
                size={16}
                className={`text-gray-600 dark:text-gray-300 transition-transform duration-200 cursor-pointer ${isDropdownOpen ? 'rotate-180' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>

            {/* [VELT] Sidebar Button */}
            <VeltSidebarButton darkMode={theme === "dark"} />
            {/* [VELT] Comments Sidebar */}
            <VeltCommentsSidebar darkMode={theme === "dark"} />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 dark:bg-black/90 bg-white/90 backdrop-blur-sm border border-gray-800 rounded-lg shadow-lg py-1 z-50">
              {users.map((user) => (
                <div key={user.userId} className="px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback
                            style={{
                              backgroundImage: `url(${user.profileUrl})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                            className="text-white"
                          />
                        </Avatar>
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border-2 border-white dark:border-black z-10" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{user.name}</span>
                    </div>
                    <div
                      onClick={() => handleSwitchUser(user)}
                      className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer ${currentUser.userId === user.userId
                        ? 'text-green-500'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                        }`}
                    >
                      {currentUser.userId === user.userId ? (
                        <CircleDot size={16} />
                      ) : (
                        <Circle size={16} />
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
          <VeltNotificationsTool />
        </div>
        {mounted && (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        )}
      </div>
    </div >
  );
}

