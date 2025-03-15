"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import OptimizedImage from "@/components/ui/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const books = [
  {
    id: 1,
    title: "Une Si Paisible Petite Place",
    image: "/images/books/une-si-paisible-petite-place.jpg",
    slug: "une-si-paisible-petite-place",
  },
  {
    id: 2,
    title: "Un Sillage de Sang",
    image: "/images/books/un-sillage-de-sang.jpg",
    slug: "un-sillage-de-sang",
  },
  {
    id: 3,
    title: "Un Homme bien sous tous rapports",
    image: "/images/books/un-homme-bien-sous-tous-rapports.jpg",
    slug: "un-homme-bien-sous-tous-rapports",
  },
  {
    id: 4,
    title: "Les Vagues de la Mer",
    image: "/images/books/les-vagues-de-la-mer.jpg",
    slug: "les-vagues-de-la-mer",
  },
  {
    id: 5,
    title: "Le Retour du Guitariste",
    image: "/images/books/le-retour-du-guitariste.jpg",
    slug: "le-retour-du-guitariste",
  },
  {
    id: 6,
    title: "Le Long Chemin de l'Écureuil",
    image: "/images/books/le-long-chemin-de-lecureuil.jpg",
    slug: "le-long-chemin-de-lecureuil",
  },
];

export default function Biographie() {
  return (
    <div className="min-h-screen bg-[#f9f8f4]">
      {/* Section biographie */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image d'André Lautier */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
              <OptimizedImage
                src="/biographie-andre-lautier.jpg"
                alt="André Lautier"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Contenu biographique */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="border-l-4 border-[#d4af37] pl-6">
              <h1 className="font-playfair text-4xl md:text-5xl text-[#333] italic mb-6">
                Quelques mots sur moi
              </h1>
            </div>

            <h2 className="font-playfair text-2xl font-semibold mt-6 mb-2">
              André Lautier
            </h2>
            <h3 className="text-lg text-gray-700 mb-6">Médecin et Écrivain</h3>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                André Lautier a mené une carrière exceptionnelle, alliant son
                engagement dans la lutte contre le cancer à une passion profonde
                pour l'écriture.
              </p>

              <p>
                Médecin spécialiste en anatomie pathologique, il commence sa
                carrière dans les années 60 à l'hôpital Broussais à Paris. Très
                tôt, il fait ses preuves en dirigeant le service d'anatomie
                pathologique de l'hôpital. En 1968, il s'installe à
                Clermont-Ferrand, au cœur de la région Auvergne, alors en pleine
                transformation avec l'émergence des grandes cliniques modernes.
                Il fonde son propre cabinet médical, où il devient rapidement un
                pionnier du dépistage par frottis en Auvergne. Grâce à son
                expertise, il sauve des milliers de femmes du cancer de
                l'utérus.
              </p>
              <br />
              <p>
                Pendant 20 ans, il exerce seul sur un vaste territoire,
                apportant son savoir-faire à une population étendue. Par la
                suite, il forme une équipe de cinq spécialistes et fonde un
                cabinet de référence. Aujourd'hui, ce cabinet demeure l'un des
                leaders dans la discipline en région Auvergne.
              </p>

              <p>
                À sa retraite en 1997, André Lautier poursuit son engagement
                dans la lutte contre le cancer. Avec le Dr Issard, radiologue,
                et Chantal Mestre, il cofonde l'ARDOC, un centre régional de
                dépistage du cancer. Il en devient le président et le dirige
                avec passion pendant neuf ans, s'investissant pleinement dans la
                santé publique. Son action se poursuit jusqu'en 2022.
              </p>

              <p>
                Outre sa carrière médicale, André Lautier nourrit une passion
                pour l'écriture. Dans les années 70, il remporte le prestigieux
                Grand Prix des Nouvelles Littéraires du Rotary International.
                Auteur prolifique, il publie une vingtaine d'ouvrages, allant
                des romans policiers aux réflexions philosophiques, en passant
                par des méditations politiques et un récit partiellement
                autobiographique.
              </p>
              <br />
              <p>
                Aujourd'hui, ses livres continuent de rencontrer un grand
                succès. Ses écrits, appréciés pour leur fluidité et leur
                profondeur, sont souvent présentés dans les Salons du Livre de
                sa région. Il espère désormais élargir son public grâce à
                l'Internet et aux plateformes numériques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Mes œuvres avec carousel */}
      <div className="py-12 border-t border-gray-200 bg-[#f9f8f4]">
        <div className="container mx-auto px-4">
          <div className="border-l-4 border-[#d4af37] pl-6 mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#333] italic">
              Mes oeuvres
            </h2>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
              className="book-carousel"
              onClick={(swiper, event) => {
                // Empêcher la navigation si on clique sur les boutons de navigation
                const target = event.target as HTMLElement;
                if (
                  target.closest(".swiper-button-next") ||
                  target.closest(".swiper-button-prev") ||
                  target.closest(".swiper-pagination")
                ) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }}
            >
              {books.map((book) => (
                <SwiperSlide key={book.id}>
                  <Link href={`/catalogue/${book.slug}`} className="block">
                    <div className="book-card flex flex-col items-center">
                      <div className="relative w-[180px] h-[270px] shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <OptimizedImage
                          src={book.image}
                          alt={book.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev !z-20"
              onClick={(e) => e.preventDefault()}
            />
            <button
              className="swiper-button-next !z-20"
              onClick={(e) => e.preventDefault()}
            />
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
