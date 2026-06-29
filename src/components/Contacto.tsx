"use client";

import { useState } from "react";

const soluciones = [
  "Formación y capacitación",
  "Desarrollo organizacional",
  "Consultoría estratégica",
  "Coaching ejecutivo",
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    telefono: "",
    solucion: "",
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

  const handleSubmit = async () => {
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

  return (
    <section
      id="contacto"
      className="relative py-20 px-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dg8rew4w9/image/upload/v1782755940/fondo_texturado_1_epzdfo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#99042F",
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h2 className="titulo-seccion text-white text-center font-bold text-3xl md:text-4xl uppercase tracking-wide mb-10">
          ¿Cómo te ayudamos?
        </h2>

        {/* Card del formulario */}
        <div className="bg-white rounded-2xl px-8 py-10">
          {estado === "ok" ? (
            <div className="text-center py-10">
              <p className="text-[#99042F] font-bold text-xl mb-2">
                ¡Mensaje enviado!
              </p>
              <p className="text-gray-600">
                Nos pondremos en contacto a la brevedad.
              </p>
            </div>
          ) : (
            <>
              {/* Grid de campos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
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
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
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
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
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
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
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
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
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
                  <label className="text-sm text-gray-700 mb-1 block font-semibold">
                    Nuestras soluciones
                  </label>
                  <select
                    name="solucion"
                    value={form.solucion}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-[#99042F] text-gray-400"
                  >
                    <option value="">Seleccionar...</option>
                    {soluciones.map((s) => (
                      <option key={s} value={s} className="text-gray-700">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Textarea */}
              <div className="mb-6">
                <label className="text-sm text-gray-700 mb-1 block font-semibold">
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

              {/* Error */}
              {estado === "error" && (
                <p className="text-red-500 text-sm text-center mb-4">
                  Hubo un error al enviar. Intentá de nuevo.
                </p>
              )}

              {/* Botón */}
              <div className="flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={estado === "enviando"}
                  className="bg-[#99042F] text-white px-12 py-2.5 rounded-md font-medium tracking-widest text-sm hover:bg-[#7a0326] transition-colors disabled:opacity-60"
                >
                  {estado === "enviando" ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
