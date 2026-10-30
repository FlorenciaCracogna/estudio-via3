import { Suspense } from "react";
import type { Metadata } from "next";
import { socialMetadata } from "@/lib/seo";
import NosotrosContent from "./NosotrosContent";

const description =
  "Somos un equipo comprometido con la excelencia, guiado por la integridad, impulsado por el dinamismo, y sostenido por la profesionalidad y el entusiasmo en cada proyecto.";

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
