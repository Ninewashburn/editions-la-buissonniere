"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import OptimizedImage from "@/components/ui/image";
import OptimizedIcon from "@/components/ui/icon";
import { Facebook, Twitter, Mail, ChevronUp, ChevronLeft } from "lucide-react";

// Données simulées pour les actualités
const actualites = [
  {
    id: "nouveau-roman-antisemitisme",
    title:
      "Un nouveau roman en préparation : une réflexion sur l'antisémitisme",
    image: "/actualite-1.jpg",
    date: "15 mai 2024",
    content: `
      <p>Chers lecteurs,</p>
      
      <p>Je suis heureux de vous informer que je travaille actuellement sur un nouveau roman, un projet particulier qui explore un sujet délicat et malheureusement toujours d'actualité : l'antisémitisme.</p>
      
      <p>Ce récit plongera dans les méfaits de cette haine et ses répercussions dans notre société moderne, une réflexion profonde sur la manière dont elle s'enracine parfois insidieusement dans nos communautés, et comment elle peut détruire des vies.</p>
      
      <p>Dans la continuité de mes précédents thrillers comme Les Pierres Mortes ou L'affaire des cocottes en papier, ce nouveau livre abordera les thématiques de l'injustice et des préjugés avec une intensité nouvelle.</p>
      
      <p>Je suis impatient de partager avec vous cette nouvelle aventure littéraire, qui, je l'espère, saura vous toucher et vous faire réfléchir.</p>
      
      <p>À très bientôt,</p>
      
      <p>André</p>
    `,
    excerpt:
      "Chers lecteurs, Je suis heureux de vous informer que je travaille actuellement sur un nouveau roman, un projet particulier qui explore un sujet délicat et malheureusement toujours d'actualité : l'antisémitisme. Ce récit plongera dans les méfaits de cette haine et ses répercussions dans notre société moderne, une réflexion profonde sur la manière dont elle s'enracine [...]",
    slug: "nouveau-roman-antisemitisme",
  },
  {
    id: "bienvenue",
    title: "Bienvenue sur mon site",
    image: "/actualite-2.jpg",
    date: "10 avril 2024",
    content: `
      <p>C'est avec une immense fierté que je vous présente aujourd'hui mon tout nouveau site internet, un espace que j'ai voulu entièrement dédié à vous, à mes histoires, et surtout à nos échanges.</p>
      
      <p>Vous y retrouverez bien sûr toutes les aventures de Pierre Pérec, ce personnage que vous avez appris à aimer autant que moi, mais également des informations sur mes autres œuvres, mon parcours, et mes projets à venir.</p>
      
      <p>Ce site a été conçu pour être un lieu de rencontre et d'échange. Vous pourrez y découvrir mes dernières actualités, lire des extraits exclusifs de mes romans, et même me contacter directement pour partager vos impressions ou poser vos questions.</p>
      
      <p>Je vous souhaite une excellente visite sur ce site qui est désormais le vôtre autant que le mien.</p>
      
      <p>Avec toute ma gratitude pour votre fidélité,</p>
      
      <p>André Lautier</p>
    `,
    excerpt:
      "C'est avec une immense fierté que je vous présente aujourd'hui mon tout nouveau site internet, un espace que j'ai voulu entièrement dédié à vous, à mes histoires, et surtout à nos échanges. Vous y retrouverez bien sûr toutes les aventures de Pierre Pérec, ce personnage que vous avez appris à aimer autant que moi, mais...",
    slug: "bienvenue",
  },
  {
    id: "salon-maringues",
    title: "Retrouvons-nous au Salon du livre de Maringues !",
    image: "/actualite-3.jpg",
    date: "5 avril 2024",
    content: `
      <p>Chers lecteurs,</p>
      
      <p>J'ai le plaisir de vous annoncer que je participerai au Salon du livre de Maringues, le samedi 16 novembre 2024, de 9h à 17h, à la Salle Jupiter du complexe sportif Bernard Faure (8 rue du Stade, 63350 Maringues).</p>
      
      <p>L'entrée est gratuite, et je serai ravi de vous y retrouver pour échanger autour de mes livres, dédicacer vos exemplaires, et partager notre passion commune pour la littérature.</p>
      
      <p>J'aurai avec moi l'ensemble de ma production littéraire, y compris mes dernières parutions. Ce sera l'occasion idéale pour compléter votre collection ou découvrir mes œuvres si vous ne les connaissez pas encore.</p>
      
      <p>Au plaisir de vous y rencontrer,</p>
      
      <p>André</p>
    `,
    excerpt:
      "Chers lecteurs,\n\nJ'ai le plaisir de vous annoncer que je participerai au Salon du livre de Maringues, le samedi 16 novembre 2024, de 9h à 17h, à la Salle Jupiter du complexe sportif Bernard Faure (8 rue du Stade, 63350 Maringues). L'entrée est gratuite, et je serai ravi de vous y retrouver pour",
    slug: "salon-maringues",
  },
];

export default function ActualitePage({
  params,
}: {
  params: { slug: string };
}) {
  // Trouver l'actualité correspondant au slug
  const actualite = actualites.find((act) => act.slug === params.slug);

  // Si l'actualité n'est pas trouvée, renvoyer vers une page 404
  if (!actualite) {
    notFound();
  }

  // Fonction pour transformer le contenu HTML en JSX
  function createMarkup(htmlContent: string) {
    return { __html: htmlContent };
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* En-tête de l'article */}
        <h1 className="text-3xl font-bold mb-14 text-center font-playfair">
          {actualite.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* Image carrée à gauche plus grande */}
          <div className="w-full md:w-5/12 lg:w-[45%] shrink-0">
            <div className="relative aspect-square w-full">
              <OptimizedImage
                src={actualite.image}
                alt={actualite.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenu de l'article à droite */}
          <div className="w-full md:w-7/12 lg:w-[55%] flex items-start">
            <div className="prose prose-p:mb-5 prose-p:leading-relaxed prose-p:text-[15px] max-w-none">
              <div dangerouslySetInnerHTML={createMarkup(actualite.content)} />
            </div>
          </div>
        </div>

        {/* Navigation en bas d'article */}
        <div className="mt-10 border-t border-gray-200 pt-6 pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <Link
              href="/actualites"
              className="flex items-center text-gray-600 hover:text-[#d4af37] transition-colors duration-300 mb-4 sm:mb-0"
            >
              <OptimizedIcon icon={ChevronLeft} size={16} className="mr-2" />
              Retour aux actualités
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{actualite.date}</span>
              <div className="h-4 w-px bg-gray-300 mx-1"></div>
              <div className="flex space-x-3">
                <button
                  className="text-gray-500 hover:text-[#d4af37] transition-colors duration-300"
                  title="Partager sur Facebook"
                >
                  <OptimizedIcon icon={Facebook} size={20} />
                </button>
                <button
                  className="text-gray-500 hover:text-[#d4af37] transition-colors duration-300"
                  title="Partager sur Twitter"
                >
                  <OptimizedIcon icon={Twitter} size={20} />
                </button>
                <button
                  className="text-gray-500 hover:text-[#d4af37] transition-colors duration-300"
                  title="Partager par email"
                >
                  <OptimizedIcon icon={Mail} size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#d4af37] transition-colors duration-300"
            >
              <OptimizedIcon icon={ChevronUp} size={16} className="mr-1" />
              Haut de page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
