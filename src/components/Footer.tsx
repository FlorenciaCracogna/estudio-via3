"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { seccionesMenu } from "@/data/secciones";
import { sedes, whatsappHref } from "@/data/sedes";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const [sedeActiva, setSedeActiva] = useState(0);
  const pathname = usePathname();

  // Desde rutas internas los anchors tienen que volver al home
  const getHref = (hash: string) =>
    pathname === "/" ? `#${hash}` : `/#${hash}`;

  const prev = () =>
    setSedeActiva((i) => (i - 1 + sedes.length) % sedes.length);
  const next = () => setSedeActiva((i) => (i + 1) % sedes.length);

  const sede = sedes[sedeActiva];

  return (
    <footer className="bg-black text-white font-poppins">
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1.6fr] gap-8 lg:gap-0">
          {/* Columna 1: Logo + Redes sociales */}
          <div className="flex flex-col md:flex-row md:justify-around gap-6 lg:flex-col lg:w-64 shrink-0 items-center lg:items-center">
            <div className="flex flex-col items-center lg:items-center">
              <Image
                src="/simbolo-color.svg"
                alt="Vía3 símbolo"
                width={108}
                height={108}
                className="h-45 w-auto"
              />
              <Image
                src="/logotipo-blanco.svg"
                alt="Vía3"
                width={147}
                height={147}
                className="h-50 w-auto -mt-30"
              />
            </div>

            <div className="flex flex-col items-center lg:items-center -mt-15">
              <p className="font-semibold text-lg mb-4">Encontranos</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/company/estudio-via3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-gray-300 hover:text-white transition-colors"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/estudio.via3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-gray-300 hover:text-white transition-colors"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="flex flex-col items-center lg:items-center mt-6 lg:mt-20">
            <p className="font-semibold text-lg mb-4">Navegar</p>
            <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6 gap-3 items-center lg:items-center lg:flex-col">
              {seccionesMenu.map((link) => (
                <li key={link.id}>
                  <Link
                    href={getHref(link.id)}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Nuestras direcciones (carrusel) */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 flex flex-col gap-4 lg:flex-1">
            <p className="font-semibold text-lg">Nuestras direcciones</p>

            {/* Nombre de la sede */}
            <p className="font-semibold text-base text-[#DBCAB9]">
              {sede.nombre}
            </p>

            {/* Contacto */}
            <div className="flex flex-col gap-3">
              <a
                href={whatsappHref(sede)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base text-gray-300 hover:text-white transition-colors"
              >
                <WhatsAppIcon />
                {sede.telefono}
              </a>
              <a
                href={`mailto:${sede.mail}`}
                className="flex items-center gap-3 text-base text-gray-300 hover:text-white transition-colors min-w-0"
              >
                <span className="shrink-0">
                  <EmailIcon />
                </span>
                <span className="break-all">{sede.mail}</span>
              </a>
            </div>

            {/* Dirección */}
            <div>
              <p className="font-semibold text-base mb-1">
                Estudio Vía3 S. R. L.
              </p>
              <p className="text-base text-gray-300">{sede.direccion}</p>
            </div>

            {/* Mapa */}
            <div className="rounded-lg overflow-hidden h-36 md:h-48 w-full">
              <iframe
                key={sedeActiva}
                src={sede.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={sede.mapTitle}
              />
            </div>

            {/* Controles del carrusel */}
            <div className="flex items-center justify-center gap-4 mt-1">
              <button
                onClick={prev}
                aria-label="Sede anterior"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors"
              >
                <ArrowLeftIcon />
              </button>

              {/* Puntos indicadores */}
              <div className="flex gap-2">
                {sedes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSedeActiva(i)}
                    aria-label={`Ir a ${sedes[i].nombre}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === sedeActiva ? "bg-white" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Sede siguiente"
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <p className="text-center text-base text-gray-400">
            Copyright © 2026 Vía3
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
