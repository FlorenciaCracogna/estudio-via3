"use client";

import Image from "next/image";
import Link from "next/link";
import { equipo } from "@/data/equipo";

// Nombre corto sin "Lic." para la sección home (igual que el Figma)
function nombreCorto(nombre: string) {
  return nombre.replace(/^Lic\.\s*/, "");
}

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-white py-16 md:py-20 overflow-x-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="relative flex flex-col items-center mb-10">
          {/* Dots decorativos arriba derecha */}
          <div className="absolute -top-2 right-0">
            <Image
              src="/arrows-dots/puntitos-bordo.png"
              alt=""
              width={72}
              height={72}
              aria-hidden="true"
            />
          </div>

          <h2 className="titulo-seccion text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center font-poppins mb-4">
            Nosotros
          </h2>
          <p className="text-gray-800 text-sm md:text-base text-center max-w-2xl font-roboto">
            Somos un equipo comprometido con la excelencia, guiado por la
            integridad, impulsado por el dinamismo, y sostenido por la
            profesionalidad y el entusiasmo en cada proyecto
          </p>
        </div>

        {/* Grid de integrantes con bloque bordo a la izquierda */}
        <div className="relative flex items-center mb-10">
          {/* Globo decorativo — posición absoluta detrás de la primera foto */}
          <div className="absolute -left-10 top-1/4 -translate-y-1/2 z-0">
            <Image
              src="/arrows-dots/globos-dialogo-arriba-bordo.png"
              alt=""
              width={150}
              height={150}
              aria-hidden="true"
            />
          </div>

          <div
            className="relative w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 justify-items-center"
            style={{ zIndex: 1 }}
          >
            {equipo.map((persona) => (
              <Link
                key={persona.id}
                href={`/nosotros?miembro=${persona.id}`}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                {/* Foto circular */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-[#DBCAB9] transition-all duration-300 shadow-md bg-white">
                  <Image
                    src={persona.foto}
                    alt={nombreCorto(persona.nombre)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
                {/* Nombre sin "Lic." */}
                <span className="text-center text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#DBCAB9] transition-colors duration-300 font-roboto leading-tight">
                  {nombreCorto(persona.nombre)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA inferior */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <p className="text-gray-600 italic font-roboto text-sm md:text-base text-center">
              Acerquémonos un poco más y conocé más sobre nuestro equipo
            </p>
            <Image
              src="/arrows-dots/flecha-bordo.png"
              alt=""
              width={44}
              height={28}
              aria-hidden="true"
            />
          </div>
          <Link
            href="/nosotros"
            className="px-8 py-2.5 bg-[#99042F] hover:bg-[#7a0326] text-white font-medium tracking-widest rounded-md transition-colors duration-200 font-roboto text-sm"
          >
            Conocenos
          </Link>
        </div>
      </div>
    </section>
  );
}
