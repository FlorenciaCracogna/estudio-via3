import Hero from "@/components/Hero";
import ElEstudio from "@/components/ElEstudio";
import NuestrosPilares from "@/components/NuestrosPilares";
import Nosotros from "@/components/Nosotros";
import Partnerships from "@/components/Partnerships";
import Clientes from "@/components/Clientes";

export default function Home() {
  return (
    <main>
      <Hero />
      <ElEstudio />
      <NuestrosPilares />
      <Nosotros />
      <Partnerships />
      <Clientes />
    </main>
  );
}
