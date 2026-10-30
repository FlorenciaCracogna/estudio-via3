"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { LOGO_PENDIENTE, type Cliente, type Sector } from "@/data/experiencia";

/**
 * Sectores de /experiencia en acordeón: todos cerrados al entrar y se pueden
 * abrir varios. Despliegue con grid-template-rows 0fr → 1fr (instantáneo con
 * prefers-reduced-motion). Los paneles cerrados quedan inert.
 */
export default function AcordeonSectores({ sectores }: { sectores: Sector[] }) {
  const [abiertos, setAbiertos] = useState<Set<string>>(() => new Set());
  const baseId = useId();

  const alternar = (id: string) =>
    setAbiertos((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {sectores.map((sector) => {
        const abierto = abiertos.has(sector.id);
        const botonId = `${baseId}-${sector.id}-boton`;
        const panelId = `${baseId}-${sector.id}-panel`;
        return (
          <div key={sector.id}>
            <h2>
              <button
                id={botonId}
                type="button"
                aria-expanded={abierto}
                aria-controls={panelId}
                onClick={() => alternar(sector.id)}
                className="flex w-full items-center justify-between gap-4 py-5 md:py-6 text-left font-poppins text-base md:text-xl font-semibold text-gray-900 hover:text-[#99042F] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F] rounded-sm"
              >
                <span>
                  {sector.nombre}{" "}
                  <span className="font-normal text-gray-500">
                    ({sector.clientes.length})
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#99042F]/30 text-[#99042F] transition-transform duration-300 motion-reduce:transition-none ${abierto ? "rotate-180 bg-[#99042F] text-white" : ""}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={botonId}
              inert={!abierto}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${abierto ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 pb-6 md:pb-8">
                  {sector.clientes.map((cliente) => (
                    <li key={cliente.nombre}>
                      <LogoCliente cliente={cliente} />
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

/**
 * Tarjeta de logo de proporción fija. El logo (sin márgenes, ver e_trim) ocupa
 * una caja interior de 78% x 58%: los apaisados quedan limitados por el ancho
 * y los cuadrados por el alto, así ninguno queda gigante o diminuto al lado
 * de otro.
 * Sin logo (LOGO_PENDIENTE): el nombre en texto, con la misma tarjeta.
 */
function LogoCliente({ cliente }: { cliente: Cliente }) {
  const tarjeta =
    "flex aspect-[3/2] items-center justify-center rounded-lg border bg-white";

  if (cliente.logo === LOGO_PENDIENTE) {
    return (
      <div className={`${tarjeta} border-dashed border-gray-300 px-3`}>
        <span className="text-center font-poppins text-sm font-semibold leading-snug text-gray-600">
          {cliente.nombre}
        </span>
      </div>
    );
  }

  return (
    <div className={`${tarjeta} border-gray-200`}>
      <div className="relative h-[58%] w-[78%]">
        <Image
          // e_trim: Cloudinary recorta el margen blanco que traen muchos JPG,
          // para que el tamaño visible dependa del logo y no del archivo
          src={cliente.logo.replace("/upload/", "/upload/e_trim:10/")}
          alt={cliente.nombre}
          fill
          sizes="(min-width: 1280px) 150px, (min-width: 1024px) 160px, (min-width: 768px) 30vw, 45vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
