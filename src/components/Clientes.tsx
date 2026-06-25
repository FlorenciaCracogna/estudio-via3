"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { featuredClients } from "@/data/clients";

const tickerItems = [...featuredClients, ...featuredClients];

export default function Clientes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const speed = 0.4;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

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
      id="clientes"
      className="bg-white py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="titulo-seccion text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            Clientes
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl font-roboto leading-relaxed">
            Organizaciones y personas en confianza mutua.
          </p>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative w-full">
        {/* Fade izquierda */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Fade derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 will-change-transform py-4"
          style={{ width: "max-content" }}
        >
          {tickerItems.map((client, i) => (
            <div
              key={`${client.slug}-${i}`}
              className="flex-shrink-0 flex items-center justify-center w-44 h-28 md:w-56 md:h-32 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-shadow duration-200"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={70}
                className="object-contain max-h-24 w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón Ver más */}
      <div className="flex justify-center mt-12">
        <Link
          href="/clientes"
          className="px-8 py-2.5 bg-[#99042F] hover:bg-[#7a0326] text-white font-medium tracking-widest rounded-md transition-colors duration-200 font-roboto text-sm"
        >
          Ver más
        </Link>
      </div>
    </section>
  );
}
