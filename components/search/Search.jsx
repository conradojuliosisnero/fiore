"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterProducts } from "@/slices/storeSlice";
import { setSearchResults } from "@/slices/searchSlice";
import Question from "./components/question/Question";

const ProductCard = dynamic(() =>
  import("./components/productCard/ProductCard")
);
const LoadingSkeleton = dynamic(() => import("./components/Skelton/Loading"));
const ErrorShoping = dynamic(() => import("./components/error/ErrorShoping"));

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Redux
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterStore?.counterProducts);
  const searchTerm = useSelector((state) => state.searchStore.searchValue);
  const products = useSelector((state) => state.searchStore?.searchResults);

  console.log(searchTerm);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/search?query=${searchTerm}`);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const products = await response.json();
        dispatch(counterProducts(products.length));
        dispatch(setSearchResults(products));
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm === "") {
      setLoading(false);
      return;
    } else {
      fetchProducts();
    }
  }, [searchTerm]);

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
        Estas viendo <strong>{counter}</strong> productos disponibles en la
        tienda.
      </p>
      {products.length === 0 && (
        <Question/>
      )}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) &&
          products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Search;
