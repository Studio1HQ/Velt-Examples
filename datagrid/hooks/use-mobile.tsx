"use client";

import { useEffect, useState } from "react";

/**
 * React hook that returns whether the viewport width is less than 768 pixels.
 *
 * @returns `true` if the current window width is less than 768 pixels, otherwise `false`.
 *
 * @remark The returned value updates automatically when the window is resized.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile;
}
