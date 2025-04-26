"use client";
import { Suspense } from "react";

/**
 * Wraps child components in a React Suspense boundary with a "Loading..." fallback.
 *
 * Displays a loading message while the wrapped content is being loaded asynchronously.
 *
 * @param children - The content to render within the suspense boundary.
 */
export default function SuspenseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
