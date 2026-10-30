/** Mensaje de Ideas cuando todavía no hay publicaciones en Sanity. */
export default function IdeasVacio() {
  return (
    <div className="max-w-xl mx-auto rounded-2xl bg-white/80 border border-[#99042F]/15 px-6 py-10 text-center shadow-sm">
      <p className="font-poppins font-semibold text-lg md:text-xl text-[#99042F]">
        Próximamente nuevas ideas
      </p>
      <p className="mt-2 font-roboto text-sm md:text-base text-gray-600">
        Estamos preparando contenidos sobre aprendizaje organizacional y
        desarrollo de capacidades.
      </p>
    </div>
  );
}
