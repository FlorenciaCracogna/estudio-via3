import Image from "next/image";
import { buttonClasses } from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] max-h-[800px] md:max-h-[900px] lg:max-h-[800px] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/hero-bg_bc4nqs.jpg"
        alt="Equipo Estudio Vía3"
        fill
        preload
        sizes="100vw"
        className="hero-zoom object-cover object-center"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center text-white gap-6">
        <h1 className="hero-entrada titulo-seccion font-poppins text-[clamp(1.5rem,8vw,2rem)] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight px-4">
          Aprendizaje Organizacional
        </h1>

        <p className="hero-entrada [--hero-delay:150ms] text-base md:text-lg max-w-xl text-white/90 italic">
          Somos un estudio que brinda soluciones personalizadas para el
          aprendizaje y desarrollo empresarial.
        </p>

        <a
          href="#el-estudio"
          className={buttonClasses({
            size: "lg",
            className: "hero-entrada [--hero-delay:300ms] mt-2",
          })}
        >
          Conocenos
        </a>
      </div>
    </section>
  );
}
