import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ULTIMAS_NOVEDADES_QUERY } from "@/sanity/lib/queries";
import NovedadCard from "./NovedadCard";
import type { Image as SanityImage } from "sanity";

interface Novedad {
  _id: string;
  title: string;
  excerpt: string;
  image: SanityImage;
  link: string;
  buttonText?: string;
}

export default async function Novedades() {
  const { data: novedades } = await sanityFetch({
    query: ULTIMAS_NOVEDADES_QUERY,
  });
  const novedadesList = novedades as Novedad[];

  if (!novedadesList || novedadesList.length === 0) return null;

  return (
    <section
      id="novedades"
      className="relative py-16 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1782760966/fondo_texturado_2_remimo.png')",
        backgroundSize: "300px",
        backgroundRepeat: "repeat",
      }}
    >
      <h2 className="titulo-seccion text-3xl md:text-4xl font-extrabold uppercase text-[#99042F] tracking-wide text-center font-poppins mb-12 relative z-10">
        Novedades
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Puntitos decorativos, posicionados relativos al bloque de cards */}
        <Image
          src="/arrows-dots/puntitos-negro.png"
          alt=""
          width={100}
          height={100}
          className="absolute top-6 right-2 w-10 h-auto md:w-14 md:-right-10 opacity-90 z-0"
        />
        <Image
          src="/arrows-dots/puntitos-bordo.png"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-6 left-2 w-10 h-auto md:w-14 md:-left-10 opacity-90 z-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
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
      </div>

      <div className="flex justify-center mt-12 relative z-10">
        <Link
          href="/novedades"
          className="bg-[#99042F] text-white text-sm font-semibold px-8 py-3 rounded hover:opacity-90 transition"
        >
          Más novedades
        </Link>
      </div>
    </section>
  );
}
