"use client";

import { useId, useState } from "react";
import type { SeccionSolucion } from "@/data/soluciones";

/**
 * Subsoluciones del modal en acordeón: la primera abierta por defecto y se
 * pueden abrir varias a la vez. El despliegue anima grid-template-rows
 * 0fr → 1fr (sin alto fijo); con prefers-reduced-motion es instantáneo.
 * Los paneles cerrados quedan inert: fuera del tab y del lector de pantalla.
 */
export default function AcordeonSubsoluciones({
  secciones,
}: {
  secciones: SeccionSolucion[];
}) {
  const [abiertas, setAbiertas] = useState<Set<number>>(() => new Set([0]));
  const baseId = useId();

  const alternar = (i: number) =>
    setAbiertas((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {secciones.map((sec, i) => {
        const abierta = abiertas.has(i);
        const botonId = `${baseId}-boton-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={sec.subtitulo}>
            <h3>
              <button
                id={botonId}
                type="button"
                aria-expanded={abierta}
                aria-controls={panelId}
                onClick={() => alternar(i)}
                className="group flex w-full items-center justify-between gap-4 py-4 text-left font-poppins text-base font-semibold text-gray-900 hover:text-[#99042F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F] rounded-sm"
              >
                {sec.subtitulo}
                <svg
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-[#99042F] transition-transform duration-300 motion-reduce:transition-none ${abierta ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={botonId}
              inert={!abierta}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${abierta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <ul className="space-y-2 pb-5 pl-1 font-roboto text-sm md:text-[15px] leading-relaxed text-gray-700">
                  {sec.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#99042F]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
