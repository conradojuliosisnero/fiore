"use client"
import Link from "next/link";
import { Flower } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container mx-auto text-center text-2xl flex items-center justify-center gap-2 m-2">
        <Flower className="w-8 h-8" />
        F I O R E
        <Flower className="w-8 h-8" />
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 Tu Empresa. Todos los derechos reservados.
        </p>
        <div className="mt-2">
          {/* <a href="#" className="text-white hover:text-slate-200 mx-2">
            Política de Privacidad
          </a>
          <a href="#" className="text-white hover:text-slate-200 mx-2">
            Términos del Servicio
          </a> */}
          <Link
            href="/contact"
            className="text-white hover:text-slate-200 mx-2"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
