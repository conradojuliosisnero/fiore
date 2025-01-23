import { Check, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export default function ButtonCart({ id }) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Comprobar si localStorage está disponible
    if (typeof window !== "undefined") {
      try {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setIsInCart(storedCart.includes(id));
      } catch (error) {
        console.error("Error al leer localStorage:", error);
      }
    }
  }, [id]);

function handleCartToggle() {
  if (typeof window !== "undefined") {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let updatedCart;
    if (cart.includes(id)) {
      updatedCart = cart.filter((item) => item !== id);
      setIsInCart(false);
    } else {
      updatedCart = [...cart, id];
      setIsInCart(true);
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
}

  return (
    <button
      className={`w-1/4 ${
        isInCart ? "bg-secondary" : "bg-tertiary"
      } text-white mr-2 rounded-lg py-2 px-3 flex items-center justify-center gap-1 font-medium transition-colors hover:bg-secondary hover:text-white`}
      onClick={handleCartToggle}
      disabled={isInCart}
    >
      {isInCart ? (
        <Check className="w-5 h-5" />
      ) : (
        <ShoppingCart className="w-5 h-5" />
      )}
    </button>
  );
}
