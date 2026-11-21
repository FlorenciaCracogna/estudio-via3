"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { seccionesMenu } from "@/data/secciones";
import { sedes, whatsappHref, type Sede } from "@/data/sedes";
import WhatsAppIcon from "./WhatsAppIcon";

const RAZON_SOCIAL = "Estudio Vía3 S. R. L.";

const redes = [
  { nombre: "LinkedIn", href: "https://www.linkedin.com/company/estudio-via3", Icono: LinkedInIcon },
  { nombre: "Instagram", href: "https://www.instagram.com/estudio.via3", Icono: InstagramIcon },
];

export default function Footer() {
  const pathname = usePathname();

  // Desde rutas internas los anchors tienen que volver al home
  const getHref = (hash: string) =>
    pathname === "/" ? `#${hash}` : `/#${hash}`;

  return (
    <footer className="bg-black text-white font-poppins">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-12 pb-10">
        {/* Bloque superior centrado: logo (el SVG incluye la bajada) y redes */}
        <div className="flex flex-col items-center gap-5">
          <Link href="/" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <Image
              src="/logo-blanco-subtitulo.svg"
              alt="Vía3, soluciones de aprendizaje organizacional"
              width={600}
              height={160}
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          <ul className="flex items-center gap-3">
            {redes.map(({ nombre, href, Icono }) => (
              <li key={nombre}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icono />
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación en una línea */}
        <nav aria-label="Pie de página" className="mt-7 border-y border-white/10 py-4">
          <ul className="flex flex-wrap justify-center gap-x-1 gap-y-2 text-sm md:text-base">
            {seccionesMenu.map((link, i) => (
              <li key={link.id} className="flex items-center gap-1">
                {i > 0 && (
                  <span aria-hidden="true" className="px-1.5 text-gray-600">
                    ·
                  </span>
                )}
                <Link
                  href={getHref(link.id)}
                  className="rounded-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sedes lado a lado (Buenos Aires primero, orden de sedes.ts) */}
        {/* minmax(0,1fr): un mail largo no agranda la columna más allá de la pantalla */}
        <div className="mt-7 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[repeat(2,minmax(0,1fr))]">
          {sedes.map((sede) => (
            <TarjetaSede key={sede.id} sede={sede} />
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 py-5 text-center text-sm text-gray-400">
          Copyright © 2026 Vía3
        </p>
      </div>
    </footer>
  );
}

/** Datos de una sede. El mapa no se carga hasta que se pide con "Ver mapa". */
function TarjetaSede({ sede }: { sede: Sede }) {
  const [mapaAbierto, setMapaAbierto] = useState(false);
  const mapaId = `mapa-${sede.id}`;
  const fila =
    // max-w-full + min-w-0: un mail largo se corta dentro de la fila en vez de
    // ensancharla más allá de la pantalla (teléfonos de 360 px o menos)
    "inline-flex max-w-full items-start gap-3 text-sm md:text-base text-gray-300 text-left";

  return (
    <div className="flex min-w-0 flex-col items-center rounded-xl bg-[#1a1a1a] p-6 text-center md:items-start md:text-left">
      <h3 className="text-lg font-semibold text-[#DBCAB9]">{sede.nombre}</h3>
      <p className="mt-1 text-sm text-gray-400">{RAZON_SOCIAL}</p>

      <ul className="mt-4 flex w-fit max-w-full flex-col items-start gap-3">
        <li className={fila}>
          <span className="mt-0.5 shrink-0 text-gray-400">
            <MapPinIcon />
          </span>
          {sede.direccion}
        </li>
        <li className="max-w-full">
          <a
            href={whatsappHref(sede)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${fila} rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            <span className="mt-0.5 shrink-0 text-gray-400">
              <WhatsAppIcon size={20} />
            </span>
            {sede.telefono}
            <span className="sr-only"> (WhatsApp, abre en una pestaña nueva)</span>
          </a>
        </li>
        <li className="max-w-full">
          <a
            href={`mailto:${sede.mail}`}
            className={`${fila} min-w-0 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            <span className="mt-0.5 shrink-0 text-gray-400">
              <EmailIcon />
            </span>
            {/* Si no entra en una línea, corta después de la @ (nunca a mitad del dominio) */}
            <span className="min-w-0">
              {sede.mail.split("@")[0]}@<wbr />
              <span className="whitespace-nowrap">{sede.mail.split("@")[1]}</span>
            </span>
          </a>
        </li>
      </ul>

      <button
        type="button"
        onClick={() => setMapaAbierto((prev) => !prev)}
        aria-expanded={mapaAbierto}
        aria-controls={mapaId}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <MapPinIcon size={16} />
        {mapaAbierto ? "Ocultar mapa" : "Ver mapa"}
      </button>

      <div id={mapaId} className="w-full">
        {mapaAbierto && (
          <div className="mt-4 h-52 md:h-60 w-full overflow-hidden rounded-lg">
            <iframe
              src={sede.mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={sede.mapTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
