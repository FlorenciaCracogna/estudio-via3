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
 * Card de una Idea (tipo "novedad" en Sanity). Imagen 16:9 recortada por
 * Sanity respetando el hotspot que se marque en el Studio, extracto a 3
 * líneas y botón alineado abajo: todas las cards de una fila miden lo mismo.
 */
export default function NovedadCard({
  title,
  excerpt,
  image,
  link,
  buttonText = "Saber más",
}: NovedadCardProps) {
  const imageUrl = urlFor(image).width(960).height(540).url();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 can-hover:hover:shadow-xl can-hover:motion-safe:hover:-translate-y-1">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out can-hover:motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-poppins text-lg font-bold leading-snug text-gray-900">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 font-roboto text-sm leading-relaxed text-gray-600">
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
