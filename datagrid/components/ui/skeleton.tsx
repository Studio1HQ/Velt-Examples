import { cn } from "@/lib/utils";

/**
 * Renders a placeholder div with animated pulse and muted background, typically used to indicate loading content.
 *
 * @param className - Additional CSS classes to apply to the skeleton element.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
