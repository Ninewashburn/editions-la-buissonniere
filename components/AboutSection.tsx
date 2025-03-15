import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <h2 className="gold-accent text-3xl md:text-4xl font-playfair mb-10 text-white italic font-playfair">
          Quelques mots sur moi
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-gray-300 text-lg leading-relaxed">
            Médecin spécialisé en anatomie pathologique, André Lautier a marqué
            la lutte contre le cancer en Auvergne. Pionnier du dépistage par
            frottis dans la région, il a sauvé des milliers de vies et a dirigé
            un cabinet de référence pendant plus de 20 ans. Cofondateur de
            nombreuses cliniques, il poursuit son engagement en créant l'ARDOC,
            centre de dépistage du cancer, qu'il préside avec dévouement pendant
            neuf ans.
          </p>

          <p className="mb-8 text-gray-300 text-lg leading-relaxed">
            Parallèlement, l'écriture est sa seconde passion. Lauréat du
            prestigieux Grand Prix des Nouvelles Littéraires, il signe une
            vingtaine d'ouvrages mêlant romans policiers, philosophie et
            réflexions politiques. Ses écrits reflètent un style fluide,
            captivant et accessible, avec l'espoir de toucher un public encore
            plus large grâce à l'Internet et aux plateformes numériques.
          </p>

          <div className="text-center mt-10">
            <Link
              href="/biographie"
              className="inline-block px-8 py-3 bg-[#222222] border border-[#d4af37] text-white hover:bg-[#333333] font-medium transition-colors duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
