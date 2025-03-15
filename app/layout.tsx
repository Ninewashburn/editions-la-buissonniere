import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      </head>
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
