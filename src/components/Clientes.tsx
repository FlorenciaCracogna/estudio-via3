"use client";

import Image from "next/image";
import Link from "next/link";
import { clientesCarrusel } from "@/data/experiencia";
import { useCarruselInfinito } from "@/lib/useCarruselInfinito";
import { buttonClasses } from "./Button";
import PreguntaInicial from "./PreguntaInicial";
import TestimoniosSlider from "./TestimoniosSlider";
import { secciones } from "@/data/secciones";

// Duplicamos la lista para el efecto infinito
const tickerItems = [...clientesCarrusel, ...clientesCarrusel];

const VELOCIDAD = 55; // px por segundo

/** Home → Experiencia: carrusel de logos y acceso a la página por sector. */
export default function Clientes() {
  // Sin flechas: se arrastra con el dedo o con el mouse. Con reduced motion
  // no hay auto-scroll, pero se puede seguir moviendo a mano.
  const { seccionRef, trackProps } = useCarruselInfinito({
    cantidad: clientesCarrusel.length,
    velocidad: VELOCIDAD,
    pausaEnHover: false,
    arrastreConMouse: true,
  });

  return (
    <section
      ref={seccionRef}
      id="experiencia"
      className="bg-white py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col items-center text-center gap-3" data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            {secciones.experiencia.label}
          </h2>
          <PreguntaInicial>{secciones.experiencia.pregunta}</PreguntaInicial>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="relative w-full"
        data-reveal
        role="region"
        aria-roledescription="carrusel"
        aria-label="Logos de clientes"
      >
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-6 md:gap-8 will-change-transform py-4 touch-pan-y select-none can-hover:cursor-grab can-hover:active:cursor-grabbing"
          style={{ width: "max-content" }}
          {...trackProps}
        >
          {tickerItems.map((cliente, i) => (
            <div
              key={`${cliente.nombre}-${i}`}
              // La segunda copia es sólo visual
              aria-hidden={i >= clientesCarrusel.length || undefined}
              className="flex-shrink-0 flex items-center justify-center w-44 h-28 md:w-56 md:h-32 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-shadow duration-200"
            >
              <Image
                src={cliente.logo}
                alt={i >= clientesCarrusel.length ? "" : cliente.nombre}
                width={140}
                height={70}
                draggable={false}
                className="object-contain max-h-24 w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Casos y experiencias */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mt-16 md:mt-20">
        <h3
          className="flex items-center justify-center gap-3 font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-[#99042F] mb-8"
          data-reveal
        >
          <span aria-hidden="true" className="h-px w-8 bg-[#99042F]" />
          Casos y experiencias
        </h3>
        <div data-reveal>
          <TestimoniosSlider />
        </div>
      </div>

      <div className="flex justify-center mt-12" data-reveal>
        <Link href="/experiencia" className={buttonClasses()}>
          Ver por sector
        </Link>
      </div>
    </section>
  );
}
