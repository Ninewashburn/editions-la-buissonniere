"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OptimizedImage from "@/components/ui/image";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Actualités", href: "/actualites" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Biographie", href: "/biographie" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");

  // Mettre à jour le chemin actif quand le pathname change
  useEffect(() => {
    setActivePath(pathname || "");
  }, [pathname]);

  return (
    <header className="bg-[#222222] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 -mx-4">
          <div className="px-4 flex justify-start">
            <Link href="/" className="mb-4 md:mb-0">
              <div className="relative w-[150px] h-[60px] flex items-center justify-start overflow-visible">
                <OptimizedImage
                  src="/logo.svg"
                  alt="Éditions La Buissonnière"
                  width={150}
                  height={60}
                  containerClassName="w-[150px] h-[60px]"
                  style={{ 
                    width: "auto", 
                    height: "auto", 
                    maxWidth: "150px", 
                    maxHeight: "60px", 
                    objectFit: "contain" 
                  }}
                  priority
                />
              </div>
            </Link>
          </div>
          <nav className="flex space-x-8 px-4">
            {navigation.map((item) => {
              // Détection améliorée de la page active
              const isActive =
                activePath === item.href ||
                (item.href !== "/" && activePath?.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition duration-300 hover:text-[#d4af37]
                  ${isActive ? "!text-[#d4af37]" : "text-white"} 
                  hover:after:w-full after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                  after:bg-[#d4af37] after:w-0 after:transition-all after:duration-300 
                  ${isActive ? "!after:w-full" : "after:w-0"}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
