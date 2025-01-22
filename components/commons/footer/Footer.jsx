"use client"

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container mx-auto text-center text-2xl">F I O R E</div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Tu Empresa. Todos los derechos reservados.
        </p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Política de Privacidad
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Términos del Servicio
          </a>
          <Link href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contáctanos
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
