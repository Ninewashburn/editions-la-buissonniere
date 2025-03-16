# Composants Layout

Ce dossier contient les composants de mise en page globaux pour le site.

## Composants

- `header.tsx` - Entête du site avec navigation
- `footer.tsx` - Pied de page avec informations de contact et navigation

## Utilisation

Ces composants sont importés dans le layout principal de l'application (`app/layout.tsx`) et sont présents sur toutes les pages du site.

```tsx
import { Header, Footer } from "@/components/layout";

// ...

<body>
  <Header />
  <main>{children}</main>
  <Footer />
</body>
``` 