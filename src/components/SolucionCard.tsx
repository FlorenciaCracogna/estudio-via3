import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Solucion } from "@/data/soluciones";
import Button from "./Button";

type Props = Solucion & { onSaberMas: () => void };

/**
 * Card de una categoría de Soluciones. La descripción se ve siempre; el hover
 * (sólo con mouse) suma la elevación, la sombra, el zoom de la foto y la
 * flecha del botón. El botón queda abajo aunque los textos tengan largos
 * distintos (h-full + mt-auto).
 */
export default function SolucionCard({
  titulo,
  descripcion,
  imagen,
  onSaberMas,
}: Props) {
  return (
    <div className="group h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition duration-300 can-hover:motion-safe:hover:-translate-y-1.5 can-hover:hover:shadow-xl">
      <div className="relative w-full h-52 md:h-56 overflow-hidden">
        <Image
          src={imagen}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover transition duration-500 can-hover:motion-safe:group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow px-5 pt-5 pb-6 text-center">
        <p className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-[#99042F]">
          Soluciones para
        </p>
        <h3 className="mt-1 font-poppins font-bold text-gray-900 text-lg leading-snug">
          {titulo}
        </h3>
        <p className="pt-3 text-sm font-roboto text-gray-700 leading-relaxed">
          {descripcion}
        </p>
        <div className="mt-auto pt-5 flex justify-center">
          <Button onClick={onSaberMas} aria-label={`Saber más sobre ${titulo}`}>
            Saber más
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 can-hover:motion-safe:group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
