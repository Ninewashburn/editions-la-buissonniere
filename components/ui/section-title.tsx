import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  variant?: "left-border" | "bottom-border";
  className?: string;
}

export function SectionTitle({
  children,
  variant = "left-border",
  className,
}: SectionTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg font-bold mb-4",
        variant === "left-border" && "border-l-2 border-[#d4af37] pl-3",
        variant === "bottom-border" && "border-b border-[#d4af37] pb-2",
        className
      )}
    >
      {children}
    </h3>
  );
} 