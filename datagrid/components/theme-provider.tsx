"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * Provides theme context to its children using the next-themes provider.
 *
 * Wraps the application or component subtree to enable dynamic theme switching and access to theme-related context.
 *
 * @param children - React nodes that will have access to the theme context.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
