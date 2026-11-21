import { secciones } from "@/data/secciones";
import { desafios } from "@/data/desafios";
import PreguntaInicial from "./PreguntaInicial";
import DesafioCard from "./DesafioCard";

// Fondo blanco: entre el beige de Red de especialistas y el bordó de
// Soluciones mantiene la alternancia claro/oscuro y deja que las fotos de las
// cards sean el peso visual de la sección.
export default function Desafios() {
  return (
    <section id="desafios" className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div
          className="flex flex-col items-center text-center gap-3 mb-12"
          data-reveal
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide font-poppins">
            {secciones.desafios.label}
          </h2>
          <PreguntaInicial>{secciones.desafios.pregunta}</PreguntaInicial>
          <p className="mt-1 max-w-2xl font-roboto text-base md:text-lg leading-relaxed text-gray-700">
            Estos son algunos de los desafíos que acompañamos junto a nuestros
            clientes.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          data-reveal-stagger
        >
          {desafios.map((desafio) => (
            <li key={desafio.titulo} className="grid">
              <DesafioCard {...desafio} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
