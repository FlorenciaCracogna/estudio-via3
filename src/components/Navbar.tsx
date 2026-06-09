"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const navLinks = [
  { label: "EL ESTUDIO", href: "#el-estudio" },
  { label: "NOSOTROS", href: "#nosotros", dropdown: true },
  { label: "SOLUCIONES", href: "#soluciones" },
  { label: "CLIENTES", href: "#clientes" },
  { label: "NOVEDADES", href: "#novedades" },
  { label: "CONTACTO", href: "#contacto" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${poppins.className} fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-color-subtitulo.svg"
            alt="Estudio VIA 3"
            width={600}
            height={160}
            priority
            className="h-12 md:h-16 lg:h-24 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href, dropdown }) => (
            <li key={label}>
              <Link
                href={href}
                className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors duration-200 text-gray-700 hover:text-[#99042F]"
              >
                {label}
                {dropdown && <ChevronDown />}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden p-2 text-gray-700"
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

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map(({ label, href, dropdown }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-6 py-3 text-sm font-medium tracking-wide uppercase text-gray-700 hover:text-[#99042F] transition-colors duration-200"
                >
                  {label}
                  {dropdown && <ChevronDown />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
