import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Liste complète des livres
const books = [
  {
    id: 1,
    title: "Une Si Paisible Petite Place",
    image: "/images/books/une-si-paisible-petite-place.jpg",
    slug: "une-si-paisible-petite-place",
    description: [
      "Pierre Pérec apprend qu'un patron de boîte de nuit à Vals les Bains a été abattu cette nuit d'une balle en plein front. Le coffre est ouvert. Il est vide...",
      "Il s'agit du premier opus des enquêtes de Pierre Pérec, un investigateur perspicace qui devra démêler une affaire plus complexe qu'elle n'y paraît au premier abord.",
      "Un jour pourtant s'ouvrira la boîte de Pandore...",
      "Cet ouvrage est ancré dans le terroir ardéchois, en compagnie d'un enquêteur sorti de sa retraite et restant dans le tourbillon de l'âme humaine.",
    ],
  },
  {
    id: 2,
    title: "Un Sillage De Sang",
    image: "/images/books/un-sillage-de-sang.jpg",
    slug: "un-sillage-de-sang",
    description: [
      "Cette enquête de Pierre Pérec l'entraîne dans l'intimité d'une petite ville blottie dans les montagnes de l'Ardèche.",
      "Il y découvre un univers de passions et de haines que les habitants cachent de leur mieux depuis des décennies.",
      "Un jour pourtant s'ouvrira la boîte de Pandore...",
      "Cet ouvrage est ancré dans le terroir ardéchois, en compagnie d'un enquêteur sorti de sa retraite et restant dans le tourbillon de l'âme humaine.",
    ],
  },
  {
    id: 3,
    title: "Un Homme Bien Sous Tous Rapport",
    image: "/images/books/un-homme-bien-sous-tous-rapports.jpg",
    slug: "un-homme-bien-sous-tous-rapports",
    description: [
      "Qui est Antoine? Un industriel brillant, qui a bâsé son entreprise aux sommets!",
      "Un homme brisé par une expérience sexuelle désastreuse le conduisant au crime au début de sa vie...",
      "Un homme au destin brisé qui tente de reconstruire sa vie sur des bases solides, mais dont le passé revient le hanter.",
      "André Lautier nous livre une réflexion profonde sur l'identité, le mensonge et la vérité, et questionne notre capacité à juger les autres sans connaître leur histoire complète.",
    ],
  },
  {
    id: 4,
    title: "Les Vagues De La Mer",
    image: "/images/books/les-vagues-de-la-mer.jpg",
    slug: "les-vagues-de-la-mer",
    description: [
      "Ce texte est une suite de réflexions sur les grands problèmes du temps.",
      "Dialogue entre le Président de la République et une Dame blanche qui incarne l'inquiétude et l'angoisse...",
      "Ce livre est une invitation à réfléchir sur notre société contemporaine, ses défis et ses contradictions.",
      "Un texte philosophique et politique qui ne manquera pas d'interpeller le lecteur.",
    ],
  },
  {
    id: 5,
    title: "Le Retour Du Guitariste",
    image: "/images/books/le-retour-du-guitariste.jpg",
    slug: "le-retour-du-guitariste",
    description: [
      "Les pierres aussi finissent par mourir. Les maisons en ruines, les murs écroulés, les villages abandonnés deviennent alors des tombes de ces cimetières où nul n'apporte de fleurs, où seuls...",
      "Le retour d'un musicien dans son village natal abandonné depuis des décennies ravive des souvenirs et des fantômes.",
      "Un récit poétique et mélancolique sur le temps qui passe et la mémoire des lieux.",
      "André Lautier signe ici une oeuvre touchante sur les racines et l'identité.",
    ],
  },
  {
    id: 6,
    title: "Le Long Chemin De L'Écureuil",
    image: "/images/books/le-long-chemin-de-lecureuil.jpg",
    slug: "le-long-chemin-de-lecureuil",
    description: [
      "Les souvenirs d'un vieux médecin en fin de carrière, l'évocation de sa trajectoire professionnelle, heurtée et sinueuse, à l'image de celle d'un écureuil qui a perdu son arbre.",
      "Ce texte autobiographique raconte les joies et les peines d'une vie consacrée à la médecine.",
      "Un témoignage précieux sur l'évolution de la pratique médicale en France durant les dernières décennies.",
      "Une réflexion sur la vocation, l'engagement et le sens d'une vie dédiée aux autres.",
    ],
  },
  {
    id: 7,
    title: "La Vie En Marge",
    image: "/images/books/la-vie-en-marge.jpg",
    slug: "la-vie-en-marge",
    description: [
      "Le bouleversement du quotidien d'un jeune homme chez qui on découvre une tumeur cancéreuse de l'intestin.",
      "Des jours brutalement sans l'éteignoir, une vie en marge.",
      "Un récit poignant sur la maladie et la résilience, sur la façon dont un diagnostic peut transformer une existence.",
      "André Lautier nous offre ici un regard sensible sur la fragilité de la vie et la force de l'esprit humain face à l'adversité.",
    ],
  },
  {
    id: 8,
    title: "La Maison Bleue",
    image: "/images/books/la-maison-bleue.jpg",
    slug: "la-maison-bleue",
    description: [
      "Un jeune chirurgien brillant, Larrieu, déçu d'un rejet professionnel parisien, accepte une offre dans un petit hôpital de province, à Saint-Flour, en Auvergne.",
      "À peine arrivé, sa déception l'incite à...",
      "Un thriller psychologique qui explore les méandres de l'âme humaine dans un cadre provincial oppressant.",
      "André Lautier signe ici un roman captivant sur l'ambition, la frustration et les conséquences de nos choix.",
    ],
  },
  {
    id: 9,
    title: "La Dernière Croisade",
    image: "/images/books/la-derniere-croisade.jpg",
    slug: "la-derniere-croisade",
    description: [
      "Un groupe de femmes enseignantes pour la plupart a créé un site internet d'aide aux femmes battues ou violentées par leur époux.",
      "Un site internet d'aide aux femmes battues où...",
      "Ce roman social aborde la question des violences faites aux femmes et la solidarité qui peut naître face à l'adversité.",
      "Un livre engagé qui dénonce et qui propose des pistes de réflexion sur un problème de société majeur.",
    ],
  },
  {
    id: 10,
    title: "Épidaure",
    image: "/images/books/epidaure.jpg",
    slug: "epidaure",
    description: [
      "Un visiteur du théâtre d'Épidaure s'attarde sur les gradins de pierre. Il est rejoint par un Guide qui le fait déambuler dans le labyrinthe de la Philosophie grecque tout d'abord...",
      "Un voyage initiatique dans les fondements de la pensée occidentale, à travers les vestiges de la civilisation grecque.",
      "Une méditation philosophique sur les origines de notre culture et sur la permanence des questionnements humains.",
      "André Lautier nous offre ici une œuvre érudite et accessible, qui invite à la réflexion et à l'émerveillement.",
    ],
  },
];

