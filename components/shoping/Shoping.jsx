"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ProductCard = dynamic(() => import("./components/productCard/ProductCard"));
const LoadingSkeleton = dynamic(() => import("./components/Skelton/Loading"));
const ErrorShoping = dynamic(() => import("./components/error/ErrorShoping"));

const Shoping = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/shopy");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const products = await response.json();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handlerReset = () => { 
    window.location.reload();
  }

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorShoping error={error} reset={handlerReset} />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Shoping;
