"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { seccionesMenu, subseccionesVia3 } from "@/data/secciones";
import { scrollASeccion } from "@/lib/scroll";

const focoVisible =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [via3Abierto, setVia3Abierto] = useState(false);
  const [via3MobileAbierto, setVia3MobileAbierto] = useState(false);
  const botonVia3Ref = useRef<HTMLButtonElement>(null);
  const hamburguesaRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Rutas con header claro: la navbar arranca sólida para que los links se lean
  const headerClaro = pathname === "/experiencia" || pathname === "/ideas";
  const solida = scrolled || headerClaro;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Marca <body> mientras el menú mobile está abierto (oculta el WhatsApp flotante)
  useEffect(() => {
    document.body.toggleAttribute("data-menu-abierto", mobileOpen);
    return () => document.body.removeAttribute("data-menu-abierto");
  }, [mobileOpen]);

  // Esc cierra el menú mobile y devuelve el foco a la hamburguesa
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMobileOpen(false);
      hamburguesaRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const getHref = (hash: string) => {
    if (pathname === "/") return `#${hash}`;
    return `/#${hash}`;
  };

  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollASeccion(hash);
    }
    setMobileOpen(false);
    setVia3Abierto(false);
  };

  const colorLink = solida
    ? "text-gray-700 hover:text-[#99042F]"
    : "text-white hover:text-white/80";

  return (
    <nav
      aria-label="Principal"
      className={`font-poppins fixed top-0 w-full z-50 transition-all duration-500 ${solida ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`flex-shrink-0 ${focoVisible}`}
        >
          <Image
            src={
              solida
                ? "/logo-color-subtitulo.svg"
                : "/logo-blanco-subtitulo.svg"
            }
            alt="Estudio VIA 3"
            width={600}
            height={160}
            loading="eager"
            className="h-12 md:h-16 lg:h-24 w-auto"
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {seccionesMenu.map(({ id, label }) =>
            id === "via3" ? (
              <li
                key={id}
                className="relative"
                // Hover sólo con mouse: en pantallas táctiles grandes el tap
                // dispararía pointerenter + click y el menú se cerraría solo.
                onPointerEnter={(e) => {
                  if (e.pointerType === "mouse") setVia3Abierto(true);
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === "mouse") setVia3Abierto(false);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setVia3Abierto(false);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape" && via3Abierto) {
                    setVia3Abierto(false);
                    botonVia3Ref.current?.focus();
                  }
                }}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={getHref(id)}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${colorLink} ${focoVisible}`}
                  >
                    {label}
                  </Link>
                  <button
                    ref={botonVia3Ref}
                    type="button"
                    onClick={() => setVia3Abierto((prev) => !prev)}
                    aria-expanded={via3Abierto}
                    aria-controls="submenu-via3"
                    aria-label={`Secciones de ${label}`}
                    className={`p-1 -m-1 transition-colors duration-200 ${colorLink} ${focoVisible}`}
                  >
                    <ChevronIcon abierto={via3Abierto} />
                  </button>
                </div>

                {/* El padding superior hace de "puente" para que el hover no se corte */}
                <div
                  id="submenu-via3"
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-[opacity,translate] duration-200 ${
                    via3Abierto
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1"
                  }`}
                >
                  <ul className="min-w-56 bg-white rounded-lg shadow-lg ring-1 ring-black/5 py-2">
                    {subseccionesVia3.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={getHref(sub.id)}
                          onClick={(e) => handleNavClick(e, sub.id)}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#99042F]/5 hover:text-[#99042F] focus-visible:bg-[#99042F]/5 focus-visible:text-[#99042F] focus-visible:outline-none transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={id}>
                <Link
                  href={getHref(id)}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${colorLink} ${focoVisible}`}
                >
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Hamburger */}
        <button
          ref={hamburguesaRef}
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          className={`lg:hidden p-2 ${solida ? "text-gray-700" : "text-white"} ${focoVisible}`}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú mobile */}
      {mobileOpen && (
        <div
          id="menu-mobile"
          className="lg:hidden bg-white shadow-lg max-h-[calc(100svh-4rem)] overflow-y-auto"
        >
          <ul className="flex flex-col py-2">
            {seccionesMenu.map(({ id, label }) =>
              id === "via3" ? (
                <li key={id}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={getHref(id)}
                      onClick={(e) => handleNavClick(e, id)}
                      className="flex-1 px-6 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-[#99042F] transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#99042F]"
                    >
                      {label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setVia3MobileAbierto((prev) => !prev)}
                      aria-expanded={via3MobileAbierto}
                      aria-controls="submenu-via3-mobile"
                      aria-label={`Secciones de ${label}`}
                      className="w-12 h-12 mr-3 flex items-center justify-center text-gray-700 hover:text-[#99042F] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#99042F] rounded-md"
                    >
                      <ChevronIcon abierto={via3MobileAbierto} />
                    </button>
                  </div>
                  <ul
                    id="submenu-via3-mobile"
                    hidden={!via3MobileAbierto}
                    className="pb-2"
                  >
                    {subseccionesVia3.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={getHref(sub.id)}
                          onClick={(e) => handleNavClick(e, sub.id)}
                          className="block pl-10 pr-6 py-2.5 text-sm text-gray-600 border-l-2 border-[#DBCAB9] ml-6 hover:text-[#99042F] hover:border-[#99042F] transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#99042F]"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={id}>
                  <Link
                    href={getHref(id)}
                    onClick={(e) => handleNavClick(e, id)}
                    className="flex items-center justify-between px-6 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-[#99042F] transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#99042F]"
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

function ChevronIcon({ abierto }: { abierto: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${abierto ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