// Fonction pour obtenir des suggestions de livres (3 livres aléatoires différents du livre actuel)
function getSuggestions(currentBookId: number) {
  const filteredBooks = books.filter((book) => book.id !== currentBookId);
  const shuffled = [...filteredBooks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export default function BookPage({ params }: { params: { slug: string } }) {
  // Trouver le livre correspondant au slug
  const book = books.find((book) => book.slug === params.slug);

  // Si le livre n'est pas trouvé, renvoyer vers une page 404
  if (!book) {
    notFound();
  }

  // Obtenir des livres suggérés
  const suggestions = getSuggestions(book.id);

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête du livre */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl mb-10 relative pl-6 border-l-4 border-[#d4af37] italic">
          {book.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image du livre */}
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="relative aspect-[3/4] w-full shadow-lg cursor-pointer">
              <Image
                src={book.image}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="border border-gray-200 object-contain"
                priority
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
            <div className="flex mt-4 space-x-2">
              <div className="relative w-16 h-20 border border-gray-200">
                <Image
                  src={book.image}
                  alt={`Miniature de ${book.title}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="relative w-16 h-20 border border-gray-200">
                <Image
                  src={book.image}
                  alt={`Miniature 2 de ${book.title}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Détails du livre */}
          <div className="w-full md:w-3/5 text-gray-800">
            {book.description.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href={`/catalogue/${book.slug}/extrait`}
                className="inline-block bg-[#1a1a1a] border border-[#d4af37] text-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#333]"
              >
                Lire un extrait
              </Link>
              <Link
                href="https://www.leboncoin.fr"
                className="inline-block bg-[#ff5722] text-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#e64a19]"
              >
                Acheter sur leboncoin
              </Link>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-2">Note de nos lecteurs</h3>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Avis */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="font-playfair text-3xl mb-8 relative pl-6 border-l-4 border-[#d4af37] italic">
          Avis de nos lecteurs
        </h2>

        <p className="mb-4 text-gray-600">Il n'y a pas encore d'avis.</p>

        <div className="border border-gray-200 p-6 rounded-md">
          <h3 className="text-xl mb-4">
            Soyez le premier à laisser votre avis sur "{book.title}"
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Votre adresse e-mail ne sera pas publiée. Les champs obligatoires
            sont indiqués avec *
          </p>

          <div className="mb-4">
            <p className="mb-2">Votre note *</p>
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="comment" className="block mb-2">
              Votre avis *
            </label>
            <textarea
              id="comment"
              rows={5}
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info" className="text-sm text-gray-600">
              Enregistrer mon nom, mon e-mail et mon site dans le navigateur
              pour mon prochain commentaire.
            </label>
          </div>

          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">
            Soumettre
          </button>
        </div>
      </div>

      {/* Section Suggestions */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="font-playfair text-3xl mb-8 relative pl-6 border-l-4 border-[#d4af37] italic">
          Mes suggestions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestions.map((suggestion) => (
            <Link
              key={suggestion.id}
              href={`/catalogue/${suggestion.slug}`}
              className="block"
            >
              <div className="relative aspect-[3/4] w-full h-64">
                <Image
                  src={suggestion.image}
                  alt={suggestion.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
