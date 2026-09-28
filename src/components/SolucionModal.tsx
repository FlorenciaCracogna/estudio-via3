"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Solucion } from "@/data/soluciones";
import SolucionForm from "./SolucionForm";

type Props = {
  solucion: Solucion;
  onClose: () => void;
};

// Duración de la animación de salida (coincide con .modal-* en globals.css)
const DURACION_SALIDA = 200;

const FOCUSABLES =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function SolucionModal({ solucion, onClose }: Props) {
  const [cerrando, setCerrando] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const cerrar = useCallback(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      onCloseRef.current();
      return;
    }
    setCerrando(true);
    setTimeout(() => onCloseRef.current(), DURACION_SALIDA);
  }, []);

  // Foco: entra al modal al abrir y vuelve al botón que lo abrió al cerrar
  useEffect(() => {
    const previo = document.activeElement as HTMLElement | null;
    panelRef.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previo?.focus({ preventScroll: true });
    };
  }, []);

  // Esc para cerrar y Tab atrapado dentro del modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cerrar();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLES),
      );
      if (focusables.length === 0) return;
      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];
      const activo = document.activeElement;

      if (e.shiftKey && (activo === primero || activo === panelRef.current)) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && activo === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [cerrar]);

  const tituloId = `modal-titulo-${solucion.slug}`;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
      data-cerrando={cerrando || undefined}
      onClick={cerrar}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        tabIndex={-1}
        className="modal-panel relative bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto focus:outline-none"
        data-cerrando={cerrando || undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={cerrar}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#99042F] text-white hover:bg-[#7a0326] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#99042F]"
        >
          <X size={18} aria-hidden="true" />
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
            <h2
              id={tituloId}
              className="text-[#99042F] font-poppins font-bold text-2xl md:text-3xl uppercase mb-4"
            >
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
