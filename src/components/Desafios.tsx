import { secciones } from "@/data/secciones";
import PreguntaInicial from "./PreguntaInicial";

// Provisoria: sólo título y pregunta para que funcione el ancla.
// Las 7 cards de desafíos llegan en el paso 3 (ver docs/contenidos/PLAN.md).
export default function Desafios() {
  return (
    <section id="desafios" className="bg-white py-16 md:py-20 w-full">
      <div
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-3"
        data-reveal
      >
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
          {secciones.desafios.label}
        </h2>
        <PreguntaInicial>{secciones.desafios.pregunta}</PreguntaInicial>
      </div>
    </section>
  );
}
