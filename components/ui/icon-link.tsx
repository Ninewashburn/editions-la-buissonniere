import React from "react";
import Link from "next/link";
import { styles } from "@/lib/utils";
import OptimizedIcon from "./icon";
import { LucideIcon } from "lucide-react";

interface IconLinkProps {
  href: string;
  icon: LucideIcon | React.FC<any>;
  children: React.ReactNode;
  size?: number;
  external?: boolean;
  className?: string;
}

export function IconLink({
  href,
  icon,
  children,
  size = 16,
  external = false,
  className,
}: IconLinkProps) {
  const iconElement = (
    <OptimizedIcon icon={icon} size={size} className="mr-2" />
  );
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.iconLink} ${className || ""}`}
      >
        {iconElement}
        <span>{children}</span>
      </a>
    );
  }
  
  return (
    <Link href={href} className={`${styles.iconLink} ${className || ""}`}>
      {iconElement}
      <span>{children}</span>
    </Link>
  );
} 