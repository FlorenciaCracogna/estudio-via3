import Image from "next/image";

// Íconos del Word: líneas blancas sobre fondo negro opaco (no son PNG
// transparentes). Con mix-blend-mode: screen el negro toma el color del
// círculo bordó y sólo quedan las líneas blancas. Son de ~90 px: si el
// cliente consigue versiones SVG o más grandes, conviene reemplazarlos.
const principios = [
  {
    icono: "/iconos/como-trabajamos/aprendizaje-con-impacto.png",
    ancho: 85,
    alto: 80,
    titulo: "Aprendizaje con impacto",
    texto:
      "Diseñamos experiencias y procesos que favorecen la transferencia del aprendizaje al trabajo y su contribución a los resultados del negocio.",
  },
  {
    icono: "/iconos/como-trabajamos/soluciones-a-medida.png",
    ancho: 92,
    alto: 72,
    titulo: "Soluciones construidas para cada organización",
    texto:
      "Partimos de necesidades concretas y diseñamos soluciones alineadas con la estrategia, la cultura y los desafíos de cada organización.",
  },
  {
    icono: "/iconos/como-trabajamos/mirada-integrada.png",
    ancho: 98,
    alto: 70,
    titulo: "Una mirada integrada",
    texto:
      "Vinculamos aprendizaje, gestión del talento, dinámica organizacional y desarrollo de capacidades para generar cambios sostenibles.",
  },
  {
    icono: "/iconos/como-trabajamos/socios-estrategicos.png",
    ancho: 109,
    alto: 104,
    titulo: "Socios estratégicos para el desarrollo",
    texto:
      "Trabajamos junto a nuestros clientes con cercanía, compromiso y orientación a resultados.",
  },
];

export default function ComoTrabajamos() {
  return (
    <section
      id="como-trabajamos"
      className="relative px-6 md:px-12 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/f_auto,q_auto,w_1920/v1781807517/estudio-principal_qp6yxt.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/88" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
          <h2 className="titulo-seccion font-poppins font-extrabold text-white uppercase tracking-wide text-3xl md:text-4xl mb-4">
            Cómo trabajamos
          </h2>
          <p className="font-roboto italic text-white/85 text-base md:text-lg leading-relaxed">
            Principios que orientan nuestra forma de diseñar y acompañar cada
            proyecto.
          </p>
        </div>

        <ul
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
          data-reveal-stagger
        >
          {principios.map((p) => (
            <li
              key={p.titulo}
              className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="isolate flex h-16 w-16 items-center justify-center rounded-full bg-[#99042F]">
                <Image
                  src={p.icono}
                  alt=""
                  width={p.ancho}
                  height={p.alto}
                  // contrast() lleva el fondo casi negro (#111) a negro puro antes
                  // del blend; si no, queda un cuadrado apenas visible.
                  className="h-9 w-auto mix-blend-screen [filter:contrast(1.5)]"
                />
              </div>
              <h3 className="font-poppins text-lg font-semibold leading-snug text-white">
                {p.titulo}
              </h3>
              <p className="font-roboto text-sm md:text-base leading-relaxed text-white/80">
                {p.texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
