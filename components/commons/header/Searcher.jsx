"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setSearchValue } from "@/slices/searchSlice";
import { useRouter } from "next/navigation";

const Searcher = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = () => {
    dispatch(setSearchValue(query));
    if (query === "") {
      return;
    } else {
      router.push(`/search?query=${query}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center p-4"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="clavel, tulipan,margarita..."
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-secondary text-white rounded-lg p-2 hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary transition duration-300"
      >
        Buscar
      </button>
    </motion.div>
  );
};

export default Searcher;
