"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  { src: "/estudio-grupo.jpg", alt: "Grupo Vía3" },
  { src: "/estudio-reunion.jpeg", alt: "Reunión Vía3" },
  { src: "/estudio-virtual.jpg", alt: "Reunión virtual Vía3" },
];

const DotsGrid = () => (
  <div className="grid grid-cols-3 gap-1.5">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-[#99042F]/50" />
    ))}
  </div>
);

const Arrows = () => (
  <span className="text-[#99042F] text-2xl font-bold tracking-tighter">
    &rsaquo;&rsaquo;&rsaquo;
  </span>
);

export default function ElEstudio() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="el-estudio" className="bg-white overflow-x-hidden w-full">
      {/* ── PARTE 1: Título + texto + foto que sobresale ── */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        {/* Texto — siempre visible, en desktop tiene z-10 */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="md:max-w-[50%]">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center md:text-left mb-6">
              El Estudio
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-loose">
              Somos una red dinámica de contactos entre personas y
              organizaciones, profesionales, empresas y marcas que,
              complementándose, hacen sinergia junto a Vía3 para brindar la
              mejor solución de aprendizaje a cada desafío.
            </p>
          </div>
        </div>

        {/* Foto — en mobile: estática abajo del texto. En desktop: absolute derecha */}
        <div
          className="
    relative w-full h-64 mt-8
    md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[55%] md:h-full md:mt-0
  "
        >
          <Image
            src="/estudio-principal.jpg"
            alt="Equipo Estudio Vía3"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent md:hidden" />
        </div>
      </div>

      {/* ── PARTE 2: Collage + texto secundario ── */}
      <div className="relative py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* MOBILE: texto + carousel */}
        <div className="md:hidden flex flex-col gap-6">
          <p className="text-gray-700 text-base leading-loose">
            Estamos convencidos que cada organización requiere sus propias
            soluciones para optimizar los procesos, mejorar el desempeño de sus
            colaboradores e integrarlos a la rentabilidad del negocio.
          </p>
          <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
            <Image
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              fill
              className="object-cover transition-all duration-500"
              sizes="100vw"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() =>
                setCurrent(
                  (prev) =>
                    (prev - 1 + carouselImages.length) % carouselImages.length,
                )
              }
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:border-[#99042F] hover:text-[#99042F] transition-colors"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#99042F]" : "bg-gray-300"}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % carouselImages.length)
              }
              className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:border-[#99042F] hover:text-[#99042F] transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        {/* TABLET/DESKTOP: collage izquierda + texto derecha */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">
          {/* Collage superpuesto */}
          <div className="relative h-[380px] lg:h-[440px]">
            <div className="absolute -left-10 top-8 z-10">
              <Arrows />
            </div>
            {/* Foto chica arriba izquierda */}
            <div className="absolute -left-4 top-0 w-[42%] h-[46%] rounded-xl overflow-hidden shadow-lg z-30">
              <Image
                src="/estudio-grupo.jpg"
                alt="Grupo Vía3"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            {/* Foto grande centro */}
            <div className="absolute left-24 top-20 w-[58%] h-[62%] rounded-xl overflow-hidden shadow-lg z-20">
              <Image
                src="/estudio-reunion.jpeg"
                alt="Reunión Vía3"
                fill
                className="object-cover"
                sizes="35vw"
              />
            </div>
            {/* Foto chica abajo derecha */}
            <div className="absolute right-2 bottom-4 w-[38%] h-[42%] rounded-xl overflow-hidden shadow-lg z-30">
              <Image
                src="/estudio-virtual.jpg"
                alt="Virtual Vía3"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            {/* Dots abajo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
              <DotsGrid />
            </div>
          </div>

          {/* Texto derecha — alineado a la derecha como en Figma */}
          <div className="flex flex-col gap-6 text-right">
            <p className="text-gray-700 text-base md:text-lg leading-loose">
              Estamos convencidos que cada organización requiere sus propias
              soluciones para optimizar los procesos, mejorar el desempeño de
              sus colaboradores e integrarlos a la rentabilidad del negocio.
            </p>
            <div className="flex justify-end">
              <DotsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
