import Hero from "@/components/Hero";
import BandaNumeros from "@/components/BandaNumeros";
import QueProponemos from "@/components/QueProponemos";
import ComoTrabajamos from "@/components/ComoTrabajamos";
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
      <BandaNumeros />
      {/* Vía3: Qué proponemos, Cómo trabajamos, Equipo y Red de especialistas */}
      <div id="via3">
        <QueProponemos />
        <ComoTrabajamos />
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
