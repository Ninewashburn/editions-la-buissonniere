import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookCarousel from "@/components/BookCarousel";
import AboutSection from "@/components/AboutSection";
import OptimizedImage from "@/components/ui/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section with latest book */}
      <section className="bg-[#1a1a1a] py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="gold-accent text-3xl md:text-4xl font-bold text-white mb-10 italic font-playfair">
            Dernier livre
          </h1>
          <div className="mt-8 flex flex-col gap-10 md:flex-row">
            <div className="flex-shrink-0 h-[375px] w-[250px] relative">
              <OptimizedImage
                src="/la-maison-bleue.jpg"
                alt="La maison bleue - André Lautier"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 font-playfair text-3xl md:text-4xl font-bold text-white">
                La maison bleue
              </h2>
              <p className="mb-4 text-sm text-primary font-medium">
                Catégorie : Thriller psychologique
              </p>
              <p className="mb-8 text-gray-300 text-lg leading-relaxed">
                Dans ce thriller psychologique, André Lautier nous entraîne dans
                un labyrinthe de secrets et de mensonges. Au-delà de l'intrigue
                policière, le roman interroge la nature humaine et les
                conséquences de nos choix. Le personnage de Larrieu, confronté à
                un environnement hostile et à ses propres démons intérieurs,
                devient le symbole de l'homme moderne en quête de sens. Un roman
                qui ne laisse pas indifférent et qui invite à une réflexion sur
                la fragilité de l'existence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalogue/la-maison-bleue"
                  className="inline-block px-6 py-3 bg-[#1a1a1a] border border-[#d4af37] text-[#d4af37] hover:bg-[#333333] font-medium transition-colors duration-300 min-w-[140px] text-center"
                >
                  Découvrir
                </Link>
                <Link
                  href="/catalogue/la-maison-bleue/extrait"
                  className="inline-block px-6 py-3 bg-[#1a1a1a] border border-[#d4af37] text-[#d4af37] hover:bg-[#333333] font-medium transition-colors duration-300 min-w-[140px] text-center"
                >
                  Lire un extrait
                </Link>
                <Link
                  href="https://www.leboncoin.fr"
                  className="inline-block px-6 py-3 bg-[#ff5722] text-white hover:bg-[#e64a19] font-medium border-0 transition-colors duration-300 text-center"
                >
                  Acheter sur Leboncoin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 relative pl-6 border-l-4 border-[#d4af37] italic font-playfair">
            Mes actualités
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* News item 1 */}
            <div className="overflow-hidden">
              <div className="relative h-64 w-full">
                <OptimizedImage
                  src="/actualite-1.jpg"
                  alt="Un nouveau roman en préparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#1a1a1a] p-6 text-white min-h-[240px] flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 font-playfair text-xl font-bold">
                    Un nouveau roman en préparation :
                  </h3>
                  <h4 className="mb-3 text-[#d4af37]">
                    une réflexion sur l'antisémitisme
                  </h4>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    Chers lecteurs, Je suis heureux de vous informer que je
                    travaille actuellement sur un nouveau roman, un projet...
                  </p>
                </div>
                <Link
                  href="/actualites/nouveau-roman-antisemitisme"
                  className="inline-block border border-[#d4af37] text-[#d4af37] py-2 text-sm hover:bg-[#333333] transition-colors duration-300 w-[110px] text-center whitespace-nowrap"
                >
                  Lire la suite
                </Link>
              </div>
            </div>

            {/* News item 2 */}
            <div className="overflow-hidden">
              <div className="relative h-64 w-full">
                <OptimizedImage
                  src="/actualite-2.jpg"
                  alt="Bienvenue sur mon site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#1a1a1a] p-6 text-white min-h-[240px] flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 font-playfair text-xl font-bold">
                    Bienvenue sur mon site
                  </h3>
                  <h4 className="mb-3 text-white">&nbsp;</h4>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    C'est avec une immense fierté que je vous présente
                    aujourd'hui mon tout nouveau site internet, un espace que
                    j'ai voulu...
                  </p>
                </div>
                <Link
                  href="/actualites/bienvenue"
                  className="inline-block border border-[#d4af37] py-2 text-[#d4af37] text-sm hover:bg-[#333333] transition-colors duration-300 w-[110px] text-center whitespace-nowrap"
                >
                  Lire la suite
                </Link>
              </div>
            </div>

            {/* News item 3 */}
            <div className="overflow-hidden">
              <div className="relative h-64 w-full">
                <OptimizedImage
                  src="/actualite-3.jpg"
                  alt="Salon du livre de Maringues"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-[#1a1a1a] p-6 text-white min-h-[240px] flex flex-col justify-between">
                <div>
                  <h3 className="mb-2 font-playfair text-xl font-bold">
                    Retrouvons-nous au Salon du livre
                  </h3>
                  <h4 className="mb-3 text-white">de Maringues !</h4>
                  <p className="mb-4 text-gray-300 leading-relaxed">
                    Chers lecteurs, J'ai le plaisir de vous annoncer que je
                    participerai au Salon du livre de Maringues, le samedi 16...
                  </p>
                </div>
                <Link
                  href="/actualites/salon-maringues"
                  className="inline-block border border-[#d4af37] text-[#d4af37] py-2 text-sm hover:bg-[#333333] transition-colors duration-300 w-[110px] text-center whitespace-nowrap"
                >
                  Lire la suite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos de moi */}
      <AboutSection />

      {/* Section Mes Œuvres avec carousel */}
      <BookCarousel />
    </div>
  );
}
