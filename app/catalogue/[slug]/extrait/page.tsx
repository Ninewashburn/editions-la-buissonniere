import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Liste des livres (même liste que sur la page catalogue, mais simplifiée)
const books = [
  {
    id: 1,
    title: "Une Si Paisible Petite Place",
    image: "/images/books/une-si-paisible-petite-place.jpg",
    slug: "une-si-paisible-petite-place",
    extract: `
      Le patron de la boîte de nuit "Le Velours" avait été retrouvé mort ce matin-là. Une balle en plein front. Le coffre-fort grand ouvert, vide.

      Pierre Pérec s'approcha du corps que les techniciens de la police scientifique n'avaient pas encore emporté. L'homme devait avoir la cinquantaine, bien conservé malgré les excès que son métier impliquait probablement. La balle avait fait un trou net, presque chirurgical. Un professionnel.

      "Combien y avait-il dans le coffre ?" demanda-t-il au gérant qui attendait, blême, dans un coin de la pièce.

      "Je ne sais pas exactement, monsieur l'inspecteur. C'est Gérard qui s'occupait de ça. Mais il y avait au moins les recettes du week-end, donc plusieurs milliers d'euros."

      Pérec hocha la tête, peu convaincu. Un simple vol qui tourne mal n'aurait pas cette précision, cette froideur dans l'exécution. Il y avait autre chose.

      "Qui savait qu'il y avait tant d'argent ici ?"

      Le gérant haussa les épaules.

      "Tout le monde à Vals-les-Bains sait que 'Le Velours' fait le plein tous les week-ends."

      Pierre Pérec sentait que cette affaire l'emmènerait bien plus loin qu'un simple vol avec homicide. Dans cette petite ville qui semblait si paisible, il y avait des remous sous la surface. Des secrets que quelqu'un avait voulu faire taire d'une balle en plein front.
    `,
  },
  {
    id: 2,
    title: "Un Sillage De Sang",
    image: "/images/books/un-sillage-de-sang.jpg",
    slug: "un-sillage-de-sang",
    extract: `
      L'eau de la rivière était glacée ce matin-là. Elle charriait les dernières neiges de l'Ardèche, fondues par le timide soleil de mars. Le corps flottait face contre l'eau, créant un léger remous dans le courant. Une traînée rouge s'étirait derrière lui comme une signature macabre.

      Pierre Pérec observait la scène depuis la berge. Il avait été appelé dès la découverte du corps par un pêcheur matinal. La petite ville bleue, nichée dans les montagnes, semblait figée dans l'attente. Les habitants qui commençaient à s'amasser à distance respectueuse chuchotaient entre eux.

      "C'est le jeune Bertrand", entendit-il dire. "Toujours à traîner où il ne faut pas."

      "Qu'est-ce qu'il faisait près de la rivière en pleine nuit ?"

      Pérec se tourna vers le médecin légiste qui venait d'examiner le corps ramené sur la berge.

      "Alors ?"

      "Traumatisme crânien. Mais ce n'est pas la rivière qui l'a tué. Il était mort avant de toucher l'eau."

      Pérec hocha la tête. Un meurtre déguisé en accident. Dans cette petite communauté où tout le monde se connaissait, où chacun pensait n'avoir rien à cacher, quelqu'un avait des secrets qu'il protégeait farouchement.

      Il se retourna vers la ville, avec ses maisons aux façades bleues qui se détachaient sur la montagne. Derrière ces fenêtres, derrière ces visages inquiets, se cachait un meurtrier.
    `,
  },
  {
    id: 3,
    title: "Un Homme Bien Sous Tous Rapport",
    image: "/images/books/un-homme-bien-sous-tous-rapports.jpg",
    slug: "un-homme-bien-sous-tous-rapports",
    extract: `
      Antoine Marchand se tenait devant la glace, ajustant méticuleusement sa cravate. À cinquante-cinq ans, il gardait cette élégance discrète qui avait toujours fait sa réputation. PDG d'une entreprise florissante, mari attentionné, père de deux enfants brillants, et notable respecté de sa communauté.

      La perfection même.

      Il sourit à son reflet, mais ses yeux restèrent froids. Car Antoine savait ce que personne d'autre ne savait. Il connaissait l'homme derrière le reflet, celui qui, trente ans plus tôt, avait commis l'irréparable.

      Ce soir, il recevrait le prix de l'entrepreneur de l'année. On vanterait son parcours exemplaire, son éthique irréprochable. Et lui seul saurait que tout était bâti sur un mensonge, sur un cadavre enterré si profondément que personne ne l'avait jamais découvert.

      Sauf qu'aujourd'hui, pour la première fois en trois décennies, quelqu'un semblait avoir déterré ce secret. Une lettre anonyme sur son bureau ce matin : "Je sais ce que tu as fait. Et je vais le dire à tout le monde."

      Antoine termina de nouer sa cravate. Son visage ne trahissait rien de la panique qui montait en lui. Après tout, il était devenu expert dans l'art de porter un masque.
    `,
  },
  {
    id: 4,
    title: "Les Vagues De La Mer",
    image: "/images/books/les-vagues-de-la-mer.jpg",
    slug: "les-vagues-de-la-mer",
    extract: `
      — Monsieur le Président, pourquoi cette mélancolie soudaine ?

      Le Président leva les yeux vers la silhouette blanche qui venait d'apparaître dans son bureau ovale. Cette femme, mystérieuse et éthérée, qu'il était le seul à voir, revenait toujours dans ses moments de doute.

      — Les problèmes s'accumulent comme les vagues de la mer, répondit-il. À peine en ai-je résolu un qu'un autre surgit, plus imposant encore.

      — N'est-ce pas la nature même du pouvoir ? interrogea la Dame blanche. Comme la mer ne cesse jamais son mouvement perpétuel, la gouvernance est un défi sans fin.

      — Mais la mer suit des règles immuables, tandis que nos sociétés changent sans cesse de direction. Comment gouverner quand le sol se dérobe constamment sous nos pieds ?

      La Dame s'approcha, presque flottante.

      — Peut-être est-ce là votre erreur, Monsieur le Président. Vous cherchez la stabilité là où il n'y a que mouvement. La vraie sagesse n'est pas de figer le monde, mais d'apprendre à naviguer sur ses courants changeants.

      Le Président sourit amèrement.

      — Naviguer ? J'ai plutôt l'impression de me noyer chaque jour un peu plus.
    `,
  },
  {
    id: 5,
    title: "Le Retour Du Guitariste",
    image: "/images/books/le-retour-du-guitariste.jpg",
    slug: "le-retour-du-guitariste",
    extract: `
      Les pierres aussi finissent par mourir. Les maisons en ruines, les murs écroulés, les villages abandonnés deviennent alors des tombes de ces cimetières où nul n'apporte de fleurs, où seuls les oiseaux et le vent viennent chanter des requiem.

      Le village de Saint-Étienne-de-Fontbellon était l'une de ces nécropoles minérales. Abandonné depuis les années 60, il n'était plus qu'un enchevêtrement de murs à demi effondrés et de toitures béantes. La nature reprenait doucement ses droits, glissant des lianes à travers les fenêtres sans vitres, faisant éclore des genêts entre les pavés disjoints.

      C'est dans ce décor de désolation que Gabriel revint, sa guitare en bandoulière. Quarante ans qu'il n'avait pas remis les pieds dans ce village qui l'avait vu naître, qui l'avait vu partir un soir d'orage avec la ferme intention de ne jamais revenir.

      Il avait tenu promesse, jusqu'à aujourd'hui. Jusqu'à ce que les médecins lui annoncent qu'il lui restait six mois, pas plus. Alors, il avait ressenti ce besoin viscéral de revenir aux sources, de boucler la boucle.

      Gabriel s'assit sur ce qui avait été le perron de sa maison d'enfance. Il sortit sa guitare et commença à jouer, laissant ses doigts retrouver instinctivement les accords des vieilles chansons d'autrefois. Et pour la première fois depuis longtemps, il eut l'impression que les pierres mortes autour de lui se mettaient à frémir, comme si elles se souvenaient.
    `,
  },
  {
    id: 6,
    title: "Le Long Chemin De L'Écureuil",
    image: "/images/books/le-long-chemin-de-lecureuil.jpg",
    slug: "le-long-chemin-de-lecureuil",
    extract: `
      La première fois que j'ai revêtu la blouse blanche, j'étais persuadé que ma route serait droite, toute tracée. Médecin. Un mot simple qui résumait une vocation, un idéal presque sacré. J'avais vingt-cinq ans, l'enthousiasme chevillé au corps et cette conviction naïve que la science médicale pouvait tout résoudre.

      Cinquante ans plus tard, au moment de ranger définitivement cette même blouse, usée par des décennies de service, je contemple le chemin parcouru avec un mélange d'étonnement et de mélancolie. Rien ne s'est passé comme prévu. Ma carrière n'a pas été cette ligne droite et lumineuse que j'imaginais, mais plutôt un parcours chaotique, fait de bonds et de chutes, d'avancées fulgurantes et de reculs désespérés.

      Comme l'écureuil qui saute d'arbre en arbre, j'ai dû sans cesse m'adapter, changer de direction, parfois même de spécialité. La médecine générale, puis la chirurgie, l'humanitaire en Afrique, retour en France dans l'administration hospitalière, et enfin la gériatrie, mon dernier refuge.

      À chaque fois que je pensais avoir trouvé mon arbre, celui-ci se révélait inadapté, trop petit, ou pire, se mettait à brûler, me forçant à bondir vers le suivant dans un acte de survie professionnelle.

      Aujourd'hui, à soixante-quinze ans, je regarde ces sauts successifs sans regret. Car c'est précisément dans cette trajectoire heurtée et sinueuse que j'ai trouvé la vraie richesse de ce métier.
    `,
  },
  {
    id: 7,
    title: "La Vie En Marge",
    image: "/images/books/la-vie-en-marge.jpg",
    slug: "la-vie-en-marge",
    extract: `
      Il y a un avant et un après. Avant : Thomas, 27 ans, journaliste prometteur au sein d'un grand quotidien national, fiancé à Claire, propriétaire d'un appartement dans le 11ème arrondissement, amateur de courses à pied le dimanche matin et de bières artisanales le vendredi soir.

      Et puis il y a eu cette douleur sourde, ces examens presque routiniers, et ce médecin au visage grave : "C'est une tumeur cancéreuse de l'intestin. Nous devons opérer rapidement."

      Après : Thomas, toujours 27 ans mais soudain tellement plus vieux, avec une poche de stomie dissimulée sous ses t-shirts, des cicatrices qui barrent son ventre, une fatigue chronique et cette peur, toujours présente en arrière-plan, que les cellules malignes reviennent malgré la chimiothérapie.

      Claire est partie au bout de six mois, "trop lourd à porter" a-t-elle dit en pleurant. Le journal lui a proposé un congé longue maladie, une façon polie de lui faire comprendre qu'il n'y aurait plus de reportages de terrain pour lui dans un avenir prévisible.

      Alors Thomas a commencé à vivre en marge. De la société, de ses anciens projets, de ses rêves d'avant. Il a vendu son appartement pour une petite maison à la campagne, a troqué le journalisme pour l'écriture de romans, les soirées mondaines pour de longues promenades solitaires.

      Et étrangement, dans cette vie en marge, loin de tout ce qu'il avait cru essentiel, il commençait à trouver une forme de sérénité qu'il n'avait jamais connue avant.
    `,
  },
  {
    id: 8,
    title: "La Maison Bleue",
    image: "/images/books/la-maison-bleue.jpg",
    slug: "la-maison-bleue",
    extract: `
      Philippe Larrieu jeta un dernier regard à la tour Eiffel depuis la fenêtre de son appartement parisien. Il avait passé dix ans dans cet appartement, dix ans à gravir les échelons, à s'imposer comme l'un des chirurgiens les plus prometteurs de l'Hôpital Saint-Louis. Et aujourd'hui, tout s'effondrait.

      Le poste de chef de service lui avait échappé, attribué à Marchand, un collègue moins brillant mais mieux connecté. "La politique, mon cher, la politique", lui avait glissé le directeur avec un sourire contrit.

      C'est pourquoi il avait accepté cette offre à Saint-Flour, en Auvergne. Un petit hôpital de province qui cherchait désespérément un chirurgien qualifié. Une ville de 6000 habitants, perdue entre les volcans et les plateaux désertiques du Cantal.

      Un exil.

      Quand il arriva à Saint-Flour après cinq heures de route, la nuit tombait sur la cité médiévale. Il suivit les indications jusqu'à l'adresse qu'on lui avait communiquée : une maison isolée à la sortie de la ville, dont la façade bleue luisait étrangement sous la lumière de la lune.

      Il s'arrêta devant le portail rouillé et contempla ce qui serait désormais son foyer. La maison semblait l'observer en retour, avec ses fenêtres comme des yeux sombres et cette couleur bleue si particulière, presque phosphorescente.

      "Bienvenue à la maison bleue", murmura-t-il pour lui-même, sans se douter un instant que cette demeure abritait des secrets bien plus sombres que ceux des couloirs de l'Hôpital Saint-Louis.
    `,
  },
  {
    id: 9,
    title: "La Dernière Croisade",
    image: "/images/books/la-derniere-croisade.jpg",
    slug: "la-derniere-croisade",
    extract: `
      Le site internet s'appelait "Bouclier". Un nom simple, direct, comme une promesse de protection. Il avait été créé par Marianne Delcourt, professeure de lettres, et quatre autres femmes – une infirmière, une avocate, une assistante sociale et une policière à la retraite.

      Leur mission : aider les femmes battues ou violentées par leur conjoint à s'échapper, à disparaître littéralement de la circulation pour un temps, le temps nécessaire pour se reconstruire loin des griffes de leur bourreau.

      Ce jour-là, Marianne venait de recevoir un message sur la messagerie sécurisée du site. Une femme, Sophia, dont le mari, un homme d'affaires influent de Lyon, avait promis de la "découper en morceaux" si elle essayait de le quitter à nouveau.

      "Notre équipe va vous contacter dans l'heure", écrivit Marianne. "Préparez une petite valise, uniquement l'essentiel. Nous venons vous chercher ce soir."

      Chaque sauvetage était minutieusement préparé, avec des itinéraires de fuite, des planques temporaires, et tout un réseau de soutien pour aider ces femmes à disparaître sans laisser de traces.

      Elles appelaient ça "La Dernière Croisade" – parce qu'il s'agissait littéralement d'une guerre, d'une lutte à mort contre des hommes qui considéraient leurs compagnes comme leur propriété.

      Une croisade moderne, sans armures ni épées, mais avec des téléphones cryptés, des voitures banalisées, et un réseau de maisons sûres disséminées à travers tout le pays.
    `,
  },
  {
    id: 10,
    title: "Épidaure",
    image: "/images/books/epidaure.jpg",
    slug: "epidaure",
    extract: `
      Le soleil de Grèce était implacable, même en octobre. Le Visiteur s'assit sur l'un des gradins du théâtre d'Épidaure, essuyant son front en sueur. À 54 ans, l'ascension des marches millénaires lui avait paru interminable. Mais la vue en valait la peine.

      Le théâtre, parfaitement conservé, s'ouvrait sur un panorama de collines douces couvertes d'oliviers et de pins. Au centre, l'orchestra circulaire semblait attendre que des acteurs tragiques viennent y déclamer Sophocle ou Euripide.

      "Impressionnant, n'est-ce pas ?"

      Le Visiteur sursauta. Il n'avait pas entendu l'homme s'approcher. Grand, mince, vêtu d'une chemise blanche impeccable malgré la chaleur, il avait ce type méditerranéen indéfinissable qui aurait pu le faire passer pour un Grec, un Italien ou un Espagnol.

      "Je suis désolé de vous avoir fait peur", sourit l'inconnu. "Je suis le Guide."

      "Je n'ai pas demandé de guide", répondit le Visiteur, un peu agacé par cette intrusion dans sa contemplation solitaire.

      "Vous n'avez pas demandé, mais vous en avez besoin", répliqua l'homme sans se départir de son sourire énigmatique. "Car Épidaure n'est pas seulement un théâtre. C'est une porte vers la connaissance."

      Le Visiteur allait protester, mais quelque chose dans le regard du Guide le retint. Un éclat étrange, presque surnaturel, comme si ces yeux contenaient des millénaires de sagesse.

      "Venez", dit simplement le Guide. "Laissez-moi vous montrer le chemin des philosophes."
    `,
  },
];

