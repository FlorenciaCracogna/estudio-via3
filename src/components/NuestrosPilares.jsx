"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const pilares = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808683/personas_jiqoq9.png",
    texto: "Integramos a las personas a la rentabilidad del negocio.",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808664/chess-brain_zzbdy4.png",
    texto: "Relacionamos la dinámica organizacional con el aprendizaje.",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808689/target_lmxku9.png",
    texto:
      "Partimos siempre de las necesidades relacionadas con el desempeño laboral.",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808681/lightbulb_zzyz0p.png",
    texto: 'Nuestra prioridad es transferir el "saber hacer".',
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808687/smile_p4itot.png",
    texto: "Unimos el entusiasmo personal al compromiso en el servicio.",
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808679/clipboard_fgn4wb.png",
    texto:
      "Estamos convencidos que cada organización requiere sus propias soluciones.",
  },
  {
    id: 7,
    icon: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781808685/puzzle_rx2scb.png",
    texto:
      "Nos sentimos y actuamos como socios estratégicos de la organización.",
  },
];

export default function NuestrosPilares() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative flex flex-col items-center px-2 md:px-8 py-16 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/estudio-principal_qp6yxt.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 text-center w-full max-w-4xl">
        <h2 className="titulo-seccion font-poppins font-bold text-white tracking-widest text-3xl md:text-4xl mb-4">
          NUESTROS PILARES
        </h2>
        <p className="font-roboto italic text-white/85 text-base md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
          Actitud con la que la red de relaciones piensa, siente y desarrolla el
          servicio; especificando un sistema de creencias que sostiene y otorga
          coherencia a su performance.
        </p>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Mostrar pilares"
          className="mx-auto flex items-center justify-center p-2 cursor-pointer bg-transparent transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ChevronDown size={20} color="white" />
        </button>

        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: open ? "2000px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div className="mt-10">
            {/* Desktop — layout asimétrico 2/3/2 */}
            <div className="hidden lg:flex justify-center gap-8">
              <div className="flex flex-col items-center gap-10 flex-1 max-w-[220px] pt-8">
                {[pilares[0], pilares[4]].map(({ id, icon, texto }) => (
                  <div key={id} className="flex flex-col items-center gap-3">
                    <Image
                      src={icon}
                      alt={texto}
                      width={80}
                      height={80}
                      style={{ mixBlendMode: "screen" }}
                    />
                    <p className="text-white/90 text-sm leading-relaxed text-center max-w-[160px]">
                      {texto}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-10 flex-1 max-w-[220px]">
                {[pilares[1], pilares[3], pilares[5]].map(
                  ({ id, icon, texto }) => (
                    <div key={id} className="flex flex-col items-center gap-3">
                      <Image
                        src={icon}
                        alt={texto}
                        width={80}
                        height={80}
                        style={{ mixBlendMode: "screen" }}
                      />
                      <p className="text-white/90 text-sm leading-relaxed text-center max-w-[160px]">
                        {texto}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <div className="flex flex-col items-center gap-10 flex-1 max-w-[220px] pt-8">
                {[pilares[2], pilares[6]].map(({ id, icon, texto }) => (
                  <div key={id} className="flex flex-col items-center gap-3">
                    <Image
                      src={icon}
                      alt={texto}
                      width={80}
                      height={80}
                      style={{ mixBlendMode: "screen" }}
                    />
                    <p className="text-white/90 text-sm leading-relaxed text-center max-w-[160px]">
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile y Tablet */}
            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-10 px-2">
              {pilares.map(({ id, icon, texto }, index) => (
                <div
                  key={id}
                  className={`flex flex-col items-center gap-3 ${
                    // si es el último y el total es impar, centrarlo en tablet
                    index === pilares.length - 1 && pilares.length % 2 !== 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <Image
                    src={icon}
                    alt={texto}
                    width={80}
                    height={80}
                    style={{ mixBlendMode: "screen" }}
                  />
                  <p className="text-white/90 text-sm leading-relaxed text-center max-w-[180px]">
                    {texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
