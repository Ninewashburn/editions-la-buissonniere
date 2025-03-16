# Composants de Section

Ce dossier contient les composants de section spécifiques à certaines pages du site.

## Composants

- `BookCarousel.tsx` - Carousel de livres utilisé sur la page d'accueil
- `AboutSection.tsx` - Section "À propos" utilisée sur la page d'accueil

## Utilisation

Ces composants sont importés dans les pages où ils sont nécessaires :

```tsx
import { BookCarousel, AboutSection } from "@/components/sections";

export default function Home() {
  return (
    <div>
      {/* Autres éléments */}
      <BookCarousel />
      <AboutSection />
    </div>
  );
}
```

## Nouveaux composants de section

Pour ajouter un nouveau composant de section :
1. Créer le fichier dans ce dossier
2. L'exporter dans `index.ts`
3. L'importer et l'utiliser dans la page concernée 