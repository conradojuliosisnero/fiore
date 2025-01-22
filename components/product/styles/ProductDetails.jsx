"use client";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const getProdut = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/shopy/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo obtener el producto");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    };
    getProdut();
  }, [id]);

  useEffect(() => {
    if (product && Array.isArray(product) && product.length > 0) {
      setProduct(product[0]);
    }
  }, [product]);

  const handlerClick = () => {
    router.back();
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  ////////////////////////
  const mensaje = `Hola 👋, estoy interesado en comprar el producto ${product.name} que vi en su página web. 🛒

📦 Detalles adicionales:
Producto: ${product.name}
Cantidad: ${quantity}
Por favor, indíquenme cómo puedo proceder con la compra. ¡Gracias! 😊`;

  const mensajeCodificado = encodeURIComponent(mensaje);
  const numeroWhatsApp = "573233330714";
  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span onClick={handlerClick}>Volver</span>
          </button>
        </div>
      </nav>

      {/* Product Details */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-light mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">{product.price}.000 COP</p>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-600">Cantidad:</span>
              <div className="flex items-center gap-3 border rounded-full px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Link
                href={enlaceWhatsApp}
                className="flex-1 bg-secondary text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-primary transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Comprar
              </Link>
            </div>

            {/* Details List */}
            <div className="border-t pt-8">
              <h2 className="text-lg font-medium mb-4">
                Detalles del producto
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product?.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Occasions */}
            <div className="border-t pt-8 mt-8">
              <h2 className="text-lg font-medium mb-4">Perfecto para</h2>
              <div className="flex flex-wrap gap-2">
                {product?.occasions?.map((occasion, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-600"
                  >
                    {occasion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
