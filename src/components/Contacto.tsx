"use client";

import SolucionForm from "./SolucionForm";
import PreguntaInicial from "./PreguntaInicial";
import WhatsAppIcon from "./WhatsAppIcon";
import { secciones } from "@/data/secciones";
import { sedes, whatsappHref } from "@/data/sedes";

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
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-12" data-reveal>
          <h2 className="titulo-seccion font-poppins text-white text-center font-extrabold text-3xl md:text-4xl uppercase tracking-wide mb-3">
            {secciones.contacto.label}
          </h2>
          <PreguntaInicial tono="oscuro" className="text-center">
            {secciones.contacto.pregunta}
          </PreguntaInicial>
        </div>

        {/* Desktop: texto + WhatsApp a la izquierda, formulario a la derecha.
            Mobile: primero el texto y los botones, después el formulario. */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-start">
          <div className="text-center lg:text-left lg:pt-10" data-reveal>
            {/* Texto propuesto: a confirmar con el cliente (ver docs/contenidos/PLAN.md) */}
            <p className="font-poppins text-xl md:text-2xl font-semibold leading-snug text-white">
              Contanos tu desafío y armamos una propuesta a medida para tu
              organización.
            </p>

            <p className="mt-8 font-roboto text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              ¿Preferís WhatsApp?
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center lg:flex-col lg:items-start">
              {sedes.map((sede) => (
                <a
                  key={sede.id}
                  href={whatsappHref(sede)}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Identidad de WhatsApp: verde de marca, texto e ícono blancos, sans del sistema
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#25D366] px-6 py-3 font-[system-ui,-apple-system,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif] text-[15px] font-semibold text-white shadow-md transition-colors hover:bg-[#1EBE5A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <WhatsAppIcon size={20} />
                  WhatsApp {sede.nombre}
                  <span className="sr-only"> (abre en una pestaña nueva)</span>
                </a>
              ))}
            </div>
          </div>

          <div data-reveal>
            <SolucionForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
