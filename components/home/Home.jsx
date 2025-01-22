import { ArrowRight, Flower, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Flores hermosas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="flex items-center gap-2 mb-4">
            <Flower className="w-8 h-8" />
            <h1 className="text-4xl md:text-6xl font-light tracking-wider">
              FIORE
            </h1>
            <Flower className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-xl text-center max-w-xl mb-8 text-gray-100">
            Donde cada flor cuenta una historia única y cada arreglo es una obra
            de arte
          </p>
          <Link
            href="/shoping"
            className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Ver Colecciónes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="productos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12 font-light">
            Nuestras Creaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ramo Primaveral",
                image:
                  "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "45€",
              },
              {
                title: "Bouquet Romántico",
                image:
                  "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "55€",
              },
              {
                title: "Arreglo Elegante",
                image:
                  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                price: "65€",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-12 font-light">Contactanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 mb-4 text-gray-600" />
              <p className="text-gray-600">
                <br />
                Cartagena, Bolivar
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 mb-4 text-gray-600" />
              <p className="text-gray-600">323 3330714</p>
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="w-6 h-6 mb-4 text-gray-600" />
              <p className="text-gray-600">@detalles_fiore_</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
