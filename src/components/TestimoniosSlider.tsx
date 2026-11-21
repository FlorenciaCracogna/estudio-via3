"use client";

import { useRef, useState } from "react";
import { testimonios } from "@/data/testimonios";
import TestimonioCard from "./TestimonioCard";

const UMBRAL_SWIPE = 50; // px horizontales para cambiar de testimonio

/**
 * Home → Experiencia: un testimonio por vez, con flechas, puntitos, teclado
 * (← →) y swipe. Sin avance automático.
 *
 * Sin saltos donde se está mirando: los controles van arriba y la card queda
 * anclada arriba, así que al cambiar no se mueven ni las flechas ni el
 * principio del texto. La card se ajusta a su texto; lo que cambia es dónde
 * termina, y lo que está debajo del slider se corre. (Reservar el alto del
 * más largo dejaba hasta ~900px en blanco en mobile con el más corto.)
 * El testimonio activo ocupa lugar; los demás quedan superpuestos (absolute)
 * para el fade.
 */
export default function TestimoniosSlider() {
  const [actual, setActual] = useState(0);
  const total = testimonios.length;
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const swipeReciente = useRef(false);

  const ir = (i: number) => setActual(((i % total) + total) % total);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const s = swipe.current;
    swipe.current = null;
    if (!s) return;
    const dx = e.clientX - s.x;
    // Sólo gestos horizontales: el scroll vertical de la página no cambia nada
    if (Math.abs(dx) < UMBRAL_SWIPE || Math.abs(dx) < Math.abs(e.clientY - s.y)) return;
    ir(actual + (dx < 0 ? 1 : -1));
    // Que el final del swipe no abra el LinkedIn si el dedo terminó sobre el ícono
    swipeReciente.current = true;
    setTimeout(() => (swipeReciente.current = false), 50);
  };

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Testimonios de clientes"
      className="mx-auto w-full max-w-3xl"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") ir(actual - 1);
        else if (e.key === "ArrowRight") ir(actual + 1);
        else return;
        e.preventDefault();
      }}
    >
      {/* Anuncio para lectores de pantalla al cambiar de testimonio */}
      <p className="sr-only" aria-live="polite">
        {`Testimonio ${actual + 1} de ${total}: ${testimonios[actual].nombre}`}
      </p>

      {/* Controles arriba de la card: no se mueven al cambiar de testimonio */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => ir(actual - 1)}
          aria-label="Testimonio anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#99042F] text-[#99042F] transition-colors hover:bg-[#99042F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <Flecha className="rotate-180" />
        </button>

        <div className="flex items-center">
          {testimonios.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Testimonio ${i + 1}: ${t.nombre}`}
              aria-current={i === actual || undefined}
              // Área de toque de 32px con un punto chico adentro
              className="group flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#99042F]"
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  i === actual
                    ? "w-6 bg-[#99042F]"
                    : "w-2.5 bg-gray-300 group-hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => ir(actual + 1)}
          aria-label="Testimonio siguiente"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#99042F] text-[#99042F] transition-colors hover:bg-[#99042F] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <Flecha />
        </button>
      </div>

      <div
        className="relative touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipe.current = null)}
        onClickCapture={(e) => {
          if (swipeReciente.current) e.preventDefault();
        }}
      >
        {testimonios.map((t, i) => {
          const activo = i === actual;
          return (
            <div
              key={t.id}
              role="group"
              aria-roledescription="testimonio"
              aria-label={`${i + 1} de ${total}: ${t.nombre}`}
              aria-hidden={!activo}
              inert={!activo}
              className={`transition-[opacity,visibility] duration-500 ease-out motion-reduce:transition-none ${
                activo
                  ? "relative visible opacity-100"
                  : "absolute inset-x-0 top-0 invisible opacity-0"
              }`}
            >
              <TestimonioCard testimonio={t} />
            </div>
          );
        })}
      </div>

    </div>
  );
}

function Flecha({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
    </svg>
  );
}
