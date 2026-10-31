"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { sedePorId, whatsappHref } from "@/data/sedes";
import WhatsAppIcon from "./WhatsAppIcon";

// Orden en el panel: NEA primero, como lo pidió el cliente
const opciones = [sedePorId("nea"), sedePorId("buenos-aires")];

/**
 * Botón flotante de WhatsApp (abajo a la derecha, en todo el sitio salvo
 * /studio). Al tocarlo abre un panel para elegir la sede.
 * - Se cierra con Esc (el foco vuelve al botón), con click afuera, al volver
 *   a tocar el botón o al elegir una sede.
 * - Se oculta por CSS mientras están abiertos el menú mobile o el modal de
 *   Soluciones (marcan <body> con data-menu-abierto / data-modal-abierto).
 */
export default function WhatsAppFlotante() {
  const [abierto, setAbierto] = useState(false);
  const contenedorRef = useRef<HTMLDivElement>(null);
  const botonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!abierto) return;
    // El foco entra al panel (primera sede)
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setAbierto(false);
      botonRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!contenedorRef.current?.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [abierto]);

  if (pathname.startsWith("/studio")) return null;

  return (
    <div
      ref={contenedorRef}
      className="whatsapp-flotante fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 font-poppins"
    >
      {abierto && (
        <div
          ref={panelRef}
          id="panel-whatsapp"
          role="dialog"
          aria-labelledby="panel-whatsapp-titulo"
          className="whatsapp-panel absolute bottom-full right-0 mb-3 w-64 rounded-xl bg-white p-4 shadow-xl ring-1 ring-black/5"
        >
          <p
            id="panel-whatsapp-titulo"
            className="mb-3 text-sm font-semibold text-gray-900"
          >
            ¿Con qué sede querés hablar?
          </p>
          <ul className="flex flex-col gap-2">
            {opciones.map((sede) => (
              <li key={sede.id}>
                <a
                  href={whatsappHref(sede)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setAbierto(false)}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-800 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
                >
                  <span className="text-[#128C7E]">
                    <WhatsAppIcon size={18} />
                  </span>
                  {sede.nombre}
                  <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        ref={botonRef}
        type="button"
        onClick={() => setAbierto((prev) => !prev)}
        aria-expanded={abierto}
        aria-controls={abierto ? "panel-whatsapp" : undefined}
        aria-label={abierto ? "Cerrar opciones de WhatsApp" : "Escribinos por WhatsApp"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 motion-safe:hover:scale-105 hover:bg-[#1ebe5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#128C7E]"
      >
        <WhatsAppIcon size={30} />
      </button>
    </div>
  );
}
