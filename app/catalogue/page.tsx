import React from "react";
import Image from "next/image";
import Link from "next/link";

// Liste complète des livres avec descriptions
const books = [
  {
    id: 1,
    title: "Une Si Paisible Petite Place",
    image: "/images/books/une-si-paisible-petite-place.jpg",
    slug: "une-si-paisible-petite-place",
    description:
      "Pierre Pérec apprend qu'un patron de boîte de nuit à Vals les Bains a été abattu cette nuit d'une balle en plein front. Le coffre est ouvert. Il est vide...",
  },
  {
    id: 2,
    title: "Un Sillage De Sang",
    image: "/images/books/un-sillage-de-sang.jpg",
    slug: "un-sillage-de-sang",
    description:
      "Cette enquête de Pierre Pérec l'entraîne dans l'intimité d'une petite ville bleue, dans les montagnes de l'Ardèche. Il y découvre un univers de passions et de haines que les habitants...",
  },
  {
    id: 3,
    title: "Un Homme Bien Sous Tous Rapport",
    image: "/images/books/un-homme-bien-sous-tous-rapports.jpg",
    slug: "un-homme-bien-sous-tous-rapports",
    description:
      "Qui est Antoine? Un industriel brillant, qui a bâsé son entreprise aux somnets! Un homme brisé par une expérience sexuelle désastreuse le conduisant au crime au début de sa vie...",
  },
  {
    id: 4,
    title: "Les Vagues De La Mer",
    image: "/images/books/les-vagues-de-la-mer.jpg",
    slug: "les-vagues-de-la-mer",
    description:
      "Ce texte est une suite de réflexions sur les grands problèmes du temps - Dialogue entre le Président de la République et une Dame blanche qui incarne l'inquiétude et l'angoisse...",
  },
  {
    id: 5,
    title: "Le Retour Du Guitariste",
    image: "/images/books/le-retour-du-guitariste.jpg",
    slug: "le-retour-du-guitariste",
    description:
      "Les pierres aussi finissent par mourir. Les maisons en ruines, les murs écroulés, les villages abandonnés deviennent alors des tombes de ces cimetières où nul n'apporte de fleurs, où seuls...",
  },
  {
    id: 6,
    title: "Le Long Chemin De L'Écureuil",
    image: "/images/books/le-long-chemin-de-lecureuil.jpg",
    slug: "le-long-chemin-de-lecureuil",
    description:
      "Les souvenirs d'un vieux médecin en fin de carrière, l'évocation de sa trajectoire professionnelle, heurtée et sinueuse, à l'image de celle d'un écureuil qui a perdu son arbre. Ce texte...",
  },
  {
    id: 7,
    title: "La Vie En Marge",
    image: "/images/books/la-vie-en-marge.jpg",
    slug: "la-vie-en-marge",
    description:
      "Le bouleversement du quotidien d'un jeune homme chez qui on découvre une tumeur cancéreuse de l'intestin. Des jours brutalement sans l'éteignoir, une vie en marge.",
  },
  {
    id: 8,
    title: "La Maison Bleue",
    image: "/images/books/la-maison-bleue.jpg",
    slug: "la-maison-bleue",
    description:
      "Un jeune chirurgien brillant, Larrieu, déçu d'un rejet professionnel parisien, accepte une offre dans un petit hôpital de province, à Saint-Flour, en Auvergne. À peine arrivé, sa déception l'incite à...",
  },
  {
    id: 9,
    title: "La Dernière Croisade",
    image: "/images/books/la-derniere-croisade.jpg",
    slug: "la-derniere-croisade",
    description:
      "Un groupe de femmes enseignantes pour la plupart a créé un site internet d'aide aux femmes battues ou violentées par leur époux. Un site internet d'aide aux femmes battues où...",
  },
  {
    id: 10,
    title: "Épidaure",
    image: "/images/books/epidaure.jpg",
    slug: "epidaure",
    description:
      "Un visiteur du théâtre d'Épidaure s'attarde sur les gradins de pierre. Il est rejoint par un Guide qui le fait déambuler dans le labyrinthe de la Philosophie grecque tout d'abord...",
  },
];

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-playfair text-4xl mb-16 relative pl-6 border-l-4 border-[#d4af37] italic font-playfair">
          Mes oeuvres
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-[#1a1a1a] overflow-hidden flex flex-col md:flex-row min-h-[340px]"
            >
              <div className="md:w-2/5 h-auto flex-shrink-0 p-2 flex items-center justify-center">
                <div className="relative aspect-[3/4] w-full h-full border border-[#333333]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-white">
                    {book.title}
                  </h2>
                  <p className="text-white text-base leading-relaxed mb-6">
                    {book.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/catalogue/${book.slug}`}
                    className="inline-block bg-[#1a1a1a] border border-[#d4af37] text-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#333]"
                  >
                    Lire La Suite
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
