import Image from "next/image";
import Link from "next/link";
import { equipo } from "@/data/equipo";
import { buttonClasses } from "./Button";

// Nombre corto sin "Lic." para la sección home (igual que el Figma)
function nombreCorto(nombre: string) {
  return nombre.replace(/^Lic\.\s*/, "");
}

/** Vía3 → Quiénes somos + Equipo. */
export default function Nosotros() {
  return (
    <section
      id="quienes-somos"
      className="bg-white py-16 md:py-24 overflow-x-hidden w-full"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        {/* Quiénes somos */}
        <div
          className="grid lg:grid-cols-[2fr_3fr] gap-6 lg:gap-16 items-start mb-16 md:mb-24"
          data-reveal
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center lg:text-left font-poppins">
            Quiénes somos
          </h2>
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <p className="font-poppins text-lg md:text-xl font-medium leading-snug text-gray-900">
              Somos una red de profesionales, consultores y organizaciones
              especializadas en aprendizaje organizacional, desarrollo del
              talento y transformación de capacidades.
            </p>
            <p className="font-roboto text-base md:text-lg leading-relaxed text-gray-700">
              Integramos experiencias, enfoques y saberes complementarios para
              diseñar soluciones adaptadas a la realidad de cada organización.
            </p>
          </div>
        </div>

        {/* Equipo. El id va en un contenedor sin data-reveal: si el ancla
            estuviera desplazada por la animación, el scroll calcularía mal. */}
        <div id="equipo" className="scroll-mt-[calc(var(--navbar-h)+3rem)]">
          <div
            className="relative flex flex-col items-center mb-10"
            data-reveal
          >
            {/* Dots decorativos arriba derecha */}
            <div className="absolute -top-2 right-0 hidden sm:block">
              <Image
                src="/arrows-dots/puntitos-bordo.png"
                alt=""
                width={72}
                height={72}
                aria-hidden="true"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center font-poppins mb-4">
              Equipo
            </h2>
            <p className="text-gray-800 text-base md:text-lg text-center max-w-2xl font-roboto leading-relaxed">
              Profesionales con experiencia en consultoría, gestión
              organizacional, aprendizaje corporativo, desarrollo del talento
              y formación ejecutiva.
            </p>
          </div>
        </div>

        {/* Integrantes */}
        <div className="mb-12">
          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            data-reveal-stagger
          >
            {equipo.map((persona) => {
              const nombre = nombreCorto(persona.nombre);
              const href = `/equipo?miembro=${persona.id}`;
              return (
                <li
                  key={persona.id}
                  className="group flex sm:flex-col items-center sm:text-center gap-4 rounded-2xl bg-gray-50 p-5 md:p-6 shadow-sm"
                >
                  {/* Foto (el link accesible es el nombre; éste es un atajo para mouse) */}
                  <Link
                    href={href}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-white"
                  >
                    <Image
                      src={persona.foto}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="128px"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col sm:items-center gap-1">
                    <Link
                      href={href}
                      className="font-poppins text-base md:text-lg font-semibold leading-tight text-gray-900 hover:text-[#99042F] transition-colors"
                    >
                      {nombre}
                    </Link>
                    <p className="font-poppins text-xs font-semibold uppercase tracking-[0.15em] text-[#99042F]">
                      {persona.rol}
                    </p>
                    <p className="mt-1 font-roboto text-sm leading-relaxed text-gray-600">
                      {persona.especialidad}
                    </p>
                    <a
                      href={persona.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${nombre} (abre en una pestaña nueva)`}
                      className="mt-2 inline-flex items-center gap-1.5 self-start sm:self-center rounded-sm text-sm font-medium text-[#99042F] hover:text-[#7a0326] transition-colors"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA inferior */}
        <div className="flex flex-col items-center gap-3" data-reveal>
          <div className="flex items-center gap-3">
            <p className="text-gray-600 italic font-roboto text-sm md:text-base text-center">
              Acerquémonos un poco más y conocé más sobre nuestro equipo
            </p>
            <Image
              src="/arrows-dots/flecha-bordo.png"
              alt=""
              width={44}
              height={28}
              aria-hidden="true"
            />
          </div>
          <Link
            href="/equipo"
            className={buttonClasses()}
          >
            Conocenos
          </Link>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
