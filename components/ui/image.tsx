"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

interface OptimizedImageProps extends ImageProps {
  containerClassName?: string;
}

// Wrapper pour le composant Image qui résout les problèmes d'incohérence entre le serveur et le client
export default function OptimizedImage({ containerClassName, ...props }: OptimizedImageProps) {
  // Cette approche "client-only" résout les incohérences entre serveur et client
  const [mounted, setMounted] = React.useState(false);

  // Définir la stratégie de tailles adaptative selon le contexte
  const getSizes = () => {
    if (props.sizes) {
      return props.sizes; // Respecter les tailles personnalisées si définies
    }
    
    if (props.fill) {
      // Stratégie adaptative pour les images en mode fill
      // basée sur les classes de conteneur standard
      if (containerClassName?.includes("w-[200px]")) {
        return "200px"; // Pour les livres du carousel
      } else if (containerClassName?.includes("w-[180px]")) {
        return "180px"; // Pour les livres dans la biographie
      } else if (containerClassName?.includes("w-[250px]")) {
        return "250px"; // Pour les livres mis en avant
      } else if (containerClassName?.includes("h-64 w-full")) {
        return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"; // Pour les actualités (3 colonnes sur desktop)
      } else if (containerClassName?.includes("aspect-[4/3]")) {
        return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"; // Images dans liste d'actualités
      } else if (containerClassName?.includes("aspect-[4/5]")) {
        return "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"; // Image de biographie
      } else if (containerClassName?.includes("w-full")) {
        return "(max-width: 768px) 100vw, 100vw"; // Images pleine largeur
      } else {
        // Stratégie responsive par défaut
        return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
      }
    }
    
    return undefined; // Pas nécessaire si fill n'est pas utilisé
  };

  // Appliquer les propriétés optimisées
  const imageProps = {
    ...props,
    sizes: getSizes(),
    priority: props.priority || containerClassName?.includes("hero"), // Auto-priorité pour les images héros
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien afficher pendant l'hydratation pour éviter les différences de style
  if (!mounted) {
    return (
      <div
        className={containerClassName}
        style={{
          height: props.fill ? "100%" : props.height,
          width: props.fill ? "100%" : props.width,
        }}
      />
    );
  }

  // Rendre l'image uniquement côté client avec les propriétés améliorées
  return <Image 
    {...imageProps} 
    // Pour les SVG, s'assurer que le ratio d'aspect est maintenu
    style={{
      ...props.style,
      // Si c'est un SVG, ajouter automatiquement objectFit: contain pour préserver le ratio
      ...(props.src?.toString().includes('.svg') && !props.style?.objectFit ? 
        { objectFit: 'contain' } : {})
    }}
  />;
}
