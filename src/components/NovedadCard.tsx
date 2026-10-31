import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { buttonClasses } from "./Button";
import type { Image as SanityImage } from "sanity";

interface NovedadCardProps {
  title: string;
  excerpt: string;
  image: SanityImage;
  link: string;
  buttonText?: string;
}

/**
 * Card de una Idea (tipo "novedad" en Sanity), de hasta 380 px de ancho (lo
 * fija la grilla). Imagen 2:1 recortada por Sanity respetando el hotspot que
 * se marque en el Studio, contenido centrado y resumen completo (el schema lo
 * limita a 200 caracteres). El botón queda abajo: todas las cards de una fila
 * miden lo mismo.
 */
export default function NovedadCard({
  title,
  excerpt,
  image,
  link,
  buttonText = "Saber más",
}: NovedadCardProps) {
  const imageUrl = urlFor(image).width(760).height(380).url();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 can-hover:hover:shadow-xl can-hover:motion-safe:hover:-translate-y-1">
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(min-width: 440px) 380px, 100vw"
          className="object-cover transition-transform duration-500 ease-out can-hover:motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-center p-6 text-center">
        <h3 className="font-poppins text-xl font-bold leading-snug text-gray-900">
          {title}
        </h3>
        <p className="mt-3 font-roboto text-[15px] md:text-base leading-relaxed text-gray-700">
          {excerpt}
        </p>
        <div className="mt-auto pt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses()}
          >
            {buttonText}
            <span className="sr-only">: {title} (abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
