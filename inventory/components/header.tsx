import React, { useState, useMemo, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import {
  Star,
  Bell,
  Filter,
  Download,
  MoreHorizontal,
  Search,
  Plus,
  Moon,
  Sun,
  Inbox,
} from 'lucide-react';
import { VeltPresence, VeltNotificationsTool, VeltCommentsSidebar, VeltSidebarButton, useVeltClient } from '@veltdev/react';
import { names, userIds, useUserStore } from "@/helper/userdb";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header: React.FC = () => {
  const { user, setUser } = useUserStore();
  const { client } = useVeltClient();

  const predefinedUsers = useMemo(
    () =>
      userIds.map((uid, index) => {
        // Use DiceBear Avatars for demonstration
        const avatarUrls = [
          "https://api.dicebear.com/7.x/personas/svg?seed=Nancy",
          "https://api.dicebear.com/7.x/personas/svg?seed=Mary",
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
      organizationId: "inventory-dashboard-org",
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoUrl, // Pass avatar to Velt
    };
    client.identify(veltUser);
  }, [client, user]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize dark mode from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(savedDarkMode);

      const body = document.getElementById('app-body');
      if (body) {
        if (savedDarkMode) {
          body.classList.add('dark');
        } else {
          body.classList.remove('dark');
        }
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Apply dark class to body
    const body = document.getElementById('app-body');
    if (body) {
      if (newDarkMode) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }

    // Store preference in localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      {/* Velt Comments Sidebar */}
      <VeltCommentsSidebar />

      <header className={styles['header-container']}>
        {/* Top Navigation */}
        <div className={styles['top-nav']}>
          <div className={styles['nav-left']}>
            <div className={styles['version-info']}>

            </div>
            <div className={styles['breadcrumb-main']}>
              <span>Inventory Dashboard</span>
              <span>- Stock Items</span>
            </div>
          </div>
          <div className={styles['nav-right']}>
            <div className={styles['action-group']}>
              {/* Velt Notification Tool */}
              <VeltNotificationsTool />
            </div>
            <div className={styles['button-group']}>
              {/* VeltCommentsSidebar Button */}
              <VeltSidebarButton>
                <button className={styles['ghost-btn']}>
                  <Inbox size={16} />
                  <span>Discussions</span>
                </button>
              </VeltSidebarButton>

              {/* Theme Toggle */}
              <div
                className={`${styles['theme-toggle']} ${darkMode ? styles['dark'] : styles['light']}`}
                onClick={toggleDarkMode}
                title="Toggle dark mode"
              >
                <div className={styles['theme-toggle-track']}>
                  <div
                    className={`${styles['theme-toggle-thumb']} ${darkMode ? styles['dark'] : styles['light']}`}
                    style={{
                      transform: darkMode ? 'translateX(24px)' : 'translateX(0)',
                      transition: 'transform 0.2s',
                    }}
                  >
                    {darkMode ? (
                      <Moon size={16} color="#3887fa" />
                    ) : (
                      <Sun size={16} color="#f6c026" />
                    )}
                  </div>
                </div>
              </div>

              <button className={styles['blue-btn']}>
                <Plus size={16} />
                <span>Add Item</span>
              </button>
              {/* User Dropdown */}
              {user && (
                <div className={styles['user-dropdown']} ref={dropdownRef}>
                  <button
                    className={styles['user-btn']}
                    type="button"
                    onClick={() => setDropdownOpen((open) => !open)}
                  >
                    <Avatar>
                      <AvatarImage src={user.photoUrl} alt={user.displayName} />
                      <AvatarFallback>{user.displayName[0]}</AvatarFallback>
                    </Avatar>
                    <span className={styles['user-name']}>{user.displayName}</span>
                    <svg className={`ml-1 w-4 h-4 transition-transform ${dropdownOpen ? styles['rotate-180'] : styles['rotate-0']}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {dropdownOpen && (
                    <div className={styles['user-dropdown-menu']}>
                      {predefinedUsers.map((predefinedUser) => (
                        <div
                          key={predefinedUser.uid}
                          className={styles['user-dropdown-item'] + (user.uid === predefinedUser.uid ? ' ' + styles['user-dropdown-item-active'] : '')}
                          onClick={() => {
                            setUser(predefinedUser);
                            setDropdownOpen(false);
                          }}
                        >
                          <Avatar>
                            <AvatarImage src={predefinedUser.photoUrl} alt={predefinedUser.displayName} />
                            <AvatarFallback>{predefinedUser.displayName[0]}</AvatarFallback>
                          </Avatar>
                          <span>{predefinedUser.displayName}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>


      </header>
    </>
  );
};

export default Header;
