"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Searcher from "./Searcher";
import {
  Home,
  PhoneIcon,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerClick = () => {
    router.push("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const animations = {
    initial: { opacity: 1, transform: "translateY(-100%)" },
    animate: { opacity: 1, transform: "translateY(0%)" },
    exit: { opacity: 1, transform: "translateY(-100%)" },
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Image
          onClick={handlerClick}
          className="cursor-pointer"
          src="/images/FIORE-LOGO.png"
          width={50}
          alt="fiore-logo"
          height={50}
        />

        <nav className="hidden md:flex space-x-4 items-center justify-center">
          <div>
            <Searcher />
          </div>
          <Link
            href="/search"
            className="text-gray-600 p-1 hover:text-gray-800"
          >
            <Search className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
          <Link href="/" className="text-gray-600 p-1 hover:text-gray-800">
            <Home className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
          <Link
            href="/shoping"
            className="text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
          >
            <ShoppingBag className="w-5 h-5 text-white hover:text-secondary" />
          </Link>
          {/* <Link
            href="/cart"
            className="relative text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
          >
            <ShoppingCart className="w-5 h-5 text-white hover:text-secondary" />
            <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-tertiary text-white text-xs">
              {0}
            </span>
          </Link> */}
          <Link
            href="/contact"
            className="text-gray-600 p-1 hover:text-gray-800"
          >
            <PhoneIcon className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <AnimatePresence>
          <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {/* <div> */}
                <Searcher />
              {/* </div> */}
              <Link
                href="/search"
                className="text-gray-600 p-1 hover:text-gray-800"
              >
                <Search className="w-5 h-5 text-gray-600 hover:text-gray-800" />
              </Link>
              <Link href="/" className="text-gray-600 p-1 hover:text-gray-800">
                <Home className="w-5 h-5 text-gray-600 hover:text-gray-800" />
              </Link>
              <Link
                href="/shoping"
                className="text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
              >
                <ShoppingBag className="w-5 h-5 text-white hover:text-secondary" />
              </Link>
              {/* <Link
                href="/cart"
                className="relative text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
              >
                <ShoppingCart className="w-5 h-5 text-white hover:text-secondary" />
                <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-tertiary text-white text-xs">
                  {0}
                </span>
              </Link> */}
              <Link
                href="/contact"
                className="text-gray-600 p-1 hover:text-gray-800"
              >
                <PhoneIcon className="w-5 h-5 text-gray-600 hover:text-gray-800" />
              </Link>
            </nav>
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
