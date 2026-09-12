import Image from "next/image";
import type { Solucion } from "@/data/soluciones";
import BoldText from "./BoldText";

type Props = Solucion & { onSaberMas: () => void };

export default function SolucionCard({
  titulo,
  descripcion,
  imagen,
  onSaberMas,
}: Props) {
  return (
    <div className="group h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
      <div className="order-1 relative w-full h-56 md:h-64 overflow-hidden">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover transition duration-300 can-hover:group-hover:brightness-[0.3]"
        />
        <div className="hidden can-hover:block absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="hidden can-hover:flex absolute inset-0 items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-center text-sm font-roboto leading-relaxed">
            <BoldText text={descripcion} />
          </p>
        </div>
      </div>

      <div className="order-2 flex flex-col flex-grow px-4 pt-4 md:pt-5 pb-5">
        <h3 className="text-center font-poppins font-bold text-gray-900 text-lg">
          {titulo}
        </h3>
        <p className="can-hover:hidden text-center text-sm font-roboto text-gray-700 pt-3 leading-relaxed">
          <BoldText text={descripcion} />
        </p>
        <div className="mt-auto pt-4 flex justify-center">
          <button
            onClick={onSaberMas}
            className="bg-[#99042F] text-white font-semibold px-6 py-2 rounded hover:bg-[#7a0326] transition-colors"
          >
            Saber más
          </button>
        </div>
      </div>
    </div>
  );
}
