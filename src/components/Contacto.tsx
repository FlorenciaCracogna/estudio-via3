"use client";

import SolucionForm from "./SolucionForm";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="relative py-20 px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1782755940/fondo_texturado_1_epzdfo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#99042F",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="titulo-seccion text-white text-center font-bold text-3xl md:text-4xl uppercase tracking-wide mb-10">
          ¿Cómo te ayudamos?
        </h2>
        <SolucionForm variant="light" />
      </div>
    </section>
  );
}
