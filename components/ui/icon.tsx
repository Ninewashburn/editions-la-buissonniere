"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface OptimizedIconProps {
  icon: LucideIcon | React.FC<any>;
  size?: number;
  color?: string;
  className?: string;
  [key: string]: any; // Pour les autres props
}

// Wrapper pour les icônes Lucide qui évite les problèmes d'hydratation
export default function OptimizedIcon({
  icon: Icon,
  size = 24,
  color,
  className = "",
  ...props
}: OptimizedIconProps) {
  // Cette approche "client-only" résout les incohérences entre serveur et client
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien afficher pendant l'hydratation pour éviter les attributs supplémentaires du serveur
  if (!mounted) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  // Rendre l'icône uniquement côté client
  return <Icon size={size} color={color} className={className} {...props} />;
}
