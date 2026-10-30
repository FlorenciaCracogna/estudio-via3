import Hero from "@/components/Hero";
import ElEstudio from "@/components/ElEstudio";
import NuestrosPilares from "@/components/NuestrosPilares";
import Nosotros from "@/components/Nosotros";
import Partnerships from "@/components/Partnerships";
import Desafios from "@/components/Desafios";
import Clientes from "@/components/Clientes";
import Novedades from "@/components/Novedades";
import Contacto from "@/components/Contacto";
import Soluciones from "@/components/Soluciones";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Vía3: Qué proponemos, Cómo trabajamos, Equipo y Red de especialistas */}
      <div id="via3">
        <ElEstudio />
        <NuestrosPilares />
        <Nosotros />
        <Partnerships />
      </div>
      <Desafios />
      <Soluciones />
      <Clientes />
      <Novedades />
      <Contacto />
    </main>
  );
}
