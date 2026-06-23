import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] max-h-[800px] md:max-h-[900px] lg:max-h-[800px] flex items-center">
      {/* Imagen de fondo */}
      <Image
        src="https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/hero-bg_bc4nqs.jpg"
        alt="Equipo Estudio Vía3"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center text-white gap-6">
        <h1 className="titulo-seccion text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-wide leading-tight px-4">
          Aprendizaje Organizacional
        </h1>

        <p className="text-base md:text-lg max-w-xl text-white/90 italic">
          Somos un estudio que brinda soluciones personalizadas para el
          aprendizaje y desarrollo empresarial.
        </p>

        <a
          href="#el-estudio"
          className="mt-2 px-12 py-3 bg-[#99042F] hover:bg-[#7a0326] text-white font-medium tracking-widest rounded-md transition-colors duration-200"
        >
          Conocenos
        </a>
      </div>
    </section>
  );
}
