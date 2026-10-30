"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Solucion } from "@/data/soluciones";
import SolucionForm from "./SolucionForm";
import AcordeonSubsoluciones from "./AcordeonSubsoluciones";

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
  const [formVisible, setFormVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
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
      ).filter((el) => el.getClientRects().length > 0 && !el.closest("[inert]"));
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

  // Mobile: el botón "Consultar" se oculta cuando el formulario ya está en pantalla
  useEffect(() => {
    const form = formRef.current;
    const panel = panelRef.current;
    if (!form || !panel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { root: panel, threshold: 0.15 },
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  const irAlFormulario = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    formRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    formRef.current
      ?.querySelector<HTMLElement>("input, select, textarea")
      ?.focus({ preventScroll: true });
  };

  const tituloId = `modal-titulo-${solucion.slug}`;
  const etiquetaId = `modal-etiqueta-${solucion.slug}`;

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
        aria-labelledby={`${etiquetaId} ${tituloId}`}
        tabIndex={-1}
        className="modal-panel relative bg-white rounded-xl border-t-[5px] border-[#99042F] w-full max-w-5xl max-h-[calc(100svh-4rem)] overflow-y-auto focus:outline-none"
        data-cerrando={cerrando || undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Contenedor sticky de alto 0: la X queda siempre visible al scrollear el panel */}
        <div className="sticky top-0 z-20 h-0">
          <button
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 ring-1 ring-gray-200 shadow-md hover:bg-gray-100 hover:text-[#99042F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99042F]"
          >
            <X size={20} strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 px-6 pt-14 pb-6 md:px-8 md:pt-14 md:pb-8">
          <div>
            <p
              id={etiquetaId}
              className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-[#99042F]"
            >
              Soluciones para
            </p>
            <h2
              id={tituloId}
              className="mt-1 text-[#99042F] font-poppins font-bold text-2xl md:text-3xl uppercase mb-4"
            >
              {solucion.titulo}
            </h2>
            <p className="text-gray-700 font-roboto mb-6 leading-relaxed">
              {solucion.descripcion}
            </p>

            <AcordeonSubsoluciones subsoluciones={solucion.subsoluciones} />
          </div>

          {/* Desktop: sticky dentro del panel (que es el que scrollea), siempre visible */}
          <div
            ref={formRef}
            className="scroll-mt-4 md:sticky md:top-14 md:self-start"
          >
            <SolucionForm
              key={solucion.slug}
              defaultSolucion={solucion.titulo}
              compacto
            />
          </div>
        </div>

        {/* Mobile: botón fijo abajo que lleva al formulario */}
        <div
          className={`md:hidden sticky bottom-0 px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white/90 to-transparent ${formVisible ? "hidden" : ""}`}
        >
          <button
            type="button"
            onClick={irAlFormulario}
            className="w-full rounded-md bg-[#99042F] px-5 py-3.5 font-poppins text-sm font-semibold tracking-wide text-white shadow-lg hover:bg-[#7a0326] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
          >
            Consultar por esta solución
          </button>
        </div>
      </div>
    </div>
  );
}
