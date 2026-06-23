"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Partner, partners } from "@/data/partners";

// Duplicamos la lista para el efecto infinito
const tickerItems = [...partners, ...partners];

function PartnerCard({ partner }: { partner: Partner }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen / logo */}
      <div
        className={`w-full h-full transition-all duration-300 ${
          partner.tipo === "empresa" ? "bg-white" : ""
        }`}
      >
        <Image
          src={partner.imagen}
          alt={partner.nombre}
          fill
          className={`object-${partner.tipo === "empresa" ? "contain" : "cover"} p-${partner.tipo === "empresa" ? "4" : "0"} transition-opacity duration-300 ${hovered ? "opacity-40" : "opacity-100"}`}
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
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const speed = 0.4; // px por frame — ajustá acá si querés más rápido/lento

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // la mitad porque duplicamos la lista

    const animate = () => {
      if (!pausedRef.current) {
        positionRef.current += speed;
        if (positionRef.current >= totalWidth) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section
      id="partnerships"
      className="bg-[#DBCAB9] py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="titulo-seccion text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            Partnerships
          </h2>
          <p className="text-gray-800 text-sm md:text-base w-full max-w-2xl font-roboto leading-relaxed px-2">
            Empresas, Fundaciones y Colegas que, en alianzas estratégicas,
            aportan valor a la red a partir de sus saberes y experiencias
            específicos.
          </p>
        </div>
      </div>

      {/* Ticker carrusel */}
      <div className="relative w-full">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#DBCAB9] to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#DBCAB9] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div
          className="flex items-center gap-8 md:gap-10 will-change-transform py-4"
          ref={trackRef}
          style={{ width: "max-content" }}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          {tickerItems.map((partner, i) => (
            <PartnerCard key={`${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
