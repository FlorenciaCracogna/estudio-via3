"use client";

import { useEffect, useRef } from "react";
import type { NumeroHero } from "@/data/numeros";

const DURACION = 1600;
const formato = new Intl.NumberFormat("es-AR");

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Banda de números con count-up al entrar en pantalla.
 * El HTML del servidor ya trae los valores finales (sin JS o con
 * prefers-reduced-motion se ven directo). El conteo escribe el texto por DOM,
 * igual que ScrollReveal, para no re-renderizar en cada frame.
 */
export default function HeroNumeros({
  numeros,
  retrasoMs = 0,
  className = "",
  style,
}: {
  numeros: NumeroHero[];
  /** Espera antes de contar (para sincronizar con la entrada del Hero). */
  retrasoMs?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const dl = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dl || reduce || !("IntersectionObserver" in window)) return;

    const spans = [...dl.querySelectorAll<HTMLElement>("[data-valor]")];
    const pintar = (progreso: number) =>
      spans.forEach((span) => {
        const valor = Number(span.dataset.valor);
        span.textContent = formato.format(Math.round(valor * progreso));
      });

    pintar(0);
    let frame = 0;
    let timeout = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timeout = window.setTimeout(() => {
          const inicio = performance.now();
          const tick = (ahora: number) => {
            const t = Math.min((ahora - inicio) / DURACION, 1);
            pintar(easeOutCubic(t));
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, retrasoMs);
      },
      { threshold: 0.4 },
    );
    io.observe(dl);

    return () => {
      io.disconnect();
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
      pintar(1);
    };
  }, [retrasoMs]);

  return (
    <dl
      ref={ref}
      style={style}
      className={`grid grid-cols-2 md:grid-cols-4 gap-y-6 w-full border-t border-white/20 pt-8 ${className}`}
    >
      {numeros.map((n) => (
        <div key={n.label} className="flex flex-col-reverse items-center gap-1">
          <dt className="font-roboto text-xs md:text-sm uppercase tracking-[0.2em] text-white/75">
            {n.label}
          </dt>
          <dd className="font-poppins font-bold text-4xl md:text-5xl tabular-nums">
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
  );
}
