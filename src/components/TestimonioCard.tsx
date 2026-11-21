import Image from "next/image";
import type { Testimonio } from "@/data/testimonios";
import LinkedInIcon from "./LinkedInIcon";

/** Card de un testimonio (slider del home y grilla de /experiencia). */
export default function TestimonioCard({
  testimonio,
  className = "",
}: {
  testimonio: Testimonio;
  className?: string;
}) {
  const { texto, nombre, cargo, empresa, linkedin, logo } = testimonio;

  return (
    <figure
      className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 ${className}`}
    >
      {/* Comillas decorativas */}
      <span
        aria-hidden="true"
        className="block h-10 font-poppins text-7xl font-bold leading-none text-[#99042F] md:h-12 md:text-8xl"
      >
        “
      </span>

      {/* flex-1: en la grilla, las dos cards de una fila miden lo mismo y el pie
          queda alineado abajo en ambas. */}
      <blockquote className="my-6 flex flex-1 flex-col gap-4 font-roboto text-base leading-relaxed text-gray-700 md:text-lg">
        {texto.map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </blockquote>

      <figcaption className="flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <p className="font-poppins text-base font-semibold text-gray-900 md:text-lg">
            {nombre}
          </p>
          <p className="font-roboto text-sm leading-snug text-gray-600">
            {cargo}
          </p>
          <p className="font-roboto text-sm font-medium text-[#99042F]">
            {empresa}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {logo && (
            <Image
              // e_trim: recorta el margen blanco del JPG (igual que en /experiencia)
              src={logo.replace("/upload/", "/upload/e_trim:10/")}
              alt="" // la empresa ya está escrita al lado
              width={112}
              height={48}
              className="h-10 w-auto max-w-28 object-contain"
            />
          )}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${nombre}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#99042F] transition-colors hover:bg-[#99042F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
