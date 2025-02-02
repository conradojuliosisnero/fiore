import { MapPin, Phone, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-center mb-12 font-light">Contactanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6 mb-4 text-gray-600" />
            <p className="text-gray-600">Cartagena, Bolivar</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 mb-4 text-gray-600" />
            <p className="text-gray-600">323 3330714 / 301 6967412</p>
          </div>
          <div className="flex flex-col items-center">
            <Instagram className="w-6 h-6 mb-4 text-gray-600" />
            <p className="text-gray-600">@detalles_fiore_</p>
          </div>
        </div>
      </div>
    </section>
  );
}
