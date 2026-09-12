"use client";

import { useState } from "react";
import { soluciones } from "@/data/soluciones";

type Props = {
  defaultSolucion?: string;
  variant?: "dark" | "light";
};

export default function SolucionForm({
  defaultSolucion = "",
  variant = "dark",
}: Props) {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    solucion: defaultSolucion,
    mensaje: "",
  });
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (
      !form.nombre.trim() ||
      !form.empresa.trim() ||
      !form.cargo.trim() ||
      !form.email.trim() ||
      !form.telefono.trim() ||
      !form.solucion.trim() ||
      !form.mensaje.trim()
    ) {
      setError("Completá todos los campos antes de enviar.");
      return;
    }
    setError("");
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setEstado(data.ok ? "ok" : "error");
    } catch {
      setEstado("error");
    }
  };

  const isLight = variant === "light";

  return (
    <div
      className={
        isLight
          ? "bg-white rounded-2xl px-6 py-8 md:px-8 md:py-10"
          : "rounded-2xl px-6 py-8 md:px-8 md:py-10"
      }
      style={
        isLight
          ? undefined
          : {
              backgroundImage:
                "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1782755940/fondo_texturado_1_epzdfo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#99042F",
            }
      }
    >
      {estado === "ok" ? (
        <div className="text-center py-10">
          <p
            className={`font-bold text-xl mb-2 ${
              isLight ? "text-[#99042F]" : "text-white"
            }`}
          >
            ¡Mensaje enviado!
          </p>
          <p className={isLight ? "text-gray-600" : "text-white/80"}>
            Nos pondremos en contacto a la brevedad.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Nombre completo
              </label>
              <input
                name="nombre"
                placeholder="Ernesto Pérez"
                value={form.nombre}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F]"
              />
            </div>
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Empresa
              </label>
              <input
                name="empresa"
                placeholder="Vía3"
                value={form.empresa}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F]"
              />
            </div>
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Cargo
              </label>
              <input
                name="cargo"
                placeholder="Gerente zonal"
                value={form.cargo}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F]"
              />
            </div>
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Email corporativo
              </label>
              <input
                name="email"
                type="email"
                placeholder="ernestoperez@via3.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F]"
              />
            </div>
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Teléfono de contacto
              </label>
              <input
                name="telefono"
                placeholder="11 2345 6789"
                value={form.telefono}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F]"
              />
            </div>
            <div>
              <label
                className={`text-sm mb-1 block font-semibold ${
                  isLight ? "text-gray-700" : "text-white"
                }`}
              >
                Nuestras soluciones
              </label>
              <select
                name="solucion"
                value={form.solucion}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F] text-gray-700"
              >
                <option value="">Seleccionar...</option>
                {soluciones.map((s) => (
                  <option key={s.slug} value={s.titulo}>
                    {s.titulo}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              className={`text-sm mb-1 block font-semibold ${
                isLight ? "text-gray-700" : "text-white"
              }`}
            >
              Contanos con que te ayudamos
            </label>
            <textarea
              name="mensaje"
              placeholder="Contanos..."
              value={form.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F] resize-none"
            />
          </div>

          {error && (
            <p
              className={`text-sm text-center mb-4 ${
                isLight ? "text-red-500" : "text-red-200"
              }`}
            >
              {error}
            </p>
          )}
          {estado === "error" && (
            <p
              className={`text-sm text-center mb-4 ${
                isLight ? "text-red-500" : "text-red-200"
              }`}
            >
              Hubo un error al enviar. Intentá de nuevo.
            </p>
          )}

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={estado === "enviando"}
              className={
                isLight
                  ? "bg-[#99042F] text-white px-12 py-2.5 rounded-md font-medium tracking-widest text-sm hover:bg-[#7a0326] transition-colors disabled:opacity-60"
                  : "bg-white text-[#99042F] px-12 py-2.5 rounded-md font-medium tracking-widest text-sm hover:bg-gray-100 transition-colors disabled:opacity-60"
              }
            >
              {estado === "enviando" ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
