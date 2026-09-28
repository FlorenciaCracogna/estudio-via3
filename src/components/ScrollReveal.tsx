"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Duración de la animación (tiene que coincidir con .reveal en globals.css)
const DURACION = 600;
const PASO_CASCADA = 80;
const MAX_PASOS = 6;

/**
 * Anima la aparición de los elementos al entrar en pantalla.
 * - `data-reveal`: el elemento aparece con fade + slide-up.
 * - `data-reveal-stagger`: cada hijo directo aparece en cascada.
 * Sin JS o con prefers-reduced-motion no se oculta nada.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const targets: HTMLElement[] = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    document
      .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
      .forEach((parent) => {
        targets.push(...(Array.from(parent.children) as HTMLElement[]));
      });

    const timers: ReturnType<typeof setTimeout>[] = [];

    const mostrar = (el: HTMLElement, delay: number) => {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("is-visible");
      // Al terminar sacamos la clase para no pisar las transiciones propias (hovers)
      timers.push(
        setTimeout(() => {
          el.classList.remove("reveal", "is-visible");
          el.style.removeProperty("--reveal-delay");
        }, DURACION + delay + 50),
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        let paso = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          mostrar(
            entry.target as HTMLElement,
            Math.min(paso++, MAX_PASOS) * PASO_CASCADA,
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      // Lo que ya está en pantalla al cargar no se oculta (evita parpadeos)
      if (r.top < window.innerHeight && r.bottom > 0) return;
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
