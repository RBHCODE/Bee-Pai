import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine Tailwind class names conditionally.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


