"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { equipo, Integrante } from "@/data/equipo";

// Icono LinkedIn SVG inline
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function PerfilCard({
  persona,
  destacado,
}: {
  persona: Integrante;
  destacado: boolean;
}) {
  return (
    <div
      id={persona.id}
      className={`w-full rounded-2xl p-6 md:p-10 transition-all duration-500 ${
        destacado
          ? "bg-white shadow-2xl ring-2 ring-[#99042F]"
          : "bg-gray-50 shadow-md"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Columna izquierda: foto + nombre + linkedin */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-56 shrink-0">
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-[#99042F]/20">
            <Image
              src={persona.foto}
              alt={persona.nombre}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 144px, 192px"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 font-poppins leading-tight">
              {persona.nombre}
            </h2>
            <a
              href={persona.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-[#99042F] hover:text-[#7a0326] transition-colors text-sm font-roboto"
            >
              <LinkedInIcon />
              Ver perfil
            </a>
          </div>
        </div>

        {/* Divisor vertical (solo desktop) */}
        <div className="hidden md:block w-px bg-[#99042F]/20 self-stretch" />

        {/* Columna derecha: bullets */}
        <div className="flex-1">
          <ul className="space-y-3">
            {persona.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#99042F] shrink-0" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-roboto">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function NosotrosContent() {
  const searchParams = useSearchParams();
  const miembroParam = searchParams.get("miembro");

  // Si hay query param, mostramos solo ese integrante; si no, todos
  const lista = miembroParam
    ? equipo.filter((p) => p.id === miembroParam)
    : equipo;

  const sinResultados = miembroParam && lista.length === 0;

  return (
    <main className="min-h-screen bg-white">
      {/* Header de la página */}
      <div className="w-full bg-[#99042F] py-16 md:py-24 relative overflow-hidden">
        {/* Dots decorativos */}
        <div className="absolute top-6 right-6 opacity-30">
          <Image
            src="/arrows-dots/puntitos-blanco.png"
            alt=""
            width={80}
            height={80}
            aria-hidden="true"
          />
        </div>
        <div className="absolute bottom-6 left-6 opacity-30">
          <Image
            src="/arrows-dots/puntitos-blanco.png"
            alt=""
            width={60}
            height={60}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wide font-poppins">
            Nuestro Equipo
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl font-roboto">
            Somos un equipo comprometido con la excelencia, guiado por la
            integridad, impulsado por el dinamismo, y sostenido por la
            profesionalidad y el entusiasmo en cada proyecto
          </p>

          {/* Volver a todos si estamos filtrando */}
          {miembroParam && (
            <Link
              href="/nosotros"
              className="mt-4 inline-flex items-center gap-2 text-white/90 hover:text-white text-sm font-roboto underline underline-offset-4 transition-colors"
            >
              ← Ver todos los integrantes
            </Link>
          )}
        </div>
      </div>

      {/* Contenido: perfiles */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-10">
        {sinResultados ? (
          <div className="text-center py-20">
            <p className="text-gray-500 font-roboto text-lg">
              No encontramos ese integrante.{" "}
              <Link href="/nosotros" className="text-[#99042F] hover:underline">
                Ver todos
              </Link>
            </p>
          </div>
        ) : (
          lista.map((persona) => (
            <PerfilCard
              key={persona.id}
              persona={persona}
              destacado={!!miembroParam}
            />
          ))
        )}
      </div>

      {/* Footer de la página: volver a home */}
      <div className="border-t border-gray-100 py-10 flex justify-center">
        <Link
          href="/#nosotros"
          className="inline-flex items-center gap-3 text-[#99042F] hover:text-[#7a0326] font-roboto font-medium transition-colors"
        >
          <Image
            src="/arrows-dots/flecha-bordo.png"
            alt=""
            width={32}
            height={24}
            className="rotate-180"
            aria-hidden="true"
          />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

export default function NosotrosPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-400 font-roboto">
          Cargando...
        </div>
      }
    >
      <NosotrosContent />
    </Suspense>
  );
}
