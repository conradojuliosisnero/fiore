"use client";

import { useEffect } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ErrorHome({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8 text-red-500">
            <AlertCircle className="w-16 h-16" />
          </div>

          <h1 className="text-3xl font-light mb-4">
            Lo sentimos, algo salió mal
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Ha ocurrido un error inesperado. Por favor, intenta recargar la
            página o vuelve al inicio para continuar navegando.
          </p>

          <div className="flex gap-4">
            <button
              onClick={reset}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Intentar de nuevo
            </button>

            <Link
              href="/"
              className="border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
