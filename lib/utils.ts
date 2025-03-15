import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const styles = {
  link: "hover:text-[#d4af37] transition-colors",
  iconLink: "flex items-center hover:text-[#d4af37] transition-colors",
  input: "px-4 py-2 rounded-sm bg-[#333] text-white border border-[#444] focus:outline-none focus:border-[#d4af37]",
  button: "bg-[#d4af37] text-black px-4 py-2 rounded-sm hover:bg-[#c4a030] transition-colors",
  outlineButton: "px-4 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#333] transition-colors rounded-sm",
} as const;

