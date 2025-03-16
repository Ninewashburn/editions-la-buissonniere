import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "André Lautier - Éditions La Buissonnière",
  description:
    "André Lautier, auteur et médecin, partage ses oeuvres littéraires mêlant romans policiers, philosophie et réflexions politiques.",
  keywords: "André Lautier, Éditions La Buissonnière, roman, livre, littérature, Auvergne, Clermont-Ferrand, auteur, écrivain, médecin",
  authors: [{ name: "André Lautier" }],
  creator: "André Lautier",
  publisher: "Éditions La Buissonnière",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://editionslabuissonniere.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "André Lautier - Éditions La Buissonnière",
    description: "André Lautier, auteur et médecin, partage ses oeuvres littéraires mêlant romans policiers, philosophie et réflexions politiques.",
    url: "https://editionslabuissonniere.fr",
    siteName: "Éditions La Buissonnière",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "André Lautier - Éditions La Buissonnière",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "André Lautier - Éditions La Buissonnière",
    description: "André Lautier, auteur et médecin, partage ses oeuvres littéraires mêlant romans policiers, philosophie et réflexions politiques.",
    images: ["/images/og-image.jpg"],
    creator: "@editionslabuissonniere",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Désactiver les attributs inline ajoutés par DarkReader et d'autres extensions
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes' && mutation.attributeName.includes('darkreader')) {
                        const element = mutation.target;
                        element.removeAttribute(mutation.attributeName);
                      }
                    });
                  });
                  
                  // Observer le document pour les modifications d'attributs
                  observer.observe(document, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['*darkreader*', '*-ms-*']
                  });

                  // Intercepter les erreurs JSON.parse pour les extensions
                  const originalJSONParse = JSON.parse;
                  JSON.parse = function(text, reviver) {
                    try {
                      return originalJSONParse(text, reviver);
                    } catch (e) {
                      // Pour les erreurs générées par les extensions (comme content.js), retourner un objet vide
                      console.debug('Intercepted JSON parse error:', e.message);
                      return {};
                    }
                  };
                } catch (e) {
                  console.error('Extension handling error:', e);
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://editionslabuissonniere.fr/#organization",
                  "name": "Éditions La Buissonnière",
                  "url": "https://editionslabuissonniere.fr/",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://editionslabuissonniere.fr/#logo",
                    "inLanguage": "fr-FR",
                    "url": "https://editionslabuissonniere.fr/logo.svg",
                    "contentUrl": "https://editionslabuissonniere.fr/logo.svg",
                    "width": 200,
                    "height": 60,
                    "caption": "Éditions La Buissonnière"
                  },
                  "image": { "@id": "https://editionslabuissonniere.fr/#logo" },
                  "founder": {
                    "@type": "Person",
                    "name": "André Lautier",
                    "jobTitle": "Auteur et Médecin"
                  },
                  "sameAs": [
                    "https://facebook.com/editionslabuissonniere",
                    "https://x.com/editionslabuissonniere",
                    "https://instagram.com/editionslabuissonniere"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://editionslabuissonniere.fr/#website",
                  "url": "https://editionslabuissonniere.fr/",
                  "name": "Éditions La Buissonnière",
                  "description": "Maison d'édition spécialisée dans la littérature d'André Lautier",
                  "publisher": { "@id": "https://editionslabuissonniere.fr/#organization" },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": "https://editionslabuissonniere.fr/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "fr-FR"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import "./globals.css";
