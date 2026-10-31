import Image from "next/image";
import { seccionesMenu } from "@/data/secciones";

// Entrada en secuencia: título → bajada → preguntas (una tras otra).
// Los números van en su propia sección, debajo del Hero (BandaNumeros).
const DELAY_PREGUNTAS = 300;
const PASO_PREGUNTAS = 80;

export default function Hero() {
  return (
    // Ocupa el alto completo del viewport. Los espacios entre bloques escalan
    // con el alto (vh) para que el contenido se reparta sin apretarse arriba
    // ni dejar un hueco abajo; si no entra, el Hero crece (min-h).
    <section className="relative w-full min-h-svh flex flex-col overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/hero-bg_bc4nqs.jpg"
        alt="Equipo Estudio Vía3"
        fill
        preload
        sizes="100vw"
        className="hero-zoom object-cover object-center"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido */}
      <div className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white pt-[calc(var(--navbar-h)+clamp(1rem,4vh,3rem))] pb-[clamp(1.5rem,6vh,4.5rem)]">
        <h1 className="hero-entrada titulo-seccion font-poppins text-[clamp(1.5rem,8vw,2rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight px-4">
          Aprendizaje Organizacional
        </h1>

        <p className="hero-entrada [--hero-delay:150ms] mt-[clamp(0.75rem,2.5vh,1.75rem)] text-lg md:text-xl max-w-2xl text-white/90 leading-relaxed">
          Ayudamos a las organizaciones a transformar conocimientos en
          resultados del negocio.
        </p>

        {/* Preguntas: cada una lleva a su sección del home */}
        <nav aria-label="Recorrido por las secciones" className="w-full mt-[clamp(1.5rem,6vh,4.5rem)]">
          <ul className="grid gap-2 md:gap-[clamp(0.75rem,2vh,1.25rem)] sm:grid-cols-2 lg:grid-cols-3 text-left">
            {seccionesMenu.map(({ id, pregunta }, i) => (
              <li
                key={id}
                className="hero-entrada flex"
                style={
                  {
                    "--hero-delay": `${DELAY_PREGUNTAS + i * PASO_PREGUNTAS}ms`,
                  } as React.CSSProperties
                }
              >
                <a
                  href={`#${id}`}
                  className="group flex w-full min-h-12 md:min-h-14 lg:min-h-[clamp(4.5rem,10vh,6rem)] items-center justify-between gap-4 rounded-lg border border-white/25 bg-white/5 px-5 py-2 md:py-3 font-poppins text-[15px] md:text-base font-medium leading-snug text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/60 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{pregunta}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#99042F] transition-transform duration-200 motion-safe:group-hover:translate-x-1"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </section>
  );
}
