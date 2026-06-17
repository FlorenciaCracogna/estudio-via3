"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Acerca de Vía3", href: "#acerca" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Clientes", href: "#clientes" },
  { label: "Novedades", href: "#novedades" },
  { label: "Contacto", href: "#contacto" },
];

const sedes = [
  {
    nombre: "Sede Buenos Aires",
    telefono: "+5411 51806029",
    telefonoHref: "https://wa.me/541151806029",
    mail: "julio.capra@estudiovia3.com.ar",
    direccion: "Avda. Del Libertador 5582 – 14 D - CABA",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7111432390343!2d-58.446970524946025!3d-34.56086835523525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c9608fdfa7%3A0xf9a8644fb79679d8!2sAv.%20del%20Libertador%205582%2C%20C1426%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1781016814668!5m2!1ses!2sar",
    mapTitle: "Ubicación Sede Buenos Aires",
  },
  {
    nombre: "Sede NEA",
    telefono: "+54362 4388507",
    telefonoHref: "https://wa.me/543624388507",
    mail: "antonella.cracogna@estudiovia3.com.ar",
    direccion: "Santiago del Estero 636 – Resistencia, Chaco",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.804769298111!2d-58.99637730380771!3d-27.449372720192862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450d76712d733f%3A0x231520d84f9cb6c7!2sLic.%20en%20Psicolog%C3%ADa%20Antonella%20Cracogna!5e0!3m2!1ses!2sar!4v1781707500043!5m2!1ses!2sar",
    mapTitle: "Ubicación Sede NEA",
  },
];

export default function Footer() {
  const [sedeActiva, setSedeActiva] = useState(0);

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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Nuestras direcciones (carrusel) */}
          <div className="bg-[#1a1a1a] rounded-xl p-6 flex flex-col gap-4 lg:flex-1">
            <p className="font-semibold text-lg">Nuestras direcciones</p>

            {/* Nombre de la sede */}
            <p className="font-semibold text-base text-[#99042f]">
              {sede.nombre}
            </p>

            {/* Contacto */}
            <div className="flex flex-col gap-3">
              <a
                href={sede.telefonoHref}
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

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
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
