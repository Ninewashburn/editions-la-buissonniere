import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page non trouvée - Éditions La Buissonnière",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-playfair font-bold text-[#d4af37] mb-2">404</h1>
        <h2 className="text-3xl font-playfair font-semibold mb-4">Page introuvable</h2>
        <p className="text-lg mb-8 text-gray-700">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-[#d4af37] text-white rounded-sm hover:bg-[#c4a030] transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/catalogue"
            className="px-6 py-3 border border-[#d4af37] text-[#d4af37] rounded-sm hover:bg-[#f8f5e6] transition-colors"
          >
            Découvrir nos livres
          </Link>
        </div>
      </div>
    </div>
  );
} 