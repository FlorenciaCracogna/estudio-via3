"use client";

import { useEffect, useRef } from "react";

const PAUSA_MANUAL = 4000; // ms sin auto-scroll después de usar flechas o swipe
const DURACION_PASO = 450; // ms de la animación de cada flecha
const UMBRAL_ARRASTRE = 6; // px para distinguir swipe de tap

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Carrusel infinito (ticker) con auto-scroll, swipe y flechas.
 *
 * El track tiene que tener la lista duplicada: `cantidad` items y su copia.
 * - Auto-scroll por tiempo (px/s), igual a 60 y 120 Hz. Sólo corre mientras la
 *   sección está en pantalla.
 * - Con prefers-reduced-motion no hay auto-scroll, pero el swipe y las flechas
 *   siguen funcionando (las flechas mueven sin animación).
 * - Se pausa con el mouse encima (opcional) y con foco de teclado. El foco que
 *   deja un tap en un link no cuenta: en Chrome Android dejaba el carrusel
 *   frenado hasta tocar otra cosa.
 * - Sólo un swipe horizontal real pausa el auto-scroll. Un tap o un scroll
 *   vertical que empieza sobre el carrusel no lo frenan.
 */
export function useCarruselInfinito({
  cantidad,
  velocidad,
  pausaEnHover = true,
  arrastreConMouse = false,
}: {
  /** Items de una vuelta (sin contar la copia). */
  cantidad: number;
  /** px por segundo. */
  velocidad: number;
  /** Pausar mientras el mouse está encima del track. */
  pausaEnHover?: boolean;
  /** Permitir arrastrar también con mouse (si no hay flechas). */
  arrastreConMouse?: boolean;
}) {
  const seccionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Estado en refs: se lee/escribe en cada frame sin re-renderizar
  const pos = useRef(0);
  const enHover = useRef(false);
  const enFoco = useRef(false);
  const pausaHasta = useRef(0);
  const paso = useRef<{ desde: number; hasta: number; inicio: number; dur: number } | null>(null);
  const arrastre = useRef<{ x0: number; pos0: number; movido: boolean } | null>(null);
  const reduceMotion = useRef(false);
  const swipeReciente = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const seccion = seccionRef.current;
    if (!track || !seccion) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = mq.matches;
    const onCambioMotion = () => (reduceMotion.current = mq.matches);
    mq.addEventListener("change", onCambioMotion);

    // Ancho de una vuelta: desde el primer item hasta su copia
    const periodo = () => {
      const items = track.children as HTMLCollectionOf<HTMLElement>;
      return items[cantidad].offsetLeft - items[0].offsetLeft;
    };

    let frame = 0;
    let ultimo = 0;
    const tick = (ahora: number) => {
      // Tope por si la pestaña estuvo en segundo plano; nunca negativo (el
      // timestamp del primer frame puede ser anterior a performance.now())
      const dt = Math.min(Math.max(ahora - ultimo, 0), 100) / 1000;
      ultimo = ahora;

      if (paso.current) {
        const { desde, hasta, inicio, dur } = paso.current;
        const t = dur > 0 ? Math.min((ahora - inicio) / dur, 1) : 1;
        pos.current = desde + (hasta - desde) * easeOutCubic(t);
        if (t === 1) paso.current = null;
      } else if (
        !arrastre.current?.movido &&
        !enHover.current &&
        !enFoco.current &&
        !reduceMotion.current &&
        ahora >= pausaHasta.current
      ) {
        pos.current += velocidad * dt;
      }

      const p = periodo();
      if (!paso.current && !arrastre.current) pos.current = ((pos.current % p) + p) % p;
      const visible = ((pos.current % p) + p) % p;
      track.style.transform = `translate3d(${-visible}px, 0, 0)`;

      frame = requestAnimationFrame(tick);
    };

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
      mq.removeEventListener("change", onCambioMotion);
    };
  }, [cantidad, velocidad]);

  /** Avanza (1) o retrocede (-1) un item. */
  const mover = (direccion: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children as HTMLCollectionOf<HTMLElement>;
    const ancho = items[1].offsetLeft - items[0].offsetLeft; // item + gap
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

  const terminarArrastre = () => {
    const a = arrastre.current;
    if (!a) return;
    arrastre.current = null;
    if (!a.movido) return; // tap o scroll vertical: no se pausa nada
    pausaHasta.current = performance.now() + PAUSA_MANUAL;
    // Un instante para que el click del final del swipe no abra el link
    swipeReciente.current = true;
    setTimeout(() => (swipeReciente.current = false), 50);
  };

  /** Props para el elemento del track. */
  const trackProps = {
    ref: trackRef,
    onPointerEnter: (e: React.PointerEvent) => {
      if (pausaEnHover && e.pointerType === "mouse") enHover.current = true;
    },
    onPointerLeave: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse") enHover.current = false;
    },
    onFocus: (e: React.FocusEvent) => {
      let teclado = true;
      try {
        teclado = (e.target as HTMLElement).matches(":focus-visible");
      } catch {
        // Navegador sin :focus-visible: se asume teclado
      }
      enFoco.current = teclado;
    },
    onBlur: () => (enFoco.current = false),
    onPointerDown: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && (!arrastreConMouse || e.button !== 0)) return;
      arrastre.current = { x0: e.clientX, pos0: pos.current, movido: false };
    },
    onPointerMove: (e: React.PointerEvent) => {
      const a = arrastre.current;
      if (!a) return;
      const dx = e.clientX - a.x0;
      if (!a.movido && Math.abs(dx) > UMBRAL_ARRASTRE) {
        a.movido = true;
        paso.current = null;
        a.pos0 = pos.current;
        a.x0 = e.clientX;
        try {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        } catch {
          // El puntero ya no está activo: el arrastre sigue sin captura
        }
        return;
      }
      if (a.movido) pos.current = a.pos0 - dx;
    },
    onPointerUp: terminarArrastre,
    onPointerCancel: terminarArrastre,
    onClickCapture: (e: React.MouseEvent) => {
      if (swipeReciente.current) e.preventDefault();
    },
  };

  return { seccionRef, trackProps, mover };
}
