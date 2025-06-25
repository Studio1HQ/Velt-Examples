import React, { useEffect, useState } from "react";
import { Video, Upload, Sun, Moon } from "lucide-react";
import { menuItems } from "../utils/constant";
import { VeltSidebarButton } from "@veltdev/react";
import { User } from "../types";
import { useTheme } from "../context/ThemeContext";

const Topbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedUser = localStorage.getItem("velt_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Get user initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="bg-white dark:bg-[#25293c] border-b border-gray-200 dark:border-[#373B59]/50 fixed top-0 left-0 right-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <Video className="text-indigo-500" size={24} />
            <span className="text-gray-900 dark:text-white font-semibold text-lg">
              Video Player
            </span>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 text-gray-600 dark:text-[#F8F7FA]/80 hover:text-gray-900 dark:hover:text-[#F8F7FA] transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
                {item.count && (
                  <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-[#F8F7FA]/80 hover:bg-gray-100 dark:hover:bg-[#373B59] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Upload Button */}
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 flex items-center space-x-2 transition-all duration-200">
              <Upload size={18} />
              <span className="hidden sm:inline">Upload</span>
            </button>

            {/* Comments Button */}
            <VeltSidebarButton />

            {/* Profile */}
            {user && (
              <div className="relative flex items-center">
                <button className="flex items-center space-x-3 group focus:outline-none">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {getInitials(user.displayName)}
                      </span>
                    </div>
                  )}
                  <span className="text-gray-900 dark:text-white text-sm hidden sm:block">
                    {user.displayName}
                  </span>
                </button>

                {/* Hover Profile Card */}
                <div className="absolute top-full right-0 transform -translate-x-4 sm:translate-x-0 mt-2 min-w-[200px] w-max max-w-sm bg-white dark:bg-[#2F3349] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4">
                    <div className="flex items-start space-x-3">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-12 h-12 rounded-full flex-shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-semibold">
                            {getInitials(user.displayName)}
                          </span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 dark:text-white font-medium truncate">
                          {user.displayName}
                        </h4>
                        <p className="text-gray-500 dark:text-[#F8F7FA]/60 text-sm truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
