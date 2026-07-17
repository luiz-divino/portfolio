"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Botão Hamburguer */}
      <button
        onClick={toggleMenu}
        // z-50 garante que o botão fique acima do painel do menu
        className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none"
        aria-label="Alternar menu mobile"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Painel do Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-card-background transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Links de Navegação */}
        <nav className="flex flex-col items-center space-y-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-semibold text-white hover:text-gray-600"
          >
            Início
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-2xl font-semibold text-white hover:text-gray-600"
          >
            Sobre
          </Link>
          <Link
            href="/project"
            onClick={closeMenu}
            className="text-2xl font-semibold text-white hover:text-gray-600"
          >
            Projetos
          </Link>
          <Link
            href="/skills"
            onClick={closeMenu}
            className="text-2xl font-semibold text-white hover:text-gray-600"
          >
            Habilidades
          </Link>
          <Link
            href="/certifications"
            onClick={closeMenu}
            className="text-2xl font-semibold text-white hover:text-gray-600"
          >
            Certificações
          </Link>
        </nav>
      </div>
    </div>
  );
}
