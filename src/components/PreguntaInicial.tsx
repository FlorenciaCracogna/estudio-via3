/** Pregunta inicial que acompaña al título de cada sección del home. */
export default function PreguntaInicial({
  children,
  tono = "claro",
  className = "",
}: {
  children: React.ReactNode;
  /** "claro" para fondos claros, "oscuro" para fondos bordó/negros/foto. */
  tono?: "claro" | "oscuro";
  className?: string;
}) {
  return (
    <p
      className={`font-poppins font-medium italic text-lg md:text-xl leading-snug ${
        tono === "oscuro" ? "text-white/90" : "text-gray-800"
      } ${className}`}
    >
      {children}
    </p>
  );
}
