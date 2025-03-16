# Composants UI

Ce dossier contient tous les composants UI réutilisables pour le projet.

## Structure optimisée

Nous avons organisé les composants en fonction de leur utilisation :

- **Composants utilisés** : Seuls les composants activement utilisés dans le projet sont conservés à la racine du dossier
- **Composants exportés via index.ts** : Pour faciliter l'import groupé dans les fichiers du projet

## Liste des composants utilisés

- `button.tsx` - Bouton réutilisable avec variants
- `card.tsx` - Composant de carte avec titre, contenu, etc.
- `icon.tsx` - Wrapper pour les icônes Lucide (OptimizedIcon)
- `icon-link.tsx` - Lien avec icône
- `image.tsx` - Wrapper pour les images (OptimizedImage)
- `input.tsx` - Champ de saisie
- `label.tsx` - Libellé pour les champs de formulaire
- `scroll-to-top.tsx` - Bouton pour remonter en haut de page
- `section-title.tsx` - Titre de section
- `sheet.tsx` - Panneau latéral
- `textarea.tsx` - Zone de texte multiligne
- `use-toast.ts` - Notifications toast

## Ajout de nouveaux composants

Pour ajouter un nouveau composant UI :

1. Créer le fichier dans ce dossier
2. L'exporter dans `index.ts`
3. L'utiliser via import groupé : `import { MonComposant } from "@/components/ui"` 