"use client";

import SolucionForm from "./SolucionForm";
import PreguntaInicial from "./PreguntaInicial";
import { secciones } from "@/data/secciones";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative py-20 px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/f_auto,q_auto/v1782755940/fondo_texturado_1_epzdfo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#99042F",
      }}
    >
      <div className="max-w-2xl mx-auto" data-reveal-stagger>
        <h2 className="titulo-seccion font-poppins text-white text-center font-extrabold text-3xl md:text-4xl uppercase tracking-wide mb-3">
          {secciones.contacto.label}
        </h2>
        <PreguntaInicial tono="oscuro" className="text-center mb-10">
          {secciones.contacto.pregunta}
        </PreguntaInicial>
        <SolucionForm variant="light" />
      </div>
    </section>
  );
}
