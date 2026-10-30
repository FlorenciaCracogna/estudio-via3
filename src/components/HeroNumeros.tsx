"use client";

import { useEffect, useRef } from "react";
import type { NumeroHero } from "@/data/numeros";

const DURACION = 1500;
const PASO_CASCADA = 150;
const formato = new Intl.NumberFormat("es-AR");

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Banda de números del Hero.
 * - Arranca invisible (sólo opacidad + leve desplazamiento: el espacio queda
 *   reservado, no hay salto de layout). Ver `.hero-numeros` en globals.css.
 * - Aparece con el primer scroll del usuario, cuando además está en pantalla,
 *   y en ese momento cada número cuenta en cascada. Una sola vez.
 * - Con prefers-reduced-motion (o sin JS) se ve desde el inicio con los
 *   valores finales, que son los que trae el HTML del servidor.
 * El conteo escribe el texto por DOM, igual que ScrollReveal, para no
 * re-renderizar en cada frame.
 */
export default function HeroNumeros({
  numeros,
  className = "",
}: {
  numeros: NumeroHero[];
  className?: string;
}) {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const dl = ref.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!dl) return;
    if (reduce || !("IntersectionObserver" in window)) {
      dl.dataset.visible = "";
      return;
    }

    const spans = [...dl.querySelectorAll<HTMLElement>("[data-valor]")];
    const pintar = (span: HTMLElement, progreso: number) => {
      const valor = Number(span.dataset.valor);
      span.textContent = formato.format(Math.round(valor * progreso));
    };
    spans.forEach((span) => pintar(span, 0));

    let haScrolleado = false;
    let enPantalla = false;
    let frame = 0;

    const iniciar = () => {
      if (!haScrolleado || !enPantalla) return;
      window.removeEventListener("scroll", onScroll);
      io.disconnect();

      dl.dataset.visible = "";
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
    };

    const onScroll = () => {
      haScrolleado = true;
      iniciar();
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        enPantalla = entry.isIntersecting;
        iniciar();
      },
      { threshold: 0.3 },
    );

    window.addEventListener("scroll", onScroll, { passive: true });
    io.observe(dl);

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cancelAnimationFrame(frame);
      spans.forEach((span) => pintar(span, 1));
    };
  }, []);

  return (
    <>
      <dl
        ref={ref}
        className={`hero-numeros grid grid-cols-2 md:grid-cols-4 gap-y-6 w-full border-t border-white/20 pt-6 md:pt-8 ${className}`}
      >
        {numeros.map((n) => (
          <div key={n.label} className="flex flex-col-reverse items-center gap-1">
            <dt className="font-roboto text-xs md:text-sm uppercase tracking-[0.2em] text-white/75">
              {n.label}
            </dt>
            <dd className="font-poppins font-bold text-3xl md:text-5xl tabular-nums">
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
      {/* Sin JS no hay scroll que la dispare: se muestra directo */}
      <noscript>
        <style>{".hero-numeros{opacity:1!important;transform:none!important}"}</style>
      </noscript>
    </>
  );
}
