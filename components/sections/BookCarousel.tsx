"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { OptimizedImage } from "@/components/ui";

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

export default function BookCarousel() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <h2 className="gold-accent text-3xl md:text-4xl font-playfair mb-12 italic font-playfair">
          Mes œuvres
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
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
              1200: {
                slidesPerView: 4,
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
                    <div className="relative w-[200px] h-[300px] shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <OptimizedImage
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        containerClassName="w-[200px] h-[300px]"
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-button-prev custom-nav-prev !z-20"
            onClick={(e) => e.preventDefault()}
          />
          <button
            className="swiper-button-next custom-nav-next !z-20"
            onClick={(e) => e.preventDefault()}
          />
          <div className="swiper-pagination custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
