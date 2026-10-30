"use client";

import { useEffect, useRef } from "react";
import { numerosHero } from "@/data/numeros";

const DURACION = 1500;
const PASO_CASCADA = 150;
const formato = new Intl.NumberFormat("es-AR");

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Banda de números entre el Hero y Vía3.
 * - Aparece con el sistema de reveal (data-reveal-stagger).
 * - El count-up arranca cuando la banda entra en pantalla: una sola vez, en
 *   cascada. Escribe el texto por DOM para no re-renderizar en cada frame.
 * - Con prefers-reduced-motion (o sin JS) se ven directo los valores finales,
 *   que son los que trae el HTML del servidor.
 */
export default function BandaNumeros() {
  const ref = useRef<HTMLDListElement>(null);
  const numeros = numerosHero.filter((n) => n.valor !== null);

  useEffect(() => {
    const dl = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dl || reduce || !("IntersectionObserver" in window)) return;

    const spans = [...dl.querySelectorAll<HTMLElement>("[data-valor]")];
    const pintar = (span: HTMLElement, progreso: number) => {
      const valor = Number(span.dataset.valor);
      span.textContent = formato.format(Math.round(valor * progreso));
    };
    spans.forEach((span) => pintar(span, 0));

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const tick = (ahora: number) => {
          let terminados = 0;
          spans.forEach((span, i) => {
            const t = Math.min(
              Math.max((ahora - inicio - i * PASO_CASCADA) / DURACION, 0),
              1,
            );
            pintar(span, easeOutCubic(t));
            if (t === 1) terminados++;
          });
          if (terminados < spans.length) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(dl);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      spans.forEach((span) => pintar(span, 1));
    };
  }, []);

  if (numeros.length === 0) return null;

  return (
    <section
      id="numeros"
      aria-label="Vía3 en números"
      className="relative bg-[#99042F] text-white py-12 md:py-16 overflow-hidden"
    >
      <dl
        ref={ref}
        className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:divide-x lg:divide-white/20"
        data-reveal-stagger
      >
        {numeros.map((n) => (
          <div key={n.label} className="flex flex-col-reverse items-center gap-2 px-4">
            <dt className="font-roboto text-xs md:text-sm uppercase tracking-[0.25em] text-white/80">
              {n.label}
            </dt>
            <dd className="font-poppins font-extrabold text-4xl md:text-6xl leading-none tabular-nums">
              <span aria-hidden="true">
                {n.prefijo}
                <span data-valor={n.valor ?? 0}>
                  {formato.format(n.valor ?? 0)}
                </span>
                {n.sufijo}
              </span>
              <span className="sr-only">
                {n.prefijo}
                {formato.format(n.valor ?? 0)}
                {n.sufijo}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
