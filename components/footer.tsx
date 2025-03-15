"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Facebook,
  Instagram,
  MapPin,
  BookOpen,
  Calendar,
  ExternalLink,
  User,
  FileText,
} from "lucide-react";
import { OptimizedIcon, SectionTitle, IconLink } from "@/components/ui";
import { styles } from "@/lib/utils";

interface XIconProps {
  size?: number;
  className?: string;
}

const XIcon = (props: XIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={props.size || 24}
    height={props.size || 24}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    href: "https://facebook.com",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://x.com",
    icon: XIcon,
    label: "X (anciennement Twitter)",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
] as const;

const POINTS_DE_VENTE = [
  {
    href: "https://www.leboncoin.fr/boutique/289523/editions_la_buissonniere.htm",
    icon: ExternalLink,
    label: "Le Bon Coin",
  },
] as const;

const LIBRAIRIES = [
  { nom: "Librairie Les Volcans", ville: "Clermont-Ferrand" },
  { nom: "Librairie Papageno", ville: "Clermont-Ferrand" },
  { nom: "Espace culturel Leclerc", ville: "Riom" },
] as const;

const NAVIGATION_LINKS = [
  { href: "/catalogue", icon: BookOpen, label: "Catalogue" },
  { href: "/actualites", icon: Calendar, label: "Actualités" },
  { href: "/biographie", icon: User, label: "Biographie" },
  { href: "/contact", icon: Mail, label: "Contact" },
  { href: "/mentions-legales", icon: FileText, label: "Mentions légales" },
] as const;

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implémenter la logique d'inscription à la newsletter
  };

  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <SectionTitle>Me contacter</SectionTitle>
            <div className="flex items-center mb-3">
              <OptimizedIcon
                icon={Mail}
                size={20}
                className="mr-2 text-[#d4af37]"
              />
              <a
                href="mailto:andrelautier@editionslabuissonniere.fr"
                className={styles.link}
              >
                andrelautier@editionslabuissonniere.fr
              </a>
            </div>
            <div className="flex items-center mb-3">
              <OptimizedIcon
                icon={MapPin}
                size={20}
                className="mr-2 text-[#d4af37]"
              />
              <span>Clermont-Ferrand, Auvergne</span>
            </div>
            <div className="mt-4">
              <Link href="/contact" className={styles.outlineButton}>
                Via notre formulaire
              </Link>
            </div>

            <div className="mt-6 flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={social.label}
                >
                  <OptimizedIcon icon={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle variant="bottom-border">Points de vente</SectionTitle>
            <div className="space-y-3">
              <IconLink 
                href={POINTS_DE_VENTE[0].href}
                icon={POINTS_DE_VENTE[0].icon}
                external
              >
                {POINTS_DE_VENTE[0].label}
              </IconLink>
              
              <div className="mt-4">
                <h4 className="text-[#d4af37] text-sm font-medium mb-2">Librairies partenaires</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  {LIBRAIRIES.map((lib) => (
                    <li key={lib.nom}>
                      {lib.nom} - {lib.ville}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle>Découvrir</SectionTitle>
            <nav>
              <ul className="space-y-2">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <IconLink href={link.href} icon={link.icon}>
                      {link.label}
                    </IconLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <SectionTitle>Newsletter</SectionTitle>
            <p className="text-sm text-gray-300 mb-3">
              Inscrivez-vous pour recevoir nos actualités et être informé des
              prochaines parutions et événements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#444] flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Éditions La Buissonnière - Tous droits
            réservés
          </p>
          <p className="mt-2 md:mt-0">
            Site créé par Air'DBR et Nicolas FLAK / Powered by MR RM
          </p>
        </div>
      </div>
    </footer>
  );
}
