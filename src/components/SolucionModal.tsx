"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Solucion } from "@/data/soluciones";
import SolucionForm from "./SolucionForm";

type Props = {
  solucion: Solucion;
  onClose: () => void;
};

export default function SolucionModal({ solucion, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#99042F] text-white hover:bg-[#7a0326] transition-colors"
        >
          ✕
        </button>

        <div className="relative w-full h-56 md:h-72">
          <Image
            src={solucion.imagen}
            alt={solucion.modalTitulo}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 p-6 md:p-8">
          <div>
            <h2 className="text-[#99042F] font-poppins font-bold text-2xl md:text-3xl uppercase mb-4">
              {solucion.modalTitulo}
            </h2>
            <p className="text-gray-700 font-roboto mb-6 leading-relaxed">
              {solucion.intro}
            </p>

            {solucion.secciones.map((sec) => (
              <div key={sec.subtitulo} className="mb-5">
                <h3 className="text-[#99042F] font-poppins font-bold text-base mb-2">
                  {sec.subtitulo}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm font-roboto">
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <SolucionForm
              key={solucion.slug}
              defaultSolucion={solucion.titulo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
