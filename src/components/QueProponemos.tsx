"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { secciones } from "@/data/secciones";
import PreguntaInicial from "./PreguntaInicial";

const CLOUDINARY = "https://res.cloudinary.com/dg8rew4w9/image/upload";

// Fotos del collage anterior, repartidas entre las 4 piezas del mosaico.
// Cada pieza rota sólo sus fotos, con su propio intervalo y un desfase
// inicial, para que nunca cambien todas juntas.
const piezas = [
  {
    fotos: ["v1781808175/collage-1_dkxjx1.jpg", "v1781808179/collage-5_jje6jd.jpg", "v1781808187/collage-9_toxeot.jpg"],
    intervalo: 6000,
    desfase: 0,
    className: "col-span-2",
    sizes: "(min-width: 1024px) 38vw, (min-width: 768px) 60vw, 100vw",
  },
  {
    fotos: ["v1781808183/collage-2_nbxwhh.jpg", "v1781808181/collage-6_shg0ct.jpg"],
    intervalo: 7500,
    desfase: 2500,
    className: "hidden md:block md:row-span-2",
    sizes: "(min-width: 1024px) 19vw, 30vw",
  },
  {
    fotos: ["v1781808177/collage-3_ixtrri.jpg", "v1781808182/collage-7_vj7iv2.jpg"],
    intervalo: 5000,
    desfase: 1200,
    className: "",
    sizes: "(min-width: 1024px) 19vw, (min-width: 768px) 30vw, 50vw",
  },
  {
    fotos: ["v1781808176/collage-4_pf5yaz.jpg", "v1781808184/collage-8_mgzj2u.jpg"],
    intervalo: 8500,
    desfase: 4000,
    className: "",
    sizes: "(min-width: 1024px) 19vw, (min-width: 768px) 30vw, 50vw",
  },
];

/** true mientras el elemento está (aunque sea en parte) en pantalla. */
function useEnPantalla<T extends Element>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, visible] as const;
}

function PiezaMosaico({
  fotos,
  intervalo,
  desfase,
  className,
  sizes,
  activo,
}: (typeof piezas)[number] & { activo: boolean }) {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    if (!activo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let intervaloId = 0;
    const inicio = window.setTimeout(() => {
      setActual((i) => (i + 1) % fotos.length);
      intervaloId = window.setInterval(
        () => setActual((i) => (i + 1) % fotos.length),
        intervalo,
      );
    }, intervalo + desfase);

    return () => {
      clearTimeout(inicio);
      clearInterval(intervaloId);
    };
  }, [activo, intervalo, desfase, fotos.length]);

  // Imágenes apiladas: el crossfade es sólo opacidad, nunca se cambia el src
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#DBCAB9]/40 shadow-md ${className}`}
    >
      {fotos.map((foto, i) => (
        <Image
          key={foto}
          src={`${CLOUDINARY}/${foto}`}
          alt=""
          fill
          sizes={sizes}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === actual ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function QueProponemos() {
  const [mosaicoRef, mosaicoVisible] = useEnPantalla<HTMLDivElement>();

  return (
    <section
      id="que-proponemos"
      className="bg-white py-16 md:py-24 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">
        {/* Texto */}
        <div data-reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center lg:text-left mb-3 font-poppins">
            {secciones.via3.label}
          </h2>
          <PreguntaInicial className="text-center lg:text-left mb-8">
            {secciones.via3.pregunta}
          </PreguntaInicial>

          <h3 className="flex items-center gap-3 font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-[#99042F] mb-4">
            <span aria-hidden="true" className="h-px w-8 bg-[#99042F]" />
            Qué proponemos
          </h3>
          <p className="font-poppins text-xl md:text-2xl font-semibold leading-snug text-gray-900">
            Ayudamos a las organizaciones a convertir el aprendizaje en
            resultados observables que impactan en el negocio.
          </p>
          <p className="mt-5 font-roboto text-base md:text-lg leading-relaxed text-gray-700">
            Diseñamos experiencias de aprendizaje y las condiciones necesarias
            para que las personas apliquen lo aprendido, compartan
            conocimientos y contribuyan al desarrollo de la organización.
          </p>
        </div>

        {/* Mosaico: 3 piezas en mobile, 4 desde tablet. Grilla sin huecos. */}
        <div className="relative" data-reveal>
          <Image
            src="/arrows-dots/puntitos-bordo.png"
            alt=""
            width={72}
            height={72}
            aria-hidden="true"
            className="absolute -top-6 -right-2 md:-right-6 w-12 md:w-16 h-auto opacity-80"
          />
          <div
            ref={mosaicoRef}
            className="relative grid grid-cols-2 md:grid-cols-3 grid-rows-[11rem_8.5rem] md:grid-rows-[15rem_12rem] gap-3 md:gap-4"
          >
            {piezas.map((pieza) => (
              <PiezaMosaico
                key={pieza.fotos[0]}
                {...pieza}
                activo={mosaicoVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
