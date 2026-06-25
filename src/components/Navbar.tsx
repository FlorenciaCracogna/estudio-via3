"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "EL ESTUDIO", hash: "el-estudio" },
  { label: "NOSOTROS", hash: "nosotros" },
  { label: "SOLUCIONES", hash: "soluciones" },
  { label: "CLIENTES", hash: "clientes" },
  { label: "NOVEDADES", hash: "novedades" },
  { label: "CONTACTO", hash: "contacto" },
];

const ChevronDown = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (hash: string) => {
    if (pathname === "/") return `#${hash}`;
    return `/#${hash}`;
  };

  return (
    <nav
      className={`font-poppins fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo — siempre va al inicio */}
        <Link
          href={pathname === "/" ? "/" : "/"}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex-shrink-0"
        >
          <Image
            src={
              scrolled
                ? "/logo-color-subtitulo.svg"
                : "/logo-blanco-subtitulo.svg"
            }
            alt="Estudio VIA 3"
            width={600}
            height={160}
            priority
            className="h-12 md:h-16 lg:h-24 w-auto"
          />
        </Link>

        {/* Links desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, hash }) => (
            <li key={label}>
              <Link
                href={getHref(hash)}
                className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#99042F]"
                    : "text-white hover:text-white/80"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className={`lg:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
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
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map(({ label, hash }) => (
              <li key={label}>
                <Link
                  href={getHref(hash)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-[#99042F] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
