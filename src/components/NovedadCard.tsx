import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Image as SanityImage } from "sanity";

interface NovedadCardProps {
  title: string;
  excerpt: string;
  image: SanityImage;
  link: string;
  buttonText?: string;
}

export default function NovedadCard({
  title,
  excerpt,
  image,
  link,
  buttonText = "Saber más",
}: NovedadCardProps) {
  const imageUrl = urlFor(image).width(800).url();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center">
        <Image src={imageUrl} alt={title} fill className="object-contain" />
      </div>
      <div className="flex flex-col items-center text-center p-5 flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-5 flex-1">{excerpt}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#99042F] text-white text-sm font-semibold px-6 py-2 rounded hover:opacity-90 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
