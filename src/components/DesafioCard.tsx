"use client";

import Image, { type ImageLoader } from "next/image";
import type { Desafio } from "@/data/desafios";

// Cloudinary hace el resize y la conversión (f_auto: WebP/AVIF/JPEG según el
// navegador). Así la foto HEIC llega convertida y no pasa por el optimizador
// de Next, que no sabe decodificarla.
const cloudinaryLoader: ImageLoader = ({ src, width }) =>
  src.replace("/upload/", `/upload/f_auto,q_auto,c_limit,w_${width}/`);

/**
 * Card de un desafío.
 * - Con hover (can-hover) o foco de teclado: la foto se oscurece con un velo
 *   bordó y se desenfoca, el título sube y aparece la descripción.
 * - Sin hover (táctil): la descripción se ve siempre, con la foto oscurecida.
 * - Con prefers-reduced-motion los cambios son instantáneos.
 * El alto sale de un espaciador en la misma celda de la grilla: si la
 * descripción ocupa más, la card crece en vez de cortar el texto.
 */
export default function DesafioCard({ titulo, texto, foto }: Desafio) {
  const transicion = "duration-400 ease-out motion-reduce:transition-none";

  return (
    <article
      tabIndex={0}
      className="group relative grid overflow-hidden rounded-2xl bg-gray-900 shadow-md outline-none focus-visible:ring-4 focus-visible:ring-[#99042F] focus-visible:ring-offset-2"
    >
      {/* Espaciador: alto mínimo. En desktop 5:6, para que la descripción más
          larga entre al desplegarse en hover sin que la card crezca (a 1024 px
          una card cuadrada se quedaba corta). */}
      <div aria-hidden="true" className="aspect-square lg:aspect-[5/6] [grid-area:1/1]" />

      {/* Foto */}
      <div className="absolute inset-0">
        <Image
          loader={cloudinaryLoader}
          src={foto}
          alt=""
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-[filter,scale] ${transicion} can-hover:group-hover:scale-105 can-hover:group-hover:blur-[3px] can-hover:group-focus-visible:scale-105 can-hover:group-focus-visible:blur-[3px]`}
        />
      </div>

      {/* Degradé para leer el título (siempre) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Velo: fijo en táctil; aparece con hover/foco donde hay hover */}
      <div
        className={`absolute inset-0 bg-[#3d0113]/55 transition-opacity ${transicion} can-hover:opacity-0 can-hover:group-hover:opacity-100 can-hover:group-focus-visible:opacity-100 can-hover:bg-[#99042F]/60`}
      />

      {/* Texto */}
      <div className="relative z-10 flex flex-col justify-end p-6 md:p-7 text-white [grid-area:1/1]">
        <span aria-hidden="true" className="mb-3 h-1 w-10 rounded-full bg-[#99042F] can-hover:group-hover:bg-white can-hover:group-focus-visible:bg-white transition-colors duration-400" />
        <h3 className="font-poppins text-lg md:text-xl font-semibold leading-snug">
          {titulo}
        </h3>
        {/* grid-rows 0fr → 1fr: la descripción se despliega y empuja el título hacia arriba */}
        <div
          className={`grid grid-rows-[1fr] transition-[grid-template-rows] ${transicion} can-hover:grid-rows-[0fr] can-hover:group-hover:grid-rows-[1fr] can-hover:group-focus-visible:grid-rows-[1fr]`}
        >
          <div className="overflow-hidden">
            <p
              className={`pt-3 font-roboto text-sm md:text-[15px] leading-relaxed text-white/90 transition-opacity ${transicion} can-hover:opacity-0 can-hover:group-hover:opacity-100 can-hover:group-focus-visible:opacity-100`}
            >
              {texto}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
