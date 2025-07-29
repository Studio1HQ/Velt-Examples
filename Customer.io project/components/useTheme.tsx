import React, { createContext, useContext, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // Import the icons from lucide-react

// ThemeContext to store theme state globally
interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider to wrap the app and provide the theme state
export const ThemeProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no theme is saved, set it to light
      setTheme('light');
    }
  }, []);

  // Set the theme attribute on the <html> tag directly
  useEffect(() => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('class', theme); // Set the theme attribute

    // Persist the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Button Component
export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-gray-200 dark:bg-gray-700/30 hover:dark:bg-gray-700 rounded-full transition-all"
    >
      {theme === 'light' ? (
        <Moon className="text-[#8c8c8c] dark:text-gray-200" size={20}/>
      ) : (
        <Sun className="text-[#8c8c8c] dark:text-gray-200" size={20}/>
      )}
    </button>
  );
};

export default useTheme;
