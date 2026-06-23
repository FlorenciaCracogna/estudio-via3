"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const slots = [
  {
    images: [
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808175/collage-1_dkxjx1.jpg",
        alt: "Vía3 actividad 1",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808183/collage-2_nbxwhh.jpg",
        alt: "Vía3 actividad 2",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808177/collage-3_ixtrri.jpg",
        alt: "Vía3 actividad 3",
      },
    ],
    interval: 3000,
  },
  {
    images: [
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808176/collage-4_pf5yaz.jpg",
        alt: "Vía3 actividad 4",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808179/collage-5_jje6jd.jpg",
        alt: "Vía3 actividad 5",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808181/collage-6_shg0ct.jpg",
        alt: "Vía3 actividad 6",
      },
    ],
    interval: 5000,
  },
  {
    images: [
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808182/collage-7_vj7iv2.jpg",
        alt: "Vía3 actividad 7",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808184/collage-8_mgzj2u.jpg",
        alt: "Vía3 actividad 8",
      },
      {
        src: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808187/collage-9_toxeot.jpg",
        alt: "Vía3 actividad 9",
      },
    ],
    interval: 7000,
  },
];

const DotsGrid = () => (
  <div className="grid grid-cols-3 gap-1.5">
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className="w-2 h-2 rounded-full bg-[#99042F]/50" />
    ))}
  </div>
);

const Arrows = () => (
  <span className="text-[#99042F] text-2xl font-bold tracking-tighter">
    &rsaquo;&rsaquo;&rsaquo;
  </span>
);

function CollageSlot({
  images,
  interval,
  className,
}: {
  images: { src: string; alt: string }[];
  interval: number;
  className?: string;
}) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, interval, images.length]);

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
        hovered ? "scale-120 brightness-110" : "brightness-90"
      } ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={images[current].src}
        alt={images[current].alt}
        fill
        className="object-cover transition-opacity duration-700"
        sizes="25vw"
      />
    </div>
  );
}

function MobileCarousel({
  images,
  interval,
}: {
  images: { src: string; alt: string }[];
  interval: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
      <Image
        src={images[current].src}
        alt={images[current].alt}
        fill
        className="object-cover transition-all duration-500"
        sizes="100vw"
      />
      {/* Dots indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ElEstudio() {
  const allImages = slots.flatMap((s) => s.images);

  return (
    <section id="el-estudio" className="bg-white overflow-x-hidden w-full">
      {/* ── PARTE 1: Título + texto + foto que sobresale ── */}
      <div className="relative py-16 md:py-24 overflow-hidden w-full max-w-full">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="md:max-w-[50%]">
            <h2 className="titulo-seccion text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center md:text-left mb-6 font-poppins">
              El Estudio
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-loose font-roboto">
              Somos una red dinámica de contactos entre personas y
              organizaciones, profesionales, empresas y marcas que,
              complementándose, hacen sinergia junto a Vía3 para brindar la
              mejor solución de aprendizaje a cada desafío.
            </p>
          </div>
        </div>

        <div className="relative w-full h-64 mt-8 overflow-hidden md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[55%] md:h-full md:mt-0">
          <Image
            src="https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/estudio-principal_qp6yxt.jpg"
            alt="Equipo Estudio Vía3"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent md:hidden" />
        </div>
      </div>

      {/* ── PARTE 2: Collage + texto secundario ── */}
      <div className="relative py-12 md:py-20">
        {/* MOBILE: texto + carrusel simple */}
        <div className="md:hidden flex flex-col gap-6 px-6">
          <p className="text-gray-700 text-base leading-loose font-roboto">
            Estamos convencidos que cada organización requiere sus propias
            soluciones para optimizar los procesos, mejorar el desempeño de sus
            colaboradores e integrarlos a la rentabilidad del negocio.
          </p>
          <MobileCarousel images={allImages} interval={3000} />
        </div>

        {/* TABLET/DESKTOP: collage full-width izquierda + texto derecha */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr] items-center">
          {/* Columna izquierda — collage sin padding, llega al borde */}
          <div className="relative pl-12 h-[560px] lg:h-[620px] overflow-hidden">
            {/* Foto chica arriba izquierda */}
            <CollageSlot
              images={slots[0].images}
              interval={slots[0].interval}
              className="absolute left-0 top-0 w-[30%] h-[32%] z-20"
            />

            {/* Foto grande centro */}
            <CollageSlot
              images={slots[1].images}
              interval={slots[1].interval}
              className="absolute left-[20%] -top-5 w-[42%] h-[42%] z-30"
            />

            {/* Foto chica abajo derecha */}
            <CollageSlot
              images={slots[2].images}
              interval={slots[2].interval}
              className="absolute left-[50%] -top-10 w-[30%] h-[32%] z-20"
            />

            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <Arrows />
            </div>
          </div>

          {/* Columna derecha — texto con padding */}
          <div className="flex flex-col gap-6 text-left px-10">
            <p className="text-gray-700 text-base md:text-lg leading-loose font-roboto">
              Estamos convencidos que cada organización requiere sus propias
              soluciones para optimizar los procesos, mejorar el desempeño de
              sus colaboradores e integrarlos a la rentabilidad del negocio.
            </p>
            <div className="flex justify-end">
              <DotsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
