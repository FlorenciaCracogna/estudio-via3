"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { clientesCarrusel } from "@/data/experiencia";
import { buttonClasses } from "./Button";
import PreguntaInicial from "./PreguntaInicial";
import { secciones } from "@/data/secciones";

// Duplicamos la lista para el efecto infinito
const tickerItems = [...clientesCarrusel, ...clientesCarrusel];

const VELOCIDAD = 40; // px por segundo (por tiempo, no por frame: igual a 60 y 120 Hz)

/** Home → Experiencia: carrusel de logos y acceso a la página por sector. */
export default function Clientes() {
  const seccionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const seccion = seccionRef.current;
    if (!track || !seccion) return;
    // Con reduced motion no hay auto-scroll: quedan los primeros logos y el botón
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Ancho de una vuelta: desde el primer logo hasta su copia
    const periodo = () => {
      const items = track.children as HTMLCollectionOf<HTMLElement>;
      return items[clientesCarrusel.length].offsetLeft - items[0].offsetLeft;
    };

    let pos = 0;
    let frame = 0;
    let ultimo = 0;
    const tick = (ahora: number) => {
      const dt = Math.min(ahora - ultimo, 100) / 1000; // tope si la pestaña estuvo en segundo plano
      ultimo = ahora;
      pos = (pos + VELOCIDAD * dt) % periodo();
      track.style.transform = `translate3d(${-pos}px, 0, 0)`;
      frame = requestAnimationFrame(tick);
    };

    // Sólo corre mientras la sección está en pantalla
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (entry.isIntersecting) {
        ultimo = performance.now();
        frame = requestAnimationFrame(tick);
      }
    });
    io.observe(seccion);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={seccionRef}
      id="experiencia"
      className="bg-white py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col items-center text-center gap-3" data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            {secciones.experiencia.label}
          </h2>
          <PreguntaInicial>{secciones.experiencia.pregunta}</PreguntaInicial>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="relative w-full"
        data-reveal
        role="region"
        aria-roledescription="carrusel"
        aria-label="Logos de clientes"
      >
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 will-change-transform py-4"
          style={{ width: "max-content" }}
        >
          {tickerItems.map((cliente, i) => (
            <div
              key={`${cliente.nombre}-${i}`}
              // La segunda copia es sólo visual
              aria-hidden={i >= clientesCarrusel.length || undefined}
              className="flex-shrink-0 flex items-center justify-center w-44 h-28 md:w-56 md:h-32 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-shadow duration-200"
            >
              <Image
                src={cliente.logo}
                alt={i >= clientesCarrusel.length ? "" : cliente.nombre}
                width={140}
                height={70}
                className="object-contain max-h-24 w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12" data-reveal>
        <Link href="/experiencia" className={buttonClasses()}>
          Ver por sector
        </Link>
      </div>
    </section>
  );
}
