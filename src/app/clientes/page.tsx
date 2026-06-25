import Image from "next/image";
import { clients } from "@/data/clients";

export const metadata = {
  title: "Clientes | Estudio Vía3",
  description: "Organizaciones y personas en confianza mutua.",
};

export default function ClientesPage() {
  return (
    <main className="min-h-screen">
      {/* Header con fondo beige */}
      <div className="relative bg-[#DBCAB9] pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Puntitos arriba derecha */}
        <div className="absolute top-6 right-6 md:right-12 opacity-50">
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

        <div className="flex flex-col items-center text-center gap-4 relative z-10">
          <h1 className="titulo-seccion font-extrabold uppercase text-[#99042F] tracking-wide font-poppins text-3xl md:text-4xl">
            Clientes
          </h1>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl font-roboto leading-relaxed">
            Organizaciones y personas en confianza mutua.
          </p>
        </div>
      </div>

      {/* Grilla con fondo blanco */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="flex items-center justify-center bg-white border border-gray-200 rounded-lg h-32 hover:shadow-md hover:border-gray-300 transition-shadow duration-200"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="object-contain max-h-full w-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
