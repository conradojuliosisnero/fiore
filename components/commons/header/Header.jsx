"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Searcher from "./Searcher";
import { Search } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlerClick = () => {
    router.push("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            Inicio
          </Link>
          <Link
            href="/shoping"
            className="text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
          >
            Tienda
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 p-1 hover:text-gray-800"
          >
            Contacto
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
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <div>
              <Searcher />
            </div>
            <Link href="/" className="text-gray-600 p-1 hover:text-gray-800">
              Inicio
            </Link>
            <Link
              href="/shoping"
              className="text-white bg-secondary p-1 rounded-md hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
            >
              Tienda
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 p-1 hover:text-gray-800"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
