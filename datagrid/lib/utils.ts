import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges multiple class name values into a single optimized string for Tailwind CSS.
 *
 * Accepts any number of class name arguments, conditionally joins them, and resolves Tailwind CSS class conflicts.
 *
 * @param inputs - Class name values to combine and merge.
 * @returns A merged class name string with conflicts resolved for Tailwind CSS.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
