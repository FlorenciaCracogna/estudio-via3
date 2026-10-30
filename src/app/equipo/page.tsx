import { Suspense } from "react";
import type { Metadata } from "next";
import { socialMetadata } from "@/lib/seo";
import NosotrosContent from "./NosotrosContent";

const description =
  "Profesionales con experiencia en consultoría, gestión organizacional, aprendizaje corporativo, desarrollo del talento y formación ejecutiva.";

export const metadata: Metadata = {
  title: "Nuestro Equipo",
  description,
  ...socialMetadata({
    title: "Nuestro Equipo | Estudio Vía3",
    description,
    path: "/equipo",
  }),
};

export default function EquipoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-400 font-roboto">
          Cargando...
        </div>
      }
    >
      <NosotrosContent />
    </Suspense>
  );
}
