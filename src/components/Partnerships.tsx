"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Partner, partners } from "@/data/partners";

// Duplicamos la lista para el efecto infinito
const tickerItems = [...partners, ...partners];

const VELOCIDAD = 50; // px por segundo (por tiempo, no por frame: igual a 60 y 120 Hz)
const PAUSA_MANUAL = 4000; // ms sin auto-scroll después de usar flechas o swipe
const DURACION_PASO = 450; // ms de la animación de cada flecha
const UMBRAL_ARRASTRE = 6; // px para distinguir swipe de tap

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function PartnerCard({
  partner,
  duplicado,
}: {
  partner: Partner;
  duplicado: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      // La segunda copia es sólo visual: fuera del árbol de accesibilidad y del tab
      aria-hidden={duplicado || undefined}
      tabIndex={duplicado ? -1 : undefined}
      draggable={false}
      className="relative flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen / logo */}
      <div
        className={`relative w-full h-full transition-all duration-300 ${
          partner.tipo === "empresa" ? "bg-white" : ""
        }`}
      >
        <Image
          src={partner.imagen}
          alt={partner.nombre}
          fill
          draggable={false}
          className={`${partner.tipo === "empresa" ? "object-contain p-4" : "object-cover p-0"} transition-opacity duration-300 ${hovered ? "opacity-40" : "opacity-100"}`}
          sizes="144px"
        />
      </div>

      {/* Overlay oscuro + nombre en blanco */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-2 bg-black/50 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-center text-xs font-semibold text-white leading-tight font-roboto">
          {partner.nombre}
        </span>
      </div>
    </a>
  );
}

export default function Partnerships() {
  const seccionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Estado del carrusel en refs: se lee/escribe en cada frame sin re-renderizar
  const pos = useRef(0);
  const enHover = useRef(false);
  const pausaHasta = useRef(0);
  const paso = useRef<{ desde: number; hasta: number; inicio: number; dur: number } | null>(null);
  const arrastre = useRef<{ x0: number; pos0: number; movido: boolean } | null>(null);
  const reduceMotion = useRef(false);
  const swipeReciente = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const seccion = seccionRef.current;
    if (!track || !seccion) return;

    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Ancho de una vuelta: desde el primer item hasta su copia
    const periodo = () => {
      const items = track.children as HTMLCollectionOf<HTMLElement>;
      return items[partners.length].offsetLeft - items[0].offsetLeft;
    };

    let frame = 0;
    let ultimo = 0;
    const tick = (ahora: number) => {
      const dt = Math.min(ahora - ultimo, 100) / 1000; // tope por si la pestaña estuvo en segundo plano
      ultimo = ahora;

      if (paso.current) {
        const { desde, hasta, inicio, dur } = paso.current;
        const t = dur > 0 ? Math.min((ahora - inicio) / dur, 1) : 1;
        pos.current = desde + (hasta - desde) * easeOutCubic(t);
        if (t === 1) paso.current = null;
      } else if (
        !arrastre.current &&
        !enHover.current &&
        !reduceMotion.current &&
        ahora >= pausaHasta.current
      ) {
        pos.current += VELOCIDAD * dt;
      }

      const p = periodo();
      if (!paso.current && !arrastre.current) pos.current = ((pos.current % p) + p) % p;
      const visible = ((pos.current % p) + p) % p;
      track.style.transform = `translate3d(${-visible}px, 0, 0)`;

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

  const mover = (direccion: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children as HTMLCollectionOf<HTMLElement>;
    const ancho = items[1].offsetLeft - items[0].offsetLeft; // card + gap
    const ahora = performance.now();
    // Clicks seguidos se acumulan: se parte del destino del paso en curso
    const base = paso.current?.hasta ?? pos.current;
    paso.current = {
      desde: pos.current,
      hasta: base + direccion * ancho,
      inicio: ahora,
      dur: reduceMotion.current ? 0 : DURACION_PASO,
    };
    pausaHasta.current = ahora + PAUSA_MANUAL;
  };

  // Swipe (touch/lápiz). Con mouse se usan las flechas.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    paso.current = null;
    arrastre.current = { x0: e.clientX, pos0: pos.current, movido: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const a = arrastre.current;
    if (!a) return;
    const dx = e.clientX - a.x0;
    if (!a.movido && Math.abs(dx) > UMBRAL_ARRASTRE) {
      a.movido = true;
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    }
    if (a.movido) pos.current = a.pos0 - dx;
  };
  const onPointerUp = () => {
    if (!arrastre.current) return;
    pausaHasta.current = performance.now() + PAUSA_MANUAL;
    // Se deja el flag un instante para que el click del final del swipe no abra el link
    const a = arrastre.current;
    arrastre.current = null;
    if (a.movido) {
      swipeReciente.current = true;
      setTimeout(() => (swipeReciente.current = false), 50);
    }
  };

  return (
    <section
      ref={seccionRef}
      id="red-de-especialistas"
      className="bg-[#DBCAB9] py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-4" data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            Red de especialistas
          </h2>
          <p className="text-gray-900 font-poppins font-medium text-base md:text-lg w-full max-w-2xl leading-snug px-2">
            Contamos con una red de especialistas y organizaciones aliadas que
            amplía nuestras capacidades de diseño e intervención.
          </p>
          <p className="text-gray-800 text-sm md:text-base w-full max-w-2xl font-roboto leading-relaxed px-2">
            Este modelo colaborativo nos permite conformar equipos a medida
            para responder a desafíos organizacionales diversos, manteniendo
            cercanía, flexibilidad y profundidad técnica.
          </p>
        </div>
      </div>

      {/* Ticker carrusel */}
      <div
        className="relative w-full"
        data-reveal
        role="region"
        aria-roledescription="carrusel"
        aria-label="Red de especialistas"
      >
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#DBCAB9] to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#DBCAB9] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          id="carrusel-especialistas"
          className="flex items-center gap-8 md:gap-10 will-change-transform py-4 touch-pan-y select-none"
          ref={trackRef}
          style={{ width: "max-content" }}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") enHover.current = true;
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") enHover.current = false;
          }}
          onFocus={() => (enHover.current = true)}
          onBlur={() => (enHover.current = false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={(e) => {
            if (swipeReciente.current) e.preventDefault();
          }}
        >
          {tickerItems.map((partner, i) => (
            <PartnerCard
              key={`${partner.id}-${i}`}
              partner={partner}
              duplicado={i >= partners.length}
            />
          ))}
        </div>
      </div>

      {/* Flechas */}
      <div className="flex justify-center gap-4 mt-8" data-reveal>
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label="Especialista anterior"
          aria-controls="carrusel-especialistas"
          className="w-11 h-11 rounded-full border-2 border-[#99042F] text-[#99042F] flex items-center justify-center hover:bg-[#99042F] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <FlechaIcon className="rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label="Especialista siguiente"
          aria-controls="carrusel-especialistas"
          className="w-11 h-11 rounded-full border-2 border-[#99042F] text-[#99042F] flex items-center justify-center hover:bg-[#99042F] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#99042F]"
        >
          <FlechaIcon />
        </button>
      </div>
    </section>
  );
}

function FlechaIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 18l6-6-6-6"
      />
    </svg>
  );
}
