import Link from "next/link";
import { OptimizedImage } from "@/components/ui";

// Données simulées pour les actualités
const actualites = [
  {
    id: "nouveau-roman-antisemitisme",
    title:
      "Un nouveau roman en préparation : une réflexion sur l'antisémitisme",
    image: "/actualite-1.jpg",
    date: "15 mai 2024",
    excerpt:
      "Chers lecteurs, Je suis heureux de vous informer que je travaille actuellement sur un nouveau roman, un projet particulier qui explore un sujet délicat et malheureusement toujours d'actualité : l'antisémitisme. Ce récit plongera dans les méfaits de cette haine et ses répercussions dans notre société moderne, une réflexion profonde sur la manière dont elle s'enracine [...]",
    slug: "nouveau-roman-antisemitisme",
  },
  {
    id: "bienvenue",
    title: "Bienvenue sur mon site",
    image: "/actualite-2.jpg",
    date: "10 avril 2024",
    excerpt:
      "C'est avec une immense fierté que je vous présente aujourd'hui mon tout nouveau site internet, un espace que j'ai voulu entièrement dédié à vous, à mes histoires, et surtout à nos échanges. Vous y retrouverez bien sûr toutes les aventures de Pierre Pérec, ce personnage que vous avez appris à aimer autant que moi, mais également des informations sur mes autres œuvres, mon parcours, et mes projets à venir...",
    slug: "bienvenue",
  },
  {
    id: "salon-maringues",
    title: "Retrouvons-nous au Salon du livre de Maringues !",
    image: "/actualite-3.jpg",
    date: "5 avril 2024",
    excerpt:
      "Chers lecteurs,\n\nJ'ai le plaisir de vous annoncer que je participerai au Salon du livre de Maringues, le samedi 16 novembre 2024, de 9h à 17h, à la Salle Jupiter du complexe sportif Bernard Faure (8 rue du Stade, 63350 Maringues). L'entrée est gratuite, et je serai ravi de vous y retrouver pour échanger autour de mes livres, dédicacer vos exemplaires, et partager notre passion commune pour la littérature...",
    slug: "salon-maringues",
  },
];

export default function Actualites() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 relative pl-6 border-l-4 border-[#d4af37] italic font-playfair">
        Actualités
      </h1>

      <div className="space-y-16">
        {actualites.map((actualite) => (
          <div
            key={actualite.id}
            className="flex flex-col md:flex-row gap-6 pb-16 border-b border-gray-200"
          >
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[4/3] w-full">
                <OptimizedImage
                  src={actualite.image}
                  alt={actualite.title}
                  fill
                  containerClassName="w-full h-full aspect-[4/3]"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold font-playfair mb-4">
                {actualite.title}
              </h2>

              <div className="text-gray-700 mb-4 leading-relaxed">
                {actualite.excerpt.split("\n\n").map((paragraph, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link
                href={`/actualites/${actualite.slug}`}
                className="text-[#d4af37] hover:underline font-medium inline-flex items-center"
              >
                Lire la suite »
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
