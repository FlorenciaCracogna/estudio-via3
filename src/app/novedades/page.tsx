import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { TODAS_NOVEDADES_QUERY } from "@/sanity/lib/queries";
import NovedadCard from "@/components/NovedadCard";
import type { Image as SanityImage } from "sanity";

export const metadata = {
  title: "Novedades | Estudio Vía3",
  description: "Las últimas novedades de Estudio Vía3.",
};

interface Novedad {
  _id: string;
  title: string;
  excerpt: string;
  image: SanityImage;
  link: string;
  buttonText?: string;
}

export default async function NovedadesPage() {
  const { data: novedades } = await sanityFetch({
    query: TODAS_NOVEDADES_QUERY,
  });
  const novedadesList = novedades as Novedad[];

  return (
    <main className="min-h-screen">
      {/* Header con fondo texturado */}
      <div
        className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1782760966/fondo_texturado_2_remimo.png')",
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Puntitos arriba derecha */}
        <div className="absolute top-6 right-2 md:right-12 opacity-90">
          <Image
            src="/arrows-dots/puntitos-negro.png"
            alt=""
            width={72}
            height={72}
            className="w-10 md:w-14 h-auto"
            aria-hidden="true"
          />
        </div>

        {/* Puntitos abajo izquierda */}
        <div className="absolute bottom-6 left-2 md:left-12 opacity-90">
          <Image
            src="/arrows-dots/puntitos-bordo.png"
            alt=""
            width={72}
            height={72}
            className="w-10 md:w-14 h-auto"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col items-center text-center gap-4 relative z-10">
          <h1 className="titulo-seccion font-extrabold uppercase text-[#99042F] tracking-wide font-poppins text-3xl md:text-4xl">
            Novedades
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl font-roboto leading-relaxed">
            Enterate de lo último de Estudio Vía3.
          </p>
        </div>
      </div>

      {/* Grilla con fondo beige */}
      <div className="bg-[#DBCAB9] py-16 px-6 md:px-12">
        {!novedadesList || novedadesList.length === 0 ? (
          <p className="text-center text-gray-500 font-roboto">
            Todavía no hay novedades cargadas.
          </p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {novedadesList.map((novedad) => (
              <NovedadCard
                key={novedad._id}
                title={novedad.title}
                excerpt={novedad.excerpt}
                image={novedad.image}
                link={novedad.link}
                buttonText={novedad.buttonText}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer de la página: volver a home */}
      <div className="bg-[#DBCAB9] border-t border-[#c9b5a0] py-10 flex justify-center">
        <Link
          href="/#novedades"
          className="inline-flex items-center gap-3 text-[#99042F] hover:text-[#7a0326] font-roboto font-medium transition-colors"
        >
          <Image
            src="/arrows-dots/flecha-bordo.png"
            alt=""
            width={32}
            height={24}
            className="rotate-180"
            aria-hidden="true"
          />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
