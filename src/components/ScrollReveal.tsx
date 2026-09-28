"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DURACION = 600;
const PASO_CASCADA = 80;
const MAX_PASOS = 6;

const KEYFRAMES: Keyframe[] = [
  { opacity: 0, transform: "translateY(24px)" },
  { opacity: 1, transform: "none" },
];

/**
 * Anima la aparición de los elementos al entrar en pantalla.
 * - `data-reveal`: el elemento aparece con fade + slide-up.
 * - `data-reveal-stagger`: cada hijo directo aparece en cascada.
 *
 * Usa la Web Animations API en lugar de clases: no toca atributos del DOM,
 * así que no genera hydration mismatch en contenido que hidrata más tarde
 * (por ejemplo dentro de un <Suspense>). Sin JS o con prefers-reduced-motion
 * no se oculta nada.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (
      reduce ||
      !("IntersectionObserver" in window) ||
      typeof Element.prototype.animate !== "function"
    ) {
      return;
    }

    const targets: HTMLElement[] = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    document
      .querySelectorAll<HTMLElement>("[data-reveal-stagger]")
      .forEach((parent) => {
        targets.push(...(Array.from(parent.children) as HTMLElement[]));
      });

    const animaciones = new Map<Element, Animation>();

    const io = new IntersectionObserver(
      (entries) => {
        let paso = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          const anim = animaciones.get(entry.target);
          if (!anim) return;
          anim.effect?.updateTiming({
            delay: Math.min(paso++, MAX_PASOS) * PASO_CASCADA,
          });
          anim.play();
          // Al terminar se cancela para no dejar estilos aplicados (hovers propios)
          anim.onfinish = () => anim.cancel();
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      // Lo que ya está en pantalla al cargar no se oculta (evita parpadeos)
      if (r.top < window.innerHeight && r.bottom > 0) return;
      const anim = el.animate(KEYFRAMES, {
        duration: DURACION,
        easing: "ease-out",
        fill: "both",
      });
      anim.pause(); // queda en el primer keyframe (oculto) hasta entrar en pantalla
      animaciones.set(el, anim);
      io.observe(el);
    });

    return () => {
      io.disconnect();
      animaciones.forEach((anim) => anim.cancel());
    };
  }, [pathname]);

  return null;
}
