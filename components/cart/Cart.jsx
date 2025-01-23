"use client";
import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import CartSkeleton from "./components/SkeletonCart";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Cargar items del localStorage al iniciar
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("cart");
  //   if (savedCart) {
  //     setCartItems(JSON.parse(savedCart));
  //   }
  // }, []);

  // Guardar en localStorage cuando cambie el carrito
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = subtotal > 100 ? 0 : 7.99;
  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Link
              href="/shoping"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver a la tienda</span>
            </Link>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-light mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            Parece que aún no has añadido ningún producto a tu carrito.
          </p>
          <Link
            href="/shoping"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
          >
            Continuar comprando
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/shoping"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Continuar comprando</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-light mb-8">Tu carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-4 bg-white rounded-lg border"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    width={96}
                    height={96}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{item.title}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border rounded-full px-4 py-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-medium">{item.price}COP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Resumen del pedido</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span>
                    {shippingCost === 0
                      ? "Gratis"
                      : `${shippingCost.toFixed(2)}€`}
                  </span>
                </div>

                {shippingCost > 0 && (
                  <p className="text-sm text-gray-600 pt-2">
                    ¡Añade {(100 - subtotal).toFixed(2)}COP más para conseguir
                    envío gratuito!
                  </p>
                )}

                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{total.toFixed(2)}COP</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white mt-6 px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Tramitar pedido
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Envío gratuito en pedidos superiores a 120 COP
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
