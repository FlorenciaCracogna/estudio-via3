"use client";

import Image from "next/image";
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
        {/* Contenedor sticky de alto 0: la X queda siempre visible al scrollear el panel */}
        <div className="sticky top-0 z-20 h-0">
          <button
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-[#99042F] text-white shadow-md hover:bg-[#7a0326] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#99042F]"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="relative w-full h-36 md:h-[180px]">
          <Image
            src={solucion.imagen}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover rounded-t-xl"
            style={{ objectPosition: solucion.focoModal ?? "center" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 p-6 md:p-8">
          <div>
            <h2
              id={tituloId}
              className="text-[#99042F] font-poppins font-bold text-2xl md:text-3xl uppercase mb-4"
            >
              {solucion.nombreCompleto}
            </h2>
            <p className="text-gray-700 font-roboto mb-6 leading-relaxed">
              {solucion.descripcion}
            </p>

            <AcordeonSubsoluciones subsoluciones={solucion.subsoluciones} />
          </div>

          {/* Desktop: sticky dentro del panel (que es el que scrollea), siempre visible */}
          <div
            ref={formRef}
            className="scroll-mt-4 md:sticky md:top-6 md:self-start"
          >
            <SolucionForm
              key={solucion.slug}
              defaultSolucion={solucion.titulo}
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
