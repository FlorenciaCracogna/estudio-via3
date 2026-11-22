"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Partner,
  partners,
  hrefDeEnlace,
  etiquetaDeEnlace,
} from "@/data/partners";
import { useCarruselInfinito } from "@/lib/useCarruselInfinito";

// Duplicamos la lista para el efecto infinito
const tickerItems = [...partners, ...partners];

const VELOCIDAD = 50; // px por segundo

function PartnerCard({
  partner,
  duplicado,
}: {
  partner: Partner;
  duplicado: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={hrefDeEnlace(partner.enlace)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={etiquetaDeEnlace(partner.nombre, partner.enlace)}      // La segunda copia es sólo visual: fuera del árbol de accesibilidad y del tab
      aria-hidden={duplicado || undefined}
      tabIndex={duplicado ? -1 : undefined}
      draggable={false}
      // Sin hover (táctil): foto y, debajo, el nombre, todo dentro del mismo
      // link. Con mouse el nombre aparece sobre la foto al pasar por encima.
      className="relative flex-shrink-0 flex flex-col items-center gap-2 w-32 md:w-36 cursor-pointer can-hover:rounded-full"
      // Sólo mouse: en táctil el tap dispara mouseenter y el overlay quedaba fijo
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
    >
      {/* Imagen / logo */}
      <div
        className={`relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-300 ${
          partner.tipo === "empresa" ? "bg-white" : ""
        }`}
      >
        <Image
          src={partner.imagen}
          alt={partner.nombre}
          fill
          draggable={false}
          // El avatar de iniciales (ui-avatars) es un PNG chico de tamaño fijo:
          // se usa tal cual, sin srcset
          unoptimized={partner.imagen.includes("ui-avatars.com")}
          className={`${partner.tipo === "empresa" ? "object-contain p-4" : "object-cover p-0"} transition-opacity duration-300 ${hovered ? "opacity-40" : "opacity-100"}`}
          sizes="144px"
        />

        {/* Overlay oscuro + nombre en blanco (con mouse) */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-2 bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-center text-xs font-semibold text-white leading-tight font-roboto">
            {partner.nombre}
          </span>
        </div>
      </div>

      {/* Nombre debajo de la foto (sin hover) */}
      <span className="can-hover:hidden w-full text-center text-xs font-semibold text-gray-900 leading-tight font-roboto">
        {partner.nombre}
      </span>
    </a>
  );
}

export default function Partnerships() {
  // Swipe con el dedo; con mouse se usan las flechas
  const { seccionRef, trackProps, mover } = useCarruselInfinito({
    cantidad: partners.length,
    velocidad: VELOCIDAD,
  });

  return (
    <section
      ref={seccionRef}
      id="red-de-especialistas"
      className="bg-[#DBCAB9] py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-4" data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            Red de especialistas
          </h2>
          <p className="text-gray-900 font-poppins font-medium text-base md:text-lg w-full max-w-2xl leading-snug px-2">
            Contamos con una red de especialistas y organizaciones aliadas que
            amplía nuestras capacidades de diseño e intervención.
          </p>
          <p className="text-gray-800 text-sm md:text-base w-full max-w-2xl font-roboto leading-relaxed px-2">
            Este modelo colaborativo nos permite conformar equipos a medida
            para responder a desafíos organizacionales diversos, manteniendo
            cercanía, flexibilidad y profundidad técnica.
          </p>
        </div>
      </div>

      {/* Ticker carrusel */}
      <div
        className="relative w-full"
        data-reveal
        role="region"
        aria-roledescription="carrusel"
        aria-label="Red de especialistas"
      >
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#DBCAB9] to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#DBCAB9] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          id="carrusel-especialistas"
          // items-start: con el nombre debajo (táctil), las fotos quedan
          // alineadas aunque los nombres ocupen distinta cantidad de líneas
          className="flex items-start gap-8 md:gap-10 will-change-transform py-4 touch-pan-y select-none"
          style={{ width: "max-content" }}
          {...trackProps}
        >
          {tickerItems.map((partner, i) => (
            <PartnerCard
              key={`${partner.id}-${i}`}
              partner={partner}
              duplicado={i >= partners.length}
            />
          ))}
        </div>
      </div>

      {/* Flechas */}
      <div className="flex justify-center gap-4 mt-8" data-reveal>
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label="Especialista anterior"
          aria-controls="carrusel-especialistas"
          className="w-11 h-11 rounded-full border-2 border-[#99042F] text-[#99042F] flex items-center justify-center hover:bg-[#99042F] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <FlechaIcon className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label="Especialista siguiente"
          aria-controls="carrusel-especialistas"
          className="w-11 h-11 rounded-full border-2 border-[#99042F] text-[#99042F] flex items-center justify-center hover:bg-[#99042F] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <FlechaIcon />
        </button>
      </div>
    </section>
  );
}

function FlechaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 18l6-6-6-6"
      />
    </svg>
  );
}