// Fonction pour obtenir des suggestions de livres (3 livres aléatoires différents du livre actuel)
function getSuggestions(currentBookId: number) {
  const filteredBooks = books.filter((book) => book.id !== currentBookId);
  const shuffled = [...filteredBooks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export default function BookExtractPage({
  params,
}: {
  params: { slug: string };
}) {
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
      {/* En-tête de l'extrait */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-playfair text-4xl mb-2 relative pl-6 border-l-4 border-[#d4af37] italic">
          {book.title}
        </h1>
        <h2 className="font-playfair text-2xl mb-10 pl-6 ml-4 text-gray-600">
          Extrait
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image du livre */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            <div className="relative aspect-[3/4] w-full shadow-lg">
              <Image
                src={book.image}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="border border-gray-200 object-contain"
                priority
              />
            </div>
          </div>

          {/* Extrait du livre */}
          <div className="w-full md:w-3/4 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="prose max-w-none text-gray-800">
              {book.extract.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-12 justify-between">
              <Link
                href={`/catalogue/${book.slug}`}
                className="inline-block bg-[#1a1a1a] border border-[#d4af37] text-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#333]"
              >
                Retour au livre
              </Link>
              <Link
                href="https://www.leboncoin.fr"
                className="inline-block bg-[#ff5722] text-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-[#e64a19]"
              >
                Acheter sur leboncoin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Suggestions */}
      <div className="container mx-auto px-4 py-8 border-t border-gray-200">
        <h2 className="font-playfair text-3xl mb-8 relative pl-6 border-l-4 border-[#d4af37] italic">
          Vous aimerez aussi
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
