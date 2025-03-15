"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

// Wrapper pour le composant Image qui résout les problèmes d'incohérence entre le serveur et le client
export default function OptimizedImage(props: ImageProps) {
  // Cette approche "client-only" résout les incohérences entre serveur et client
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Ne rien afficher pendant l'hydratation pour éviter les différences de style
  if (!mounted) {
    return (
      <div
        style={{
          height: props.fill ? "100%" : props.height,
          width: props.fill ? "100%" : props.width,
        }}
      />
    );
  }

  // Rendre l'image uniquement côté client
  return <Image {...props} />;
}
