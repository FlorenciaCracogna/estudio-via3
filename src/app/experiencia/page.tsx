import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { sectores } from "@/data/experiencia";
import { secciones } from "@/data/secciones";
import { socialMetadata } from "@/lib/seo";
import { buttonClasses } from "@/components/Button";
import PreguntaInicial from "@/components/PreguntaInicial";
import AcordeonSectores from "@/components/AcordeonSectores";

const description =
  "Organizaciones de consumo masivo, industria, energía, finanzas, salud, tecnología, logística y educación con las que trabajamos en Estudio Vía3.";

export const metadata: Metadata = {
  title: "Experiencia",
  description,
  ...socialMetadata({
    title: "Experiencia | Estudio Vía3",
    description,
    path: "/experiencia",
  }),
};

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen">
      {/* Header con fondo beige */}
      <div className="relative bg-[#DBCAB9] pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Puntitos arriba derecha */}
        <div className="absolute top-20 lg:top-24 right-6 md:right-12 opacity-50 hidden md:block">
          <Image
            src="/arrows-dots/puntitos-negro.png"
            alt=""
            width={72}
            height={72}
            aria-hidden="true"
          />
        </div>

        {/* Puntitos abajo izquierda */}
        <div className="absolute bottom-6 left-6 md:left-12 opacity-50 hidden md:block">
          <Image
            src="/arrows-dots/puntitos-negro.png"
            alt=""
            width={72}
            height={72}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-3 relative z-10">
          <h1 className="font-extrabold uppercase text-[#99042F] tracking-wide font-poppins text-3xl md:text-4xl">
            {secciones.experiencia.label}
          </h1>
          <PreguntaInicial>{secciones.experiencia.pregunta}</PreguntaInicial>
        </div>
      </div>

      {/* Sectores */}
      <div className="bg-white py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto" data-reveal>
          <AcordeonSectores sectores={sectores} />
        </div>
      </div>

      {/* CTA a contacto */}
      <div className="bg-[#99042F] py-14 md:py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6" data-reveal>
          <p className="font-poppins text-xl md:text-2xl font-semibold leading-snug text-white">
            {secciones.contacto.pregunta}
          </p>
          <Link
            href="/#contacto"
            className={buttonClasses({ variant: "light", size: "lg" })}
          >
            Contactanos
          </Link>
        </div>
      </div>
    </main>
  );
}
