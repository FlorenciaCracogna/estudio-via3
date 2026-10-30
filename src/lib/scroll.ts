/**
 * Scrollea hasta la sección con ese id. La compensación de la navbar fija la
 * da `scroll-margin-top` (ver globals.css). Con prefers-reduced-motion salta
 * sin animación.
 */
export function scrollASeccion(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
