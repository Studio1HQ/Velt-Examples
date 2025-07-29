"use client";

import React, { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Save, Menu, X, User, ChevronDown } from "lucide-react";
import { EmailData } from "./EmailComposer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  VeltCommentsSidebar,
  VeltCommentTool,
  VeltNotificationsTool,
  VeltSidebarButton,
} from "@veltdev/react";

interface HeaderProps {
  emailData: EmailData;
  updateEmailData: (updates: Partial<EmailData>) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

import { useVeltClient } from "@veltdev/react";
import { names, userIds, useUserStore } from "@/helper/userdb";
import useTheme, { ThemeToggleButton } from "./useTheme";

export const Header: React.FC<HeaderProps> = ({
  emailData,
  updateEmailData,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { user, setUser } = useUserStore();
  const { client } = useVeltClient();

  const predefinedUsers = useMemo(
    () =>
      userIds.map((uid, index) => {
        // Use DiceBear Avatars for demonstration
        const avatarUrls = [
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Nany",
          "https://api.dicebear.com/7.x/pixel-art/svg?seed=Mary",
        ];
        return {
          uid: uid,
          displayName: names[index],
          email: `${names[index].toLowerCase()}@gmail.com`,
          photoUrl: avatarUrls[index],
        };
      }),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      const storedUser = localStorage.getItem("user-storage");
      if (!storedUser) {
        setUser(predefinedUsers[0]);
      }
    }
  }, [user, setUser, predefinedUsers]);

  useEffect(() => {
    if (!client || !user) return;
    const veltUser = {
      userId: user.uid,
      organizationId: "organization_id",
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl, // Pass avatar to Velt
    };

    client.identify(veltUser);
  }, [client, user]);
  const theme = useTheme();
  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 dark:bg-[#25293c] dark:border-white/40">
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {/* Left side - Toggle, Subject, From */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Sidebar Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-900 lg:hidden"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          {/* Subject and From fields */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col space-y-1">
              <label className="text-xs font-medium text-gray-700 dark:text-white/70">
                Subject
              </label>
              <Input
                value={emailData.subject}
                onChange={(e) => updateEmailData({ subject: e.target.value })}
                placeholder="Enter email subject..."
                className="w-full sm:w-64 md:w-80 h-8 text-sm dark:bg-[#2f3349] dark:text-white/70"
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-xs font-medium text-gray-700 dark:text-white/70">
                From
              </label>
              <Input
                value={emailData.from}
                onChange={(e) => updateEmailData({ from: e.target.value })}
                className="w-full sm:w-48 md:w-60 h-8 text-sm dark:bg-[#2f3349] dark:text-white/70"
              />
            </div>
          </div>
        </div>

        {/* Right side - User, Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <VeltNotificationsTool darkMode={theme.theme === "dark"} />
          {/* User Dropdown */}
          <ThemeToggleButton />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 h-8 dark:bg-[#2f3349] dark:border dark:border-white/30"
              >
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src={user?.photoUrl || "https://via.placeholder.com/100"}
                    alt={user?.displayName || "User"}
                  />
                  <AvatarFallback className="text-xs">
                    {user?.displayName}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm truncate max-w-[100px]">
                  {user?.displayName}
                </span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 dark:bg-[#2f3349]">
              <DropdownMenuLabel>Select User</DropdownMenuLabel>
              <DropdownMenuSeparator className="dark:bg-white/40" />
              {predefinedUsers.map((Currentuser) => (
                <DropdownMenuItem
                  key={Currentuser.uid}
                  onClick={() => setUser(Currentuser)}
                  className="flex items-center space-x-3 p-3 cursor-pointer hover:dark:bg-[#515881]"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={Currentuser.photoUrl}
                      alt={Currentuser.displayName}
                    />
                    <AvatarFallback className="text-xs">
                      {Currentuser.displayName}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white/70">
                      {Currentuser.displayName}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-white/60">
                      {Currentuser.email}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-white/50">
                      User
                    </div>
                  </div>
                  {user?.uid === Currentuser.uid && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 text-blue-600 hover:dark:bg-[#515881] ">
                <User size={16} />
                <span className="hover:dark:text-white/70">Manage Users</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Save Button */}
          <Button
            variant="outline"
            size="sm"
            className="space-x-2 h-8 dark:bg-[#2f3349] dark:border dark:border-white/30"
          >
            <Save size={16} />
            <span className="hidden sm:inline">Save</span>
          </Button>

          {/* Send Button */}
          <Button
            size="sm"
            className="flex items-center space-x-2 h-8 bg-indigo-600 hover:bg-indigo-700 "
          >
            <Send size={16} className="dark:text-white" />
            <span className="hidden sm:inline dark:text-white">Send</span>
          </Button>

          <VeltSidebarButton />
          <VeltCommentsSidebar/>
        </div>
      </div>
    </div>
  );
};
