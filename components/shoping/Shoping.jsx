"use client";
import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterProducts } from "@/slices/storeSlice";

const ProductCard = dynamic(() =>
  import("./components/productCard/ProductCard")
);
const LoadingSkeleton = dynamic(() => import("./components/Skelton/Loading"));
const ErrorShoping = dynamic(() => import("./components/error/ErrorShoping"));

const Shoping = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreRef = useRef(null);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterStore.counterProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/shopy");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const products = await response.json();
        setAllProducts(products);
        dispatch(counterProducts(products.length));
      } catch (error) {
        setError(error.message);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Actualizar productos visibles y estado hasMore
  useEffect(() => {
    const newVisibleProducts = allProducts.slice(0, itemsToShow);
    setVisibleProducts(newVisibleProducts);
    setHasMore(itemsToShow < allProducts.length);
  }, [itemsToShow, allProducts]);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
          // Calcular cuántos productos quedan
          const remaining = allProducts.length - itemsToShow;
          const increment = Math.min(5, remaining);

          if (increment > 0) {
            setItemsToShow((prev) => prev + increment);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Cargar un poco antes de llegar al final
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loading, hasMore, allProducts.length, itemsToShow]);

  const handlerReset = () => {
    window.location.reload();
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorShoping error={error} reset={handlerReset} />;
  }

  return (
    <div className="container mx-auto p-4">
      <p className="text-gray-500">
        Estas viendo <strong>{visibleProducts.length}</strong> de{" "}
        <strong>{counter}</strong> productos disponibles en la tienda.
      </p>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(visibleProducts) &&
          visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {/* El elemento observado solo se muestra si hay más productos para cargar */}
      {hasMore && <div ref={loadMoreRef} className="h-20 mt-4" />}
    </div>
  );
};

export default Shoping;
