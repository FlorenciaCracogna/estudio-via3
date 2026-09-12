"use client";

import { useState } from "react";
import Image from "next/image";
import { soluciones, type Solucion } from "@/data/soluciones";
import SolucionCard from "./SolucionCard";
import SolucionModal from "./SolucionModal";

export default function Soluciones() {
  const [activa, setActiva] = useState<Solucion | null>(null);

  return (
    <section
      id="soluciones"
      className="relative bg-[#7A0326] py-16 md:py-20 overflow-hidden"
    >
      <Image
        src="/arrows-dots/flecha-blanca.png"
        alt=""
        width={70}
        height={70}
        className="absolute top-6 right-4 md:right-50 opacity-90"
      />
      <Image
        src="/arrows-dots/flecha-blanca.png"
        alt=""
        width={70}
        height={70}
        className="absolute bottom-6 left-4 md:left-50 rotate-180 opacity-90"
      />

      <div className="max-w-5xl mx-auto px-4 relative">
        <h2 className="text-center text-white font-poppins font-bold text-3xl md:text-4xl uppercase tracking-wide">
          Soluciones
        </h2>
        <p className="text-center text-white/90 font-roboto mt-3 max-w-2xl mx-auto">
          Las soluciones son estrategias, dispositivos y actividades que se
          orientan a ampliar los saberes organizacionales.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {soluciones.map((s) => (
            <SolucionCard key={s.slug} {...s} onSaberMas={() => setActiva(s)} />
          ))}
        </div>
      </div>

      {activa && (
        <SolucionModal solucion={activa} onClose={() => setActiva(null)} />
      )}
    </section>
  );
}
