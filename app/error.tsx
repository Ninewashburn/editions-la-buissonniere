"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Envoyer l'erreur à un service d'analytics ou de logging
    console.error("Erreur de page:", error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-playfair font-bold text-[#d4af37] mb-4">
          Oups, une erreur est survenue
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Nous sommes désolés pour ce désagrément. Notre équipe a été informée de ce problème.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#d4af37] text-white rounded-sm hover:bg-[#c4a030] transition-colors"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-sm hover:bg-[#f8f5e6] transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
} 