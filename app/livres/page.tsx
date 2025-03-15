import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Données simulées pour les livres
const livres = [
  {
    id: "la-maison-bleue",
    title: "La maison bleue",
    image: "/la-maison-bleue.jpg",
    category: "Thriller psychologique",
    description:
      "Dans ce thriller psychologique, André Lautier nous entraîne dans un labyrinthe de secrets et de mensonges. Au-delà de l'intrigue policière, le roman interroge la nature humaine et les conséquences de nos choix. Le personnage de Larrieu, confronté à un environnement hostile et à ses propres démons intérieurs, devient le symbole de l'homme moderne en quête de sens.",
    slug: "la-maison-bleue",
    year: "2024",
  },
  {
    id: "les-ombres-du-passe",
    title: "Les ombres du passé",
    image: "/les-ombres-du-passe.jpg",
    category: "Roman historique",
    description:
      "Un roman historique captivant qui nous plonge dans la France de l'après-guerre. À travers le destin de la famille Moreau, André Lautier explore les séquelles laissées par le conflit et la difficile reconstruction d'un pays meurtri. Une fresque familiale émouvante qui interroge notre rapport à la mémoire et au pardon.",
    slug: "les-ombres-du-passe",
    year: "2022",
  },
  {
    id: "le-dernier-temoin",
    title: "Le dernier témoin",
    image: "/le-dernier-temoin.jpg",
    category: "Polar",
    description:
      "Quand le commissaire Pierre Pérec est appelé sur la scène d'un crime particulièrement violent, il est loin d'imaginer que cette affaire va le mener aux confins de sa propre histoire. Un polar haletant où les fausses pistes s'accumulent et où chaque indice semble plus énigmatique que le précédent.",
    slug: "le-dernier-temoin",
    year: "2020",
  },
  {
    id: "la-traversee",
    title: "La traversée",
    image: "/la-traversee.jpg",
    category: "Roman d'aventure",
    description:
      "L'histoire extraordinaire d'un homme ordinaire qui décide un jour de tout quitter pour traverser l'Atlantique à la rame. Un récit initiatique puissant sur la quête de soi et le dépassement de ses limites. André Lautier nous livre ici une réflexion profonde sur la solitude et la confrontation avec les éléments.",
    slug: "la-traversee",
    year: "2018",
  },
  {
    id: "les-silences-de-marie",
    title: "Les silences de Marie",
    image: "/les-silences-de-marie.jpg",
    category: "Roman psychologique",
    description:
      "Marie n'a pas prononcé un mot depuis vingt ans. Enfermée dans son mutisme, elle observe le monde qui l'entoure avec une acuité troublante. À travers ce personnage énigmatique, André Lautier explore les traumatismes de l'enfance et la résilience humaine avec une sensibil  André Lautier explore les traumatismes de l'enfance et la résilience humaine avec une sensibilité rare. Un roman bouleversant qui ne laisse personne indifférent.",
    slug: "les-silences-de-marie",
    year: "2016",
  },
  {
    id: "le-choix-de-thomas",
    title: "Le choix de Thomas",
    image: "/le-choix-de-thomas.jpg",
    category: "Roman contemporain",
    description:
      "Thomas, brillant avocat parisien, voit sa vie basculer le jour où il découvre un secret familial soigneusement gardé. Entre vérité et mensonge, entre loyauté et trahison, il devra faire un choix aux conséquences irréversibles. Un roman sur les dilemmes moraux qui nous confrontent tous un jour ou l'autre.",
    slug: "le-choix-de-thomas",
    year: "2014",
  },
]

export default function Livres() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title">Catalogue</h1>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
        {livres.map((livre) => (
          <Card key={livre.id} className="flex flex-col overflow-hidden md:flex-row">
            <div className="relative h-64 w-full md:h-auto md:w-1/3">
              <Image src={livre.image || "/placeholder.svg"} alt={livre.title} fill className="object-cover" />
            </div>
            <CardContent className="flex-1 p-6">
              <div className="mb-1 text-sm text-gray-500">{livre.year}</div>
              <h2 className="mb-2 font-playfair text-2xl font-bold">{livre.title}</h2>
              <p className="mb-4 text-sm text-primary">Catégorie : {livre.category}</p>
              <p className="mb-6 text-gray-600">{livre.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black"
                >
                  <Link href={`/livres/${livre.slug}`}>Découvrir</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black"
                >
                  <Link href={`/livres/${livre.slug}/extrait`}>Lire un extrait</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

